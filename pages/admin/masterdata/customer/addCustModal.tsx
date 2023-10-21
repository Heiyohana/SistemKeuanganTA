import React, { useState } from "react";
import { ICustomer } from "./customer.type";
import styles from "./mastercustomer.module.css";

type Props = {
  onSubmitClickHnd: (data: ICustomer) => void;
  onBatalBtnHnd: () => void;
};
const addCustModal = (props: Props) => {
  const [nama, setNama] = useState("");
  const [nohp, setnoHp] = useState("");
  const [alamat, setAlamat] = useState("");

  const { onBatalBtnHnd, onSubmitClickHnd } = props;

  const onNamaChangeHnd = (e: any) => {
    setNama(e.target.value);
  };

  const onNohpChangeHnd = (e: any) => {
    setnoHp(e.target.value);
  };
  const onAlamatChangeHnd = (e: any) => {
    setAlamat(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    const data: ICustomer = {
      id: new Date().toJSON().toString(),
      nama: nama,
      nohp: nohp,
      alamat: alamat,
    };
    onSubmitClickHnd(data);
    onBatalBtnHnd(); //Setelah submit akan otomatis ke close
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[400px] h-max flex flex-col bg-white rounded-xl">
        <div className="p-6">
          <h1 className={`${styles.titleModal}`}>Tambah Data</h1>
          <form onSubmit={onSubmitBtnClickHnd}>
            {/* ... Form inputs ... */}
            <div>
              <div className={`${styles.label} pb-2`}>
                <label>Nama Customer :</label>
                <input
                  type="text"
                  value={nama}
                  className="w-full p-2 border-2 border-gray-300 rounded-md"
                  placeholder=""
                  onChange={onNamaChangeHnd}
                />
              </div>
              <div className={`${styles.label} pb-2`}>
                <label>No Handphone : </label> <br />
                <input
                  type="text"
                  value={nohp}
                  className="w-full p-2 border-2 border-gray-300 rounded-md"
                  onChange={onNohpChangeHnd}
                />
              </div>
              <div className={`${styles.label} pb-2`}>
                <label>Alamat Pengiriman: </label> <br />
                <input
                  type="text"
                  value={alamat}
                  className="w-full p-2 border-2 border-gray-300 rounded-md"
                  onChange={onAlamatChangeHnd}
                />
              </div>
            </div>

            {/* Button */}
            <div className={`place-items-end ${styles.button}`}>
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

export default addCustModal;
