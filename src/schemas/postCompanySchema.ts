import { object, string, z } from "zod";

export const postCompanySchema = object({
  name: string(),
  tier: z.enum(["DIAMOND", "GOLD", "SILVER", "BRONZE"]),
  avatarUrl: string().url().optional(),
});
