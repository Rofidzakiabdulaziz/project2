import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import pool from "@/src/app/lib/db";

export async function POST(request: Request) {
  try {
    const { username, email, password } = await request.json();
    
    const existingUser = await pool.query(
      "SELECT * FROM admin WHERE username = $1 OR email = $2",
      [username, email]
    );
    
    if (existingUser.length > 0) {
      return NextResponse.json({ error: "Username or email already exists" }, { status: 400 });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    await pool.query("BEGIN");

    const insertAdmin = await pool.query(
      "INSERT INTO admin (username, email, password) VALUES ($1, $2, $3) RETURNING id",
      [username, email, hashedPassword]
    );
    
    const adminId = insertAdmin[0].id;
    
    await pool.query(
      "INSERT INTO profile (admin_id) VALUES ($1)",
      [adminId]
    );
    
    
    await pool.query("COMMIT");
    
    return NextResponse.json({ message: "Admin registered successfully" });
  } catch (error) {
    await pool.query("ROLLBACK");
    console.error("Error registering admin:", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
