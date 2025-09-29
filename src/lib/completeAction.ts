import prisma from "./prisma";

export async function completeAction(studentCode: string, actionName: string) {
  const action = await prisma.action.findUnique({
    where: {
      name: actionName,
    },
  });

  if (!action) return null;

  const alreadyCompleted = await prisma.actionCompletion.findFirst({
    where: {
      studentCode,
      actionId: action.id,
    },
  });

  if (alreadyCompleted) return null;

  const studentAction = await prisma.actionCompletion.create({
    data: {
      studentCode,
      actionId: action.id,
    },
  });

  return studentAction;
}
