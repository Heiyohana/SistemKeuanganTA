import Head from "next/head";
import React from "react";
import NavSideBar from "../component/sidenavbar";

export default function orderretail() {
  return (
    // halaman transaksi untuk order / pemesanan
    <div className="w-screen min-h-max m-0 container">
      <Head>
        <title>Pencatatan Arus Kas</title>
      </Head>
      <NavSideBar />

      {/* Content */}
      <div className="absolute h-max w-4/5 right-0 justify-end p-7 bg-neutral-100  text-sm">
        {/* atas */}
        <div className="flex flex-row justify-between">
          <div className="flex flex-col m-1 pb-3">
            <h1 className="title font-bold text-2xl">Pencatatan Arus Kas</h1>
            <h3 className="text-base">Transaksi</h3>
          </div>
        </div>

        {/* form pencatatan */}
        <div className="px-4">
          <div className="pb-5 text-sm w-1/5">
            Tanggal, Jam
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

          <div className="pb-5 text-sm w-1/3">
            Kategori Keuangan <br />
            <select className="bg-white rounded-md px-2 py-1 mt-1 w-2/3 border border-neutral-400">
              <option>Pemasukan</option>
              <option>Pengeluaran</option>
              <option>Kas Awal</option>
            </select>
          </div>

          <div className="pb-5 text-sm w-full">
            Nama Pelapor Keuangan <br />
            <input
              className="rounded-md px-3 py-1 mt-1 w-2/3 border border-neutral-400"
              placeholder="Masukan nama pelapor"
            />
          </div>

          <div className="pb-5 text-sm">
            Keterangan <br />
            <input
              className="rounded-md px-3 py-1 mt-1 w-2/3 border border-neutral-400"
              placeholder="Masukan Keterangan Kas"
            />
          </div>

          <div className="pb-5 text-sm">
            Nominal <br />
            <input
              className="rounded-md px-3 py-1 mt-1 w-2/3 border border-neutral-400"
              placeholder="Masukan nominal"
            />
          </div>

          <label className="container">
            <span className="sr-only">Choose File</span>
            <input
              type="file"
              className="text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-800 hover:file:bg-blue-300 pb-5"
            />
          </label>

          {/* Button */}
          <div className="text-sm w-2/3 justify-right">
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
