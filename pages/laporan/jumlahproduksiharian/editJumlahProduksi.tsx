import React, { useEffect, useState } from "react";

type Props = {
  onKembaliBtnHnd: () => void;
};

const editJumlahProduksi = (props: Props) => {
  //Membuat Tanggal Live
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const LiveDate = currentDate.toLocaleString();

  //Handle Button Kembali
  const { onKembaliBtnHnd } = props;

  return (
    <div>
      <div>
        {/* atas */}
        <div className="flex flex-row justify-between">
          <div className="flex flex-col m-1 pb-3">
            <h1 className="title font-bold text-2xl">
              Pencatatan Jumlah Produksi
            </h1>
            <h3 className="text-base">Transaksi</h3>
          </div>
          {/* <HeadButton /> buttonnya kemunkinan berdiri sendiri2 */}
        </div>

        {/* form pencatatan */}
        <div className="px-4">
          <div className="pb-5 text-sm w-1/5">
            <div className="text-neutral-600 bg-neutral-300 rounded-md px-3 py-1 mt-1">
              {LiveDate}
            </div>
          </div>

          <div className="pb-5 text-sm w-1/3">
            Materials <br />
            <select className="bg-white rounded-md px-2 py-1 mt-1 w-2/3 border border-neutral-400">
              <option>Paving Bata</option>
              <option>Paving Bata</option>
              <option>Paving Bata</option>
              <option>Paving Bata</option>
              <option>Paving Bata</option>
              <option>Paving Bata</option>
            </select>
          </div>

          <div className="pb-5 text-sm w-full">
            Jumlah Produksi <br />
            <input
              className="rounded-md px-3 py-1 mt-1 w-2/3 border border-neutral-400"
              placeholder="Masukan jumlah produksi harian"
            />
          </div>

          <div className="pb-5 text-sm">
            Keterangan <br />
            <textarea
              className="rounded-md px-3 pt-1 pb-12 mt-1 w-2/3 border border-neutral-400"
              placeholder="Masukan Keterangan bila diperlukan"
            />
          </div>

          {/* Button */}
          <div className="pb-5 text-sm w-2/3 justify-right">
            <button
              className="bg-white w-20 h-8 mr-4 rounded-md text-blue-500 border border-blue-500 font-medium"
              onClick={onKembaliBtnHnd}
            >
              Kembali
            </button>
            <button className="bg-blue-600 w-20 h-8 rounded-md text-white font-semibold">
              Bayar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default editJumlahProduksi;
