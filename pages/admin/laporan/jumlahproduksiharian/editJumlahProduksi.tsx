import NavSideBar from "@/pages/components/sidenavbar/admin";
import React, { useEffect, useState } from "react";
import styles from "./jumlahproduksiharian.module.css";
import Link from "next/link";

const editJumlahProduksi = () => {
  //Membuat Tanggal Live
  const [currentDate, setCurrentDate] = useState(new Date());
  const [materials, setMaterials] = useState("Paving Bata");
  const [jumlahProduksi, setJumlahProduksi] = useState("");
  const [keterangan, setKeterangan] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const LiveDate = currentDate.toLocaleString();


  return (
    <div className="relative flex max-h-max">
      <NavSideBar />

      <div className="flex-grow right-0 justify-end p-5 bg-neutral-100 w-max">
        {/* atas */}
        <div className="flex flex-row justify-between">
          <div className="flex flex-col m-1 pb-3">
            <h1 className={`${styles.h1}`}>Pencatatan Jumlah Produksi</h1>
            <h3 className={`${styles.h3}`}>Transaksi</h3>
          </div>
          {/* <HeadButton /> buttonnya kemunkinan berdiri sendiri2 */}
        </div>

        {/* form pencatatan */}
        <div className="px-4">
          <div className={`pb-5 w-1/5 ${styles.text}`}>
            <div className="text-neutral-600 bg-neutral-300 rounded-md px-3 py-1 mt-1">
              {LiveDate}
            </div>
          </div>

          <div className="pb-5 w-1/3">
            Materials <br />
            <select
              value={materials}
              onChange={(e) => setMaterials(e.target.value)}
              className="bg-white rounded-md px-2 py-1 mt-1 w-2/3 border border-neutral-400"
            >
              <option>Paving Bata</option>
              <option>Paving Bata</option>
              <option>Paving Bata</option>
              <option>Paving Bata</option>
              <option>Paving Bata</option>
              <option>Paving Bata</option>
            </select>
          </div>

          <div className="pb-5 text-sm w-full">
            Jumlah Produksi <br />
            <input
              value={jumlahProduksi}
              onChange={(e) => setJumlahProduksi(e.target.value)}
              className="rounded-md px-3 py-1 mt-1 w-2/3 border border-neutral-400"
              placeholder="Masukan jumlah produksi harian"
            />
          </div>

          <div className="pb-5 text-sm">
            Keterangan <br />
            <textarea
              value={keterangan}
              onChange={(e) => setKeterangan(e.target.value)}
              className="rounded-md px-3 pt-1 pb-12 mt-1 w-2/3 border border-neutral-400"
              placeholder="Masukan Keterangan bila diperlukan"
            />
          </div>

          {/* Button */}
          <div className="pb-5 text-sm w-2/3 justify-right">
            <Link
              href={"/admin/laporan/jumlahproduksiharian"}
              className="bg-white w-20 h-8 mr-4 rounded-md text-blue-500 border border-blue-500 font-medium"
            >
              Kembali
            </Link>
            <button className="bg-blue-600 w-20 h-8 rounded-md text-white font-semibold">
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default editJumlahProduksi;
