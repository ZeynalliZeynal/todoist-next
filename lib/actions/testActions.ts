"use server";

import { getTasks } from "@/services/apiTasks";

export const tasks = async () => {
  return getTasks();
};
