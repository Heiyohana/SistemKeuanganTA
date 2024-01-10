import React from "react";
import { IProduk } from "./produk.type";
import styles from "./materproduk.module.css";

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
          <h1 className={`${styles.titleModal}`}>Details Produk</h1>
          <form>
            <div>
              <div className={`${styles.label} pb-2`}>
                <label>Kategori :</label>
                <input
                  type="text"
                  className="w-full p-2 border-2 border-gray-300 rounded-md"
                  placeholder={data.kategori}
                />
              </div>
              <div className={`${styles.label} pb-2`}>
                <label>Nama Produk :</label>
                <input
                  type="text"
                  className="w-full p-2 border-2 border-gray-300 rounded-md"
                  placeholder={data.nama}
                />
              </div>
              <div className={`${styles.label} pb-2`}>
                <label>Ukuran :</label>
                <input
                  type="text"
                  className="w-full p-2 border-2 border-gray-300 rounded-md"
                  placeholder={data.ukuran}
                />
              </div>
              <div className={`${styles.label} pb-2`}>
                <label>Jumlah / m2 : </label> <br />
                <input
                  type="text"
                  className="w-full p-2 border-2 border-gray-300 rounded-md"
                  placeholder={`${data.jumlahm2}`}
                />
              </div>
              <div className={`${styles.label} pb-2`}>
                <label>Harga / m2: </label> <br />
                <input
                  type="text"
                  className="w-full p-2 border-2 border-gray-300 rounded-md"
                  placeholder={`${data.hargam2}`}
                />
              </div>
            </div>

            {/* Button */}
            <div className={`place-items-end ${styles.button}`}>
              <input
                type="button"
                value="Close"
                className="rounded-lg w-20 h-8 bg-white border-2 border-blue-500 text-blue-500 px-4 mr-3 py-1 cursor-pointer"
                onClick={onClose}
              />
              <input
                type="submit"
                value="Edit"
                className="rounded-lg w-20 h-8 text-white bg-blue-500 px-4 py-1 cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default viewProdukModal;
