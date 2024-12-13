"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

// Lazy load forms based on table type
const EquipmentForm = dynamic(() => import("./forms/EquipmentForm"), {
    loading: () => <h1>Loading...</h1>,
});
const BorrowingForm = dynamic(() => import("./forms/BorrowingForm"), {
    loading: () => <h1>Loading...</h1>,
});
const ReturnForm = dynamic(() => import("./forms/ReturnForm"), {
    loading: () => <h1>Loading...</h1>,
});

const forms: {
    [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
    equipment: (type, data) => <EquipmentForm type={type} data={data} />,
    borrowing: (type, data) => <BorrowingForm type={type} data={data} />,
    return: (type, data) => <ReturnForm type={type} data={data} />,
};

const FormModal = ({
    table,
    type,
    data,
    id,
}: {
    table:
        | "equipment" // For equipment management
        | "borrowing" // For borrowing management
        | "return" // For returning items
        | "student"
        | "teacher"
        | "parent"
        | "subject"
        | "class"
        | "lesson"
        | "exam"
        | "assignment"
        | "result"
        | "attendance"
        | "event"
        | "announcement";
    type: "create" | "update" | "delete";
    data?: any;
    id?: number;
}) => {
    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor =
        type === "create"
            ? "bg-lamaYellow"
            : type === "update"
            ? "bg-lamaSky"
            : "bg-lamaPurple";

    const [open, setOpen] = useState(false);

    const Form = () => {
        if (type === "delete" && id) {
            return (
                <form className="p-4 flex flex-col gap-4">
                    <span className="text-center font-medium">
                        Are you sure you want to delete this borrowing record?
                    </span>
                    <div className="flex justify-center gap-4 mt-4">
                        <button
                            className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max"
                            onClick={() => {
                                // Handle delete action here (e.g., calling an API to delete the borrowing record)
                                alert("Item deleted");
                                setOpen(false);
                            }}
                        >
                            Delete
                        </button>
                        <button
                            className="bg-gray-500 text-white py-2 px-4 rounded-md border-none w-max"
                            onClick={() => setOpen(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            );
        }

        if (type === "create" || type === "update") {
            return forms[table] ? forms[table](type, data) : <div>Form not found!</div>;
        }

        return null;
    };

    return (
        <>
            <button
                className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
                onClick={() => setOpen(true)}
            >
                <Image src={`/${type}.png`} alt="" width={16} height={16} />
            </button>
            {open && (
                <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
                        <Form />
                        <div
                            className="absolute top-4 right-4 cursor-pointer"
                            onClick={() => setOpen(false)}
                        >
                            <Image src="/close.png" alt="" width={14} height={14} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FormModal;
