import React, { useState } from "react";
import { ICustomer } from "./Customer.type";
import EditCust from "./editCust";

type Props = {
  onClose: () => void;
  data: ICustomer;
  list: ICustomer[];
  onEdit: (data: ICustomer) => void;
  onBatalClickHnd: () => void;
};

const customerModal = (props: Props) => {
  const { list, onClose, data, onEdit } = props;
  const { onBatalClickHnd } = props;

  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as ICustomer | null);
  const onCloseModal = () => setShowModal(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="w-[500px] flex flex-col pr-2 pb-2 bg-white rounded-md text-left">
        <span
          className="place-self-end text-2xl font-semibold cursor-pointer"
          onClick={onClose}
        >
          &times;
        </span>
        <div className="px-4 pb-3">
          <h1 className="font-semibold text-lg text-center">User Details</h1>
          <div>
            <div>
              <table>
                <tr>
                  <td>Nama</td>
                  <td> {data.nama}</td>
                </tr>
                <tr>
                  <td>No Handphone</td>
                  <td> {data.nohandphone}</td>
                </tr>
                <tr>
                  <td>Alamat</td>
                  <td> {data.alamat}</td>
                </tr>
              </table>

              <div>
                <input
                  type="button"
                  value="Batal"
                  className="rounded-lg bg-white border-2 border-blue-500 px-4 py-1 mr-2 cursor-pointer"
                  onClick={onBatalClickHnd}
                />
                <input
                  type="button"
                  value="Edit"
                  className="rounded-lg bg-white border-2 border-blue-500 px-4 py-1 mr-2 cursor-pointer"
                  onClick={() => onEdit(data)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && dataToShow !== null && (
        <EditCust data={dataToShow} onClose={() => onCloseModal} />
      )}
    </div>
  );
};

export default customerModal;
