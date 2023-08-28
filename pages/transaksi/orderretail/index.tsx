import Head from "next/head";
import React from "react";
import NavSideBar from "../../component/sidenavbar";

export default function orderretail() {
  return (
    // halaman transaksi untuk order / pemesanan
    <div className="w-screen h-full m-0 flex container">
      <Head>
        <title>Transaksi Order Retail</title>
      </Head>
      <NavSideBar />

      {/* Content */}
      <div className="absolute h-full w-4/5 right-0 justify-end p-7 bg-neutral-100 text-sm">
        {/* atas */}
        <div className="flex flex-row justify-between">
          <div className="flex flex-col m-1 pb-5">
            <h1 className="title font-bold text-2xl">Order Retail</h1>{" "}
            <h3 className="text-base">Transaksi</h3>
          </div>
          {/* <HeadButton /> buttonnya kemunkinan berdiri sendiri2 */}
        </div>

        {/* Section Input Data */}
        <div className="w-full m-1">
          <div className="flex flex-row items-top justify-left">
            <div className="w-1/3 mr-8">
              <div className="font-bold border-b border-black pr-10 mb-2">
                Informasi Nota
              </div>
              <div className="flex flex-row items-center justify-between">
                No Nota
                <div className="bg-neutral-200 border border-neutral-300 rounded-lg px-2 py-1 mb-1">
                  Otomatis
                </div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div>Tanggal</div>
                <div className="bg-neutral-200 border border-neutral-300 rounded-lg px-2 py-1 mb-1">
                  Otomatis
                </div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div>CS Desk</div>
                <div className="bg-neutral-200 border border-neutral-300 rounded-lg px-2 py-1 mb-1">
                  Otomatis
                </div>
              </div>
            </div>
            {/* ------- Kanan ------ */}
            <div className="w-1/3 ml-8 ">
              <div className="font-bold border-b border-black pr-10 mb-2">
                Informasi Pemesan
              </div>
              <div className="flex flex-row items-center justify-between">
                <div>Nama Customer</div>
                <div className="bg-neutral-200 border border-neutral-300 rounded-lg px-2 py-1 mb-1">
                  input
                </div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div>No Handphone</div>
                <div className="bg-neutral-200 border border-neutral-300 rounded-lg px-2 py-1 mb-1">
                  input
                </div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div>Email</div>
                <div className="bg-neutral-200 border border-neutral-300 rounded-lg px-2 py-1 mb-1">
                  input
                </div>
              </div>
            </div>
            {/* ------- selesai input data --------- */}
          </div>
        </div>

        {/* Section Detail Pesanan */}
        <div className="font-bold text-sm border-b border-black pr-10">
          Detail Pesanan
        </div>
        <div className="mt-3 flex flex-row items-center justify-between">
          <div className="w-4/5 mr-3 rounded-lg py-2 bg-blue-200 p-3 font-bold text-blue-900">
            nominal
          </div>
          <button className="w-1/5 py-2 bg-blue-600 rounded-lg text-white">
            add pesanan button
          </button>
        </div>

        {/* input data pesanan */}

        {/* Catatan Transaksi dan Button */}
        <div className="w-full flex flex-row items-top justify-between mt-2">
          {/* ini dibuat jadi input text box */}
          <div className="items-top bg-white border-blue-300 border w-2/5 rounded-lg text-left p-2 pb-20">
            Catatan Transaksi
          </div>
          <div className="w-1/5">
            <button className="bg-red-500 w-20 h-10 mr-4 rounded-lg text-white font-semibold">
              Reset
            </button>
            <button className="group bg-blue-600 w-20 h-10 rounded-lg text-white font-semibold">
              Bayar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
