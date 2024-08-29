import { generateRandomGradient } from "@/app/_utils/generateRandomBg";

export default function UserImage({
  image,
  name,
}: {
  image?: string | null;
  name?: string | null;
}) {
  return (
    <span
      className="size-full"
      style={!image ? { background: generateRandomGradient() } : undefined}
    >
      {image && <img src={image} alt={name || "user"} className="size-full" />}
    </span>
  );
}
