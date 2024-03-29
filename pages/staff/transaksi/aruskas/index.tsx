import Head from "next/head";
import React, { useEffect, useState } from "react";
import NavSideBar from "@/pages/components/sidenavbar/staff";
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
  
  const isFormValid =
    tanggalOtomatis !== "" &&
    kategori !== "" &&
    nama !== "" &&
    keterangan !== "" &&
    nominal !== "" &&
    file !== "";

  const resetForm = () => {
    setTanggalOtomatis("");
    setKategori("");
    setNama("");
    setKeterangan("");
    setNominal("");
    setFile("");
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault;
    if (isFormValid){
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

          <div className={`pb-2 w-full flex flex-col`}>
            <span className={`${styles.label}`}>Kategori Keuangan</span>
            <select
              className={`bg-white rounded-md px-2 py-2 mt-1 border border-neutral-400 ${styles.input}`}
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

          <div className={`pb-2 w-full flex flex-col`}>
            <span className={`${styles.label}`}>Nama Pelapor Keuangan</span>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className={`rounded-md px-3 py-2 mt-1 border border-neutral-400 ${styles.input}`}
              placeholder="Masukan Nama Pelapor"
            />
          </div>

          <div className={`pb-2 w-full flex flex-col`}>
            <span className={`${styles.label}`}>Keterangan</span>
            <input
              type="text"
              value={keterangan}
              onChange={(e) => setKeterangan(e.target.value)}
              className={`rounded-md px-3 py-2 mt-1 border border-neutral-400 ${styles.input}`}
              placeholder="Masukan Keterangan Arus Kas"
            />
          </div>

          <div className={`pb-2 w-full flex flex-col`}>
            <span className={`${styles.label}`}>Nominal</span>
            <input
              type="number"
              value={nominal}
              onChange={(e) => setNominal(e.target.value)}
              className={`rounded-md px-3 py-2 mt-1 border border-neutral-400 ${styles.input}`}
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
              // onClick={onModalSuccessClick}
              className={`h-8 rounded-md px-2 py-1 hover:shadow-md ${styles.button} ${isFormValid ? "bg-blue-600 text-white" : "bg-gray-400 text-white"}`}
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

export default trans_aruskas;
