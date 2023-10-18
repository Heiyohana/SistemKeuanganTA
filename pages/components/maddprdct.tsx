import React from "react";

// component modal Add Product
function AddProduct() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[500px] flex flex-col">
        <button className="text-white text-xl place-self-end">x</button>
        <div className="bg-white p-4 rounded-md">
          <h1 className="title font-bold text-2xl mb-3">Tambah Data</h1>
          <form action="">
            <div className="pb-2 items-center">
              {/* Field Kategori */}
              <label className="pb-1" htmlFor="kategori">
                Kategori
                <input
                  type="text"
                  className="rounded-lg w-full p-1 border border-gray-200"
                  placeholder="Masukan Kategori Baru"
                />
              </label>
            </div>
            <div className="pb-2 items-center">
              {/* Field Nama Produk */}
              <label className="pb-1" htmlFor="namaproduct">
                Nama Produk
                <input
                  type="text"
                  className="rounded-lg w-full p-1 border border-gray-200"
                  placeholder="Masukan Nama Produk Baru"
                />
              </label>
            </div>
            <div className="pb-2 items-center">
              {/* Field Ukuran Produk */}
              <label className="pb-1" htmlFor="ukuran">
                Ukuran Produk
                <input
                  type="text"
                  className="rounded-lg w-full p-1 border border-gray-200"
                  placeholder="Masukan Ukuran Produk Baru"
                />
              </label>
            </div>
            <div className="pb-2 items-center">
              {/* Field Jumlah per meter 2 */}
              <label className="pb-1" htmlFor="Jumlah/m2">
                Jumlah Per Luas
                <input
                  type="text"
                  className="rounded-lg w-full p-1 border border-gray-200"
                  placeholder="Masukan Jumlah yang didapat per m2"
                />
              </label>
            </div>
            <div className="pb-2 items-center">
              {/* Field Jumlah Harga */}
              <label className="pb-1" htmlFor="Jumlah/m2">
                Harga
                <input
                  type="text"
                  className="rounded-lg w-full p-1 border border-gray-200"
                  placeholder="Masukan Harga"
                />
              </label>
            </div>

            {/* button */}
            <div className="flex flex-cols py-4 justify-end gap-5">
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

export default AddProduct;
