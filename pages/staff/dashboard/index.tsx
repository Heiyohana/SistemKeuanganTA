import React from "react";
import NavSideBar from "@/pages/components/sidenavbar/staff";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Linechart from "@/pages/components/linechart";
import Piechart from "@/pages/components/piechart";
import styles from "./dashboard.module.css";

export default function Dashboard() {
  return (
    <div className="relative flex h-screen">
      <Head>
        <title>Dashboard</title>
      </Head>

      <div className="w-screen h-full m-0 flex flex-row-reverse relative">
        {/* Kanan */}
        <div className="flex-grow right-0 justify-end bg-neutral-100 p-5">
          <h1 className={`${styles.h1}`}>Dashboard</h1>
          <h3 className={`${styles.h3} pb-4`}>Welcome abroad, heiyohana!</h3>
          <h2
            className={`${styles.h2} border-b-2 border-blue-400 text-blue-400`}
          >
            TODAY'S TRANSACTION
          </h2>
          {/* card rekap */}
          <div className="flex flex-row pt-4 justify-between">
            {/* Card Kas Awal */}
            <div className="w-1/6 group shadow-lg shadow-gray-300 rounded-lg">
              <div className="p-2 bg-white rounded-t-lg">
                <p className={`${styles.nameCard}`}>Kas Awal</p>
                <p className={`${styles.nominal}`}>16.000.000</p>
              </div>
              <div className="flex flex-row justify-between items-center px-3 py-1 w-full rounded-b-lg bg-blue-200 group hover:bg-blue-500 hover:text-white">
                <a
                  className={`${styles.viewMore}`}
                  href="/staff/laporan/laporanpesanan"
                >
                  View More
                </a>
                <FontAwesomeIcon
                  className="text-sm items-center pl-5"
                  icon={faArrowRight}
                />
              </div>
            </div>

            {/* Card Pemasukan */}
            <div className="w-1/6 group shadow-lg shadow-gray-300 rounded-lg">
              <div className="p-2 group bg-white rounded-t-lg">
                <p className={`${styles.nameCard}`}>Pemasukan</p>
                <p className={`${styles.nominal}`}>16.000.000</p>
              </div>
              <div className="group flex flex-row justify-between items-center px-2 py-1 w-full rounded-b-lg bg-blue-200 group hover:bg-blue-500 hover:text-white">
                <a
                  className={`${styles.viewMore}`}
                  href="/staff/laporan/aruskas"
                >
                  View More
                </a>
                <FontAwesomeIcon
                  className="text-sm items-center "
                  icon={faArrowRight}
                />
              </div>
            </div>

            {/* Card Penjualan */}
            <div className="w-1/6 group shadow-lg shadow-gray-300 rounded-lg">
              <div className="p-2 bg-white rounded-t-lg">
                <p className={`${styles.nameCard}`}>Penjualan</p>
                <p className={`${styles.nominal}`}>16.000.000</p>
              </div>
              <div className="flex flex-row justify-between items-center px-2 py-1 w-full rounded-b-lg bg-blue-200 group hover:bg-blue-500 hover:text-white">
                <a className={`${styles.viewMore}`} href="">
                  View More
                </a>
                <FontAwesomeIcon
                  className="text-sm items-center"
                  icon={faArrowRight}
                />
              </div>
            </div>

            {/* Card Pengeluaran */}
            <div className="w-1/6 group shadow-lg shadow-gray-300 rounded-lg">
              <div className="p-2 bg-white rounded-t-lg">
                <p className={`${styles.nameCard}`}>Pengeluaran</p>
                <p className={`${styles.nominal}`}>16.000.000</p>
              </div>
              <div className="flex flex-row justify-between items-center px-2 py-1 w-full rounded-b-lg bg-blue-200 group hover:bg-blue-500 hover:text-white">
                <a
                  className={`${styles.viewMore}`}
                  href="/staff/laporan/aruskas"
                >
                  View More
                </a>
                <FontAwesomeIcon
                  className="text-sm items-center "
                  icon={faArrowRight}
                />
              </div>
            </div>

            {/* Card Jumlah Customer */}
            <div className="w-1/6 group shadow-lg shadow-gray-300 rounded-lg">
              <div className="p-2 bg-white rounded-t-lg">
                <p className={`${styles.nameCard}`}>Jumlah Customer</p>
                <p className={`${styles.nominal}`}>16.000.000</p>
              </div>
              <div className="flex flex-row justify-between items-center px-2 py-1 w-full rounded-b-lg bg-blue-200 group hover:bg-blue-500 hover:text-white">
                <a className={`${styles.viewMore}`} href="">
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
          <div className=" flex flex-grow pt-5 h-max relative">
            <div className="w-2/3 flex">
              <Linechart />
            </div>
            <div className="w-1/3 flex flex-col ml-3">
              <Piechart />
              {/* <div className="mt-2 rounded-lg bg-white shadow-sm h-1/2 p-3">
                <h2 className={`${styles.h2}`}>Jumlah Produk</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Nama Produk</th>
                    </tr>
                  </thead>
                </table>
              </div> */}
            </div>
          </div>
        </div>
        {/* kiri side dipakein flex-row-reverse biar ttp dikiri*/}
        <NavSideBar />
      </div>
    </div>
  );
}
