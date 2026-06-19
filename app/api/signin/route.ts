
import bcrypt from "bcryptjs";
import ConnectToDB from "@/app/lib/db";
import User from "@/app/model/User";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await ConnectToDB();

  const body = await request.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json(
      { error: "All Fields Are Required" },
      { status: 400 },
    );
  }

  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    return NextResponse.json(
      {
        error: "No User Found",
      },
      {
        status: 404,
      },
    );
  }

  const isMatch = await bcrypt.compare(password, existingUser.password);

  if (!isMatch) {
    return NextResponse.json({ error: "Invalid Credentials" }, { status: 401 });
  }


  return NextResponse.json({ message: "Sign In Sucessfull" }, { status: 200 });
}
