import Head from "next/head";
import React, { useEffect, useState } from "react";
import NavSideBar from "../../component/sidenavbar";
import { faAddressBook, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormPesanan from "./formPesanan";
import {
  ICustomer,
  dummyCustomerList,
} from "@/pages/masterdata/customer/customer.type";
import BookCustomer from "./bookCustomer";
import { IProduk, dummyProdukList } from "@/pages/masterdata/produk/produk.type";
import FormBayar from "./formBayar";

type Pesanan = {
  id: string;
  kategori: string;
  nama: string;
  jumlahm2: number;
  luas: number;
  ukuran: string;
  hargam2: number;
  totalBiaya: number;
};

const orderretail = () => {
  // Deklarasi data produk
  const [produkList, setProdukList] = useState(dummyProdukList as IProduk[]);
  const [tanggalOtomatis, setTanggalOtomatis] = useState("");
  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];
    setTanggalOtomatis(formattedDate);
  }, []);

  // Pembuatan Nomor Nota Otomatis
  const [noNota, setNoNota] = useState(""); // State untuk nomor nota

  // Fungsi untuk menghasilkan nomor nota otomatis
  const generateNoNota = (x: any) => {
    const formattedDate = x.toISOString().split("T")[0];
    const currentMonth = String(x.getMonth() + 1).padStart(2, "0");
    const currentYear = x.getFullYear().toString().substr(-2);
    const formattedNoNota = `KMS/${currentMonth}/${currentYear}`;
    setNoNota(formattedNoNota);
  };

  useEffect(() => {
    const currentDate = new Date();
    generateNoNota(currentDate);
  }, []);

  //Mengatur Data Customer
  const [customerList, setCustomerList] = useState(
    dummyCustomerList as ICustomer[]
  );
  const [isBookCustOpen, setIsBookCustOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<ICustomer | null>(
    null
  );

  // Mengatur klik ikon Book Customer
  const onChooseCustHnd = () => {
    setIsBookCustOpen(true);
  };

  // Menutup Modal ketika telah memilih customer
  const onCustomerSelect = (customer: ICustomer) => {
    setIsBookCustOpen(false);
    setSelectedCustomer(customer);
  };

  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const onAddModalOpen = () => {
    setIsAddFormOpen(true); //ketika tombol add pesanan, modal form pesanan akan muncul
  };
  const onCloseFormPesanan = () => {
    setIsAddFormOpen(false); //ketika form pesanan di tutup, modal form pesanan akan tertutup
  };

  // Kontrol Modal Form Pesanan
  const [pesanan, setPesanan] = useState<Pesanan[]>([]);
  // Menangani penambahan pesanan dari FormPesanan
  // Fungsi tambahPesanan
  const tambahPesanan = (pesananBaru: IProduk) => {
    // Cari produk yang sesuai berdasarkan selectedProduk
    const produkTerpilih = produkList.find(
      (produk) => produk.id === pesananBaru.id
    );

    const totalHarga = pesananBaru.luas * pesananBaru.hargam2;

    // Buat objek Pesanan baru dengan totalBiaya
    const pesananBaruDenganTotal: Pesanan = {
      id: pesananBaru.id,
      kategori: pesananBaru.kategori,
      nama: pesananBaru.nama,
      jumlahm2: pesananBaru.jumlahm2,
      ukuran: pesananBaru.ukuran,
      luas: pesananBaru.luas,
      hargam2: pesananBaru.hargam2,
      totalBiaya: totalHarga,
    };

    // Tambahkan pesananBaru ke state pesanan
    setPesanan([...pesanan, pesananBaruDenganTotal]);
  };

  // Mengatur fungsi untuk menghapus pesanan
  const onDeletePesanan = (index: number) => {
    const updatedPesanan = [...pesanan];
    updatedPesanan.splice(index, 1);
    setPesanan(updatedPesanan);
  };

  // State Biaya Keseluruhan
  const [totalBiayaKeseluruhan, setTotalBiayaKeseluruhan] = useState<number>(0);

  // Perhitungan Biaya Keseluruhan
  const calculateTotalBiaya = () => {
    let totalBiaya = 0;
    pesanan.forEach((item) => {
      totalBiaya += item.totalBiaya;
    });
    return totalBiaya;
  };

  useEffect(() => {
    const totalBiaya = calculateTotalBiaya();
    setTotalBiayaKeseluruhan(totalBiaya);
  }, [pesanan]);

  // Fungsi untuk mereset semua input
  const resetAllInputs = () => {
    // Reset state untuk nomor nota
    generateNoNota(new Date());

    // Reset state tanggal otomatis
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];
    setTanggalOtomatis(formattedDate);

    // Reset state selectedCustomer menjadi null
    setSelectedCustomer(null);

    // Reset state pesanan menjadi array kosong
    setPesanan([]);
  };

  // Handle Form Bayar
  const [isFormBayarOpen, setIsFormBayarOpen] = useState(false);

  // Membuka Form Bayar
  const openFormBayarModal = () => {
    setIsFormBayarOpen(true);
  }

  // Menutup Form Bayar
  const onCloseFormBayarModal = () => {
    setIsFormBayarOpen(false);
  }

  return (
    // halaman transaksi untuk order / pemesanan
    <div className="w-screen h-full m-0 flex container">
      <Head>
        <title>Transaksi Order Retail</title>
      </Head>
      <NavSideBar />

      {/* Content */}
      <div className="absolute h-full w-4/5 right-0 justify-end p-5 bg-neutral-100 text-sm">
        {/* atas */}
        <div className="flex flex-row justify-between">
          <div className="flex flex-col m-1 pb-3">
            <h1 className="title font-bold text-2xl">Order Retail</h1>{" "}
            <h3 className="text-base">Transaksi</h3>
          </div>
        </div>

        {/* Section Input Data */}
        <div className="w-full m-1">
          <div className="flex flex-row items-top justify-left">
            <div className="w-full mr-8">
              <form
                className="flex flex-col"
                // onSubmit={onSubmitClickHnd}
              >
                {/* Atas */}
                <div className="flex flex-row">
                  {/* Kiri: Informasi Nota */}
                  <div className="w-1/3 mr-8">
                    <div className="font-bold border-b border-black pr-10 mb-2">
                      Informasi Nota
                    </div>
                    <div className="w-full pb-2 text-sm justify-between flex flex-row items-center">
                      <span className="flex">No Nota</span>
                      <input
                        type="text"
                        className="text-neutral-600 w-max bg-neutral-300 rounded-md p-2 py-1 mt-1"
                        value={noNota}
                        disabled // Agar tidak bisa diubah oleh pengguna
                      />
                    </div>
                    <div className="w-full pb-2 text-sm justify-between flex flex-row items-center">
                      <span className="flex">Tanggal</span>
                      <input
                        type="text"
                        value={tanggalOtomatis}
                        onChange={(e) => setTanggalOtomatis(e.target.value)}
                        className="text-neutral-600 w-max bg-neutral-300 rounded-md p-2 py-1 mt-1"
                        disabled // Agar tidak bisa diubah oleh pengguna
                      />
                    </div>
                    <div className="w-full pb-2 text-sm justify-between flex flex-row items-center">
                      <span className="flex">CS Desk</span>
                      <input
                        type="text"
                        value="Miahana"
                        className="text-neutral-600 w-max bg-neutral-300 rounded-md p-2 py-1 mt-1"
                        disabled
                      />
                    </div>
                  </div>
                  {/* Kanan: Informasi Pemesan */}
                  <div className="w-2/5">
                    <div className="font-bold border-b border-black pr-10 mb-2">
                      Informasi Pemesan
                    </div>

                    {/* Pilih Data Customer */}
                    <div className="justify-between flex flex-row ">
                      {/* Ketika nilai null atau sudah data customer telah terpilih */}
                      {selectedCustomer ? (
                        <div>
                          {[
                            "Nama Customer",
                            "No Handphone",
                            "Alamat Pengiriman",
                          ].map((label) => {
                            return (
                              <div key={label}>
                                <div className="w-full pb-2 text-sm justify-between flex flex-row items-center">
                                  <span className="flex mr-4">{label}</span>
                                  <input
                                    type="text"
                                    value={
                                      label === "Nama Customer"
                                        ? selectedCustomer.nama
                                        : label === "No Handphone"
                                        ? selectedCustomer.nohp
                                        : label === "Alamat Pengiriman"
                                        ? selectedCustomer.alamat
                                        : ""
                                    }
                                    className="w-max bg-white border border-neutral-200 rounded-md p-2 py-1 mt-1"
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div>
                          {[
                            "Nama Customer",
                            "No Handphone",
                            "Alamat Pengiriman",
                          ].map((label) => {
                            return (
                              <div key={label}>
                                <div className="w-full pb-2 text-sm justify-between flex flex-row items-center">
                                  <span className="flex mr-4">{label}</span>
                                  <input
                                    type="text"
                                    value=""
                                    className="w-max bg-white border border-neutral-200 rounded-md p-2 py-1 mt-1"
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                      {/* Ikon untuk Book Customer */}
                      <FontAwesomeIcon
                        icon={faAddressBook}
                        className="text-2xl cursor-pointer mt-1 ml-2"
                        onClick={onChooseCustHnd}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Section Detail Pesanan */}
        <div className="font-bold text-sm border-b border-black pr-10">
          Detail Pesanan
        </div>
        <div className="mt-3 flex flex-row items-center justify-between">
          <div className="w-4/5 mr-3 rounded-lg py-2 bg-blue-100 p-3 font-bold text-blue-900">
            {totalBiayaKeseluruhan.toLocaleString()}
          </div>
          <button
            className="w-1/5 py-2 bg-blue-600 rounded-lg text-white"
            onClick={onAddModalOpen}
          >
            Tambah Pesanan
          </button>
        </div>

        {/* Tabel Hasil input data pesanan */}
        <div className="mt-3 w-full">
          <table className="text-left w-full">
            <thead className="bg-gray-200 items-center text-gray-800 border-gray-400 border-b-2 border-t-2 h-9">
              <tr className="font-medium py-1">
                <td className="px-2">No.</td>
                <td className="px-4">Kategori</td>
                <td className="px-4">Nama Produk</td>
                <td className="px-4">Jumlah</td>
                <td className="px-4">Luas</td>
                <td className="px-4">Harga Produk</td>
                <td className="px-4">Total Biaya</td>
                <td className="px-4">Action</td>
              </tr>
            </thead>
            <tbody className="bg-white text-left h-9">
              {pesanan.map((item, index) => (
                <tr className="hover:bg-blue-100 p-2 border-blue-200 border table-auto">
                  <td className="px-4 py-1 font-regular">{index + 1}</td>
                  <td className="px-4 py-1 font-regular">{item.kategori}</td>
                  <td className="px-4 py-1 font-regular">{item.nama}</td>
                  <td className="px-4 py-1 font-regular">{item.jumlahm2}</td>
                  <td className="px-4 py-1 font-regular">{item.luas}</td>
                  <td className="px-4 py-1 font-regular">{item.hargam2}</td>
                  <td className="px-4 py-1 font-regular">{item.totalBiaya}</td>
                  <td className="px-4 py-1 font-medium items-center">
                    <button
                      className="cursor-pointer"
                      value="Delete"
                      onClick={() => onDeletePesanan(index)}
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="text-md mr-2 text-red-500"
                      />
                    </button>
                    <button
                      className="cursor pointer"
                      value="Edit"
                      // onClick={() => viewDetails(customer)}
                    >
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="text-md mr-2 text-lime-500"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Catatan Transaksi dan Button */}
        <div className="w-full flex flex-row items-top justify-between mt-2">
          {/* ini dibuat jadi input text box */}
          <input
            className="items-top bg-white border-blue-300 border w-2/5 rounded-lg text-left p-2 pb-20"
            placeholder="Catatan"
          />
          <div className="w-1/5">
            <button
              className="bg-red-500 w-20 h-10 mr-4 rounded-lg text-white font-semibold"
              onClick={resetAllInputs}
            >
              Reset
            </button>
            <button
              className="group bg-blue-600 w-20 h-10 rounded-lg text-white font-semibold"
              onClick={openFormBayarModal}
            >
              Bayar
            </button>
          </div>
        </div>
      </div>
      {isAddFormOpen && (
        <FormPesanan
          list={produkList}
          onCloseModal={onCloseFormPesanan}
          tambahPesanan={tambahPesanan}
        />
      )}
      {isBookCustOpen && (
        <BookCustomer list={customerList} onCustomerSelect={onCustomerSelect} />
      )}

      {isFormBayarOpen && (
        <FormBayar
          // onCloseModal={onCloseFormBayarModal}
          subTotal={totalBiayaKeseluruhan}
        />
      )}
    </div>
  );
};
export default orderretail;