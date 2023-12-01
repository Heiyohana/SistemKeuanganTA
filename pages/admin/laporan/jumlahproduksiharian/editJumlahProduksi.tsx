import NavSideBar from "@/pages/components/sidenavbar/admin";
import React, { useEffect, useState } from "react";
import styles from "./jumlahproduksiharian.module.css";
import Link from "next/link";
import Head from "next/head";
import MSuccess from "@/pages/components/mSuccess";
import { dummyProdukList } from "@/pages/admin/masterdata/produk/produk.type";

const editJumlahProduksi = () => {
  const [materials, setMaterials] = useState("Paving Bata");
  const [jumlahProduksi, setJumlahProduksi] = useState("");
  const [keterangan, setKeterangan] = useState("");

  const [tanggalOtomatis, setTanggalOtomatis] = useState("");
  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];
    setTanggalOtomatis(formattedDate);
  }, []);

  const [selectedProduk, setSelectedProduk] = useState("");

  const produkOptions = "Materials"
    ? dummyProdukList.filter((produk) => produk.kategori === "Materials")
    : dummyProdukList;

  const handleProdukChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newProduk = e.target.value;
    setSelectedProduk(newProduk);
  };

  // Handle ModalSuccess
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);
  const onModalSuccessClick = () => {
    setIsModalSuccessOpen(true);
    setTimeout(() => {
      setIsModalSuccessOpen(false);
    }, 1000);
  };

  return (
    <div className="relative flex h-screen">
      <Head>
        <title>Laporan Jumlah Produksi Harian</title>
      </Head>
      <NavSideBar />

      <div className="flex-grow right-0 justify-end p-5 bg-neutral-100 w-max">
        {/* atas */}
        <div className="flex flex-row justify-between">
          <div className="flex flex-col m-1 pb-3">
            <h1 className={`${styles.h1}`}>Pencatatan Jumlah Produksi</h1>
            <h3 className={`${styles.h3}`}>Transaksi</h3>
          </div>
        </div>

        {/* form pencatatan */}
        <div className="px-4">
          <div className={`pb-3 w-full flex flex-col`}>
            <span className={`${styles.label}`}>Tanggal</span>
            <input
              type="date"
              value={tanggalOtomatis}
              onChange={(e) => setTanggalOtomatis(e.target.value)}
              className={`text-neutral-600 bg-neutral-300 rounded-md px-3 py-2 mt-1 ${styles.input}`}
              disabled // Agar tidak bisa diubah oleh pengguna
            />
          </div>
          <div className="flex flex-col mb-2">
            <span className={`${styles.label}`}>Materials</span>
            <select
              name="produk"
              id="produk"
              value={selectedProduk}
              onChange={handleProdukChange}
              className={`bg-white rounded-md px-2 py-2 mt-1 w-full border border-neutral-400 ${styles.input}`}
              required
            >
              <option value="">Pilih Produk</option>
              {produkOptions.map((produk) => (
                <option value={produk.id} key={produk.id}>
                  {produk.nama}
                </option>
              ))}
            </select>
          </div>

          <div className={`pb-3 ${styles.label}`}>
            Jumlah Produksi <br />
            <input
              className={`bg-white rounded-md px-2 py-2 mt-1 w-full border border-neutral-400 ${styles.input}`}
              placeholder="Masukan jumlah produksi harian"
              onChange={(e) => setJumlahProduksi(e.target.value)}
            />
          </div>

          <div className={`pb-3 ${styles.label}`}>
            Keterangan <br />
            <textarea
              className={`bg-white rounded-md px-2 pb-12 mt-1 w-full border border-neutral-400 ${styles.input}`}
              placeholder="Masukan Keterangan bila diperlukan"
              onChange={(e) => setKeterangan(e.target.value)}
            />
          </div>

          {/* Button */}
          <div className="pb-5 w-full justify-end flex">
            <button className="bg-white w-20 h-8 mr-4 rounded-md text-blue-500 border border-blue-500 font-medium">
              <Link href={"/admin/laporan/jumlahproduksiharian"}>Kembali</Link>
            </button>
            <button
              onClick={onModalSuccessClick}
              className={`bg-blue-600 w-20 h-8 rounded-md text-white ${styles.button}`}
            >
              Simpan
            </button>
          </div>
        </div>
        {isModalSuccessOpen && <MSuccess />}
      </div>
    </div>
  );
};

export default editJumlahProduksi;
