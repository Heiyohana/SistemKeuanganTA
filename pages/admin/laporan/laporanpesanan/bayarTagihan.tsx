import Link from "next/link";
import React, { useEffect, useState } from "react";

type BayarTagihanProps = {
  onCloseModal?: () => void;
};

const BayarTagihan: React.FC<BayarTagihanProps> = (props) => {
  const subTotal = 6461700;
  const [pilihMetode, setPilihMetode] = useState<string>("lunas");
  const [pilihJenisBayar, setPilihJenisBayar] = useState<string>("cash");
  const [diskon, setDiskon] = useState<number>(0);
  const [totalBayar, setTotalBayar] = useState<number>(subTotal);
  const [cashPaid, setCashPaid] = useState<number>(0);
  const [change, setChange] = useState<number>(0);

  useEffect(() => {
    calculateTotalBayar();
  }, [subTotal, pilihMetode, diskon]);

  const calculateTotalBayar = () => {
    let bayar = subTotal;
    if (pilihMetode === "dp1") {
      bayar *= 0.3;
    } else if (pilihMetode === "dp2") {
      bayar *= 0.4;
    } else if (pilihMetode === "dp3") {
      bayar *= 0.3;
    }

    bayar -= diskon;
    setTotalBayar(bayar);
  };

  const handleMetodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPilihMetode(event.target.value);
  };

  const handleTipeBayarChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPilihJenisBayar(event.target.value);
  };

  const handleDiskonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDiskon(Number(event.target.value));
  };

  const handleCashPaidChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const paid = Number(event.target.value);
    setCashPaid(paid);
    setChange(paid - totalBayar);
  };

  const handleCloseModal = () => {
    if (props.onCloseModal) {
      props.onCloseModal();
    }
  };

  // Perintah format Rupiah
  const formatRupiah = (angka: number) => {
    const rupiah = "Rp " + angka.toLocaleString() + ",00,-";
    return rupiah;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <form className="w-fit flex flex-col mb-2 bg-neutral-50 p-5 rounded-md relative">
        <div>
          {/* ikon X pada form pesanan */}
          <button
            className="text-black cursor-pointer text-2xl absolute top-2 right-4"
            onClick={handleCloseModal}
          >
            &times;
          </button>

          <div>
            <div className="mb-1 flex flex-col">
              <p className="font-semibold">Sub Total Pesanan Anda: </p>
              <input
                type="text"
                value={formatRupiah(subTotal)}
                className="font-semibold text-blue-600 text-left w-fit"
                disabled
              />
            </div>

            <label className="mb-1 font-semibold">
              Pilih Metode Pembayaran Anda!
              <div className="flex flex-row">
                <div className="flex flex-row mr-3 mb-1 text-gray-500">
                  <input
                    type="radio"
                    value="dp1"
                    className="mr-2 "
                    checked={true}
                    onChange={handleMetodeChange}
                    disabled
                  />
                  DP 1 (30%)
                </div>
                <div className="flex flex-row mr-3 mb-1 text-gray-500">
                  <input
                    type="radio"
                    value="dp2"
                    className="mr-2 "
                    checked={true}
                    onChange={handleMetodeChange}
                    disabled
                  />
                  DP 2 (40%)
                </div>
                <div className="flex flex-row mr-3 mb-1 text-gray-500">
                  <input
                    type="radio"
                    value="dp3"
                    className="mr-2 "
                    checked={true}
                    onChange={handleMetodeChange}
                    disabled
                  />
                  DP 3 (30%)
                </div>
                <div className="flex flex-row mb-1">
                  <input
                    type="radio"
                    value="lunas"
                    className="mr-2"
                    checked={pilihMetode === "lunas"}
                    onChange={handleMetodeChange}
                  />
                  Lunas
                </div>
              </div>
            </label>

            <label className="font-semibold">
              Pilih Jenis Pembayaran Anda!
              <div className="flex flex-row mb-1">
                <div className="flex flex-row mr-3">
                  <input
                    type="radio"
                    value="cash"
                    className="mr-2"
                    checked={pilihJenisBayar === "cash"}
                    onChange={handleTipeBayarChange}
                  />
                  Cash
                </div>
                <div className="flex flex-row">
                  <input
                    type="radio"
                    value="transfer"
                    className="mr-2"
                    checked={pilihJenisBayar === "transfer"}
                    onChange={handleTipeBayarChange}
                  />
                  Transfer
                </div>
              </div>
            </label>

            <div className="mb-1 flex flex-row justify-between items-center">
              <span>Diskon (nominal)</span>
              <input
                type="number"
                value={diskon}
                className="border border-gray-300 p-2 rounded-md"
                onChange={handleDiskonChange}
              />
            </div>

            <div className="flex flex-row justify-between mb-1">
              <span className="font-bold">Total Biaya</span>
              <input
                type="text"
                value={formatRupiah(totalBayar)}
                className="font-bold text-blue-600 text-right w-fit"
                disabled
              />
            </div>

            <div className="mb-1 flex flex-col">
              <span>Masukan uang pembayaran:</span>
              <input
                type="number"
                value={cashPaid}
                className="w-full mr-2 border border-gray-300 rounded-md p-2"
                placeholder="Masukan Nominal"
                onChange={handleCashPaidChange}
              />
            </div>

            {/* Kembalian */}
            <div className="mb-2">
              <span>Kembalian:</span>
              <input
                type="text"
                className="w-full mr-2 border border-gray-300 rounded-md p-2"
                value={formatRupiah(change)}
                disabled
              />
            </div>

            <span className="sr-only">Choose File</span>
            <div className="container mb-1">
              <input
                type="file"
                className="text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-800 hover:file:bg-blue-300 pb-3"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            className="bg-blue-600 w-20 h-8 rounded-md text-white font-semibold"
            onClick={handleCloseModal}
          >
            Lanjut
          </button>
        </div>
      </form>
    </div>
  );
};

export default BayarTagihan;
