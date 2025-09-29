import prisma from "./prisma";

export async function getCompany(id: string) {
  return await prisma.company.findUnique({
    where: {
      id,
    },
    include: {
      user: true,
    },
  });
}
