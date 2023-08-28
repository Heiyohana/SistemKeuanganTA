import Head from "next/head";
import React, { useEffect, useState } from "react";
import NavSideBar from "../../component/sidenavbar";
import JphList from "./jumlahProduksiList";
import {
  IProduksiHarian,
  PageEnum,
  dummyProduksiHarianList,
} from "./jumlahProduksi.type";
import EditJumlahProduksi from "./editJumlahProduksi";

const jumlahproduksiharian = () => {
  const [produksiList, setProduksiList] = useState(
    dummyProduksiHarianList as IProduksiHarian[]
  );

  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState(null as null | IProduksiHarian);

  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  const deleteProduksi = (data: IProduksiHarian) => {
    //To index from array i,e produksiList
    //Splice that
    //Update new record
    const indexToDelete = produksiList.indexOf(data);
    const tempList = [...produksiList];
    tempList.splice(indexToDelete, 1);
    setProduksiList(tempList);
  };

  const editJmlProduksi = (data: IProduksiHarian) => {
    setShownPage(PageEnum.edit);
    setDataToEdit(data);
  };

  return (
    <div className="w-screen h-full m-0 container">
      <Head>
        <title>Laporan Jumlah Produksi Harian</title>
      </Head>
      <NavSideBar />

      {/* Content */}
      <div className="absolute h-max w-4/5 top-0 right-0 justify-end p-7 bg-neutral-100">
        {/* atas */}
        <div className="flex flex-row justify-between items-center">
          {/* informasi Halaman */}
          <div className="flex flex-col pb-5">
            <h1 className="title font-bold text-2xl">Jumlah Produksi Harian</h1>
            <h3 className="text-sm">Laporan</h3>
          </div>

          {/* Filter Data */}
          <div className="flex items-top">
            {/* Filter selection */}
            <select
              name="filter"
              id="filter"
              className="p-2 w-1/5 bg-white rounded-lg mr-3 cursor-pointer"
            >
              <option>Filter</option>
              <option>Tanggal</option>
              <option>Materials</option>
              <option>Jml Produksi</option>
              <option>Keterangan</option>
            </select>

            {/* Input Cari */}
            <input
              type="search"
              name="find"
              id="find"
              placeholder="Cari"
              className="p-2 w-2/5 bg-white mr-3 rounded-lg"
            />

            {/* Filter Tanggal */}
            <input
              type="date"
              name="tanggal"
              id="tanggal"
              className="p-2 w-1/3 bg-white mr-3 rounded-lg"
            />

            <button className="p-2 w-1/5 bg-blue-500 text-white rounded-lg">
              Export Data
            </button>
          </div>
        </div>
        {/* Tabel */}
        {shownPage === PageEnum.list && (
          <JphList
            list={produksiList}
            onDeleteClickHnd={deleteProduksi}
            onEdit={editJmlProduksi}
          />
        )}

        {shownPage === PageEnum.edit && (
          <EditJumlahProduksi onKembaliBtnHnd={showListPage} />
        )}
      </div>
    </div>
  );
};

export default jumlahproduksiharian;
