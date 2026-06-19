import ConnectToDB from "@/app/lib/db";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import User from "@/app/model/User";
import { error } from "console";

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

    const existingUser =await User.findOne({$or: [{ username }, { email }]})

    if(existingUser){
      if (existingUser.username === username) {
        return NextResponse.json({
          error:"Username Already Exist"
        },{
          status:409
        })
      }
      if (existingUser.email === email) {
        return NextResponse.json({
          error:"Email Already Exist"
        },{
          status:409
        })
      }
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
      { error: "Internal Server Error " + error },
      { status: 500 },
    );
  }
}
