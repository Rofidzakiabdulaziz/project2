import { NextResponse } from "next/server";
import EdgeStore from "edge-store";
import pool from "@/app/lib/db"; 

const edgeStore = new EdgeStore({
  bucket: process.env.EDGE_STORE_BUCKET,
  apiKey: process.env.EDGE_STORE_API_KEY,
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const adminId = formData.get("adminId") as string;

    if (!file || !adminId) {
      return NextResponse.json(
        { error: "File or adminId missing" },
        { status: 400 }
      );
    }

    const result = await edgeStore.put(file.name, file);

    const publicUrl = result.publicUrl;
    const query = `
      UPDATE profiles
      SET profile_picture = $1, updated_at = CURRENT_TIMESTAMP
      WHERE id = $2
      RETURNING *;
    `;
    const values = [publicUrl, adminId];
    const dbResult = await pool.query(query, values);

    if (dbResult.rowCount === 0) {
      return NextResponse.json(
        { error: "Profile not found or update failed" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Profile picture uploaded successfully",
      profile: dbResult.rows[0],
    });
  } catch (error) {
    console.error("Error uploading profile picture:", error);
    return NextResponse.json(
      { error: "An error occurred during upload" },
      { status: 500 }
    );
  }
}
