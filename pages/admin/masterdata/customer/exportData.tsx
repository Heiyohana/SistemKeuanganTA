import Kop from "@/pages/components/kop";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { ICustomer, dummyCustomerList } from "./customer.type";
import styles from "./mastercustomer.module.css";
import { useReactToPrint } from "react-to-print";

const exportDataPage: React.FC = () => {
  const componentPDF = useRef(null);
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "Master Data Customer",
  });

  useEffect(() => {
    generatePDF();
  });

  return (
    <div className="w-full bg-white m-0" ref={componentPDF}>
      <Head>
        <title>Data Customer</title>
      </Head>

      <Kop />

      <h1 className={`text-center mt-3 ${styles.h1ExportPage}`}>
        Master Data Customer
      </h1>
      <div className="px-10 pt-2">
        {/* Tabel data customer / lainnya */}
        <table className="w-full text-left border-2 border-gray-800">
          <thead className="items-center text-black">
            <tr className={`${styles.thtable}`}>
              <th className="py-2 px-2">ID</th>
              <th className="py-2 px-4">Nama Customer</th>
              <th className="py-2 px-4">No HP</th>
              <th className="py-2 px-8">Alamat Pengiriman</th>
            </tr>
          </thead>
          <tbody className="bg-white text-left">
            {/* isi data dari test.type.ts */}
            {dummyCustomerList.map((customer: ICustomer) => {
              return (
                <tr
                  key={customer.id}
                  className={`${styles.tdtable} border border-gray-400`}
                >
                  <td className="py-1 px-2">{customer.id}</td>
                  <td className="py-1 px-5">{customer.nama}</td>
                  <td className="py-1 px-4">{customer.nohp}</td>
                  <td className="py-1 px-8">{customer.alamat}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* tandatangan */}
    </div>
  );
};

export default exportDataPage;
