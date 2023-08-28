import React, { useState } from "react";
import { ICustomer, PageEnum, dummyCustomerList } from "./customer.type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
import ViewCustomerModal from "./viewCustomerModal";
import AddCustModal from "./addCustModal";

type Props = {
  list: ICustomer[];
  onDeleteClickHnd: (data: ICustomer) => void;
  onEdit: (data: ICustomer) => void;
};

const customerList = (props: Props) => {
  const [customerList, setCustomerList] = useState(
    dummyCustomerList as ICustomer[]
  );

  const { list, onDeleteClickHnd, onEdit } = props;
  const [showViewModal, setShowViewModal] = useState(false);
  const [detailsToShow, setDetailsToShow] = useState(null as ICustomer | null);

  const viewDetails = (data: ICustomer) => {
    setDetailsToShow(data);
    setShowViewModal(true);
  };

  const onCloseModal = () => setShowViewModal(false);

  const [shownModalAdd, setShownModalAdd] = useState(PageEnum.list);
  const onAddCustomerHnd = () => {
    setShownModalAdd(PageEnum.add);
  };

  const showAddModal = (data: ICustomer) => {
    setCustomerList([...customerList, data]);
    setShownModalAdd(PageEnum.list);
  };

  return (
    <div className="text-sm" onClick={onCloseModal}>
      <div className="fixed top-0 right-0 mr-5 mt-7">
        {/* 3 Button */}
        <div className="flex">
          <input
            type="button"
            value="Tambah Data"
            className="rounded-lg text-white bg-blue-500 px-4 py-2 mr-2 mb-2 cursor-pointer"
            onClick={onAddCustomerHnd}
          />
          {/* Pencarian */}
          <div className="flex">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="button"
              value="Cari"
              className="w-[200px] rounded-lg bg-white border-2 text-blue-500 border-blue-500 px-4 py-2 mr-2 mb-2 cursor-pointer"
            />
          </div>
          <input
            type="button"
            value="Export Data"
            className="rounded-lg text-white bg-blue-500 px-4 py-2 mr-2 mb-2 cursor-pointer"
          />
        </div>
      </div>
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
              <tr className="hover:bg-blue-100 p-2" key={index}>
                <td className="px-2 py-1 font-regular text-center">
                  {index + 1}
                </td>
                <td className="px-4 py-1 font-regular">{customer.nama}</td>
                <td className="px-4 py-1 font-regular">{customer.nohp}</td>
                <td className="px-9 py-1 font-regular">{customer.alamat}</td>
                <td className="px-4 py-1 font-medium items-center">
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
      {shownModalAdd === PageEnum.add && (
        <AddCustModal
          onBatalBtnHnd={() => setShownModalAdd(PageEnum.list)}
          onSubmitClick={showAddModal}
        />
      )}
    </div>
  );
};

export default customerList;
