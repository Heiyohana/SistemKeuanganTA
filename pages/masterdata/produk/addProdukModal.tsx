import React, { useState } from "react";
import { IProduk } from "./produk.type";

type Props = {
  onBatalBtnHnd: () => void;
  onSubmitClickHnd: (data: IProduk) => void;
};
const addProdukModal = (props: Props) => {
  const [kategori, setKategori] = useState("");
  const [nama, setNama] = useState("");
  const [ukuran, setUkuran] = useState("");
  const [jumlahm2, setJumlahm2] = useState<number | string>(""); // Use union type
  const [hargam2, setHargam2] = useState<number | string>(""); // Use union type

  const { onBatalBtnHnd, onSubmitClickHnd } = props;

  const onNamaChangeHnd = (e: any) => {
    setNama(e.target.value);
  };

  const onKategoriCHangeHnd = (e: any) => {
    setKategori(e.target.value);
  };
  const onUkuranChangeHnd = (e: any) => {
    setUkuran(e.target.value);
  };

  const onJumlahm2ChangeHnd = (e: any) => {
    setJumlahm2(e.target.value);
  };

  const onHargam2ChangeHnd = (e: any) => {
    setHargam2(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: React.FormEvent) => {
    e.preventDefault();
    const data: IProduk = {
      id: new Date().toJSON().toString(),
      kategori,
      nama,
      ukuran,
      jumlahm2: typeof jumlahm2 === "number" ? jumlahm2 : parseFloat(jumlahm2),
      hargam2: typeof hargam2 === "number" ? hargam2 : parseFloat(hargam2),
    };
    onSubmitClickHnd(data);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[400px] h-max flex flex-col bg-white rounded-xl">
        <div className="p-6">
          <h1 className="font-bold text-lg">Tambah Data</h1>
          <form onSubmit={onSubmitBtnClickHnd}>
            {/* ... Form inputs ... */}
            <div>
              <label>Kategori :</label>
              <input
                type="text"
                value={kategori}
                onChange={onKategoriCHangeHnd}
                className="w-full p-2 border-2 border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label>Nama :</label>
              <input
                type="text"
                value={nama}
                onChange={onNamaChangeHnd}
                // onChange={(e) => setNama(e.target.value)}
                className="w-full p-2 border-2 border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label>Ukuran :</label>
              <input
                type="text"
                value={ukuran}
                onChange={onUkuranChangeHnd}
                className="w-full p-2 border-2 border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label>Jumlah :</label>
              <input
                type="text"
                value={jumlahm2}
                onChange={onJumlahm2ChangeHnd}
                className="w-full p-2 border-2 border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label>Harga :</label>
              <input
                type="text"
                value={hargam2}
                onChange={onHargam2ChangeHnd}
                className="w-full p-2 border-2 border-gray-300 rounded-md"
              />
            </div>

            {/* Button */}
            <div className="place-items-end">
              <input
                type="button"
                value="Batal"
                className="rounded-lg bg-white border-2 border-blue-500 text-blue-500 px-4 mr-3 py-1 cursor-pointer"
                onClick={onBatalBtnHnd}
              />
              <input
                type="submit"
                value="Simpan"
                className="rounded-lg text-white bg-blue-500 px-4 py-1 cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default addProdukModal;
