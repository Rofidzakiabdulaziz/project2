import { NextResponse } from "next/server";
import pool from "@/app/lib/db";

export async function PUT(request: Request) {
  try {
    const { admin_id, first_name, last_name, date_of_birth, profile_picture, phone_number } = await request.json();

    if (!admin_id) {
      return NextResponse.json({ error: "Admin ID is required" }, { status: 400 });
    }
    
    const result = await pool.query(
        `UPDATE profile 
         SET 
           first_name = COALESCE($1, first_name), 
           last_name = COALESCE($2, last_name), 
           date_of_birth = COALESCE($3, date_of_birth), 
           profile_picture = COALESCE($4, profile_picture), 
           phone_number = COALESCE($5, phone_number), 
           updated_at = CURRENT_TIMESTAMP
         WHERE user_id = $6`,
        [first_name, last_name, date_of_birth, profile_picture, phone_number, admin_id],
      );
    console.log([first_name, last_name, date_of_birth, profile_picture, phone_number, admin_id]);
    console.log(result)

    if (result.length > 0) {
      return NextResponse.json({ message: "Profile updated successfully" });
    } else {
      return NextResponse.json({ error: "Profile not found or no changes made" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error updating profile:", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
