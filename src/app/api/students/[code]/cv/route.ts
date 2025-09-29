import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import config from "@/config";
import { completeAction } from "@/lib/completeAction";
import { storage } from "@/lib/firebaseAdmin";
import prisma from "@/lib/prisma";
import getServerSession from "@/services/getServerSession";

const schema = z.object({
  uploadId: z.string().uuid(),
});

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
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  // fetch student as the logged user may be a company
  const student = await prisma.student.findUnique({ where: { code } });

  if (!student)
    return NextResponse.json({ error: "Student not found" }, { status: 404 });

  if (!student.cv)
    return NextResponse.json({ error: "Student has no cv" }, { status: 404 });

  const filename = `distribution/cv/${student.cv}`;

  const [url] = await storage
    .bucket()
    .file(filename)
    .getSignedUrl({
      action: "read",
      version: "v4",
      expires: Date.now() + 5 * 60 * 1000, // 5 minutes
    });

  return NextResponse.json({ url });
}

export async function POST(req: NextRequest, props: StudentParams) {
  const params = await props.params;

  const { code } = params;

  const session = await getServerSession();
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (session.role !== "STUDENT" || session.student?.code !== code)
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json(parsed.error, { status: 400 });

  const { uploadId } = parsed.data;
  const uploaded = `uploaded/cv/${uploadId}`;

  const [exists] = await storage.bucket().file(uploaded).exists();
  if (!exists)
    return NextResponse.json({ error: "Invalid upload id" }, { status: 400 });

  // move to distribution
  const distribution = `distribution/cv/${uploadId}`;
  await storage.bucket().file(uploaded).move(distribution);

  // remove old cv if existent
  if (session.student.cv) {
    const old = `distribution/cv/${session.student.cv}`;
    await storage.bucket().file(old).delete({ ignoreNotFound: true });
  }

  // the cv id will be saved, id is used to generate the url
  await prisma.student.update({
    where: { code },
    data: { cv: uploadId },
  });

  await completeAction(
    session.student.code,
    config.constants.actionNames.uploadCv
  );

  return NextResponse.json({ uploadId });
}
