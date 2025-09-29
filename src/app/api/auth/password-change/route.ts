import { NextResponse } from "next/server";
import { ZodError } from "zod";

import prisma from "@/lib/prisma";
import { hashPassword } from "@/services/authService";
import { changePasswordSchema } from "@/schemas/changePasswordSchema";

export async function POST(req: Request) {
  try {
    // validate the request body against the schema
    const requestBody = await req.json();
    const body = changePasswordSchema.parse(requestBody);
    // valid body
    const { email, password, confirmPassword } = body;

    // check if email is already being used
    const emailExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!emailExists) {
      return NextResponse.json(
        { message: "That email is not registered" },
        { status: 401 }
      );
    }

    // Hash the password before saving it in the database
    const hashedPassword = await hashPassword(password);

    // Update user password
    const user = await prisma.user.update({
      where: {
        email,
      },
      data: {
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { message: "Password changed successfully" },
      { status: 201 }
    );
  } catch (e) {
    if (e instanceof ZodError)
      return NextResponse.json({ error: e.errors }, { status: 400 });

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
