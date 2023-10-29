import NavSideBar from "@/pages/components/sidenavbar/admin";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ILaporanPesanan } from "./laporanPesanan.type";
import Image from "next/image";
import buktiTF from "@/assets/elements/buktitf.jpg";
import BayarTagihan from "./bayarTagihan";
import styles from "./laporanpesanan.module.css";

const RekapPesanan: React.FC = () => {
  const router = useRouter();
  const { data } =router.query;

  let selectedData: ILaporanPesanan | null = null;
  if (data) {
    selectedData = JSON.parse(data as string);
  }

  // Handle Form Bayar
  const [isFormBayarOpen, setIsFormBayarOpen] = useState(false);

  // Membuka Form Bayar
  const openFormBayarModal = () => {
    setIsFormBayarOpen(true);
  };

  // Menutup Form Bayar
  const onCloseFormBayarModal = () => {
    setIsFormBayarOpen(false);
  };

  const [totalBiayaKeseluruhan, setTotalBiayaKeseluruhan] = useState<number>(0);
  
  return (
    <div className="relative flex h-screen">
      <Head>
        <title>Rekap Pesanan</title>
      </Head>

      <div className="w-screen h-full m-0 flex flex-row relative">
        {/* kiri side */}
        <NavSideBar />

        {/* Kanan */}
        <div className="flex-grow right-0 justify-end p-5 bg-neutral-100">
          <div className="w-full flex flex-row justify-between pb-5">
            <div className="flex flex-col">
              <h1 className={`${styles.h1}`}>Rekap Pesanan</h1>
              <h3 className={`${styles.h3}`}>Laporan</h3>
            </div>

            {/* button */}
            <div>
              <button
                className={`px-4 py-2 mr-2 mb-2 cursor-pointer bg-red-500 text-white rounded-md ${styles.button}`}
                onClick={openFormBayarModal}
              >
                Bayar Tagihan
              </button>

              {/* Button Export Data */}
              <Link
                href={"../laporanpesanan/invoice"}
                className={`${styles.button} rounded-md bg-white border-2 border-blue-500 text-blue-500 px-4 py-2 mb-2 cursor-pointer`}
              >
                Cetak Invoice
              </Link>
            </div>
          </div>

          {/* isi invoice */}
          <div className="bg-white rounded-md w-full">
            {/* Informasi Pesanan */}
            <div className="w-full p-3">
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
                    <input
                      type="text"
                      value={selectedData ? selectedData.noNota : ""}
                      className="bg-white py-1"
                      disabled
                    />
                  </div>
                  <div
                    className={`w-full justify-between flex flex-row items-center ${styles.text}`}
                  >
                    <span className="flex">Tanggal</span>
                    <input
                      type="text"
                      value={selectedData ? selectedData.tanggal : ""}
                      className="bg-white py-1"
                      disabled
                    />
                  </div>
                  <div
                    className={`w-full justify-between flex flex-row items-center ${styles.text}`}
                  >
                    <span className="flex">CS Desk</span>
                    <input
                      type="text"
                      value={selectedData ? selectedData.csDesk : ""}
                      className="bg-white py-1"
                      disabled
                    />
                  </div>
                  <div
                    className={`w-full justify-between flex flex-row items-center ${styles.text}`}
                  >
                    <span className="flex">Tanggal Dibayar</span>
                    <input
                      type="text"
                      value={selectedData ? selectedData.tglBayar : ""}
                      className="bg-white py-1"
                      disabled
                    />
                  </div>
                </div>
                {/* kanan section: Informasi Pemesan */}
                <div className="w-1/3">
                  <div
                    className={`w-full justify-between flex flex-row items-center ${styles.text}`}
                  >
                    <span className="flex">Nama Customer</span>
                    <input
                      type="text"
                      value={selectedData ? selectedData.namaCust : ": "}
                      className="bg-white py-1"
                      disabled
                    />
                  </div>
                  <div
                    className={`w-full justify-between flex flex-row items-center ${styles.text}`}
                  >
                    <span className="flex">No HP</span>
                    <input
                      type="text"
                      value={selectedData ? selectedData.noHpCust : ""}
                      className="bg-white py-1"
                      disabled
                    />
                  </div>
                  <div
                    className={`w-full justify-between flex flex-row items-center ${styles.text}`}
                  >
                    <span className="flex">Alamat Pengiriman</span>
                    <input
                      type="text"
                      value={selectedData ? selectedData.alamatCust : ""}
                      className="bg-white py-1"
                      disabled
                    />
                  </div>
                </div>
              </div>
              {/* Isi Detail Pesanan */}
              <div
                className={`${styles.section} border-b border-black pr-10 mb-2 w-1/3 ${styles.section}`}
              >
                Detail Pesanan
              </div>
              <div
                className={`w-full rounded-lg py-2 bg-blue-100 p-3 text-blue-900 mb-3 ${styles.total}`}
              >
                15.385.000
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

              <div
                className={`flex flex-row justify-between px-2 ${styles.text}`}
              >
                <div className="flex flex-col w-1/3 gap-1">
                  <div>Catatan Transaksi : Tidak Ada</div>
                  <div>Metode Pembayaran : DP 2</div>
                  <div>Jenis Pembayaran : Transfer</div>
                  <div>
                    <p
                      className={`border-b border-neutral-800 ${styles.section}`}
                    >
                      Bukti Pembayaran
                    </p>
                    <Image
                      src={buktiTF}
                      alt="Bukti Transfer"
                      className="h-[80px] w-[80px] rounded-md object-cover flex pt-1"
                    />
                  </div>
                  <div>
                    <p
                      className={`border-b border-neutral-800 ${styles.section}`}
                    >
                      Status Transaksi
                    </p>
                    <div className={`flex flex-row gap-4 pt-1 ${styles.text}`}>
                      <div className="py-0.5 px-2 rounded-md justify-center items-center bg-pink-300">
                        belum lunas
                      </div>
                      <div className="py-0.5 px-2 rounded-md justify-center items-center bg-gray-200">
                        lunas
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-1/3 gap-1">
                  <div className="flex justify-between">
                    <div>Subtotal</div>
                    <div>15.385.000</div>
                  </div>
                  <div className="flex justify-between border-b border-neutral-600 pb-1">
                    <div>Telah dibayar DP 1</div>
                    <div>4.615.500</div>
                  </div>
                  <div className="flex justify-between border-b border-neutral-600 pb-1">
                    <div>Total</div>
                    <div>10.769.500</div>
                  </div>
                  <div className="flex justify-between border-b border-neutral-600 pb-1">
                    <div>DP 2 (40%)</div>
                    <div>4.307.800</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Sisa Tagihan</div>
                    <div>6.461.700</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isFormBayarOpen && <BayarTagihan />}
      </div>
    </div>
  );
};

export default RekapPesanan;
