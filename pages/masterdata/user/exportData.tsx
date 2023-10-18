import Kop from "@/pages/components/kop";
import Head from "next/head";
import React from "react";
import { IUser, dummyUserList } from "./user.type";

const exportDataPage: React.FC = () => {
  return (
    <div className="w-full bg-white m-0 p-6">
      <Head>
        <title>Data Akun User</title>
      </Head>

      <Kop />

      <h1 className="text-center mt-3 text-xl font-semibold">Data Akun User</h1>

      {/* Tabel data customer / lainnya */}
      <table className="w-full text-left border-2 border-gray-800 text-sm mt-2">
        <thead className="items-center text-black">
          <tr className="font-bold">
            <td className="py-2 px-4">No</td>
            <td className="py-2 px-10">Nama Customer</td>
            <td className="py-2 px-4">No Handphone</td>
            <td className="py-2 px-8">Alamat Pengiriman</td>
          </tr>
        </thead>
        <tbody className="bg-white text-left">
          {/* isi data dari test.type.ts */}
          {dummyUserList.map((user: IUser) => {
            return (
              <tr key={user.id} className="border border-gray-800">
                <td className="py-1 px-4">{user.id}</td>
                <td className="py-1 px-10">{user.email}</td>
                <td className="py-1 px-4">{user.username}</td>
                <td className="py-1 px-8">{user.role}</td>
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
