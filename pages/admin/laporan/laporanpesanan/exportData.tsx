import Kop from "@/pages/components/kop";
import Head from "next/head";
import React from "react";
import { ILaporanPesanan, dummyLaporanPesanan } from "./laporanPesanan.type";
import styles from "./laporanpesanan.module.css";

const exportDataPage: React.FC = () => {
  return (
    <div className="w-full bg-white m-0">
      <Head>
        <title>Laporan Arus Kas</title>
      </Head>

      <Kop />

      <h1 className={`text-center ${styles.h1ExportPage}`}>
        Data Laporan Pesanan
      </h1>

      <div className="px-10 pt-2">
        {/* Tabel data arus kas */}
        <table className="w-full text-left border-2 border-gray-800 text-sm mt-2">
          <thead className="items-center text-black">
            <tr className="font-bold">
              <th className="px-1 py-2">No</th>
              <th className="px-2 py-2 text-center">Tgl Order</th>
              <th className="px-2 py-2">Nama Customer</th>
              <th className="px-2 py-2">No HP</th>
              <th className="px-2 py-2 text-center">Total</th>
              <th className="px-2 py-2">Tgl Bayar</th>
              <th className="px-2 py-2">Tipe Bayar</th>
              <th className="px-2 py-2">csDesk</th>
              <th className="px-2 py-2 text-center">Sisa Tag.</th>
              <th className="px-2 py-2 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white text-left">
            {/* isi data dari test.type.ts */}
            {dummyLaporanPesanan.map((data: ILaporanPesanan, index: number) => {
              return (
                <tr
                  className="p-3 border-gray-800 border table-auto"
                  key={index}
                >
                  <td className="px-1 py-0.5 justify-start font-normal">
                    {"00" + (index + 1)}
                  </td>
                  <td className="px-1 font-normal text-center">
                    {data.tanggal}
                  </td>
                  <td className="px-2 font-normal">{data.namaCust}</td>
                  <td className="px-2 font-normal">{data.noHpCust}</td>
                  <td className="px-2 font-normal text-right">{data.total}</td>
                  <td className="px-2 font-normal">{data.tglBayar}</td>
                  <td className="px-2 font-normal text-center">
                    {data.tipeBayar}
                  </td>
                  <td className="px-2 font-normal text-center">
                    {data.csDesk}
                  </td>
                  <td className="px-2 font-normal text-center">
                    {data.sisaTagihan}
                  </td>
                  <td className="px-2 font-normal text-center">
                    <p className="py-0.5 px-2 rounded-md justify-center items-center text-sm">
                      {data.status}
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default exportDataPage;