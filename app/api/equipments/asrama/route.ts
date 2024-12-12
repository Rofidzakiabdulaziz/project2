import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db"; 
import { Equipment } from "@/app/types/equipment"
export async function POST(req: { json: () => PromiseLike<{ name_equipment: any; image: any; description: any; quantity: any; status: any; availability: any; }> | { name_equipment: any; image: any; description: any; quantity: any; status: any; availability: any; }; }) {
  try {
    const { name_equipment, image, description, quantity, status, availability } = await req.json();

    if (!name_equipment || !quantity) {
      return NextResponse.json({ error: "name_equipment and quantity are required" }, { status: 400 });
    }

    const result = await pool.query(
      `
      INSERT INTO equipment_asrama (
        name_equipment, image, description, quantity, status, availability
      ) VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
      `,
      [
        name_equipment,
        image || 'via.placeholder.com/300x200.png', 
        description || null,
        quantity,
        status || 'Baik', 
        availability !== undefined ? availability : true,
      ]
    );

    return NextResponse.json({ message: "Equipment added successfully", data: result[0] });
  } catch (error) {
    console.error("Error inserting equipment:", error);
    return NextResponse.json({ error: "Failed to add equipment" }, { status: 500 });
  }
}


export async function GET() {
  try {
    const query = `SELECT * FROM equipment_asrama ORDER BY created_at ASC;`; 
    const result = await pool.query(query);

    const data: Equipment[] = result;

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching all equipment:", error);
    return NextResponse.json(
      { error: "Failed to fetch equipment" },
      { status: 500 }
    );
  }
}


// PUT: Update equipment by ID
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      id,
      name_equipment,
      image,
      description,
      quantity,
      status,
      availability,
    } = body as Partial<Equipment>;

    if (!id) {
      return NextResponse.json(
        { error: "ID is required for update" },
        { status: 400 }
      );
    }

    const result = await pool.query(
      `
      UPDATE equipment_asrama
      SET
        name_equipment = COALESCE($1, name_equipment),
        image = COALESCE($2, image),
        description = COALESCE($3, description),
        quantity = COALESCE($4, quantity),
        status = COALESCE($5, status),
        availability = COALESCE($6, availability),
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $7
      RETURNING *;
      `,
      [
        name_equipment || null,
        image || null,
        description || null,
        quantity || null,
        status || null,
        availability !== undefined ? availability : null,
        id,
      ]
    );

    if (result.length === 0) {
      return NextResponse.json(
        { error: "Equipment not found" },
        { status: 404 }
      );
    }

    const updatedData: Equipment = result[0];
    return NextResponse.json({
      message: "Equipment updated successfully",
      data: updatedData,
    });
  } catch (error) {
    console.error("Error updating equipment:", error);
    return NextResponse.json(
      { error: "Failed to update equipment" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "ID is required for deletion" },
        { status: 400 }
      );
    }

    const result = await pool.query(
      `DELETE FROM equipment_asrama WHERE id = $1 RETURNING *;`,
      [Number(id)]
    );

    if (result.length === 0) {
      return NextResponse.json(
        { error: "Equipment not found" },
        { status: 404 }
      );
    }

    const deletedData: Equipment = result[0];
    return NextResponse.json({
      message: "Equipment deleted successfully",
      data: deletedData,
    });
  } catch (error) {
    console.error("Error deleting equipment:", error);
    return NextResponse.json(
      { error: "Failed to delete equipment" },
      { status: 500 }
    );
  }
}

