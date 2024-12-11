import { NextResponse } from "next/server";
import pool from "@/app/lib/db"; // Koneksi ke database

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT id, user_id AS "userId", equipment_id AS "equipmentId",
             borrowed_date AS "borrowedDate", borrowed_time AS "borrowedTime",
             returned_date AS "returnedDate", returned_time AS "returnedTime",
             status, notes, created_at AS "createdAt", updated_at AS "updatedAt"
      FROM history
    `);

    const histories: History[] = result.rows; 
    return NextResponse.json(histories);
  } catch (error) {
    console.error("Error fetching history:", error);
    return NextResponse.json({ error: "Failed to fetch history" }, { status: 500 });
  }
}


