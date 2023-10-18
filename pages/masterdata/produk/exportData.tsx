import Head from 'next/head';
import React from 'react';
import Kop from "@/pages/components/kop";
import { dummyProdukList, IProduk } from './produk.type';

const exportData: React.FC = () => {
  return (
    <div className="w-full bg-white m-0 p-6">
      <Head>
        <title>Data Produk</title>
      </Head>

      <Kop />

      <h1 className="text-center mt-3 text-xl font-semibold">Data Customer</h1>

      {/* Tabel data customer / lainnya */}
      <table className="w-full text-left border-2 border-gray-800 text-sm mt-2">
        <thead className="items-center text-black">
          <tr className="font-bold">
            <td className="py-2 px-4">ID</td>
            <td className="py-2 px-4">Kategori</td>
            <td className="py-2 px-10">Nama Produk</td>
            <td className="py-2 px-8">Ukuran</td>
            <td className="py-2 px-8">Jumlah/m2</td>
            <td className="py-2 px-8">Harga/m2</td>
          </tr>
        </thead>
        <tbody className="bg-white text-left">
          {/* isi data dari test.type.ts */}
          {dummyProdukList.map((produk: IProduk) => {
            return (
              <tr key={produk.id} className="border border-gray-800">
                <td className="py-1 px-4">{produk.id}</td>
                <td className="py-1 px-4">{produk.kategori}</td>
                <td className="py-1 px-10">{produk.nama}</td>
                <td className="py-1 px-8">{produk.ukuran}</td>
                <td className="py-1 px-8">{produk.jumlahm2}</td>
                <td className="py-1 px-8">{produk.hargam2}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* tandatangan */}
    </div>
  );
}

export default exportData