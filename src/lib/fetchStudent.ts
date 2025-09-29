import prisma from "./prisma";

export async function fetchStudent(code: string) {
  return await prisma.student.findUnique({
    where: {
      code: code,
    },
    include: {
      user: {
        include: {
          interests: true,
        },
      },
    },
  });
}
