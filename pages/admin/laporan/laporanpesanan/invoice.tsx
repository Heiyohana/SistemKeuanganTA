import Kop from '@/pages/components/kop';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react'
import { ILaporanPesanan } from './laporanPesanan.type';

const invoice = () => {
    const router = useRouter();
    const { data } = router.query;

    let selectedData: ILaporanPesanan | null = null;
    if (data) {
      selectedData = JSON.parse(data as string);
    }
  return (
    <div className="w-full bg-white m-0">
      <Head>
        <title>Invoice Pesanan</title>
      </Head>

      <Kop />

      <div className="px-10 py-4 ">
        <h1 className="text-center">INVOICE PESANAN</h1>

        <div className="font-bold border-b border-black pr-10 mb-2 w-1/3">
          Informasi Pesanan
        </div>
        <div className="flex flex-row w-full gap-8">
          {/* section kiri: informasi nota */}
          <div className="w-1/3">
            <div className="w-full text-sm justify-between flex flex-row items-center">
              <span className="flex">No Nota</span>
              <p>Indormasi Data</p>
            </div>
            <div className="w-full text-sm justify-between flex flex-row items-center">
              <span className="flex">Tanggal</span>
              <p>Indormasi Data</p>
            </div>
            <div className="w-full text-sm justify-between flex flex-row items-center">
              <span className="flex">CS Desk</span>
              <p>Indormasi Data</p>
            </div>
            <div className="w-full text-sm justify-between flex flex-row items-center">
              <span className="flex">Tanggal Dibayar</span>
              <p>Indormasi Data</p>
            </div>
          </div>
          {/* kanan section: Informasi Pemesan */}
          <div className="w-1/3">
            <div className="w-full text-sm justify-between flex flex-row items-center">
              <span className="flex">Nama Customer :</span>
              <p>Indormasi Data</p>
            </div>
            <div className="w-full text-sm justify-between flex flex-row items-center">
              <span className="flex">No HP :</span>
              <p>Indormasi Data</p>
            </div>
            <div className="w-full text-sm justify-between flex flex-row items-center">
              <span className="flex">Alamat Pengiriman :</span>
              <p>Indormasi Data</p>
            </div>
          </div>
        </div>

        <div className="font-bold border-b border-black pr-10 mb-2 w-1/3">
          Detail Pesanan
        </div>

        <table className="w-full border border-gray-300 mb-2">
          <thead className="bg-gray-200 items-center text-gray-800 border-gray-400 border-b-2 border-t-2 h-9">
            <tr className="font-regular py-1">
              <th className="px-2">No.</th>
              <th className="px-4">Kategori</th>
              <th className="px-4">Nama Produk</th>
              <th className="px-4">Jumlah</th>
              <th className="px-4">Luas</th>
              <th className="px-4">Harga Produk</th>
              <th className="px-4">Total Biaya</th>
            </tr>
          </thead>
          <tbody>
            {/* data berdasarkan rekap pesanan yang dipilih dari halaman laporan pesanan */}
            <tr className="font-regular py-1">
              <td className="px-2">1</td>
              <td className="px-4">Materials</td>
              <td className="px-4">Paving Cacing 6 cm</td>
              <td className="px-4">5000</td>
              <td className="px-4">128</td>
              <td className="px-4">80.000</td>
              <td className="px-4">10.256.000</td>
            </tr>
            <tr className="font-regular py-1">
              <td className="px-2">2</td>
              <td className="px-4">Layanan</td>
              <td className="px-4">Jasa Pasang</td>
              <td className="px-4">128</td>
              <td className="px-4">128</td>
              <td className="px-4">25.000</td>
              <td className="px-4">3.205.000</td>
            </tr>
            <tr className="font-regular py-1">
              <td className="px-2">3</td>
              <td className="px-4">Layanan</td>
              <td className="px-4">Jasa Pengiriman</td>
              <td className="px-4">128</td>
              <td className="px-4">128</td>
              <td className="px-4">15.000</td>
              <td className="px-4">1.923.000</td>
            </tr>
          </tbody>
        </table>

        <div className="flex flex-row justify-between px-2">
          <div className="flex flex-col w-1/3 gap-1">
            <div>Catatan Transaksi : Tidak Ada</div>
            <div>Metode Pembayaran : DP 2</div>
            <div>Jenis Pembayaran : Transfer</div>
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
              {/* bold */}
              <div>Total</div>
              <div>10.769.500</div>
            </div>
            <div className="flex justify-between border-b border-neutral-600 pb-1">
              <div>DP 2 (40%)</div>
              <div>4.307.800</div>
            </div>
            <div className="flex justify-between">
              {/* bold */}
              <div>Sisa Tagihan</div>
              <div>6.461.700</div>
            </div>
          </div>
        </div>

        {/* tanda tangan */}
        <div className="flex flex-col justify-right items-end p-2">
          <div className="text-center flex flex-col">
          <div className='pt-3 pb-10'>Bandar Lampung, 14 Juni 2023</div>
          <div>Miahana</div>
          <div>Admin Keuangan</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default invoice;