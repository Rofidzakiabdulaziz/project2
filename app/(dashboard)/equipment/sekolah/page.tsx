import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, itemsData } from "./../../../lib/db";
import Image from "next/image";
import Link from "next/link";

type Item = {
  id: number;
  name: string;
  image: string;
  description: string;
  quantity: number;
  status: string;
  availability: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Item Name",
    accessor: "name",
  },
  {
    header: "Image",
    accessor: "image",
    className: "hidden md:table-cell",
  },
  {
    header: "Description",
    accessor: "description",
    className: "hidden md:table-cell",
  },
  {
    header: "Quantity",
    accessor: "quantity",
  },
  {
    header: "Status",
    accessor: "status",
    className: "hidden md:table-cell",
  },
  {
    header: "Availability",
    accessor: "availability",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const ItemListPage = () => {
  const renderRow = (item: Item) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.image}
          alt={item.name}
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item.description}</p>
        </div>
      </td>
      <td>{item.name}</td>
      <td className="hidden md:table-cell">
        <Image src={item.image} alt={item.name} width={40} height={40} />
      </td>
      <td className="hidden md:table-cell">{item.description}</td>
      <td>{item.quantity}</td>
      <td className="hidden md:table-cell">{item.status}</td>
      <td>{item.quantity > 0 ? "Available" : "Not Available"}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/items/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <FormModal table="item" type="delete" id={item.id} />
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Items</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && (
              <FormModal table="item" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={itemsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default ItemListPage;
