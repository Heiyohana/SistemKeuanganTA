import { ICustomer } from "@/pages/masterdata/customer/customer.type";
import React, { useState } from "react";

type Props = {
  list: ICustomer[];
  onCustomerSelect: (customer: ICustomer) => void;
  markCustomerDataAsFilled: () => void;
};

const bookCustomer = (props: Props) => {
  const { list, onCustomerSelect, markCustomerDataAsFilled } = props;
  const [searchName, setSearchName] = useState("");
  const [searchNoHp, setSearchNoHP] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState<ICustomer | null>(
    null
  );

  const filteredCustomers = list.filter((customer) => {
    const nameMatches = customer.nama
      .toLowerCase()
      .includes(searchName.toLowerCase());
    const noHpMatches = customer.nohp.includes(searchNoHp);
    return nameMatches && noHpMatches;
  });

  const handleCustomerSelect = (customer: ICustomer) => {
    onCustomerSelect(customer); // Panggil callback untuk mengirim data pelanggan
    markCustomerDataAsFilled(); // Panggil fungsi ini untuk menandai bahwa data pelanggan telah terisi
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <form
        action=""
        className="w-[55%] flex flex-col mb-2 bg-neutral-50 p-5 rounded-md"
      >
        <div className="flex flex-col pb-3 ">
          <span className="font-bold text-xl mb5">Cari Data Customer</span>
          <span className="font-regular text-sm">Masukan Data yang dicari</span>
        </div>
        <div className="w-[350px]">
          {/* Input untuk pencarian data berdasarkan Nama Customer */}
          <div className="w-full pb-2 text-sm justify-between flex flex-row items-center">
            <span className="font-semibold text-md">Nama Customer</span>
            <input
              type="search"
              className="px-2 py-1 rounded-md border border-blue-400"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>
          <div className="w-full pb-2 text-sm justify-between flex flex-row items-centerl">
            <span className="font-semibold text-md">Nomor Handphone</span>
            <input
              type="search"
              className="px-2 py-1 rounded-md border border-blue-400"
              value={searchNoHp}
              onChange={(e) => setSearchNoHP(e.target.value)}
            />
          </div>
        </div>

        <div className="h-[250px] overflow-y-scroll border border-blue-500">
          <table className="w-full rounded-md container text-sm flex flex-col">
            <thead className="w-full bg-blue-500 text-white shadow-md sticky top-0">
              <tr className="p-2">
                <th className="px-6 py-2">ID</th>
                <th className="px-4 py-2">Nama Customer</th>
                <th className="px-4 py-2">No Handphone</th>
                <th className="px-6 py-2">Alamat Pengiriman</th>
              </tr>
            </thead>
            {/* Terjadi filter pencarian yang dimasukkan pada input Nama atau nomor handphone */}
            <tbody className="w-full">
              {filteredCustomers.map((customer) => {
                return (
                  <tr
                    key={customer.id}
                    onClick={() => handleCustomerSelect(customer)}
                    className={`p-2 cursor-pointer hover:bg-blue-500 hover:text-white h-[30px] ${
                      selectedCustomer?.id === customer.id ? "bg-blue-200" : ""
                    }`}
                  >
                    <td className="px-2 no-wrap text-ellipsis">
                      <div className="text-ellipsis">{customer.id}</div>
                    </td>
                    <td className="px-4 no-wrap text-ellipsis">
                      <div className="text-ellipsis">{customer.nama}</div>
                    </td>
                    <td className="px-4 no-wrap text-ellipsis">
                      <div className="text-ellipsis">{customer.nohp}</div>
                    </td>
                    <td className="px-6 no-wrap text-ellipsis">
                      <div className="text-ellipsis overflow-hidden whitespace-normal">
                        {customer.alamat}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
};

export default bookCustomer;
