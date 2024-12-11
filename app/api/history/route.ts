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

    const histories: History[] = result.rows; // Casting hasil query ke tipe `History`
    return NextResponse.json(histories);
  } catch (error) {
    console.error("Error fetching history:", error);
    return NextResponse.json({ error: "Failed to fetch history" }, { status: 500 });
  }
}

export async function POST(request: Request) {
    try {
      const { equipmentId, borrowDate, borrowTime, returnDate, returnTime } = await request.json();
  
      const result = await pool.query(
        "INSERT INTO history (equipment_id, borrow_date, borrow_time, return_date, return_time) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [equipmentId, borrowDate, borrowTime, returnDate, returnTime]
      );
  
      const history = result.rows[0];
      return NextResponse.json({ message: "History created successfully", history });
    } catch (error) {
      console.error("Error creating history:", error);
      return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
  }
  
  export async function PATCH(request: Request) {
    try {
      const { id, equipmentId, returnDate, returnTime } = await request.json();
  
      // Cek apakah history dengan id yang diberikan ada
      const result = await pool.query(
        "SELECT * FROM history WHERE id = $1 AND equipment_id = $2",
        [id, equipmentId]
      );
  
      if (result.rowCount === 0) {
        return NextResponse.json({ error: "History not found" }, { status: 404 });
      }
  
      // Update data history
      const updateResult = await pool.query(
        "UPDATE history SET return_date = $1, return_time = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3",
        [returnDate, returnTime, id]
      );
  
      if (updateResult.rowCount > 0) {
        return NextResponse.json({ message: "History updated successfully" });
      }
  
      return NextResponse.json({ error: "Failed to update history" }, { status: 500 });
    } catch (error) {
      console.error("Error updating history:", error);
      return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
  }
  