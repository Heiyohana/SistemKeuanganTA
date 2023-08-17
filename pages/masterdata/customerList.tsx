import React, { useState } from "react";
import { ICustomer } from "./Customer.type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import CustomerModal from "./customerModal";

type Props = {
  list: ICustomer[];
  onDeleteClickHnd: (data: ICustomer) => void;
};
const customerList = (props: Props) => {
  const { list, onDeleteClickHnd } = props;

  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as ICustomer | null);

  const viewCustRecord = (data: ICustomer) => {
    setDataToShow(data);
    setShowModal(true);
  };

  const onCloseModal = () => setShowModal(false);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>No Handphone</th>
            <th>Alamat Pengiriman</th>
            <th>Aksi</th>
          </tr>
          {list.map((customer, index) => {
            console.log(customer);
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{customer.nama}</td>
                <td>{customer.nohandphone}</td>
                <td>{customer.alamat}</td>
                <td>
                  <button
                    value="Delete"
                    onClick={() => onDeleteClickHnd(customer)}
                  >
                    <FontAwesomeIcon
                      className="text-md mr-2 text-red-500"
                      icon={faTrash}
                    />
                  </button>

                  <button
                    value="Lihat"
                    onClick={() => viewCustRecord(customer)}
                  >
                    <FontAwesomeIcon
                      className="text-md mr-2 text-green-500"
                      icon={faEdit}
                    />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {showModal && dataToShow !== null && (
        <CustomerModal onClose={() => onCloseModal} data={dataToShow} />
      )}
    </div>
  );
};

export default customerList;
