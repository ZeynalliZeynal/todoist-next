import { supabase } from "@/app/_lib/supabase/supabase";
import { AdapterUser } from "@auth/core/adapters";
import { User } from "next-auth";

export const getUser = async (email?: string | null) => {
  const { data, error } = await supabase
    .from("users")
    .select("email")
    .eq("email", email)
    .single();

  return data as User;
};

export const createUser = async (newUser: AdapterUser | User) => {
  const { data, error } = await supabase.from("users").insert([newUser]);

  if (error) throw new Error(error.message);

  return data;
};
