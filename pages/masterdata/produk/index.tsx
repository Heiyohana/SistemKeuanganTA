import NavSideBar from "@/pages/component/sidenavbar";
import Head from "next/head";
import React, { useState } from "react";
import { IProduk, PageEnum, dummyProdukList } from "./produk.type";
import ProdukList from "./produkList";
import AddProdukModal from "./addProdukModal";

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

  const deleteProduk = (data: IProduk) => {
    //To index from array i,e produklist
    //Splice that
    //Update new record
    const indexToDelete = produkList.indexOf(data);
    const tempList = [...produkList];
    tempList.splice(indexToDelete, 1);
    setProdukList(tempList);
  };
  return (
    <div className="w-screen h-screen m-0 flex container">
      <Head>
        <title>Master Data Produk</title>
      </Head>
      <NavSideBar />

      {/* Section Kanan */}
      <section className="absolute h-full w-4/5 right-0 p-5 bg-neutral-50">
        <div className="flex flex-row justify-between items-center">
          {/* informasi halaman */}
          <div className="flex flex-col pb-5">
            <h1 className="title font-bold text-2xl">Data Produk</h1>
            <h3 className="text-sm">Master Data</h3>
          </div>
          {/* 3 Button */}
          <div>
            <input
              type="button"
              value="Tambah Data"
              className="rounded-lg text-white bg-blue-500 px-4 py-2 mr-2 mb-2 cursor-pointer"
              onClick={onAddProdukHnd}
            />
            <input
              type="button"
              value="Cari"
              className="w-[200px] rounded-lg bg-white border-2 text-blue-500 border-blue-500 px-4 py-2 mr-2 mb-2 cursor-pointer"
            />
            <input
              type="button"
              value="Export Data"
              className="rounded-lg text-white bg-blue-500 px-4 py-2 mr-2 mb-2 cursor-pointer"
            />
          </div>
        </div>

        {/* Tabel Data Produk */}
        {shownModalAdd === PageEnum.list && (
          <ProdukList list={produkList} onDeleteClickHnd={deleteProduk} />
        )}
        {shownModalAdd === PageEnum.add && (
          <AddProdukModal
            onBatalBtnHnd={showListPage}
            onSubmitClickHnd={showAddModal}
          />
        )}
      </section>
    </div>
  );
};

export default index;
