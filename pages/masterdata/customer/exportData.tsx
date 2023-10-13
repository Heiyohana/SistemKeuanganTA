import Kop from '@/pages/component/kop';
import Head from 'next/head'
import React from 'react'

interface ICustomer {
  id: string;
  nama: string;
  nohp: string;
  alamat: string;
}

interface ExportDataProps {
  data: ICustomer[];
}

const exportDataPage = ({data}: ExportDataProps) => {
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
            <td className="py-2 px-4">No</td>
            <td className="py-2 px-10">Nama Customer</td>
            <td className="py-2 px-4">No Handphone</td>
            <td className="py-2 px-8">Alamat Pengiriman</td>
          </tr>
        </thead>
        <tbody className="bg-white text-left">
          {/* isi data dari test.type.ts */}
          {data.map((item, index) => (
            <tr className="border border-gray-800">
              <td className="py-1 px-4">{index + 1}</td>
              <td className="py-1 px-10">{item.nama}</td>
              <td className="py-1 px-4">{item.nohp}</td>
              <td className="py-1 px-8">{item.alamat}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* tandatangan */}
    </div>
  );
}

export default exportDataPage