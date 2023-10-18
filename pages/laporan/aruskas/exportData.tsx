import Kop from "@/pages/components/kop";
import Head from "next/head";
import React from "react";
import { IArusKas, dummyArusKasList } from "./arusKas.type";

const exportDataPage: React.FC = () => {
  return (
    <div className="w-full bg-white m-0 p-6">
      <Head>
        <title>Laporan Arus Kas</title>
      </Head>

      <Kop />

      <h1 className="text-center mt-3 text-xl font-semibold">Data Arus Kas</h1>

      {/* Tabel data arus kas */}
      <table className="w-full text-left border-2 border-gray-800 text-sm mt-2">
        <thead className="items-center text-black">
          <tr className="font-bold">
            <td className="py-2 px-4">No</td>
            <td className="py-2 px-10">Tanggal</td>
            <td className="py-2 px-4">Nama Pelapor</td>
            <td className="py-2 px-8">Kategori</td>
            <td className="py-2 px-8">Keterangan</td>
            <td className="py-2 px-8">Qty</td>
          </tr>
        </thead>
        <tbody className="bg-white text-left">
          {/* isi data dari test.type.ts */}
          {dummyArusKasList.map((kas: IArusKas) => {
            return (
              <tr key={kas.id} className="border border-gray-800">
                <td className="py-1 px-4">{kas.id}</td>
                <td className="py-1 px-10">{kas.tanggal}</td>
                <td className="py-1 px-4">{kas.namapelapor}</td>
                <td className="py-1 px-8">{kas.kategori}</td>
                <td className="py-1 px-8">{kas.keterangan}</td>
                <td className="py-1 px-8">{kas.qty}</td>
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
