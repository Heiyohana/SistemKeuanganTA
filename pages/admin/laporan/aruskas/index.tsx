import NavSideBar from "@/pages/components/sidenavbar/admin";
import Head from "next/head";
import React, { useState, useRef } from "react";
import { IArusKas, dummyArusKasList } from "./arusKas.type";
import ArusKasList from "./arusKasList";
import { useReactToPrint } from "react-to-print";
import Link from "next/link";

const Aruskas = () => {
  const [kasList, setKasList] = useState(dummyArusKasList as IArusKas[]);
  const [searchType, setSearchType] = useState(
    "filter" || "nama" || "date" || "kategori"
  );
  // Default search type
  const [searchValue, setSearchValue] = useState("");

  const handleSearchTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchType(e.target.value);
  };

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // Delete Arus Kas
  const deleteArusKas = (data: IArusKas) => {
    //To index from array i,e kasList
    //Splice that
    //Update new record
    const indexToDelete = kasList.indexOf(data);
    const tempList = [...kasList];
    tempList.splice(indexToDelete, 1);
    setKasList(tempList);
  };

  // Mengurutkan data berdasarkan tanggal
  const sortedKasList = kasList
    .slice()
    .sort((a, b) => a.tanggal.localeCompare(b.tanggal));

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
  };

  return (
    <div className="relative flex h-screen">
      <Head>
        <title>Laporan Arus Kas</title>
      </Head>
      <div className="w-screen h-full m-0 flex flex-row relative">
        <NavSideBar />

        {/* Content */}
        <div className="flex-grow right-0 justify-end p-5 bg-neutral-100">
          {/* atas */}
          <div className="block items-center">
            {/* informasi Halaman */}
            <div className="flex flex-col pb-3">
              <h1 className="title font-bold text-2xl">Arus Kas</h1>
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
                <option value="kategori">Kategori</option>
                <option value="nama">Nama Pelapor</option>
              </select>

              {/* Input Cari */}
              <input
                type="text"
                value={searchValue}
                onChange={handleSearchValueChange}
                placeholder={`Cari berdasarkan ${searchType}`}
                className="rounded-lg bg-white p-2 mr-2 mb-2 cursor-pointer w-1/4"
              />

              {/* Filter Tanggal */}
              <input
                type="date"
                value={searchValue}
                onChange={handleSearchValueChange}
                className="p-2 w-[200px] bg-white mr-3 rounded-lg"
              />

              {/* Button Export Data */}
              <Link
                href="../laporan/aruskas/exportData"
                className="rounded-lg text-white bg-blue-500 px-4 py-2 mr-2 mb-2
              cursor-pointer"
              >
                Export to PDF
              </Link>
            </div>
            {/* DataTable */}
            <div
              ref={componentPDF}
              style={{
                width: "90%",
                alignItems: "center",
              }}
            >
              <ArusKasList
                list={sortedKasList.filter(
                  (kas) =>
                    kas.kategori
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()) ||
                    kas.namapelapor
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()) ||
                    kas.tanggal.toLowerCase().includes(searchValue)
                )}
                showActions={showActions}
                onDeleteClickHnd={deleteArusKas}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aruskas;
