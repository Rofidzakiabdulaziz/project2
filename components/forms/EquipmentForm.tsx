"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";

const schema = z.object({
  name: z.string().min(1, { message: "Equipment name is required!" }),
  description: z.string().min(1, { message: "Description is required!" }),
  quantity: z.number().min(1, { message: "Quantity must be at least 1!" }),
  condition: z.enum(["good", "damaged", "out of service"], {
    message: "Condition is required!",
  }),
});

type Inputs = z.infer<typeof schema>;

const EquipmentForm = ({
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
        {type === "create" ? "Add New Equipment" : "Update Equipment"}
      </h1>
      <span className="text-xs text-gray-400 font-medium">Equipment Details</span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Name"
          name="name"
          defaultValue={data?.name}
          register={register}
          error={errors?.name}
        />
        <InputField
          label="Description"
          name="description"
          defaultValue={data?.description}
          register={register}
          error={errors?.description}
        />
        <InputField
          label="Quantity"
          name="quantity"
          type="number"
          defaultValue={data?.quantity}
          register={register}
          error={errors?.quantity}
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
            <option value="out of service">Out of Service</option>
          </select>
          {errors.condition?.message && (
            <p className="text-xs text-red-400">
              {errors.condition.message.toString()}
            </p>
          )}
        </div>
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Add Equipment" : "Update Equipment"}
      </button>
    </form>
  );
};

export default EquipmentForm;
