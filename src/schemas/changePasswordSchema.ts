import { z } from "zod";

export const changePasswordSchema = z.object({
  email: z.string(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
});
