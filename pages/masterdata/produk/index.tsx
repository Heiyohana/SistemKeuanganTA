import NavSideBar from "@/pages/component/sidenavbar";
import Head from "next/head";
import React, { useRef, useState } from "react";
import { IProduk, PageEnum, dummyProdukList } from "./produk.type";
import ProdukList from "./produkList";
import AddProdukModal from "./addProdukModal";
import { useReactToPrint } from "react-to-print";

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

  // Pencarian Data
  const [search, setSearch] = useState("");

  // Untuk mengatur export PDF
  const componentPDF = useRef(null);
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "Data Produk",
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
    <div className="relative flex h-device-width">
      <Head>
        <title>Master Data Produk</title>
      </Head>
      <div className="w-screen h-full m-0 flex flex-row relative">
        <NavSideBar />

        {/* Section Kanan */}
        <section className="flex-grow right-0 justify-end p-5 bg-neutral-100">
          <div className="flex flex-row justify-between items-center">
            {/* informasi halaman */}
            <div className="flex flex-col pb-5">
              <h1 className="title font-bold text-2xl">Data Produk</h1>
              <h3 className="text-sm">Master Data</h3>
            </div>
            {/* 3 Button */}
            <div className="text-sm">
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
                className="w-[200px] rounded-lg bg-white border-2 text-blue-500 border-blue-500 px-4 py-2 mr-2 mb-2 cursor-pointer"
              />
              <input
                type="button"
                value="Export Data"
                onClick={handleExportPDF}
                className="rounded-lg text-white bg-blue-500 px-4 py-2 mr-2 mb-2 cursor-pointer"
              />
            </div>
          </div>

          {/* Tabel Data Produk */}
          <div
            ref={componentPDF}
            style={{
              width: "90%",
              alignItems: "center",
            }}
          >
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
                showActions={showActions}
                onDeleteClickHnd={deleteProduk}
              />
            )}
          </div>

          {shownModalAdd === PageEnum.add && (
            <AddProdukModal
              onBatalBtnHnd={showListPage}
              onSubmitClickHnd={showAddModal}
            />
          )}
        </section>
      </div>
    </div>
  );
};

export default index;
