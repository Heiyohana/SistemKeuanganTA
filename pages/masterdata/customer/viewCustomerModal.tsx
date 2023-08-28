import React, { useState } from "react";
import { ICustomer } from "./customer.type";
import EditCustomer from "./editCustomer";

type Props = {
  data: ICustomer;
  onBatalBtnHnd: () => void;
  onUpdateClickHnd: (data: ICustomer) => void;
};

const viewCustomerModal = (props: Props) => {
  const { data, onBatalBtnHnd, onUpdateClickHnd } = props;

  const [nama, setNama] = useState(data.nama);
  const [nohp, setnoHp] = useState(data.nohp);
  const [alamat, setAlamat] = useState(data.alamat);

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
    const updateData: ICustomer = {
      id: data.id,
      nama: data.nama,
      nohp: data.nohp,
      alamat: data.alamat,
    };
    onUpdateClickHnd(updateData);
    onBatalBtnHnd();
  };

  const [showViewModal, setShowViewModal] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[400px] h-max flex flex-col bg-white rounded-xl">
        <div className="p-6">
          <h1 className="font-bold text-lg">Details Customer</h1>
          <form>
            <div>
              <div className="pb-2">
                <label>Nama Customer :</label>
                <input
                  type="text"
                  // value={nama}
                  className="w-full p-2 border-2 border-gray-300 rounded-md"
                  placeholder={data.nama}
                  onChange={onNamaChangeHnd}
                />
              </div>
              <div className="pb-2">
                <label>No Handphone : </label> <br />
                <input
                  type="text"
                  // value={nohp}
                  className="w-full p-2 border-2 border-gray-300 rounded-md"
                  placeholder={data.nohp}
                  onChange={onNohpChangeHnd}
                />
              </div>
              <div className="pb-2">
                <label>Alamat Pengiriman: </label> <br />
                <input
                  type="text"
                  // value={alamat}
                  className="w-full p-2 border-2 border-gray-300 rounded-md"
                  placeholder={data.alamat}
                  onChange={onAlamatChangeHnd}
                />
              </div>
            </div>

            {/* Button */}
            <div className="place-items-end">
              <input
                type="button"
                value="Close"
                className="rounded-lg bg-white border-2 border-blue-500 text-blue-500 px-4 mr-3 py-1 cursor-pointer"
                onClick={onBatalBtnHnd}
              />
              <input
                type="submit"
                value="Edit"
                className="rounded-lg text-white bg-blue-500 px-4 py-1 cursor-pointer"
                onClick={() => onSubmitBtnClickHnd(data)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default viewCustomerModal;
