import Kop from "@/pages/components/kop";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { IArusKas, dummyArusKasList } from "./arusKas.type";
import styles from "./aruskas.module.css";
import { useReactToPrint } from "react-to-print";

const exportDataPage: React.FC = () => {
  const componentPDF = useRef(null);
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "Laporan Arus Kas",
  });

  useEffect(() => {
    generatePDF();
  });
  
  return (
    <div className="w-full bg-white m-0" ref={componentPDF}>
      <Head>
        <title>Laporan Arus Kas</title>
      </Head>

      <Kop />

      <h1 className={`text-center mt-3 ${styles.h1ExportPage}`}>
        Data Arus Kas
      </h1>

      {/* Tabel data arus kas */}
      <div className="px-10 pt-2">
        <table className="w-full text-left border-2 border-gray-800 mt-2">
          <thead className="items-center text-black">
            <tr className={`${styles.thead}`}>
              <td className="py-2 px-2 text-center">No</td>
              <td className="py-2 px-4">Tanggal</td>
              <td className="py-2 px-4">Nama Pelapor</td>
              <td className="py-2 px-5">Kategori</td>
              <td className="py-2 px-6">Keterangan</td>
              <td className="py-2 px-2 text-center">Qty</td>
            </tr>
          </thead>
          <tbody className="bg-white text-left">
            {/* isi data dari test.type.ts */}
            {dummyArusKasList.map((kas: IArusKas, index) => {
              return (
                <tr
                  key={kas.id}
                  className={`p-3 border-gray-800 border table-auto ${styles.tdtable}`}
                >
                  <td className="py-1 px-2 text-center">{index + 1}</td>
                  <td className="py-1 px-4">{kas.tanggal}</td>
                  <td className="py-1 px-4">{kas.namapelapor}</td>
                  <td className="py-1 px-5">{kas.kategori}</td>
                  <td className="py-1 px-6">{kas.keterangan}</td>
                  <td className="py-1 px-2 text-center">{kas.qty}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default exportDataPage;
