import NavSideBar from '@/pages/component/sidenavbar'
import Head from 'next/head'
import React from 'react'

const invoicePesanan = () => {
  return (
    <div className="w-screen h-screen m-0 flex container">
      <Head>
        <title>Invoice Pesanan</title>
      </Head>
      <NavSideBar />

      {/* Content */}
      <div className="absolute h-full w-4/5 right-0 justify-end p-5 bg-neutral-100 text-sm">
        {/* Kop Invoice */}
        <div className="bg-blue-500 w-full h-fit p-3 text-white">
          <h1 className="title font-bold text-center mb-2 text-2xl">
            CV Karya Mandiri Sejahtera
          </h1>
          <p className="text-center font-semibold">
            Perusahaan Paving block yang menerima pesanan paving bata, cacing,
            grass block, hebel, <br />
            uskup, dan lainnya. Menerima jasa pasang dan pengiriman. <br />
            Jalan Sukarame | Info Pemesanan : WA. 0812-3123-4678
          </p>
        </div>

        {/* Isi Invoice */}
        <div className="mt-3">
          <div className="text-center text-lg font-bold">INVOICE PESANAN</div>
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
            <div className="flex flex-row justify-between w-full">
              <div className="w-1/3">
                <div className="font-bold border-b border-black pr-10 mb-2">
                  Catatan Transaksi
                </div>
                <div className="font-bold border-b border-black pr-10 mb-2">
                  Jenis Pembayaran
                </div>
              </div>
              <div className="">
                <div className="flex flex-row">
                  <span>Subtotal</span>
                  <div> : Nominal Subtotal</div>
                </div>
                <div className="flex flex-row">
                  <span>Diskon</span>
                  <div> : Nominal Diskon</div>
                </div>
                <div className="flex flex-row">
                  <span>Total</span>
                  <div> : Nominal Total</div>
                </div>
                <div className="flex flex-row">
                  <span>DP 1 (30%)</span>
                  <div> : Nominal DP 1 (30%)</div>
                </div>
                <div>
                  <span>Sisa Tagihan</span>
                  <div> : Nominal Sisa Tagihan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default invoicePesanan