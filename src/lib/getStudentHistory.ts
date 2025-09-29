import { HttpError } from "@/types/HttpError";
import { SavedStudentWithSavedBy } from "@/types/SavedStudentWithSavedBy";
import getServerSession from "@/services/getServerSession";

import prisma from "./prisma";

const getStudentHistory = async (code: string) => {
  const session = await getServerSession();

  if (!session) return new HttpError("Unauthorized", 401);

  if (session.role !== "STUDENT" || session.student?.code !== code)
    return new HttpError("Forbidden", 403);

  if (!session.student) return new HttpError("Not Found", 404);

  const result = await prisma.savedStudent.findMany({
    where: {
      studentId: session.student.id,
    },
    include: {
      savedBy: {
        select: {
          company: true,
          student: true,
          isAdmin: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return result as SavedStudentWithSavedBy[];
};

export default getStudentHistory;
