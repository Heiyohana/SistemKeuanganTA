import Head from "next/head";
import React from "react";
import NavSideBar from "../../components/sidenavbar";

export default function orderretail() {
  return (
    // halaman transaksi untuk order / pemesanan
    <div className="relative flex h-screen w-screen">
      <Head>
        <title>Pencatatan Jumlah Produksi</title>
      </Head>
      <NavSideBar />

      {/* Content */}
      <div className="flex-grow right-0 justify-end p-5 bg-neutral-100">
        {/* atas */}
        <div className="flex flex-row justify-between">
          <div className="flex flex-col m-1 pb-3">
            <h1 className="title font-bold text-2xl">
              Pencatatan Jumlah Produksi
            </h1>
            <h3 className="text-base">Transaksi</h3>
          </div>
        </div>

        {/* form pencatatan */}
        <div className="px-4">
          <div className="pb-5 text-sm w-1/5">
            Tanggal
            <div className="text-neutral-600 bg-neutral-300 rounded-md px-3 py-1 mt-1">
              tgl otomatis
            </div>
          </div>

          <div className="pb-5 text-sm w-1/3">
            Materials <br />
            <select className="bg-white rounded-md px-2 py-1 mt-1 w-2/3 border border-neutral-400">
              <option>Paving Bata</option>
              <option>Paving Bata</option>
              <option>Paving Bata</option>
              <option>Paving Bata</option>
              <option>Paving Bata</option>
              <option>Paving Bata</option>
            </select>
          </div>

          <div className="pb-5 text-sm w-full">
            Jumlah Produksi <br />
            <input
              className="rounded-md px-3 py-1 mt-1 w-2/3 border border-neutral-400"
              placeholder="Masukan jumlah produksi harian"
            />
          </div>

          <div className="pb-5 text-sm">
            Keterangan <br />
            <textarea
              className="rounded-md px-3 pt-1 pb-12 mt-1 w-2/3 border border-neutral-400"
              placeholder="Masukan Keterangan bila diperlukan"
            />
          </div>

          {/* Button */}
          <div className="pb-5 text-sm w-2/3 justify-right">
            <button className="bg-white w-20 h-8 mr-4 rounded-md text-blue-500 border border-blue-500 font-medium">
              Kembali
            </button>
            <button className="bg-blue-600 w-20 h-8 rounded-md text-white font-semibold">
              Bayar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
