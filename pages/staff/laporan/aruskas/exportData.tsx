import Kop from "@/pages/components/kop";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { IArusKas, dummyArusKasList } from "./arusKas.type";
import { useReactToPrint } from "react-to-print";
import styles from "./aruskas.module.css";

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

      <h1 className={`text-center mt-3 ${styles.h1}`}>
        Data Arus Kas
      </h1>

      {/* Tabel data arus kas */}
      <div className="px-10 pt-2">
        <table className="w-full text-left border-2 border-gray-800 text-sm mt-2">
          <thead className="items-center text-black">
            <tr className="font-bold">
              <td className="py-2 px-2 text-center">No</td>
              <td className="py-2 px-2">Tanggal</td>
              <td className="py-2 px-2">Nama Pelapor</td>
              <td className="py-2 px-2 text-center">Kategori</td>
              <td className="py-2 px-3">Keterangan</td>
              <th className="px-2 py-1 text-center">Qty</th>
              <th className="px-3 py-1 text-right">Nominal</th>
              <th className="px-3 py-1 text-right">Total</th>
            </tr>
          </thead>
          <tbody className="bg-white text-left">
            {/* isi data dari test.type.ts */}
            {dummyArusKasList.map((kas: IArusKas, index) => {
              return (
                <tr key={kas.id} className="border border-gray-800">
                  <td className="py-1 px-2 text-center">{index + 1}</td>
                  <td className="py-1 px-2">{kas.tanggal}</td>
                  <td className="py-1 px-2">{kas.namapelapor}</td>
                  <td className="py-1 px-2 text-center">{kas.kategori}</td>
                  <td className="py-1 px-3">{kas.keterangan}</td>
                  <td className="py-1 px-2 text-center">{kas.qty}</td>
                  <td className="py-1 px-3 text-right">{kas.nominal}</td>
                  <td className="py-1 px-3 text-right">{kas.total}</td>
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
