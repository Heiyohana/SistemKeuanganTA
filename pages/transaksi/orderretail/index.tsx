import Head from "next/head";
import React, { useEffect, useState } from "react";
import NavSideBar from "../../component/sidenavbar";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormPesanan from "./formPesanan";
import {
  ICustomer,
  dummyCustomerList,
} from "@/pages/masterdata/customer/customer.type";
import BookCustomer from "./bookCustomer";
import formPesanan from "./formPesanan";

const orderretail = () => {
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
          {/* <HeadButton /> buttonnya kemungkinan berdiri sendiri2 */}
        </div>

        {/* Section Input Data */}
        <div className="w-full m-1">
          <div className="flex flex-row items-top justify-left">
            <div className="w-full mr-8">
              <form className="flex flex-col">
                {/* Atas */}
                <div className="flex flex-row">
                  {/* Kiri: Informasi Nota */}
                  <div className="w-1/3 mr-8">
                    <div className="font-bold border-b border-black pr-10 mb-2">
                      Informasi Pemesan
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
                          {["Nama Customer", "No Handphone", "Alamat Pengiriman"].map((label) => {
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
                          {["Nama Customer", "No Handphone", "Alamat Pengiriman"].map((label)=>{
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
                            )
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
            nominal
          </div>
          <button className="w-1/5 py-2 bg-blue-600 rounded-lg text-white">
            add pesanan
          </button>
        </div>

        {/* Tabel Hasil input data pesanan */}

        {/* Catatan Transaksi dan Button */}
        <div className="w-full flex flex-row items-top justify-between mt-2">
          {/* ini dibuat jadi input text box */}
          <input
            className="items-top bg-white border-blue-300 border w-2/5 rounded-lg text-left p-2 pb-20"
            placeholder="Catatan"
          />
          <div className="w-1/5">
            <button className="bg-red-500 w-20 h-10 mr-4 rounded-lg text-white font-semibold">
              Reset
            </button>
            <button className="group bg-blue-600 w-20 h-10 rounded-lg text-white font-semibold">
              Bayar
            </button>
          </div>
        </div>
      </div>
      {/* <FormPesanan list={customerList}/> */}
      {isBookCustOpen && (
        <BookCustomer list={customerList} onCustomerSelect={onCustomerSelect} />
      )}
    </div>
  );
};
export default orderretail;
