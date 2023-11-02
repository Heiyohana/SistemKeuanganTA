import Head from "next/head";
import React, { useEffect, useState } from "react";
import NavSideBar from "@/pages/components/sidenavbar/admin";
import styles from "./aruskas.module.css";
import MSuccess from "@/pages/components/mSuccess";

const trans_aruskas = () => {
  const [tanggalOtomatis, setTanggalOtomatis] = useState("");
  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];
    setTanggalOtomatis(formattedDate);
  }, []);

  const [kategori, setKategori] = useState("");
  const [nama, setNama] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [nominal, setNominal] = useState("");
  const [file, setFile] = useState("");

  // Handle ModalSuccess
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);
  const onModalSuccessClick = () => {
    setIsModalSuccessOpen(true);
    setTimeout(() => {
      setIsModalSuccessOpen(false);
    }, 500);
  };

  return (
    // halaman transaksi untuk order / pemesanan
    <div className="relative flex h-screen">
      <Head>
        <title>Pencatatan Arus Kas</title>
      </Head>
      <NavSideBar />

      {/* Content */}
      <div className="flex-grow right-0 justify-end p-5 bg-neutral-100">
        {/* atas */}
        <div className="flex flex-row justify-between">
          <div className="flex flex-col m-1 pb-3">
            <h1 className={`${styles.h1}`}>Pencatatan Arus Kas</h1>
            <h3 className={`${styles.h3}`}>Transaksi</h3>
          </div>
        </div>

        {/* form pencatatan */}
        <form className="px-4">
          <div className={`pb-2 w-fit flex flex-col ${styles.label}`}>
            <span>Tanggal</span>
            <input
              type="date"
              value={tanggalOtomatis}
              onChange={(e) => setTanggalOtomatis(e.target.value)}
              className="text-neutral-600 bg-neutral-300 rounded-md px-3 py-1 mt-1"
              disabled // Agar tidak bisa diubah oleh pengguna
            />
          </div>

          <div className={`pb-2 w-fit flex flex-col ${styles.label}`}>
            <span>Kategori Keuangan</span>
            <select
              className="bg-white rounded-md px-2 py-1 mt-1 border border-neutral-400"
              value={kategori}
              onChange={(e) => setKategori(e.target.value)}
            >
              <option value="">Pilih Kategori</option>
              <option value="Pemasukkan">Pemasukkan</option>
              <option value="Pembelian">Pembelian</option>
              <option value="Pengeluaran">Pengeluaran</option>
              <option value="Kas Awal">Kas Awal</option>
            </select>
          </div>

          <div className={`pb-2 w-full flex flex-col ${styles.label}`}>
            <span>Nama Pelapor Keuangan</span>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="rounded-md px-3 py-1 mt-1 border border-neutral-400"
              placeholder="Masukan Nama Pelapor"
            />
          </div>

          <div className={`pb-2 w-full flex flex-col ${styles.label}`}>
            <span>Keterangan</span>
            <input
              type="text"
              value={keterangan}
              onChange={(e) => setKeterangan(e.target.value)}
              className="rounded-md px-3 py-1 mt-1 border border-neutral-400"
              placeholder="Masukan Keterangan Arus Kas"
            />
          </div>

          <div className={`pb-2 w-full flex flex-col ${styles.label}`}>
            <span>Nominal</span>
            <input
              type="number"
              value={nominal}
              onChange={(e) => setNominal(e.target.value)}
              className="rounded-md px-3 py-1 mt-1 border border-neutral-400"
            />
          </div>

          <div className="container">
            <span className="sr-only">Choose File</span>
            <input
              type="file"
              value={file}
              onChange={(e) => setFile(e.target.value)}
              className={`text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-100 file:text-blue-800 hover:file:bg-blue-300 pb-3 ${styles.file}`}
            />
          </div>

          {/* Button */}
          <div className="flex justify-end">
            <button
              onClick={onModalSuccessClick}
              className={`bg-blue-600 h-8 rounded-md text-white px-2 py-1 hover:shadow-md ${styles.button}`}
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

export default trans_aruskas;
