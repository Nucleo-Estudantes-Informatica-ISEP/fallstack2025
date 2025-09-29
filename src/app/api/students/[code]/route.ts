import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import config from "@/config";
import { completeAction } from "@/lib/completeAction";
import prisma from "@/lib/prisma";
import getServerSession from "@/services/getServerSession";

const schema = z.object({
  bio: z.string(),
  linkedin: z.string(),
  github: z.string(),
  interests: z.array(z.string()),
});

const schemaPartial = schema.partial();

interface StudentProps {
  params: Promise<{
    code: string;
  }>;
}

export async function GET(req: NextRequest, props: StudentProps) {
  const params = await props.params;
  const student = await prisma.student.findUnique({
    where: { code: params.code },
    include: {
      user: {
        include: {
          interests: true,
        },
      },
    },
  });

  return NextResponse.json(student);
}

export async function PATCH(req: NextRequest, props: StudentProps) {
  const params = await props.params;
  const session = await getServerSession();
  const { code } = params;

  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (!session.student || session.student.code !== code)
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const body = await req.json();

  const safeParse = schemaPartial.safeParse(body);
  if (!safeParse.success)
    return NextResponse.json({ message: safeParse.error });

  const student = await prisma.student.update({
    where: { code },
    data: {
      bio: body.bio?.trim(),
      linkedin: body.linkedin,
      github: body.github,
    },
  });

  if (student.linkedin) {
    await completeAction(
      student.code,
      config.constants.actionNames.updateLinkedin
    );
  }

  await prisma.user.update({
    where: { id: session.id },
    data: {
      interests: {
        set: body.interests.map((interest: string) => ({ name: interest })),
      },
    },
  });

  return NextResponse.json(student);
}
