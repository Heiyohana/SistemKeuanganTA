import { IProduk } from "@/pages/admin/masterdata/produk/produk.type";
import React, { useState } from "react";
import styles from "./pemesanan.module.css";

type ProdukListProps = {
  list: IProduk[];
  tambahPesanan: (pesananBaru: IProduk) => void;
  onCloseModal?: () => void;
};

type Pesanan = {
  id: string;
  kategori: string;
  nama: string;
  jumlahm2: number;
  ukuran: string;
  luas: number;
  hargam2: number;
  totalBiaya: number;
};

const FormPesanan: React.FC<ProdukListProps> = (props) => {
  const { list, tambahPesanan } = props;
  const [selectedKategori, setSelectedKategori] = useState("");
  const [selectedProduk, setSelectedProduk] = useState("");
  const [inputJumlah, setInputJumlah] = useState(0);
  const [luasPaving, setLuasPaving] = useState(0);
  const [hasilHarga, setHasilHarga] = useState(0);

  const kategoriOptions = ["Layanan", "Materials"]; //Daftar Kategori

  const handleKategoriChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedKategori(e.target.value);
    setSelectedProduk("");
    setInputJumlah(0); // Reset Input Jumlah
    setLuasPaving(0);
  };

  const handleCloseModal = () => {
    if (props.onCloseModal) {
      props.onCloseModal();
    }
  };

  // Perhitungan harga
  const calculateHasilHarga = (
    luasPaving: number,
    selectedProdukData: IProduk | undefined
  ) => {
    if (selectedProdukData) {
      const hasil = luasPaving * selectedProdukData.hargam2;
      return Math.round(hasil);
    }
    return 0; //jika belum terisi
  };

  const produkOptions = selectedKategori
    ? list.filter((produk) => produk.kategori === selectedKategori)
    : list;

  const handleProdukChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newProduk = e.target.value;
    setSelectedProduk(newProduk);
    setInputJumlah(0); // Reset input jumlah
    setLuasPaving(0); // Reset luas paving
    setHasilHarga(0);
  };

  const handleJumlahChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const jumlah = parseInt(e.target.value);
    setInputJumlah(jumlah);

    // Cari produk yang sesuai berdasarkan selectedProduk
    const selectedProdukData = list.find(
      (produk) => produk.id === selectedProduk
    );

    // Jika produk ditemukan, hitung luas paving
    if (selectedProdukData) {
      const luas = jumlah / selectedProdukData.jumlahm2;
      // Batasi luasPaving menjadi dua angka desimal
      setLuasPaving(Math.round(luas));

      const hasilHarga = calculateHasilHarga(luas, selectedProdukData);
      setHasilHarga(hasilHarga);
    } else {
      // Jika produk tidak ditemukan, set luasPaving menjadi kosong
      setLuasPaving(0);
      setHasilHarga(0);
    }
  };

  const handleSubmit = () => {
    // Cari produk yang sesuai berdasarkan selectedProduk
    const produkTerpilih = list.find((produk) => produk.id === selectedProduk);

    // Buat pesanan baru dengan tipe IProduk
    const pesananBaru: Pesanan = {
      id: produkTerpilih?.id || "",
      kategori: selectedKategori,
      nama: produkTerpilih?.nama || "",
      jumlahm2: inputJumlah,
      ukuran: produkTerpilih?.ukuran || "",
      luas: luasPaving,
      hargam2: produkTerpilih?.hargam2 || 0,
      totalBiaya: hasilHarga as number, // Tambahkan hasil harga ke pesanan
    };

    // Panggil fungsi tambahPesanan dengan pesananBaru
    tambahPesanan(pesananBaru);

    // Tutup modal
    handleCloseModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[25%] flex flex-col mb-2 bg-neutral-50 p-5 rounded-md relative"
      >
        <h1 className={`${styles.title} mb-3`}>Form Pesanan</h1>
        {/* ikon X pada form pesanan */}
        <button
          className={`${styles.tombolx} cursor-pointer absolute top-2 right-4`}
          onClick={handleCloseModal}
        >
          &times;
        </button>

        {/* Daftar Kategori */}
        <div className={`flex flex-col mb-2 ${styles.label}`}>
          <span>Kategori</span>
          <select
            name="kategori"
            id="kategori"
            value={selectedKategori}
            onChange={handleKategoriChange}
            className="px-3 py-1 mt-1 border border-neutral-400"
            required
          >
            <option>Pilih Kategori</option>
            {kategoriOptions.map((kategori) => (
              <option value={kategori} key={kategori}>
                {kategori}
              </option>
            ))}
          </select>
        </div>

        {/* Nama Produk */}
        <div className={`flex flex-col mb-2 ${styles.label}`}>
          <span>Nama Produk</span>
          <select
            name="produk"
            id="produk"
            value={selectedProduk}
            onChange={handleProdukChange}
            className="px-3 py-1 mt-1 border border-neutral-400"
            required
          >
            <option value="">Pilih Produk</option>
            {produkOptions.map((produk) => (
              <option value={produk.id} key={produk.id}>
                {produk.nama}
              </option>
            ))}
          </select>
        </div>

        {/* Jumlah */}
        <div className={`flex flex-col mb-2`}>
          <span className={`${styles.label}`}>Jumlah</span>
          <span className={`${styles.note}`}>
            Materials input luas paving, layanan input jumlah jasa
          </span>
          <input
            type="number"
            placeholder="Jumlah"
            value={inputJumlah}
            onChange={handleJumlahChange}
            className={`rounded-md px-3 py-1 mt-1 border border-neutral-400 ${styles.label}`}
            required
          />
        </div>

        {/* Luas Paving */}
        <div className={`flex flex-col mb-2 ${styles.label}`}>
          <span>Luas Paving(m2)</span>
          <input
            type="text"
            value={luasPaving}
            placeholder="hasil luas paving"
            className="rounded-md px-3 py-1 mt-1 border border-neutral-400"
            readOnly
          />
        </div>

        {/* Button */}
        <button
          className={`bg-blue-600 w-20 h-8 rounded-md text-white mt-3 ${styles.button}`}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPesanan;
