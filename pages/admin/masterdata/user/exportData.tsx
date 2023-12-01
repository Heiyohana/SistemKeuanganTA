import Kop from "@/pages/components/kop";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { IUser, dummyUserList } from "./user.type";
import styles from "./masteruser.module.css";
import { useReactToPrint } from "react-to-print";

const exportDataPage: React.FC = () => {
  const componentPDF = useRef(null);
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "Master Data Produk",
  });

  useEffect(() => {
    generatePDF();
  });
  
  return (
    <div className="w-full bg-white m-0" ref={componentPDF}>
      <Head>
        <title>Master Data Akun User</title>
      </Head>

      <Kop />

      <h1 className={`text-center mt-3 ${styles.h1ExportPage}`}>
        Data Akun User
      </h1>

      <div className="px-10 pt-2">
        {/* Tabel data customer / lainnya */}
        <table className="w-full text-left border-2 border-gray-800 text-sm">
          <thead className="items-center text-black">
            <tr className={`${styles.thtable}`}>
              <th className="py-2 px-2">No</th>
              <th className="py-2 px-10">Nama Customer</th>
              <th className="py-2 px-4">No Handphone</th>
              <th className="py-2 px-8">Alamat Pengiriman</th>
            </tr>
          </thead>
          <tbody className="bg-white text-left">
            {/* isi data dari test.type.ts */}
            {dummyUserList.map((user: IUser) => {
              return (
                <tr
                  key={user.id}
                  className={`${styles.tdtable} border border-gray-400`}
                >
                  <td className="py-1 px-2">{user.id}</td>
                  <td className="py-1 px-10">{user.email}</td>
                  <td className="py-1 px-4">{user.username}</td>
                  <td className="py-1 px-8">{user.role}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* tandatangan */}
      </div>
    </div>
  );
};

export default exportDataPage;
