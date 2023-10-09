import React from "react";
import Head from "next/head";
import NavSideBar from "../../component/sidenavbar";
import data from "../../../data/laporanpesanan.json";

export default function LaporanPesanan() {
  return (
    <div className="relative flex h-device-width">
      <Head>
        <title>Laporan Penjualan</title>
      </Head>
      <div className="w-screen h-full m-0 flex flex-row relative">
        {/* kiri side */}
        <NavSideBar />

        {/* Kanan */}
        <div className=" bg-red-300 flex-grow right-0 justify-end p-6">
          <h1 className="title font-bold text-2xl">Rekap Pesanan</h1>
          <h3 className="text-base pb-2">Laporan</h3>

          <div>rekapitulasi laporan</div>
          <div className="text-sm w-fit m-1">
            <table className=" text-left border-2 border-blue-500 ">
              <thead className="bg-blue-500 py-2 text-white">
                <tr>
                  <th className="px-1 font-medium">No</th>
                  <th className="px-2 font-medium">Tgl Order</th>
                  <th className="px-2 font-medium">Nama Customer</th>
                  <th className="px-2 font-medium">No Handphone</th>
                  <th className="px-2 font-medium text-center">CS Desk</th>
                  <th className="px-2 font-medium text-center">Total</th>
                  <th className="px-2 font-medium">Tgl Bayar</th>
                  <th className="px-2 font-medium">Tipe Bayar</th>
                  <th className="px-2 font-medium">Bukti</th>
                  <th className="px-2 font-medium">Sisa Tag.</th>
                  <th className="px-2 font-medium">Status</th>
                  <th className="px-2 font-medium">Aksi</th>
                </tr>
              </thead>
              <tbody className="bg-white text-left">
                {data.map((data, index) => (
                  <tr className="hover:bg-blue-100 p-2" key={index}>
                    <th className="px-2 py-0.5 justify-start font-normal">
                      {"00" + (index + 1)}
                    </th>
                    <th className="px-1 font-normal text-center">
                      {data.TglOrder}
                    </th>
                    <th className="px-2 font-normal">{data.NamaCustomer}</th>
                    <th className="px-2 font-normal text-center">
                      {data.NoHandphone}
                    </th>
                    <th className="px-2 font-normal">{data.CSDesk}</th>
                    <th className="px-2 font-normal">{data.Total}</th>
                    <th className="px-2 font-normal">{data.TglBayar}</th>
                    <th className="px-2 font-normal text-center">
                      {data.TipeBayar}
                    </th>
                    <th className="px-2 font-normal text-center">
                      {data.Bukti}
                    </th>
                    <th className="px-2 font-normal text-center">
                      {data.SisaTagihan}
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
