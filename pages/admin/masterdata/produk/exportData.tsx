import Head from 'next/head';
import React, { useRef } from 'react';
import Kop from "@/pages/components/kop";
import { dummyProdukList, IProduk } from './produk.type';
import styles from "./materproduk.module.css";
import { useReactToPrint } from 'react-to-print';

const exportData: React.FC = () => {
  const componentPDF = useRef(null);

  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "Laporan Arus Kas",
  });
  
  return (
    <div className="w-full bg-white m-0">
      <Head>
        <title>Data Produk</title>
      </Head>

      <Kop />

      <h1 className={`text-center mt-3 ${styles.h1ExportPage}`}>
        Master Data Produk
      </h1>

      <div className="px-10 pt-2">
        {/* Tabel data customer / lainnya */}
        <table className="w-full text-left border-2 border-gray-800 text-sm">
          <thead className="items-center text-black">
            <tr className={`${styles.thtable}`}>
              <th className="py-2 px-2">ID</th>
              <th className="py-2 px-2">Kategori</th>
              <th className="py-2 px-7">Nama Produk</th>
              <th className="py-2 px-3 text-center">Ukuran</th>
              <th className="py-2 px-3 text-center">Jumlah/m2</th>
              <th className="py-2 px-4 text-right">Harga/m2</th>
            </tr>
          </thead>
          <tbody className="bg-white text-left">
            {/* isi data dari test.type.ts */}
            {dummyProdukList.map((produk: IProduk) => {
              return (
                <tr
                  key={produk.id}
                  className={`${styles.tdtable} border border-gray-400`}
                >
                  <td className="py-1 px-2">{produk.id}</td>
                  <td className="py-1 px-2">{produk.kategori}</td>
                  <td className="py-1 px-7">{produk.nama}</td>
                  <td className="py-1 px-3 text-center">{produk.ukuran}</td>
                  <td className="py-1 px-3 text-center">{produk.jumlahm2}</td>
                  <td className="py-1 px-4 text-right">{produk.hargam2}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* tandatangan */}
    </div>
  );
}

export default exportData