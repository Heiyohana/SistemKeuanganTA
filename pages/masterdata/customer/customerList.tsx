import React, { useState } from "react";
import { ICustomer } from "./customer.type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import ViewCustomerModal from "./viewCustomerModal";
import EditCustomer from "./editCustomer";

type Props = {
  list: ICustomer[];
  onDeleteClickHnd: (data: ICustomer) => void;
  onEdit: (data: ICustomer) => void;
};

const customerList = (props: Props) => {
  const { list, onDeleteClickHnd, onEdit } = props;
  const [showViewModal, setShowViewModal] = useState(false);
  const [detailsToShow, setDetailsToShow] = useState(null as ICustomer | null);

  const viewDetails = (data: ICustomer) => {
    setDetailsToShow(data);
    setShowViewModal(true);
  };

  const onCloseModal = () => setShowViewModal(false);

  return (
    <div>
      <table className="text-left border-2 border-blue-500">
        <thead className="bg-blue-500 items-center text-white">
          <tr>
            <td className="px-2 py-1 font-medium">No</td>
            <td className="px-4 py-1 font-medium">Nama Customer</td>
            <td className="px-4 py-1 font-medium">No Handphone</td>
            <td className="px-9 py-1 font-medium">Alamat Pengiriman</td>
            <td className="px-4 py-1 font-medium">Aksi</td>
          </tr>
        </thead>
        <tbody className="bg-white text-left">
          {list.map((customer, index) => {
            return (
              <tr key={index}>
                <td className="px-2 py-1 font-regular">{index + 1}</td>
                <td className="px-4 py-1 font-regular">{customer.nama}</td>
                <td className="px-4 py-1 font-regular">{customer.nohp}</td>
                <td className="px-9 py-1 font-regular">{customer.alamat}</td>
                <td>
                  <button
                    className="cursor-pointer"
                    value="Delete"
                    onClick={() => onDeleteClickHnd(customer)}
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-md mr-2 text-red-500"
                    />
                  </button>
                  <button
                    className="cursor pointer"
                    value="Edit"
                    onClick={() => viewDetails(customer)}
                    // onClick={() => onEdit(customer)}
                  >
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="text-md mr-2 text-lime-500"
                    />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {showViewModal && detailsToShow && (
        <ViewCustomerModal
          onBatalBtnHnd={onCloseModal}
          onUpdateClickHnd={viewDetails}
          data={detailsToShow}
        />
      )}
    </div>
  );
};

export default customerList;
