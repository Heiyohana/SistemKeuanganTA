import NavSideBar from "@/pages/components/sidenavbar/admin";
import Head from "next/head";
import React, { useState } from "react";
import { IProduk, PageEnum, dummyProdukList } from "./produk.type";
import ProdukList from "./produkList";
import AddProdukModal from "./addProdukModal";
import Link from "next/link";
import styles from "./materproduk.module.css";
import Deletewarn from "@/pages/components/deletewarn";

const index = () => {
  const [produkList, setProdukList] = useState(dummyProdukList as IProduk[]);

  const [shownModalAdd, setShownModalAdd] = useState(PageEnum.list);

  const onAddProdukHnd = () => {
    setShownModalAdd(PageEnum.add);
  };

  const showListPage = () => {
    setShownModalAdd(PageEnum.list);
  };

  const showAddModal = (data: IProduk) => {
    setProdukList([...produkList, data]);
  };

  const [isDeleteWarningOpen, setIsDeleteWarningOpen] = useState(false);
  const [indexToDelete, setIndexToDelete] = useState<number | null>(null);

  const handleDeleteItem = (data: IProduk) => {
    const indexToDelete = produkList.indexOf(data);
    setIsDeleteWarningOpen(true);
    setIndexToDelete(indexToDelete);
  };

  const confirmDeleteData = () => {
    const tempList = [...produkList];
    tempList.splice(indexToDelete!, 1);
    setProdukList(tempList);

    setIsDeleteWarningOpen(false);
  };

  const handleCancelDelete = () => {
    setIsDeleteWarningOpen(false);
  };

  // Pencarian Data
  const [search, setSearch] = useState("");

  return (
    <div className="relative flex h-screen">
      <Head>
        <title>Master Data Produk</title>
      </Head>
      <div className="w-screen h-full m-0 flex flex-row relative">
        <NavSideBar />

        {/* Section Kanan */}
        <div className="flex-grow right-0 justify-end p-5 bg-neutral-100">
          <div className="flex flex-row justify-between items-center">
            {/* informasi halaman */}
            <div className="flex flex-col pb-5">
              <h1 className={`${styles.title}`}>Data Produk</h1>
              <h3 className={`${styles.desctitle}`}>Master Data</h3>
            </div>
            {/* 3 Button */}
            <div className={`${styles.button}`}>
              <input
                type="button"
                value="Tambah Data"
                className="rounded-lg text-white bg-blue-500 px-4 py-2 mr-2 mb-2 cursor-pointer"
                onClick={onAddProdukHnd}
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari"
                className="w-[200px] rounded-lg bg-white border-2 border-blue-500 px-4 py-2 mr-2 mb-2 cursor-pointer"
              />
              <Link
                href={"../masterdata/produk/exportData"}
                className="rounded-lg text-white bg-blue-500 px-4 py-2 mr-2 mb-2 cursor-pointer"
              >
                Export Data
              </Link>
            </div>
          </div>

          {/* Tabel Data Produk */}

          {shownModalAdd === PageEnum.list && (
            <ProdukList
              list={produkList.filter(
                (produk) =>
                  produk.kategori
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  produk.nama.toLowerCase().includes(search.toLowerCase()) ||
                  produk.ukuran.toLowerCase().includes(search)
              )}
              onDeleteClickHnd={handleDeleteItem}
            />
          )}

          {shownModalAdd === PageEnum.add && (
            <AddProdukModal
              onBatalBtnHnd={showListPage}
              onSubmitClickHnd={showAddModal}
            />
          )}
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

export default index;
