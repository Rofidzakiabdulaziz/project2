import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import pool from "@/lib/db"; 
import { sign } from "jsonwebtoken"; 

const JWT_SECRET = process.env.JWT_SECRET || "bazma"; 

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    const result = await pool.query("SELECT * FROM admin WHERE username = $1", [username]);

    if (result.length === 0) {
      return NextResponse.json({ error: "Invalid username or password" }, { status: 401 });
    }


    const admin = result[0]; 

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid username or password" }, { status: 401 });
    }

    const token = sign(
      { id: admin.id, username: admin.username, email: admin.email },
      JWT_SECRET,
      { expiresIn: "1h" } 
    );

    return NextResponse.json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error logging in:", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
