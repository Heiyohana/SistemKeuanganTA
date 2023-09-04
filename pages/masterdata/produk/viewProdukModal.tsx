import React from "react";
import { IProduk } from "./produk.type";

type Props = {
  data: IProduk;
  onClose: () => void;
};

const viewProdukModal = (props: Props) => {
  const { data, onClose } = props;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[400px] h-max flex flex-col bg-white rounded-xl">
        <div className="p-6">
          <h1 className="font-bold text-lg">Details Produk</h1>
          <form>
            <div>
              <div className="pb-2">
                <label>Kategori :</label>
                <input
                  type="text"
                  // value={data.nama}
                  className="w-full p-2 border-2 border-gray-300 rounded-md"
                  placeholder={data.kategori}
                  //   onChange={onNamaChangeHnd}
                />
              </div>
              <div className="pb-2">
                <label>Nama Produk :</label>
                <input
                  type="text"
                  // value={data.nama}
                  className="w-full p-2 border-2 border-gray-300 rounded-md"
                  placeholder={data.nama}
                  //   onChange={onNamaChangeHnd}
                />
              </div>
              <div className="pb-2">
                <label>Ukuran :</label>
                <input
                  type="text"
                  // value={data.nama}
                  className="w-full p-2 border-2 border-gray-300 rounded-md"
                  placeholder={data.ukuran}
                  //   onChange={onNamaChangeHnd}
                />
              </div>
              <div className="pb-2">
                <label>Jumlah / m2 : </label> <br />
                <input
                  type="text"
                  // value={data.nohp}
                  className="w-full p-2 border-2 border-gray-300 rounded-md"
                  placeholder={`${data.jumlahm2}`}
                  //   onChange={onNohpChangeHnd}
                />
              </div>
              <div className="pb-2">
                <label>Harga / m2: </label> <br />
                <input
                  type="text"
                  // value={data.alamat}
                  className="w-full p-2 border-2 border-gray-300 rounded-md"
                  placeholder={`${data.hargam2}`}
                  //   onChange={onAlamatChangeHnd}
                />
              </div>
            </div>

            {/* Button */}
            <div className="place-items-end">
              <input
                type="button"
                value="Close"
                className="rounded-lg bg-white border-2 border-blue-500 text-blue-500 px-4 mr-3 py-1 cursor-pointer"
                onClick={onClose}
              />
              <input
                type="submit"
                value="Edit"
                className="rounded-lg text-white bg-blue-500 px-4 py-1 cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default viewProdukModal;
