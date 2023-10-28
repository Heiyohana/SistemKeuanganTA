import React from 'react';
import { dummyLaporanPesanan } from '@/pages/admin/laporan/laporanpesanan/laporanPesanan.type';

// { noNota, onClose }
const index = ( {file } ) => {
  // const laporanData = dummyLaporanPesanan.find((data) => data.noNota === noNota);
  return (
    // Menampilkan data file yang ada pada laporanPesanan.type.tsx dalam bentuk modal ketika view pada halaman laporan pesanan diklik
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <div className='w-[200] flex flex-col bg-neutral-50 p-7 rounded-md items-center justify-center'>
          {/* Image */}
          {/* Menampilkan gambar sesuai dengan file yang ada dalam laporanpesanan.type */}
          <img src={file} alt="Bukti" />
        </div>
    </div>
  )
}

export default index