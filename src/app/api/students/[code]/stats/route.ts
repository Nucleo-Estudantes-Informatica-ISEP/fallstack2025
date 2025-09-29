import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import getServerSession from "@/services/getServerSession";

interface StudentParams {
  params: Promise<{
    code: string;
  }>;
}

export async function GET(_: NextRequest, props: StudentParams) {
  const params = await props.params;

  const { code } = params;

  const session = await getServerSession();
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const result = await prisma.savedStudent.groupBy({
    where: {
      student: {
        code: code,
      },
    },
    by: "isSaved",
    _count: {
      _all: true,
    },
  });

  if (!result)
    return NextResponse.json({ error: "Student not found" }, { status: 404 });

  return NextResponse.json(result);
}
