import React from 'react';
import styles from "./viewBukti.module.css";

interface ViewBuktiProps {
  file: string | null;
  onCloseModal?: () => void;
}

// { noNota, onClose }
const index: React.FC<ViewBuktiProps> = ( { file, onCloseModal } ) => {
  if (file === null) {
    // Handle the case where file is null, you can display a message or do something else
    return null; // or a message or an alternative content
  }

  return (
    // Menampilkan data file yang ada pada laporanPesanan.type.tsx dalam bentuk modal ketika view pada halaman laporan pesanan diklik
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[200] flex flex-col bg-neutral-50 p-7 rounded-md items-center justify-center relative">
        <button
          className={`${styles.tombolx} cursor-pointer absolute top-1 right-2`}
          onClick={onCloseModal}
        >
          &times;
        </button>
        {/* Image */}
        {/* Menampilkan gambar sesuai dengan file yang ada dalam laporanpesanan.type */}
        <img src={`${file}`} alt="Bukti" width={200} height="auto" />
      </div>
    </div>
  );
}

export default index;