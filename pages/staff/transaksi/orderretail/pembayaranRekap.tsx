import NavSideBar from "@/pages/components/sidenavbar/admin";
import Head from "next/head";
import React from "react";

const pembayaranRekap = () => {
  return (
    // Halaman Rekap Pembayaran Pesanan
    <div className="w-screen h-screen m-0 flex container">
      <Head>
        <title>Rekap Pembayaran</title>
      </Head>
      <NavSideBar />

      {/* Content */}
      <div className="absolute h-full w-4/5 right-0 justify-end p-5 bg-neutral-100 text-sm">
        <div className="flex flex-col justify-between">
          {/* atas */}
          <div className="flex flex-col m-1 pb-2 text-left">
            <h1 className="title font-bold text-2xl">Order Retail</h1>{" "}
            <h3 className="text-base">Pembayaran</h3>
          </div>

          {/* Details Invoice */}
          <div className="bg-white m-2 rounded-md w-full p-3">
            {/* Informasi Nota */}
            <div className="font-bold border-b border-black pr-10 mb-2 w-1/3">
              Informasi Pesanan
            </div>
            <div className="flex flex-row">
              <div className="w-1/3 flex flex-col mr-2">
                <div className="pb-1 text-sm justify-between items-center flex flex-row">
                  <span>No Nota</span>
                  <input
                    type="text"
                    placeholder=" : No Nota"
                    className="w-max rounded-md bg-transparent"
                    disabled
                  />
                </div>
                <div className="pb-1 text-sm justify-between items-center flex flex-row">
                  <span>Tanggal</span>
                  <input
                    type="text"
                    placeholder=" : Tanggal Nota"
                    className="w-max rounded-md bg-transparent"
                    disabled
                  />
                </div>
                <div className="pb-1 text-sm justify-between items-center flex flex-row">
                  <span>CS Desk</span>
                  <input
                    type="text"
                    placeholder=" : CS Desk"
                    className="w-max rounded-md bg-transparent"
                    disabled
                  />
                </div>
              </div>

              {/* Informasi Pemesan*/}
              <div className="w-1/3 flex flex-col mr-2">
                <div className="pb-1 text-sm justify-between items-center flex flex-row">
                  <span>Nama Customer</span>
                  <input
                    type="text"
                    placeholder=" : Nama Customer"
                    className="w-max rounded-md bg-transparent"
                    disabled
                  />
                </div>
                <div className="pb-1 text-sm justify-between items-center flex flex-row">
                  <span>No HP</span>
                  <input
                    type="text"
                    placeholder=" : NO HP"
                    className="w-max rounded-md bg-transparent"
                    disabled
                  />
                </div>
                <div className="pb-1 text-sm justify-between items-center flex flex-row">
                  <span>Alamat</span>
                  <input
                    type="text"
                    placeholder=" : Alamat Pengiriman"
                    className="w-max rounded-md bg-transparent"
                    disabled
                  />
                </div>
              </div>
            </div>

            {/* Details Pesanan */}
            <div>
              <div className="font-bold border-b border-black pr-10 mb-2 w-1/3">
                Details Pesanan
              </div>

              {/* Tabel Details Pesanan */}

              {/* Keterangan Lainnya */}
              <div>
                <div className="font-bold border-b border-black pr-10 mb-2 w-1/3">
                  Catatan Transaksi
                </div>
                <div className="font-bold border-b border-black pr-10 mb-2 w-1/3">
                  Bukti Pembayaran
                </div>
                <div className="font-bold border-b border-black pr-10 mb-2 w-1/3">
                  Status Transaksi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pembayaranRekap;
