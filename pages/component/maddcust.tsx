import React from "react";

// component modal Add Customer
function AddCustomer() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[500px] flex flex-col">
        <button className="text-white text-xl place-self-end">x</button>
        <div className="bg-white p-4 rounded-md">
          <h1 className="title font-bold text-2xl mb-3">Tambah Data</h1>
          <form action="">
            <div className="pb-2 items-center">
              {/* Field Nama Customer */}
              <label className="pb-1" htmlFor="namacustomer">
                Nama Customer
                <input
                  type="text"
                  className="rounded-lg w-full p-1 border border-gray-200"
                  placeholder="Masukan Nama Customer Baru"
                />
              </label>
            </div>
            <div className="pb-2 items-center">
              {/* Field No Handphone */}
              <label className="pb-1" htmlFor="phone">
                No Handphone
                <input
                  type="text"
                  className="rounded-lg w-full p-1 border border-gray-200"
                  placeholder="Masukan No Handphone Customer"
                />
              </label>
            </div>
            <div className="pb-4 items-center">
              {/* Field Alamat Pengirimsn */}
              <label className="pb-1" htmlFor="alamat">
                Alamat Pengiriman
                <input
                  type="text"
                  className="rounded-lg w-full p-1 border border-gray-200"
                  placeholder="Masukan Alamat Pengiriman Customer"
                />
              </label>
            </div>

            {/* button */}
            <div className="flex flex-cols justify-end gap-5">
              <button className="w-fit px-6 py-1.5 border-2 border-blue-700 rounded-md text-blue-700">
                Batal
              </button>
              <button className="w-fit px-6 py-1.5 bg-blue-700 rounded-md text-neutral-100">
                Simpan
              </button>
              {/* Masukkan link Halaman Masuk */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCustomer;
