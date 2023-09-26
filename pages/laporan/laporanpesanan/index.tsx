import Head from "next/head";
import React, { useRef, useState } from "react";
import NavSideBar from "@/pages/component/sidenavbar";
import { useReactToPrint } from "react-to-print";

const jumlahproduksiharian = () => {
  const [laporanPesanan, setlaporanPesanan] = useState(
    
  );

//   const [shownPage, setShownPage] = useState(PageEnum.list);
//   const [dataToEdit, setDataToEdit] = useState(null as null | IProduksiHarian);

//   const showListPage = () => {
//     setShownPage(PageEnum.list);
//   };

//   const deleteProduksi = (data: IProduksiHarian) => {
//     //To index from array i,e produksiList
//     //Splice that
//     //Update new record
//     const indexToDelete = produksiList.indexOf(data);
//     const tempList = [...produksiList];
//     tempList.splice(indexToDelete, 1);
//     setProduksiList(tempList);
//   };

//   const editJmlProduksi = (data: IProduksiHarian) => {
//     setShownPage(PageEnum.edit);
//     setDataToEdit(data);
//   };

  const [searchType, setSearchType] = useState(
    "filter" || "tanggal" || "materials"
  );
  // Default search type
  const [searchValue, setSearchValue] = useState("");

  const handleSearchTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchType(e.target.value);
  };

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

//   // Mengurutkan data berdasarkan tanggal
//   const sortedProduksiList = produksiList
//     .slice()
//     .sort((a, b) => a.tanggal.localeCompare(b.tanggal));

  // Untuk mengatur export PDF
  const componentPDF = useRef(null);
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "Laporan Arus Kas",
  });
  // Untuk mengatur kolom aksi hilang saat diekspor
  const [showActions, setShowActions] = useState(true);
  const handleExportPDF = () => {
    setShowActions(false); // Set showActions ke false saat tombol export PDF diklik
    generatePDF();
    setTimeout(() => {
      setShowActions(true);
    }, 5000);
  };

  return (
    <div className="w-screen h-max m-0 container">
      <Head>
        <title>Laporan Jumlah Produksi Harian</title>
      </Head>
      <NavSideBar />

      {/* Content */}
      <div className="absolute h-max w-4/5 top-0 right-0 justify-end p-5 bg-neutral-100">
        {/* atas */}
        <div className="block items-center">
          {/* informasi Halaman */}
          <div className="flex flex-col pb-3">
            <h1 className="title font-bold text-2xl">Jumlah Produksi Harian</h1>
            <h3 className="text-sm">Laporan</h3>
          </div>

          {/* Button */}
          <div className="text-sm">
            <select
              value={searchType}
              onChange={handleSearchTypeChange}
              className="p-2 w-1/4 bg-white rounded-lg mr-3 cursor-pointer"
            >
              <option>Filter</option>
              <option value="tanggal">Kategori</option>
              <option value="materials">Materials</option>
            </select>

            {/* Input Cari */}
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchValueChange}
              placeholder={`Cari berdasarkan ${searchType}`}
              className="rounded-lg bg-white p-2 mr-2 mb-1 cursor-pointer w-1/4"
            />

            {/* Filter Tanggal */}
            <input
              type="date"
              value={searchValue}
              onChange={handleSearchValueChange}
              className="p-2 w-[200px] bg-white mr-3 rounded-lg"
            />

            {/* Button Export Data */}
            <button
              onClick={handleExportPDF}
              className="rounded-lg text-white bg-blue-500 px-4 py-2 mr-2 mb-1
              cursor-pointer"
            >
              Export to PDF
            </button>
          </div>
        </div>
        {/* DataTabel */}
        <div
          ref={componentPDF}
          style={{
            width: "90%",
            alignItems: "center",
          }}
        >
          {/* <JphList
            list={sortedProduksiList.filter(
              (jmlproduksi) =>
                jmlproduksi.materials
                  .toLowerCase()
                  .includes(searchValue.toLowerCase()) ||
                jmlproduksi.tanggal.toLowerCase().includes(searchValue)
            )}
            showActions={showActions}
            onDeleteClickHnd={deleteProduksi}
            onEdit={editJmlProduksi}
          /> */}
        </div>

        {/* {shownPage === PageEnum.edit && (
          <EditJumlahProduksi onKembaliBtnHnd={showListPage} />
        )} */}
      </div>
    </div>
  );
};

export default jumlahproduksiharian;