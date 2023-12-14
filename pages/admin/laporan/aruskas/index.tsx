import NavSideBar from "@/pages/components/sidenavbar/admin";
import Head from "next/head";
import React, { useState, useRef } from "react";
import { IArusKas, dummyArusKasList } from "./arusKas.type";
import ArusKasList from "./arusKasList";
import Link from "next/link";
import styles from "./aruskas.module.css";
import Deletewarn from "@/pages/components/deletewarn";

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

  const [isDeleteWarningOpen, setIsDeleteWarningOpen] = useState(false);
  const [indexToDelete, setIndexToDelete] = useState<number | null>(null);

  const handleDeleteItem = (data: IArusKas) => {
    const indexToDelete = kasList.indexOf(data);
    setIsDeleteWarningOpen(true);
    setIndexToDelete(indexToDelete);
  };

  const confirmDeleteData = () => {
    const tempList = [...kasList];
    tempList.splice(indexToDelete!, 1);
    setKasList(tempList);

    setIsDeleteWarningOpen(false);
  };

  const handleCancelDelete = () => {
    setIsDeleteWarningOpen(false);
  };

  // Mengurutkan data berdasarkan tanggal
  const sortedKasList = kasList
    .slice()
    .sort((a, b) => a.tanggal.localeCompare(b.tanggal));

  // Untuk mengatur kolom aksi hilang saat diekspor
  const [showActions, setShowActions] = useState(true);

  return (
    <div className="relative flex h-screen">
      <Head>
        <title>Laporan Arus Kas</title>
      </Head>
      <div
        className={`w-screen h-full m-0 flex flex-row relative ${styles.body}`}
      >
        <NavSideBar />

        {/* Content */}
        <div className="flex-grow right-0 justify-end p-5 bg-neutral-100">
          {/* atas */}
          <div className="block items-center">
            {/* informasi Halaman */}
            <div className="flex flex-col pb-3">
              <h1 className={`${styles.h1}`}>Arus Kas</h1>
              <h3 className={`${styles.h3}`}>Laporan</h3>
            </div>

            {/* Button */}
            <div className={`${styles.button}`}>
              <select
                value={searchType}
                onChange={handleSearchTypeChange}
                className={`p-2 w-1/4 bg-white rounded-lg mr-3 cursor-pointer ${styles.input}`}
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
                className={`rounded-lg bg-white p-2 mr-2 mb-2 cursor-pointer w-1/4 ${styles.input}`}
              />

              {/* Filter Tanggal */}
              <input
                type="date"
                value={searchValue}
                onChange={handleSearchValueChange}
                className={`p-2 w-[200px] bg-white mr-3 rounded-lg ${styles.input}`}
              />

              {/* Button Export Data */}
              <Link
                href="../laporan/aruskas/exportData"
                className={`rounded-lg text-white bg-blue-500 px-4 py-2 mr-2 mb-2 cursor-pointer ${styles.button}`}
              >
                Export to PDF
              </Link>
            </div>
            {/* DataTable */}
            <div>
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
                onDeleteClickHnd={handleDeleteItem}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Deletewarn /> */}
      {isDeleteWarningOpen && (
        <Deletewarn
          onConfirm={confirmDeleteData}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
};

export default Aruskas;