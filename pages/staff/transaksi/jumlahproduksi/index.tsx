import Head from "next/head";
import React, { useEffect, useState } from "react";
import NavSideBar from "@/pages/components/sidenavbar/staff";
import styles from "./jumlahproduksi.module.css";
import { dummyProdukList } from "@/pages/admin/masterdata/produk/produk.type";
import MSuccess from "@/pages/components/mSuccess";

const trans_jumlahproduksi = () => {
  const [tanggalOtomatis, setTanggalOtomatis] = useState("");
  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];
    setTanggalOtomatis(formattedDate);
  }, []);

  const [selectedProduk, setSelectedProduk] = useState("");
  const [jumlahProduksi, setJumlahProduksi] = useState("");
  const [keterangan, setKeterangan] = useState("");

  const isFormValid =
    selectedProduk !== "" && jumlahProduksi !== "" && keterangan !== "";
  const produkOptions = "Materials"
    ? dummyProdukList.filter((produk) => produk.kategori === "Materials")
    : dummyProdukList;

  const resetForm = () => {
    setSelectedProduk("");
    setJumlahProduksi("");
    setKeterangan("");
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault;
    if (isFormValid) {
      onModalSuccessClick();
      resetForm();
    }
  };

  // Handle ModalSuccess
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);
  const onModalSuccessClick = () => {
    setIsModalSuccessOpen(true);
    setTimeout(() => {
      setIsModalSuccessOpen(false);
    }, 5000);
  };

  return (
    // halaman transaksi untuk order / pemesanan
    <div className="relative flex h-screen">
      <Head>
        <title>Pencatatan Jumlah Produksi</title>
      </Head>
      <NavSideBar />

      {/* Content */}
      <div className="flex-grow right-0 justify-end p-5 bg-neutral-100">
        {/* atas */}
        <div className="flex flex-row justify-between">
          <div className="flex flex-col m-1 pb-3">
            <h1 className={`${styles.h1}`}>Pencatatan Jumlah Produksi</h1>
            <h3 className={`${styles.h3}`}>Transaksi</h3>
          </div>
        </div>

        {/* Form Pencatatan */}
        <form className="px-4" onSubmit={handleFormSubmit}>
          <div className={`pb-2 w-full flex flex-col`}>
            <span className={`${styles.label}`}>Tanggal</span>
            <input
              type="date"
              value={tanggalOtomatis}
              onChange={(e) => setTanggalOtomatis(e.target.value)}
              className={`text-neutral-600 bg-neutral-300 rounded-md px-3 py-2 mt-1 ${styles.input}`}
              disabled // Agar tidak bisa diubah oleh pengguna
            />
          </div>

          <div className="pb-2 w-full flex flex-col">
            <span className={`${styles.label}`}>Materials</span>
            <select
              name="produk"
              id="produk"
              value={selectedProduk}
              onChange={(e) => setSelectedProduk(e.target.value)}
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

          <div className="pb-2 w-full flex flex-col">
            <span className={`${styles.label}`}>Jumlah Produksi</span>
            <input
              type="number"
              className={`bg-white rounded-md px-2 py-2 mt-1 w-full border border-neutral-400 ${styles.input}`}
              placeholder="Masukan jumlah produksi harian"
              onChange={(e) => setJumlahProduksi(e.target.value)}
              required
            />
          </div>

          <div className={`pb-3 ${styles.label}`}>
            <span className={`${styles.label}`}>Keterangan</span>
            <textarea
              className={`bg-white rounded-md px-2 py-2 pb-12 mt-1 w-full border border-neutral-400 ${styles.input}`}
              placeholder="Masukan Keterangan, jika tidak masukan '-'"
              onChange={(e) => setKeterangan(e.target.value)}
              required
            />
          </div>

          <div className="pb-5 w-full justify-end flex">
            <button
              type="submit"
              className={`h-8 rounded-md px-2 ${styles.button} ${
                isFormValid
                  ? "bg-blue-600 text-white"
                  : "bg-gray-400 text-white"
              }`}
              disabled={!isFormValid}
            >
              Simpan Data
            </button>
          </div>
        </form>
        {isModalSuccessOpen && <MSuccess />}
      </div>
    </div>
  );
};

export default trans_jumlahproduksi;
