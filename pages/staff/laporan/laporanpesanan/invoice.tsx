import Kop from '@/pages/components/kop';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react'
import { ILaporanPesanan } from './laporanPesanan.type';
import styles from "./laporanpesanan.module.css";
import { useReactToPrint } from "react-to-print";

const invoice = () => {
    const router = useRouter();
    const { data } = router.query;

    let selectedData: ILaporanPesanan | null = null;
    if (data) {
      selectedData = JSON.parse(data as string);
    }

    const componentPDF = useRef(null);
    const generatePDF = useReactToPrint({
      content: () => componentPDF.current,
      documentTitle: "Invoice",
    });

    useEffect(() => {
      generatePDF();
    });
  return (
    <div className="w-full bg-white m-0" ref={componentPDF}>
      <Head>
        <title>Invoice Pesanan</title>
      </Head>

      <Kop />

      <div className="px-10 py-4 ">
        <h1 className={`text-center ${styles.h1ExportPage}`}>
          INVOICE PESANAN
        </h1>

        <div
          className={`${styles.section} border-b border-black pr-10 mb-2 w-1/3`}
        >
          Informasi Pesanan
        </div>
        <div className="flex flex-row w-full gap-8">
          {/* section kiri: informasi nota */}
          <div className="w-1/3">
            <div
              className={`w-full justify-between flex flex-row items-center ${styles.text}`}
            >
              <span className="flex">No Nota</span>
              <p>KMS/06/23/2</p>
            </div>
            <div
              className={`w-full justify-between flex flex-row items-center ${styles.text}`}
            >
              <span className="flex">Tanggal</span>
              <p>1/6/2023</p>
            </div>
            <div
              className={`w-full justify-between flex flex-row items-center ${styles.text}`}
            >
              <span className="flex">CS Desk</span>
              <p>Miahana</p>
            </div>
            <div
              className={`w-full justify-between flex flex-row items-center ${styles.text}`}
            >
              <span className="flex">Tanggal Dibayar</span>
              <p>10/06/23</p>
            </div>
          </div>
          {/* kanan section: Informasi Pemesan */}
          <div className="w-1/3">
            <div
              className={`w-full justify-between flex flex-row items-center ${styles.text}`}
            >
              <span className="flex">Nama Customer</span>
              <p>Astuti Putri</p>
            </div>
            <div
              className={`w-full justify-between flex flex-row items-center ${styles.text}`}
            >
              <span className="flex">No HP</span>
              <p>08987654321</p>
            </div>
            <div
              className={`w-full justify-between flex flex-row items-center ${styles.text}`}
            >
              <span className="flex">Alamat Pengiriman</span>
              <p>PT Sejahtera, Pringsewu</p>
            </div>
          </div>
        </div>

        <div
          className={`border-b border-black pr-10 mb-2 w-1/3 ${styles.section} mt-3`}
        >
          Detail Pesanan
        </div>

        {/* Tabel pesanan */}
        <table className="w-full border border-gray-300 mb-2">
          <thead
            className={`bg-gray-200 text-gray-800 border-gray-400 border-b-2 border-t-2 h-9 ${styles.thead}`}
          >
            <tr className="py-1">
              <th className="px-2">No.</th>
              <th className="px-5 text-left">Kategori</th>
              <th className="px-6 text-left">Nama Produk</th>
              <th className="px-4">Jumlah</th>
              <th className="px-4">Luas</th>
              <th className="px-8 text-right">Harga Produk</th>
              <th className="px-6 text-right">Total Biaya</th>
            </tr>
          </thead>
          <tbody>
            {/* data berdasarkan rekap pesanan yang dipilih dari halaman laporan pesanan */}
            <tr className={`py-1 ${styles.tdtable}`}>
              <td className="px-4 text-center">1</td>
              <td className="px-5">Materials</td>
              <td className="px-6">Paving Cacing 6 cm</td>
              <td className="px-7 text-center">5000</td>
              <td className="px-9 text-center">128</td>
              <td className="px-8 text-right">80.000</td>
              <td className="px-6 text-right">10.256.000</td>
            </tr>
            <tr className={`py-1 ${styles.tdtable}`}>
              <td className="px-4 text-center">2</td>
              <td className="px-5">Layanan</td>
              <td className="px-6">Jasa Pasang</td>
              <td className="px-7 text-center">128</td>
              <td className="px-9 text-center">128</td>
              <td className="px-8 text-right">25.000</td>
              <td className="px-6 text-right">3.205.000</td>
            </tr>
            <tr className={`py-1 ${styles.tdtable}`}>
              <td className="px-4 text-center">3</td>
              <td className="px-5">Layanan</td>
              <td className="px-6">Jasa Pengiriman</td>
              <td className="px-7 text-center">128</td>
              <td className="px-9 text-center">128</td>
              <td className="px-8 text-right">15.000</td>
              <td className="px-6 text-right">1.923.000</td>
            </tr>
          </tbody>
        </table>

        <div className={`flex flex-row justify-between px-2 ${styles.text}`}>
          <div className="flex flex-col w-1/3 gap-1">
            <div>
              <strong>Catatan Transaksi :</strong> Tidak Ada
            </div>
            <div>
              <strong>Metode Pembayaran :</strong> DP 2
            </div>
            <div>
              <strong>Jenis Pembayaran :</strong> Transfer
            </div>
          </div>
          <div className="flex flex-col w-1/3 gap-1">
            <div className="flex justify-between">
              <div>Subtotal</div>
              <div>15.385.000</div>
            </div>
            <div className="flex justify-between pb-1">
              <div>Telah dibayar DP 1</div>
              <div>4.615.500</div>
            </div>
            <div className="flex justify-between border-b border-neutral-600 pb-1">
              <div>Telah dibayar DP 2</div>
              <div>4.307.800</div>
            </div>
            <div className="flex justify-between border-b border-neutral-600 pb-1">
              <div>
                <strong>Total</strong>
              </div>
              <div>
                <strong>6.461.700</strong>
              </div>
            </div>
            <div className="flex justify-between border-b border-neutral-600 pb-1">
              <div>Pelunasan</div>
              <div>6.461.700</div>
            </div>
            <div className="flex justify-between">
              <div>
                <strong>Sisa Tagihan</strong>
              </div>
              <div>
                <strong>-</strong>
              </div>
            </div>
          </div>
        </div>

        {/* tanda tangan */}
        <div
          className={`flex flex-col justify-right items-end p-2 ${styles.text}`}
        >
          <div className="text-center flex flex-col">
            <div className="pt-3 pb-10">Bandar Lampung, 14 Juni 2023</div>
            <div>Miahana</div>
            <div>Admin Keuangan</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default invoice;