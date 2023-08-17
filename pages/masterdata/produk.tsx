import Head from "next/head";
import React from "react";
import NavSideBar from "../component/sidenavbar";
import HeadButton from "../component/button";
import data from "../../data/produkdata.json";

export default function Produk() {
  return (
    <div className="w-screen min-h-max m-0 right-0 top-0 flex container">
      <Head>
        <title>Master Data Produk</title>
      </Head>
      <NavSideBar />

      {/* Content */}
      <div className="absolute h-max w-4/5 right-0 p-7 bg-neutral-100">
        {/* atas */}
        <div className="flex flex-row justify-between">
          {/* informasi Halaman */}
          <div className="flex flex-col m-1 pb-5">
            <h1 className="title font-bold text-2xl">Data Produk</h1>
            <h3 className="text-base">Master Data</h3>
          </div>
          <HeadButton />
        </div>
        <div className="text-sm w-fit m-1">
          <table className="text-left border-2 border-blue-500">
            <thead className=" bg-blue-500 py-2 text-white">
              <tr>
                <th className="px-2 py-1 font-medium">No</th>
                <th className="px-4 py-1 font-medium">Kategori</th>
                <th className="px-9 py-1 font-medium">Nama Produk</th>
                <th className="px-9 py-1 font-medium">Ukuran</th>
                <th className="px-7 py-1 font-medium">Jumlah</th>
                <th className="px-4 py-1 font-medium">Harga/m2</th>
                <th className="px-4 py-1 font-medium">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white text-left">
              {data.map((data, index) => (
                <tr
                  className="p-2 hover:bg-blue-100 border-blue-200 border table-auto"
                  key={index}
                >
                  <th className="text-center px-2 py-1 justify-start font-normal">
                    {index + 1}
                  </th>
                  <th className="px-4 py-1 font-normal">{data.Kategori}</th>
                  <th className="px-9 py-1 font-normal">{data.NamaProduk}</th>
                  <th className="px-5 py-1 font-normal">{data.Ukuran}</th>
                  <th className="px-7 py-1 font-normal text-center">
                    {data.Jumlah}
                  </th>
                  <th className="px-4 py-1 font-normal text-right">
                    {data["Harga/m2"]}
                  </th>
                  <th className="px-4 py-1 font-medium">Aksi</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
