import Head from "next/head";
import React from "react";
import NavSideBar from "../component/sidenavbar";
import data from "../../data/laporanjumlahproduksi.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

export default function jumlahproduksiharian() {
  return (
    <div className="w-screen min-h-max m-0 container">
      <Head>
        <title>Laporan Jumlah Produksi Harian</title>
      </Head>
      <NavSideBar />

      {/* Content */}
      <div className="absolute h-max w-4/5 right-0 justify-end p-7 bg-neutral-100">
        {/* atas */}
        <div className="flex flex-row justify-between">
          {/* informasi Halaman */}
          <div className="flex flex-col m-1 pb-2">
            <h1 className="title font-bold text-2xl">Jumlah Produksi Harian</h1>
            <h3 className="text-base">Laporan</h3>
          </div>
        </div>

        {/* Button */}
        <div className="flex flex-row text-sm">
          <select
            name="filter"
            id="filter"
            className="p-2 w-1/5 bg-white rounded-md mr-3"
          >
            <option>Filter</option>
            <option>Tanggal</option>
            <option>Materials</option>
            <option>Jml Produksi</option>
            <option>Keterangan</option>
          </select>

          <input
            type="search"
            name="find"
            id="find"
            placeholder="Cari"
            className="p-2 w-2/5 bg-white mr-3 rounded-md"
          />

          <input
            type="date"
            name="tanggal"
            id="tanggal"
            className="p-2 w-1/5 bg-white mr-3 rounded-md"
          />

          <button className="p-2 w-1/5 bg-blue-500 text-white rounded-md">
            Export Data
          </button>
        </div>
        {/* Tabel */}
        <div className="text-sm w-max m-1 mt-3">
          <table className=" text-left border-2 border-blue-500 ">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-2 py-1 font-medium text-center">No</th>
                <th className="px-5 py-1 font-medium">Tanggal</th>
                <th className="px-5 py-1 font-medium">Materials</th>
                <th className="px-9 py-1 font-medium">Jml Produksi</th>
                <th className="w-2/6 px-9 py-1 font-medium">Keterangan</th>
                <th className="px-2 py-1 font-medium">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white text-left">
              {data.map((data, index) => (
                <tr
                  className="p-2 hover:bg-blue-100 border-blue-200 border table-auto w-full"
                  key={index}
                >
                  <th className="text-center px-2 py-1 justify-start font-normal">
                    {index + 1}
                  </th>
                  <th className="px-5 py-1 font-normal">{data.Tanggal}</th>
                  <th className="px-5 py-1 font-normal">{data.Materials}</th>
                  <th className="px-9 py-1 font-normal">{data.JmlProduksi}</th>
                  <th className="px-9 py-1 font-normal">{data.Keterangan}</th>
                  <th className="px-2 py-1 font-medium">
                    <FontAwesomeIcon
                      className="text-md mr-2 text-red-500"
                      icon={faTrash}
                    />
                    <FontAwesomeIcon
                      className="text-md ml-2 text-lime-400"
                      icon={faEdit}
                    />
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
