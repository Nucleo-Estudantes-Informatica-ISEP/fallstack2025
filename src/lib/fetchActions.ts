import { Action } from "@prisma/client";

import prisma from "./prisma";

export async function fetchActions(): Promise<Action[]> {
  return await prisma.action.findMany();
}
