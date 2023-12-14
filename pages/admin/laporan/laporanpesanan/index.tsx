import React, { useState } from "react";
import Head from "next/head";
import NavSideBar from "@/pages/components/sidenavbar/admin";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { ILaporanPesanan, dummyLaporanPesanan } from "./laporanPesanan.type";
import { useRouter } from "next/router";
import ViewBukti from "@/pages/components/viewbukti";
import styles from "./laporanpesanan.module.css";
import Deletewarn from "@/pages/components/deletewarn";

// const orderretail = () => {
const LaporanPesanan = () => {
  const [data, setData] = useState<ILaporanPesanan[]>(dummyLaporanPesanan); // Definisikan data sebagai state
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [isDeleteWarningOpen, setIsDeleteWarningOpen] = useState(false);
  const [indexToDelete, setIndexToDelete] = useState<number | null>(null);

  const handleDeleteItem = (index: number) => {
    setIsDeleteWarningOpen(true);
    setIndexToDelete(index);
  };

  const handleConfirmDelete = () => {
    const newData = [...data];
    newData.splice(indexToDelete!, 1);
    setData(newData);

    setIsDeleteWarningOpen(false);
  }

  const handleCancelDelete = () => {
    setIsDeleteWarningOpen(false);
  }

  // Pencarian
  const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const filterData = () => {
    const search = searchText.toLowerCase();
    return data.filter((item) => {
      const tglOrder = item.tanggal.toLowerCase();
      const nama = item.namaCust.toLowerCase();
      const noHp = item.noHpCust.toLowerCase();
      const status = item.status.toLowerCase(); 
      return (
        tglOrder.includes(search) ||
        nama.includes(search) ||
        noHp.includes(search) ||
        status.includes(search)
      );
    });
  };

  // Pagination

  const itemsPerPage = 15;
  const filteredData = filterData();
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const maxVisiblePage = 5;
  const firstPage = Math.max(1, currentPage - Math.floor(maxVisiblePage / 2));
  const lastPage = Math.min(totalPages, firstPage + maxVisiblePage - 1);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage); // Set currentPage sesuai dengan halaman yang dipilih
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length); // Pastikan endIndex tidak melebihi panjang list

  const itemsToShow = filteredData.slice(startIndex, endIndex);

  // Pengambilan data laporan pesanan ke rekap
  const router = useRouter();
  const [selectedData, setSelectedData] = useState<ILaporanPesanan | null>(
    null
  );
  
  const [ isViewOpen, setIsViewOpen ] = useState(false);
  const [selectedViewData, setSelectedViewData] = useState<string | null>(null);

  const handleClick = (rowData: ILaporanPesanan, target: string) => {
    if (target === "row"){
      setSelectedData(rowData);
      router.push({
        pathname: "../laporan/laporanpesanan/rekapPesanan",
        query: { data: JSON.stringify(rowData)},
      });
    } else if (target === "view"){
      setSelectedViewData(rowData.file);
      setIsViewOpen(true);
    }
  };

  const closeViewModal = () => {
    setIsViewOpen(false);
  }

  return (
    <div className="relative flex h-screen">
      <Head>
        <title>Laporan Pesanan</title>
      </Head>
      <div className="w-screen h-full m-0 flex flex-row relative">
        {/* kiri side */}
        <NavSideBar />

        {/* Kanan */}
        <div className="flex-grow right-0 justify-end p-5 bg-neutral-100">
          <div className="w-full flex flex-row justify-between m-0">
            <div className="flex flex-col">
              <h1 className={`${styles.h1}`}>Laporan Pesanan</h1>
              <h3 className={`${styles.h3}`}>Laporan</h3>
            </div>
            <div className={`${styles.text}`}>
              {/* Input Cari (hanya bisa mencari data customer / nohp) */}
              <input
                type="text"
                placeholder="Cari"
                value={searchText}
                onChange={handleSearchTextChange}
                className="rounded-lg bg-white p-2 mr-3 mb-2 cursor-pointer w-1/3"
              />

              {/* Filter Tanggal Order */}
              <input
                type="date"
                value={searchText}
                onChange={handleSearchTextChange}
                className="p-2 w-[200px] bg-white mr-3 rounded-lg"
              />

              {/* Button Export Data */}
              <Link
                href="../laporan/laporanpesanan/exportData"
                className="rounded-lg text-white bg-blue-500 px-4 py-2 mb-2 cursor-pointer"
              >
                Export to PDF
              </Link>
            </div>
          </div>

          <div
            className={`w-full bg-blue-100 ${styles.text} flex flex-row p-3 gap-6 justify-center items-center mt-2`}
          >
            <div className="w-1/3">
              <div className="justify-between flex flex-row">
                <p>Pembayaran Cash :</p>
                <p>530.000</p>
              </div>
              <div className="justify-between flex flex-row border-b border-neutral-800">
                <p>Pembayaran Transfer : </p>
                <p>25.765.000</p>
              </div>
              <div className="justify-between flex flex-row">
                <p>Total (DP + Pelunasan) : </p>
                <p>26.295.000</p>
              </div>
            </div>

            <div className="w-1/3">
              <div className="justify-between flex flex-row">
                <p>Total Order</p>
                <p>15</p>
              </div>
              <div className="justify-between flex flex-row">
                <p>Omzet</p>
                <p>40.995.000</p>
              </div>
              <div className="justify-between flex flex-row">
                <p>Sisa Piutang</p>
                <p>14.700.000</p>
              </div>
            </div>

            <div className="w-1/3">
              <div className="justify-between flex flex-row">
                <p>Awal Cash Drawer</p>
                <p>1.000.000</p>
              </div>
              <div className="justify-between flex flex-row">
                <p>Penggunaan Kas</p>
                <p>200.000</p>
              </div>
              <div className="justify-between flex flex-row">
                <p>Total Cash Drawer</p>
                <p>1.350.000</p>
              </div>
            </div>
          </div>
          <div className={`${styles.text} w-full mt-2`}>
            <table className="text-left border-2 border-blue-500 w-full">
              <thead className="bg-blue-500 items-center text-white">
                <tr className={`${styles.thead} py-1`}>
                  <th className="px-1">No</th>
                  <th className="px-2">Tgl Order</th>
                  <th className="px-2">Nama Customer</th>
                  <th className="px-2">No HP</th>
                  <th className="px-2 text-center">Total</th>
                  <th className="px-2">Tgl Bayar</th>
                  <th className="px-2">Tipe Bayar</th>
                  <th className="px-2">Bukti</th>
                  <th className="px-2 text-center">Sisa Tag.</th>
                  <th className="px-2 text-center">Status</th>
                  <th className="px-2">Aksi</th>
                </tr>
              </thead>
              <tbody className="bg-white text-left">
                {itemsToShow.map((rowData: ILaporanPesanan, index: number) => (
                  <tr
                    className={`hover:bg-blue-100 p-3 border-blue-200 border table-auto cursor-pointer ${styles.tdtable}`}
                    key={index}
                    // ketika diklik akan link to rekappesanan dan data setiap baris akan ditampilkan di halaman rekap pesanan
                    onClick={() => handleClick(rowData, "row")}
                  >
                    <td className="px-2 py-0.5 justify-start">
                      {"00" + (index + 1)}
                    </td>
                    <td className="px-1 text-center">{rowData.tanggal}</td>
                    <td className="px-2">{rowData.namaCust}</td>
                    <td className="px-2">{rowData.noHpCust}</td>
                    <td className="px-2 text-right">{rowData.total}</td>
                    <td className="px-2">{rowData.tglBayar}</td>
                    <td className="px-2 text-center">{rowData.tipeBayar}</td>
                    <td className="px-2 text-center">
                      {rowData.tipeBayar === "Cash" ? (
                        <span>{rowData.bukti}</span>
                      ) : (
                        <button
                          className="border-b border-blue-600 text-blue-600 hover:text-blue-800 hover:border-blue-800"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleClick(rowData, "view");
                          }}
                        >
                          {rowData.bukti}
                        </button>
                      )}
                    </td>
                    <td className="px-2 text-center">{rowData.sisaTagihan}</td>
                    <td className="px-2 text-center">
                      <p
                        className={`py-0.5 px-2 rounded-md justify-center items-center ${
                          rowData.status === "lunas"
                            ? "bg-lime-200"
                            : "bg-pink-200"
                        }`}
                      >
                        {rowData.status}
                      </p>
                    </td>
                    <td className="text-center">
                      <button
                        className="cursor-pointer"
                        value="Delete"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteItem(index);
                        }}
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
          {/* Layout Pagination */}
          <div
            className={`items-center mt-3 flex justify-between ${styles.text}`}
          >
            <a className="text-neutral-400">
              Menampilkan halaman ke {currentPage} dari {totalPages}
            </a>
            <div className={`flex flex-row ${styles.text}`}>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={
                  currentPage === 1
                    ? "disabled bg-white h-[30px] w-[30px]"
                    : "active bg-white h-[30px] w-[30px] hover:bg-blue-500 hover:text-white"
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
                      ? "active bg-blue-500 text-white w-[30px] h-[30px] font-bold"
                      : "bg-white w-[30px] h-[30px] text-center hover:bg-blue-500 hover:text-white"
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
                    ? "disabled bg-white h-[30px] w-[30px]"
                    : "active bg-white h-[30px] w-[30px] hover:bg-blue-500 hover:text-white"
                }
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isViewOpen && (
        <ViewBukti file={selectedViewData} onCloseModal={closeViewModal} />
      )}

      {isDeleteWarningOpen && (
        <Deletewarn
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
};

export default LaporanPesanan;
