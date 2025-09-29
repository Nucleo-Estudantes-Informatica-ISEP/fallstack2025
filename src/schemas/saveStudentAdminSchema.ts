import { z } from "zod";

export const saveStudentAdminSchema = z.object({
  studentEmailNumber: z.string(),
  companyId: z.string(),
});
