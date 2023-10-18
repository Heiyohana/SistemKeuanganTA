import React, { useState } from "react";
import Head from "next/head";
import NavSideBar from "../../components/sidenavbar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import {ILaporanPesanan, dummyLaporanPesanan} from "./laporanPesanan.type";

export default function LaporanPesanan() {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [data, setData] = useState<ILaporanPesanan[]>(dummyLaporanPesanan); // Definisikan data sebagai state

  const openLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };

  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  const handleDeleteItem = (index: number) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  // Pagination
  const [currentPage, setCurrentPage] = useState(1); // Inisialisasi currentPage
  const itemsPerPage = 15;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const maxVisiblePage = 5;
  const firstPage = Math.max(1, currentPage - Math.floor(maxVisiblePage / 2));
  const lastPage = Math.min(totalPages, firstPage + maxVisiblePage - 1);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage); // Set currentPage sesuai dengan halaman yang dipilih
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length); // Pastikan endIndex tidak melebihi panjang list

  const itemsToShow = data.slice(startIndex, endIndex);

  return (
    <div className="relative flex h-screen">
      <Head>
        <title>Laporan Penjualan</title>
      </Head>
      <div className="w-screen h-full m-0 flex flex-row relative">
        {/* kiri side */}
        <NavSideBar />

        {/* Kanan */}
        <div className="flex-grow right-0 justify-end p-5 bg-neutral-100">
          <h1 className="title font-bold text-2xl">Rekap Pesanan</h1>
          <h3 className="text-base pb-2">Laporan</h3>

          <div className="w-full bg-blue-100 text-sm flex flex-row p-3 gap-6 justify-center items-center">
            <div className="w-1/3">
              <div className="justify-between flex flex-row">
                <p>Pembayaran Cash :</p>
                <p>nominal cash</p>
              </div>
              <div className="justify-between flex flex-row">
                <p>Pembayaran Transfer : </p>
                <p>nominal TF</p>
              </div>
              <div className="justify-between flex flex-row">
                <p>Total (DP + Pelunasan) : </p>
                <p>nominal Total</p>
              </div>
            </div>

            <div className="w-1/3">
              <div className="justify-between flex flex-row">
                <p>Total Order</p>
                <p>Nominal</p>
              </div>
              <div className="justify-between flex flex-row">
                <p>Omzet</p>
                <p>nominal</p>
              </div>
              <div className="justify-between flex flex-row">
                <p>Sisa Piutang</p>
                <p>nominal</p>
              </div>
            </div>

            <div className="w-1/3">
              <div className="justify-between flex flex-row">
                <p>Awal Cash Drawer</p>
                <p>nominal</p>
              </div>
              <div className="justify-between flex flex-row">
                <p>Penggunaan Kas</p>
                <p>nominal</p>
              </div>
              <div className="justify-between flex flex-row">
                <p>Total Cash Drawer</p>
                <p>nominal</p>
              </div>
            </div>
          </div>
          <div className="text-sm w-full mt-2">
            <table className="text-left border-2 border-blue-500 w-full">
              <thead className="bg-blue-500 items-center text-white">
                <tr className="font-medium py-1">
                  <th className="px-1 font-medium">No</th>
                  <th className="px-2 font-medium">Tgl Order</th>
                  <th className="px-2 font-medium">Nama Customer</th>
                  <th className="px-2 font-medium">No HP</th>
                  <th className="px-2 font-medium text-center">Total</th>
                  <th className="px-2 font-medium">Tgl Bayar</th>
                  <th className="px-2 font-medium">Tipe Bayar</th>
                  <th className="px-2 font-medium">Bukti</th>
                  <th className="px-2 font-medium text-center">Sisa Tag.</th>
                  <th className="px-2 font-medium text-center">Status</th>
                  <th className="px-2 font-medium">Aksi</th>
                </tr>
              </thead>
              <tbody className="bg-white text-left">
                {itemsToShow.map((rowData, index) => (
                  <tr
                    className="hover:bg-blue-100 p-3 border-blue-200 border table-auto"
                    key={index}
                  >
                    <td className="px-2 py-0.5 justify-start font-normal">
                      {"00" + (index + 1)}
                    </td>
                    <td className="px-1 font-normal text-center">
                      {rowData.tanggal}
                    </td>
                    <td className="px-2 font-normal">{rowData.namaCust}</td>
                    <td className="px-2 font-normal">{rowData.noHpCust}</td>
                    <td className="px-2 font-normal text-right">
                      {rowData.total}
                    </td>
                    <td className="px-2 font-normal">{rowData.tglBayar}</td>
                    <td className="px-2 font-normal text-center">
                      {rowData.tipeBayar}
                    </td>
                    <td className="px-2 font-normal text-center">
                      <Link
                        href={rowData.file}
                        className="border-b border-blue-600 text-blue-800 hover:text-blue-800 hover:border-blue-800"
                      >
                        {rowData.bukti}
                      </Link>
                    </td>
                    <td className="px-2 font-normal text-center">
                      {rowData.sisaTagihan}
                    </td>
                    <td className="px-2 font-normal text-center">
                      <p
                        className="py-0.5 px-2 rounded-md justify-center items-center text-sm"
                        style={{
                          backgroundColor:
                            rowData.status === "lunas" ? "#C0FF92" : "#FFDDDD",
                        }}
                      >
                        {rowData.status}
                      </p>
                    </td>
                    <td className="text-center">
                      <button
                        className="cursor-pointer"
                        value="Delete"
                        onClick={() => handleDeleteItem(index)}
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="text-md mr-2 text-red-500"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Layout Pagination */}
      <div className="items-center mt-3 flex justify-between">
        <a className="text-neutral-400">
          Menampilkan halaman ke {currentPage} dari {totalPages}
        </a>
        <div className="flex flex-row">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={
              currentPage === 1
                ? "disabled bg-white h-[30px] w-[30px] text-sm"
                : "active bg-white h-[30px] w-[30px] text-sm hover:bg-blue-500 hover:text-white"
            }
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          {Array.from({ length: lastPage - firstPage + 1 }, (_, index) => (
            <button
              key={firstPage + index}
              onClick={() => handlePageChange(firstPage + index)}
              className={
                firstPage + index === currentPage
                  ? "active bg-blue-500 text-white w-[30px] h-[30px] text-sm font-bold"
                  : "bg-white w-[30px] h-[30px] text-sm text-center hover:bg-blue-500 hover:text-white"
              }
            >
              {firstPage + index}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={
              currentPage === totalPages
                ? "disabled bg-white h-[30px] w-[30px] text-sm"
                : "active bg-white h-[30px] w-[30px] text-sm hover:bg-blue-500 hover:text-white"
            }
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
}
