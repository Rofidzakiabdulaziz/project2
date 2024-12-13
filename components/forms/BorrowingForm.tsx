"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";

const schema = z.object({
  equipmentId: z.number().min(1, { message: "Equipment is required!" }),
  borrowerName: z.string().min(1, { message: "Borrower's name is required!" }),
  borrowDate: z.date({ message: "Borrow date is required!" }),
  returnDate: z.date({ message: "Return date is required!" }),
});

type Inputs = z.infer<typeof schema>;

const BorrowingForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create Borrowing Record" : "Update Borrowing Record"}
      </h1>
      <span className="text-xs text-gray-400 font-medium">Borrowing Details</span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Equipment ID"
          name="equipmentId"
          type="number"
          defaultValue={data?.equipmentId}
          register={register}
          error={errors?.equipmentId}
        />
        <InputField
          label="Borrower's Name"
          name="borrowerName"
          defaultValue={data?.borrowerName}
          register={register}
          error={errors?.borrowerName}
        />
        <InputField
          label="Borrow Date"
          name="borrowDate"
          type="date"
          defaultValue={data?.borrowDate}
          register={register}
          error={errors?.borrowDate}
        />
        <InputField
          label="Return Date"
          name="returnDate"
          type="date"
          defaultValue={data?.returnDate}
          register={register}
          error={errors?.returnDate}
        />
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create Borrowing" : "Update Borrowing"}
      </button>
    </form>
  );
};

export default BorrowingForm;
