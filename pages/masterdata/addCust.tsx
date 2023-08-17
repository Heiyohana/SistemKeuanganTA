import React, { useState } from "react";
import { ICustomer } from "./Customer.type";

type Props = {
  onBatalClickHnd: () => void;
  onSimpanClickHnd: (data: ICustomer) => void;
};

const AddCust = (props: Props) => {
  const [nama, setNama] = useState("");
  const [nohandphone, setNoHp] = useState("");
  const [alamat, setAlamat] = useState("");

  const { onBatalClickHnd } = props;
  const onNamaChangeHnd = (e: any) => {
    setNama(e.target.value);
  };

  const onNoHpChangeHnd = (e: any) => {
    setNoHp(e.target.value);
  };

  const onAlamatChangeHnd = (e: any) => {
    setAlamat(e.target.value);
  };

  const onSimpanClickHnd = (e: any) => {
    e.preventDefault();
    const data: ICustomer = {
      id: new Date().toJSON().toString(),
      nama: nama,
      nohandphone: nohandphone,
      alamat: alamat,
    };
    onSimpanClickHnd(data);
    onBatalClickHnd();
  };

  return (
    <div className="fixed inset-0 bg-transparent flex justify-center items-center">
      <div className="w-max flex flex-col p-2 pb-2 bg-white rounded-md">
        <h3>Tambah Data</h3>
        <form onSubmit={onSimpanClickHnd}>
          <div>
            <label htmlFor="">Nama: </label>
            <input
              type={nama}
              className="w-full p-2 bg-white rounded-sm mb-2"
              onChange={onNamaChangeHnd}
            />
          </div>
          <div>
            <label htmlFor="">No Handphone: </label>
            <input
              type={nohandphone}
              className="w-full p-2 bg-white rounded-sm mb-2"
              onChange={onNoHpChangeHnd}
            />
          </div>
          <div>
            <label htmlFor="">Alamat Pengiriman: </label>
            <input
              type={alamat}
              className="w-full p-2 bg-white rounded-sm mb-2"
              onChange={onAlamatChangeHnd}
            />
          </div>
          <div>
            <input
              type="button"
              value="Batal"
              className="rounded-lg bg-white border-2 border-blue-500 px-4 py-2 mr-2 cursor-pointer"
              onClick={onBatalClickHnd}
            />
            <input
              type="button"
              value="Simpan"
              className="rounded-lg bg-blue-500 text-white border-2 px-4 py-2 mr-2 cursor-pointer"
              onClick={onSimpanClickHnd}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCust;
