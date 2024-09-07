import "server-only";

import { JWTPayload, jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

const key: Uint8Array = new TextEncoder().encode(process.env.KEY);

export const encrypt = async (payload: JWTPayload | undefined) =>
  new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("720h")
    .sign(key);

export const decrypt = async (session: string | Uint8Array) => {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    return null;
  }
};

export const createSession = async (userId: string) => {
  const session = await encrypt({
    userId,
  });
  cookies().set("session", session, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });
};

export const verifySession = async () => {
  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie as string);
  if (!session?.userId) return null;

  return { userId: session.userId as string };
};

export const deleteSession = async () => {
  cookies().delete("session");
};
