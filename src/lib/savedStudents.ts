import prisma from "./prisma";

export async function isSaved(uid: string, code: string) {
  const s = await prisma.savedStudent.findMany({
    where: {
      AND: [{ savedById: uid }, { student: { code } }, { isSaved: true }],
    },
  });

  return !!s.length;
}
