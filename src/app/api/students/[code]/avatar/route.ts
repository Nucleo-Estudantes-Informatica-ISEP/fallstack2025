import { NextRequest, NextResponse } from "next/server";

import { storage } from "@/lib/firebaseAdmin";
import prisma from "@/lib/prisma";
import getServerSession from "@/services/getServerSession";
import { avatarSchema } from "@/schemas/avatarSchema";

interface StudentParams {
  params: Promise<{
    code: string;
  }>;
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
  const parsed = avatarSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json(parsed.error, { status: 400 });

  const { uploadId } = parsed.data;
  const uploaded = `uploaded/avatar/${uploadId}`;

  const [exists] = await storage.bucket().file(uploaded).exists();
  if (!exists)
    return NextResponse.json({ error: "Invalid upload id" }, { status: 400 });

  // move to distribution
  const distribution = `distribution/avatar/${uploadId}`;
  await storage.bucket().file(uploaded).move(distribution);

  // create a public accessible url
  const [meta] = await storage.bucket().file(distribution).makePublic();

  const { bucket, object } = meta;
  const url = `https://storage.googleapis.com/${bucket}/${object}`;

  // remove old avatar if existent
  if (session.student.avatar) {
    const imageId = session.student.avatar.split("/").reverse()[0];
    const old = `distribution/avatar/${imageId}`;
    await storage.bucket().file(old).delete({ ignoreNotFound: true });
  }

  await prisma.student.update({
    where: { code },
    data: { avatar: url },
  });

  return NextResponse.json({ url });
}
