import { NextResponse } from "next/server";
import pool  from "@/lib/db"; 
import bcrypt from "bcryptjs";

export async function GET() {
  try {
    const result = await pool.query("SELECT id, username, email FROM admin");

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching admin:", error);
    return NextResponse.json({ error: "Failed to fetch admin" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const { username, oldPassword, newPassword } = await request.json();

  try {
    const result = await pool.query("SELECT * FROM admin WHERE username = $1", [username]);

    if (result.rowCount === 0) {
      return NextResponse.json({ error: "Admin not found" }, { status: 404 });
    }

    const admin = result[0];

    const isPasswordValid = await bcrypt.compare(oldPassword, admin.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Old password is incorrect" }, { status: 400 });
    }


    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    const updateResult = await pool.query(
      "UPDATE admin SET password = $1 WHERE username = $2",
      [hashedNewPassword, username]
    );

    if (updateResult.rowCount > 0) {
      return NextResponse.json({ message: "Password updated successfully" });
    }

    return NextResponse.json({ error: "Failed to update password" }, { status: 500 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const { username } = await request.json();

  try {

    const result = await pool.query("SELECT * FROM admin WHERE username = $1", [username]);
    if (result.rowCount === 0) {
      return NextResponse.json({ error: "admin not found" }, { status: 404 });
    }

    const deleteResult = await pool.query("DELETE FROM users WHERE username = $1", [username]);

    if (deleteResult.rowCount > 0) {
      return NextResponse.json({ message: "Account deleted successfully" });
    }

    return NextResponse.json({ error: "Failed to delete account" }, { status: 500 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
