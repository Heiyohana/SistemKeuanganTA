import React from "react";
import NavSideBar from "../component/sidenavbar";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Linechart from "../component/linechart";
import Piechart from "../component/piechart";

export default function Dashboard() {
  return (
    <div className="w-screen min-h-max m-0 container">
      <Head>
        <title>Dashboard</title>
      </Head>

      {/* kiri side */}
      <NavSideBar />

      {/* Kanan */}
      <div className="absolute bg-neutral-100 h-max w-4/5 right-0 top-0 p-7">
        <h1 className="title font-bold text-2xl pb-1">Dashboard</h1>
        <h3 className="text-sm pb-4">Welcome abroad, Hendamia!</h3>
        <h5 className="font-bold text-sm border-b-2 border-blue-400 text-blue-400">
          TODAY'S TRANSACTION
        </h5>
        {/* card rekap */}
        <div className="flex flex-row pt-4 justify-between">
          {/* Card Kas Awal */}
          <div className="w-1/6">
            <div className="p-2 bg-white rounded-t-lg">
              <p className="text-sm">Kas Awal</p>
              <p className="text-xl font-bold">16.000.000</p>
            </div>
            <div className="flex flex-row justify-between items-center px-3 py-1 w-full rounded-b-lg bg-blue-200 group hover:bg-blue-500 hover:text-white">
              <a className="text-sm" href="">
                View More
              </a>
              <FontAwesomeIcon
                className="text-sm items-center pl-5"
                icon={faArrowRight}
              />
            </div>
          </div>

          {/* Card Pemasukan */}
          <div className="w-1/6">
            <div className="p-2 bg-white rounded-t-lg">
              <p className="text-sm">Pemasukan</p>
              <p className="text-xl font-bold">16.000.000</p>
            </div>
            <div className="flex flex-row justify-between items-center px-2 py-1 w-full rounded-b-lg bg-blue-200 group hover:bg-blue-500 hover:text-white">
              <a className="text-sm" href="">
                View More
              </a>
              <FontAwesomeIcon
                className="text-sm items-center "
                icon={faArrowRight}
              />
            </div>
          </div>

          {/* Card Penjualan */}
          <div className="w-1/6">
            <div className="p-2 bg-white rounded-t-lg">
              <p className="text-sm">Penjualan</p>
              <p className="text-xl font-bold">16.000.000</p>
            </div>
            <div className="flex flex-row justify-between items-center px-2 py-1 w-full rounded-b-lg bg-blue-200 group hover:bg-blue-500 hover:text-white">
              <a className="text-sm" href="">
                View More
              </a>
              <FontAwesomeIcon
                className="text-sm items-center"
                icon={faArrowRight}
              />
            </div>
          </div>

          {/* Card Pengeluaran */}
          <div className="w-1/6">
            <div className="p-2 bg-white rounded-t-lg">
              <p className="text-sm">Pengeluaran</p>
              <p className="text-xl font-bold">16.000.000</p>
            </div>
            <div className="flex flex-row justify-between items-center px-2 py-1 w-full rounded-b-lg bg-blue-200 group hover:bg-blue-500 hover:text-white">
              <a className="text-sm" href="">
                View More
              </a>
              <FontAwesomeIcon
                className="text-sm items-center "
                icon={faArrowRight}
              />
            </div>
          </div>

          {/* Card Jumlah Customer */}
          <div className="w-1/6">
            <div className="p-2 bg-white rounded-t-lg">
              <p className="text-sm">Jumlah Customer</p>
              <p className="text-xl font-bold">16.000.000</p>
            </div>
            <div className="flex flex-row justify-between items-center px-2 py-1 w-full rounded-b-lg bg-blue-200 group hover:bg-blue-500 hover:text-white">
              <a className="text-sm" href="">
                View More
              </a>
              <FontAwesomeIcon
                className="text-sm items-center "
                icon={faArrowRight}
              />
            </div>
          </div>

          {/* ------------------pemisah----------------- */}
        </div>

        {/* Grafik */}
        <div className=" flex flex-row pt-5 h-max">
          <div className="w-2/3 flex">
            <Linechart />
          </div>
          <div className="w-1/3 flex flex-col ml-3">
            <Piechart />
            <div className="mt-2 rounded-lg bg-white shadow-sm h-1/2 p-3">
              <div className="text-lg font-bold">Jumlah Produk</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
