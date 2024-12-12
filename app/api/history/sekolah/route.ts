import { NextRequest, NextResponse } from "next/server";
import pool from "@/app/lib/db"; 

export async function POST(req: NextRequest) {
    try {
      const { fullname, kelas, nis, activity, borrow_time, equipment_name, status } = await req.json();
  
      if (!fullname || !kelas || !activity || !borrow_time || !equipment_name || !status) {
        return NextResponse.json(
          { error: "Missing required fields" },
          { status: 400 }
        );
      }
  
      const query = `
        INSERT INTO history_sekolah (fullname, kelas, nis, activity, borrow_time, equipment_name, status)
        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
      
      const values = [fullname, kelas, nis, activity, borrow_time, equipment_name, status || null];
  
      const result = await pool.query(query, values);
      const history = result[0]; 
  
      return NextResponse.json(history, { status: 201 });
    } catch (error) {
      console.error("Error inserting into history:", error);
      return NextResponse.json({ error: "Failed to add history" }, { status: 500 });
    }
  }

  export async function PATCH(req: NextRequest) {
    try {
      const { id, return_time } = await req.json();
  
      if (!id || !return_time) {
        return NextResponse.json({ error: 'id and return_time are required' }, { status: 400 });
      }
  
      const result = await pool.query(
        `UPDATE history_sekolah SET return_time = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2`,
        [return_time, id]
      );
  
      if (result === 0) {
        return NextResponse.json({ error: 'History not found' }, { status: 404 });
      }
  
      return NextResponse.json({ message: 'Return time updated successfully' }, { status: 200 });
    } catch (error) {
      console.error('Error updating return_time:', error);
      return NextResponse.json({ error: 'Failed to update return time' }, { status: 500 });
    }
  }

  export async function GET() {
    try {
      const result = await pool.query(`
        SELECT id, fullname, kelas, nis, activity, borrow_time, equipment_name, return_time, status, created_at, updated_at
        FROM history_sekolah
      `);
  
      const histories = result;
      return NextResponse.json(histories); 
    } catch (error) {
      console.error("Error fetching history:", error);
      return NextResponse.json(
        { error: "Failed to fetch history" },
        { status: 500 }
      );
    }
  } 