import Kop from "@/pages/components/kop";
import Head from "next/head";
import React from "react";
import { ICustomer, dummyCustomerList } from "./customer.type";

const exportDataPage: React.FC = () => {
  return (
    <div className="w-full bg-white m-0 p-6">
      <Head>
        <title>Data Customer</title>
      </Head>

      <Kop />

      <h1 className="text-center mt-3 text-xl font-semibold">Data Customer</h1>

      {/* Tabel data customer / lainnya */}
      <table className="w-full text-left border-2 border-gray-800 text-sm mt-2">
        <thead className="items-center text-black">
          <tr className="font-bold">
            <td className="py-2 px-4">ID</td>
            <td className="py-2 px-10">Nama Customer</td>
            <td className="py-2 px-4">No Handphone</td>
            <td className="py-2 px-8">Alamat Pengiriman</td>
          </tr>
        </thead>
        <tbody className="bg-white text-left">
          {/* isi data dari test.type.ts */}
          {dummyCustomerList.map((customer: ICustomer) => {
            return (
              <tr key={customer.id} className="border border-gray-800">
                <td className="py-1 px-4">{customer.id}</td>
                <td className="py-1 px-10">{customer.nama}</td>
                <td className="py-1 px-4">{customer.nohp}</td>
                <td className="py-1 px-8">{customer.alamat}</td>
              </tr>
            );
            })}
        </tbody>
      </table>
      {/* tandatangan */}
    </div>
  );
};

export default exportDataPage;