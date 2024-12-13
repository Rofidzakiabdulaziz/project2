"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";

const schema = z.object({
  borrowingId: z.number().min(1, { message: "Borrowing ID is required!" }),
  returnDate: z.date({ message: "Return date is required!" }),
  condition: z.enum(["good", "damaged"], { message: "Condition is required!" }),
});

type Inputs = z.infer<typeof schema>;

const ReturnForm = ({
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
        {type === "create" ? "Create Return Record" : "Update Return Record"}
      </h1>
      <span className="text-xs text-gray-400 font-medium">Return Details</span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Borrowing ID"
          name="borrowingId"
          type="number"
          defaultValue={data?.borrowingId}
          register={register}
          error={errors?.borrowingId}
        />
        <InputField
          label="Return Date"
          name="returnDate"
          type="date"
          defaultValue={data?.returnDate}
          register={register}
          error={errors?.returnDate}
        />
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Condition</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("condition")}
            defaultValue={data?.condition}
          >
            <option value="good">Good</option>
            <option value="damaged">Damaged</option>
          </select>
          {errors.condition?.message && (
            <p className="text-xs text-red-400">
              {errors.condition.message.toString()}
            </p>
          )}
        </div>
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create Return" : "Update Return"}
      </button>
    </form>
  );
};

export default ReturnForm;
