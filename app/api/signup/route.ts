import ConnectToDB from "@/app/lib/db";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import User from "@/app/model/User";

export async function POST(request: Request) {
  await ConnectToDB();

  try {
    const body = await request.json();
    console.log(body);
    const { username, email, password } = body;

    if (!username || !email || !password) {
      return NextResponse.json(
        {
          error: "Missing Required Fields",
        },
        {
          status: 400,
        },
      );
    }

    // Hash the password securely

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    return NextResponse.json(
      { message: "User registered successfully!" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Signup error:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
