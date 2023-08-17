import React, { useState } from "react";
import { ICustomer } from "./Customer.type";

type Props = {
  data: ICustomer;
  onBatalClickHnd: () => void;
  onUpdateClickHnd: (data: ICustomer) => void;
};

const editCust = (props: Props) => {
  const { data, onBatalClickHnd, onUpdateClickHnd } = props;
  const [nama, setNama] = useState(data.nama);
  const [nohandphone, setNoHp] = useState(data.nohandphone);
  const [alamat, setAlamat] = useState(data.alamat);

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
    const updatedData = {
      id: data.id,
      nama: nama,
      nohandphone: nohandphone,
      alamat: alamat,
    };
    onUpdateClickHnd(updatedData);
    onBatalClickHnd();
  };

  return (
    <div className="items-center justify-center bg-white">
      <div>
        <h3 className="font-bold text-center">Edit Data Customer</h3>
      </div>
      <form onSubmit={onSimpanClickHnd} className="justify-center items-center">
        {" "}
        <div>
          <label htmlFor="">Nama : </label>
          <input
            type={nama}
            className="w-full p-2 border border-gray-300 rounded-sm mb-2"
            onChange={onNamaChangeHnd}
          />
        </div>
        <div>
          <label htmlFor="">No Hp : </label>
          <input
            type={nohandphone}
            className="w-full p-2 border border-gray-300 rounded-sm mb-2"
            onChange={onNoHpChangeHnd}
          />
        </div>
        <div>
          <label htmlFor="">Alamat : </label>
          <input
            type={alamat}
            className="w-full p-2 border border-gray-300 rounded-sm mb-2"
            onChange={onAlamatChangeHnd}
          />
        </div>
        {/* Button */}
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
            className="rounded-lg bg-white border-2 border-blue-500 px-4 py-2 mr-2 cursor-pointer"
            onClick={() => onUpdateClickHnd}
          />
        </div>
      </form>
    </div>
  );
};

export default editCust;
