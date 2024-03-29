import Head from "next/head";
import React, { useEffect, useState } from "react";
import NavSideBar from "@/pages/components/sidenavbar/staff";
import {
  faAddressBook,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormPesanan from "./formPesanan";
import {
  ICustomer,
  dummyCustomerList,
} from "@/pages/admin/masterdata/customer/customer.type";
import BookCustomer from "./bookCustomer";
import {
  IProduk,
  dummyProdukList,
} from "@/pages/admin/masterdata/produk/produk.type";
import FormBayar from "./formBayar";
import Modalwarnbook from "./modalwarnbook";
import styles from "./pemesanan.module.css";

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
  const [namaCust, setNamaCust] = useState("");
  const [noHp, setNoHp] = useState("");
  const [alamat, setAlamat] = useState("");
  // const router = useRouter();
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
  const orderNumber = 1; // ini nantinya parameter sudah berapa pesanan yang diterima pada hari itu
  const generateNoNota = (x: any) => {
    const formattedDate = x.toISOString().split("T")[0];
    const currentMonth = String(x.getMonth() + 1).padStart(2, "0");
    const currentYear = x.getFullYear().toString().substr(-2);
    const formattedNoNota = `KMS/${currentMonth}/${currentYear}/${orderNumber}`;
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

  // Form Pesanan handle open / no
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [isWarningOpen, setIsWarningOpen] = useState(false);
  const onTambahPesananClick = () => {
    if (isCustDataFilled) {
      setIsAddFormOpen(true); //ketika tombol add pesanan, modal form pesanan akan muncul
    } else {
      setIsWarningOpen(true);
    }
  };
  const onCloseFormPesanan = () => {
    setIsAddFormOpen(false); //ketika form pesanan di tutup, modal form pesanan akan tertutup
  };

  const onWarnClosebyOke = () => {
    setIsWarningOpen(false);
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

    // mereset input ketikan
    setNamaCust("");
    setNoHp("");
    setAlamat("");

    // Reset state pesanan menjadi array kosong
    setPesanan([]);
  };

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

  // state untuk melacak BookCustomer telah terisi atau belum
  const [isCustDataFilled, setisCustDataFilled] = useState(false);

  // fungsi untuk menandai bahwa BookCustomer telah terisi
  const markCustomerDatasAsFilled = () => {
    setisCustDataFilled(true);
  };
  useEffect(() => {
    if (namaCust !== "" && noHp !== "" && alamat !== "") {
      setisCustDataFilled(true);
    } else {
      setisCustDataFilled(false);
    }
  }, [namaCust, noHp, alamat]);

  // Mengisi Data Customer melalui inputan
  const handleInputChange = (label: string, value: string) => {
    switch (label) {
      case "Nama Customer":
        setNamaCust(value);
        break;
      case "No Handphone":
        setNoHp(value);
        break;
      case "Alamat Pengiriman":
        setAlamat(value);
        break;
      default:
        break;
    }
  };

  // Perintah format Rupiah
  const formatRupiah = (angka: number) => {
    const rupiah = "Rp " + angka.toLocaleString() + ",00,-";
    return rupiah;
  };

  return (
    // halaman transaksi untuk order / pemesanan
    <div className="relative flex h-screen">
      <Head>
        <title>Transaksi Pemesanan</title>
      </Head>
      <div className="w-screen h-full m-0 flex flex-row relative">
        {/* sisi kiri */}
        <NavSideBar />
        {/* Content / sisi kanan */}
        <div className="flex-grow right-0 justify-end p-5 bg-neutral-100">
          {/* atas */}
          <div className="flex flex-row justify-between">
            <div className="flex flex-col pb-5">
              <h1 className={`${styles.h1}`}>Pemesanan</h1>{" "}
              <h3 className={`${styles.h3}`}>Transaksi</h3>
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
                      <div
                        className={`${styles.section} border-b border-black pr-10 mb-2`}
                      >
                        Informasi Nota
                      </div>
                      <div
                        className={`${styles.text} w-full pb-2 justify-between flex flex-row items-center`}
                      >
                        <span className="flex">No Nota</span>
                        <input
                          type="text"
                          className="text-neutral-600 w-max bg-neutral-300 rounded-md p-2 py-1 mt-1"
                          value={noNota}
                          disabled // Agar tidak bisa diubah oleh pengguna
                        />
                      </div>
                      <div
                        className={`${styles.text} w-full pb-2 justify-between flex flex-row items-center`}
                      >
                        <span className="flex">Tanggal</span>
                        <input
                          type="text"
                          value={tanggalOtomatis}
                          onChange={(e) => setTanggalOtomatis(e.target.value)}
                          className="text-neutral-600 w-max bg-neutral-300 rounded-md p-2 py-1 mt-1"
                          disabled // Agar tidak bisa diubah oleh pengguna
                        />
                      </div>
                      <div
                        className={`${styles.text} w-full pb-2 justify-between flex flex-row items-center`}
                      >
                        <span className="flex">CS Desk</span>
                        <input
                          type="text"
                          value="Miayohana"
                          className="text-neutral-600 w-max bg-neutral-300 rounded-md p-2 py-1 mt-1"
                          disabled
                        />
                      </div>
                    </div>
                    {/* Kanan: Informasi Pemesan */}
                    <div className="w-2/5">
                      <div
                        className={`${styles.section} border-b border-black pr-10 mb-2`}
                      >
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
                                  <div
                                    className={`${styles.text} w-full pb-2 justify-between flex flex-row items-center`}
                                  >
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
                                      onChange={(e) =>
                                        handleInputChange(label, e.target.value)
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
                                  <div
                                    className={`${styles.text} w-full pb-2 justify-between flex flex-row items-center`}
                                  >
                                    <span className="flex mr-4">{label}</span>
                                    <input
                                      type="text"
                                      value={
                                        label === "Nama Customer"
                                          ? namaCust
                                          : label === "No Handphone"
                                          ? noHp
                                          : label === "Alamat Pengiriman"
                                          ? alamat
                                          : ""
                                      }
                                      onChange={(e) =>
                                        handleInputChange(label, e.target.value)
                                      }
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
          <div className={`${styles.section} border-b border-black pr-10 mb-2`}>
            Detail Pesanan
          </div>
          <div className="mt-3 flex flex-row items-center justify-between">
            <div
              className={`w-4/5 mr-3 rounded-lg py-2 bg-blue-100 p-3 text-blue-900 ${styles.total}`}
            >
              {totalBiayaKeseluruhan.toLocaleString()}
            </div>
            <button
              className={`w-1/5 py-2 bg-blue-600 rounded-lg text-white ${styles.button}`}
              onClick={onTambahPesananClick}
            >
              Tambah Pesanan
            </button>
          </div>

          {/* Tabel Hasil input data pesanan */}
          <div className="mt-3 w-full">
            <table className="text-left w-full">
              <thead className="bg-gray-200 items-center text-gray-800 border-gray-400 border-b-2 border-t-2 h-9">
                <tr className={`py-1 ${styles.thead}`}>
                  <th className="px-2">No.</th>
                  <th className="px-4">Kategori</th>
                  <th className="px-4">Nama Produk</th>
                  <th className="px-4">Jumlah</th>
                  <th className="px-4">Luas</th>
                  <th className="px-4">Harga Produk</th>
                  <th className="px-4">Total Biaya</th>
                  <th className="px-4">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white text-left h-9">
                {pesanan.length === 0 ? (
                  <tr>
                    <td colSpan={8} className={`text-center ${styles.tdtable}`}>
                      Customer belum ada memesan.
                    </td>
                  </tr>
                ) : (
                  pesanan.map((item, index) => (
                    <tr
                      className={`hover:bg-blue-100 p-2 border-blue-200 border table-auto ${styles.tdtable}`}
                    >
                      <td className="px-4 py-1">{index + 1}</td>
                      <td className="px-4 py-1">{item.kategori}</td>
                      <td className="px-4 py-1">{item.nama}</td>
                      <td className="px-4 py-1">{item.jumlahm2}</td>
                      <td className="px-4 py-1">{item.luas}</td>
                      <td className="px-4 py-1">
                        {item.hargam2.toLocaleString()}
                      </td>
                      <td className="px-4 py-1">
                        {item.totalBiaya.toLocaleString()}
                      </td>
                      <td className="px-4 py-1 items-center">
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
                        <button className="cursor pointer" value="Edit">
                          <FontAwesomeIcon
                            icon={faEdit}
                            className="text-md mr-2 text-lime-500"
                          />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Catatan Transaksi dan Button */}
          <div className="w-full flex flex-row items-top justify-between mt-3">
            {/* ini dibuat jadi input text box */}
            <textarea
              className={`items-top bg-white border-blue-300 border w-2/5 rounded-lg text-left p-2 pb-20 ${styles.text}`}
              placeholder="Catatan"
            />
            <div>
              <button
                className={`bg-red-500 w-20 h-10 mr-4 rounded-lg text-white ${styles.button}`}
                onClick={resetAllInputs}
              >
                Reset
              </button>
              <button
                className={`bg-blue-600 w-20 h-10 rounded-lg text-white ${styles.button}`}
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
            markPesananAsFilled={markCustomerDatasAsFilled}
          />
        )}
        {isBookCustOpen && (
          <BookCustomer
            list={customerList}
            onCustomerSelect={onCustomerSelect}
            markCustomerDataAsFilled={markCustomerDatasAsFilled}
          />
        )}

        {isFormBayarOpen && isCustDataFilled && (
          <FormBayar
            onCloseModal={onCloseFormBayarModal}
            subTotal={totalBiayaKeseluruhan}
          />
        )}
        {isWarningOpen && <Modalwarnbook onCloseModal={onWarnClosebyOke} />}
      </div>
    </div>
  );
};
export default orderretail;
