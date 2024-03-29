import React, { useEffect, useState } from "react";
import styles from "./laporanpesanan.module.css";
import Link from "next/link";

type FormBayarProps = {
  onCloseModal?: () => void;
};

const FormBayar: React.FC<FormBayarProps> = (props) => {
  const subTotal = 6461700;
  const [pilihMetode, setPilihMetode] = useState<string>("lunas");
  const [pilihJenisBayar, setPilihJenisBayar] = useState<string>("cash");
  const [diskon, setDiskon] = useState<number>(0);
  const [totalBayar, setTotalBayar] = useState<number>(subTotal);
  const [cashPaid, setCashPaid] = useState<number>(0);
  const [change, setChange] = useState<number>(0);
  const [isValidCashPaid, setIsValidCashPaid] = useState<boolean>(true);

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

    const remainingamount = paid - totalBayar;
    setChange(remainingamount);

    setIsValidCashPaid(remainingamount <= 0);
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
              <p className={`${styles.label}`}>Sub Total Pesanan Anda: </p>
              <input
                type="text"
                value={formatRupiah(subTotal)}
                className={`text-blue-600 text-left w-fit ${styles.total}`}
                disabled
              />
            </div>

            <label className={`mb-1 ${styles.label}`}>
              Pilih Metode Pembayaran Anda!
              <div className="flex flex-row">
                <label className="group flex flex-row mr-3 text-gray-500">
                  <input
                    type="radio"
                    value="dp1"
                    className="mr-2"
                    checked={pilihMetode === "dp1"}
                    onChange={handleMetodeChange}
                    disabled
                  />
                  DP 1 (30%)
                </label>
                <label className="group flex flex-row mr-3 mb-1 text-gray-500">
                  <input
                    type="radio"
                    value="dp2"
                    className="mr-2"
                    checked={pilihMetode === "dp2"}
                    onChange={handleMetodeChange}
                    disabled
                  />
                  DP 2 (40%)
                </label>
                <label className="group flex flex-row mr-3 mb-1">
                  <input
                    type="radio"
                    value="dp3"
                    className="mr-2"
                    checked={pilihMetode === "dp3"}
                    onChange={handleMetodeChange}
                  />
                  DP 3 (30%)
                </label>
                <label className="group flex flex-row mb-1">
                  <input
                    type="radio"
                    value="lunas"
                    className="mr-2"
                    checked={pilihMetode === "lunas"}
                    onChange={handleMetodeChange}
                  />
                  Lunas
                </label>
              </div>
            </label>

            <label className={`${styles.label}`}>
              Pilih Jenis Pembayaran Anda!
              <div className="flex flex-row mb-1">
                <label className="group flex flex-row mr-3">
                  <input
                    type="radio"
                    value="cash"
                    className="mr-2"
                    checked={pilihJenisBayar === "cash"}
                    onChange={handleTipeBayarChange}
                  />
                  Cash
                </label>
                <label className="group flex flex-row">
                  <input
                    type="radio"
                    value="transfer"
                    className="mr-2"
                    checked={pilihJenisBayar === "transfer"}
                    onChange={handleTipeBayarChange}
                  />
                  Transfer
                </label>
              </div>
            </label>

            <div
              className={`mb-1 flex flex-row justify-between items-center ${styles.label}`}
            >
              <span>Diskon (nominal)</span>
              <input
                type="number"
                value={diskon}
                className="border border-gray-300 p-2"
                onChange={handleDiskonChange}
              />
            </div>

            <div
              className={`mb-1 flex flex-row justify-between ${styles.label}`}
            >
              <span className={`${styles.total}`}>Total Biaya</span>
              <input
                type="text"
                value={formatRupiah(totalBayar)}
                className="font-bold text-blue-600 text-right w-fit"
                disabled
              />
            </div>

            <div className={`mb-1 flex flex-col ${styles.label}`}>
              <span>Masukan uang pembayaran:</span>
              <input
                type="number"
                value={cashPaid}
                className={`w-full mr-2 border ${
                  isValidCashPaid ? "border-gray-300" : "border-red-500"
                } rounded-md p-2`}
                placeholder="Masukan Nominal"
                onChange={handleCashPaidChange}
                required
              />
              {!isValidCashPaid && (
                <p className="text-red-500">
                  Maaf, nominal uang yang dibayar kurang.
                </p>
              )}
            </div>

            {/* Kembalian */}
            <div className={`${styles.label}`}>
              <span>Kembalian:</span>
              <input
                type="text"
                className="w-full mr-2 border border-gray-300 rounded-md p-2"
                value={formatRupiah(change)}
                disabled
              />
            </div>

            {/* Choose File */}
            {pilihJenisBayar === "transfer" && (
              <div>
                <span className="sr-only">Choose File</span>
                <div className="container mt-2">
                  <input
                    type="file"
                    className={`text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-800 hover:file:bg-blue-300 ${styles.label}`}
                    required
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="justify-end flex mt-3">
          {isValidCashPaid ? (
            <Link
              href={"../laporanpesanan/rekaplunas"}
              className={`bg-blue-600 w-20 flex items-center justify-center h-8 rounded-md text-white ${styles.button}`}
            >
              Lanjut
            </Link>
          ) : (
            <button
              className={`bg-gray-400 w-20 h-8 rounded-md text-white cursor-not-allowed ${styles.button}`}
              disabled
            >
              Lanjut
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default FormBayar;
