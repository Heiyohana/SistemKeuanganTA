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
import { dummyProdukList } from "../../masterdata/produk/produk.type";

// const orderretail = () => {
const LaporanPesanan = () => {
  const [data, setData] = useState<ILaporanPesanan[]>(dummyLaporanPesanan); // Definisikan data sebagai state
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");

  const handleDeleteItem = (index: number) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

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
      return (
        tglOrder.includes(search) ||
        nama.includes(search) ||
        noHp.includes(search)
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

  const handleRowClick = (rowData: ILaporanPesanan) => {
    setSelectedData(rowData);
    router.push({
      pathname: "../laporan/laporanpesanan/rekapPesanan",
      query: { data: JSON.stringify(rowData)}
    })
  }

  return (
    <div className="relative flex h-full">
      <Head>
        <title>Laporan Pesanan</title>
      </Head>
      <div className="w-screen h-full m-0 flex flex-row relative">
        {/* kiri side */}
        <NavSideBar />

        {/* Kanan */}
        <div className="flex-grow right-0 justify-end p-5 bg-neutral-100">
          <div className="w-full flex flex-row justify-between">
            <div className="flex flex-col">
              <h1 className="title font-bold text-2xl">Laporan Pesanan</h1>
              <h3 className="text-base pb-2">Laporan</h3>
            </div>
            <div>
              {/* Input Cari (hanya bisa mencari data customer / nohp) */}
              <input
                type="text"
                placeholder="Cari"
                value={searchText}
                onChange={handleSearchTextChange}
                className="rounded-lg bg-white p-2 mr-2 mb-2 cursor-pointer w-1/4"
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
                className="rounded-lg text-white bg-blue-500 px-4 py-2 mb-2
              cursor-pointer"
              >
                Export to PDF
              </Link>
            </div>
          </div>

          <div className="w-full bg-blue-100 text-sm flex flex-row p-3 gap-6 justify-center items-center">
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
                {itemsToShow.map((rowData: ILaporanPesanan, index: number) => (
                  <tr
                    className="hover:bg-blue-100 p-3 border-blue-200 border table-auto cursor-pointer"
                    key={index}
                    // ketika diklik akan link to rekappesanan dan data setiap baris akan ditampilkan di halaman rekap pesanan
                    onClick={() => handleRowClick(rowData)}
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
                        className={`py-0.5 px-2 rounded-md justify-center items-center text-sm ${
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
      </div>
    </div>
  );
};

export default LaporanPesanan;
