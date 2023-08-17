import Head from "next/head";
import React from "react";

export default function lihatData() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[500px] flex flex-col">
        <button className="text-white text-xl place-self-end">x</button>
        <div className="bg-white p-4 rounded-md">
          <h1 className="title font-bold text-2xl mb-3">Tambah Data</h1>
          {/* Form */}
          <form action="">
            <div className="pb-2 items-center">
              {/* Field Nama Customer */}
              <label className="pb-1" htmlFor="customername">
                Nama Customer
                <input
                  type="text"
                  className="rounded-lg w-full p-1 border border-gray-200"
                  placeholder="Nama Customer di Data"
                />
              </label>
            </div>
            <div className="pb-2 items-center">
              {/* Field No Handphone*/}
              <label className="pb-1" htmlFor="nohpcust">
                No Handphone
                <input
                  type="text"
                  className="rounded-lg w-full p-1 border border-gray-200"
                  placeholder="No Handphone Customer di Data"
                />
              </label>
            </div>
            <div className="pb-2 items-center">
              {/* Field Alamat Pengiriman */}
              <label className="pb-1" htmlFor="alamatcust">
                Alamat Pengiriman
                <input
                  type="text"
                  className="rounded-lg w-full p-1 border border-gray-200"
                  placeholder="Masukan Alamat Customer di data"
                />
              </label>
            </div>

            {/* button */}
            <div className="flex flex-cols justify-end gap-5">
              <button className="w-fit px-6 py-1.5 border-2 border-blue-700 rounded-md text-blue-700">
                Batal
              </button>
              <button className="w-fit px-6 py-1.5 bg-blue-700 rounded-md text-neutral-100">
                Simpan
              </button>
              {/* Masukkan link Halaman Masuk */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
