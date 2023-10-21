import React, { useState } from "react";
import { ICustomer, dummyCustomerList } from "./customer.type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import ViewCustomerModal from "./viewCustomerModal";
import styles from "./mastercustomer.module.css";

type CustomerListProps = {
  list: ICustomer[];
  onDeleteClickHnd: (data: ICustomer) => void;
  onEdit: (data: ICustomer) => void;
  showActions: boolean;
};

const customerList: React.FC<CustomerListProps> = (props) => {
  const { list, onDeleteClickHnd, showActions } = props;
  const [showViewModal, setShowViewModal] = useState(false);
  const [detailsToShow, setDetailsToShow] = useState(null as ICustomer | null);

  const viewDetails = (data: ICustomer) => {
    setDetailsToShow(data);
    setShowViewModal(true);
  };

  const onCloseModal = () => setShowViewModal(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1); // Inisialisasi currentPage
  const itemsPerPage = 15;
  const totalPages = Math.ceil(list.length / itemsPerPage);
  const maxVisiblePage = 5;
  const firstPage = Math.max(1, currentPage - Math.floor(maxVisiblePage / 2));
  const lastPage = Math.min(totalPages, firstPage + maxVisiblePage - 1);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage); // Set currentPage sesuai dengan halaman yang dipilih
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, list.length); // Pastikan endIndex tidak melebihi panjang list

  const itemsToShow = list.slice(startIndex, endIndex);

  return (
    <div className="w-max">
      <table className="text-left border-2 border-blue-500">
        <thead className="bg-blue-500 items-center text-white">
          <tr className={`${styles.thtable}`}>
            <th className="px-2 py-1">ID</th>
            <th className="px-4 py-1">Nama Customer</th>
            <th className="px-4 py-1">No Handphone</th>
            <th className="px-9 py-1">Alamat Pengiriman</th>
            <th className="px-4 py-1">Aksi</th>
          </tr>
        </thead>
        <tbody className="bg-white text-left">
          {itemsToShow.map((customer, index) => {
            const actualIndex = startIndex + index + 1;
            return (
              <tr
                className={`hover:bg-blue-100 p-2 border-blue-200 border table-auto ${styles.tdtable}`}
                key={actualIndex}
              >
                <td className={` px-2 py-1 text-center`}>
                  {actualIndex}
                </td>
                <td className="px-4 py-1">{customer.nama}</td>
                <td className="px-4 py-1">{customer.nohp}</td>
                <td className="px-9 py-1">{customer.alamat}</td>
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
      {/* ... Modal rendering ... */}
      {showViewModal && detailsToShow && (
        <ViewCustomerModal
          onBatalBtnHnd={onCloseModal}
          onUpdateClickHnd={viewDetails}
          data={detailsToShow}
        />
      )}

      {/* Layout Pagination */}
      <div className="items-center mt-3 flex justify-between">
        <a className={`${styles.textPagination} text-neutral-400`}>
          Menampilkan halaman ke {currentPage} dari {totalPages}
        </a>
        <div className="flex flex-row">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={
              currentPage === 1
                ? "disabled bg-white h-[30px] w-[30px] text-sm"
                : "active bg-white h-[30px] w-[30px] text-sm hover:bg-blue-500 hover:text-white"
            }
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          {Array.from({ length: lastPage - firstPage + 1 }, (_, index) => (
            <button
              key={firstPage + index}
              onClick={() => handlePageChange(firstPage + index)}
              className={
                firstPage + index === currentPage
                  ? "active bg-blue-500 text-white w-[30px] h-[30px] text-sm font-bold"
                  : "bg-white w-[30px] h-[30px] text-sm text-center hover:bg-blue-500 hover:text-white"
              }
            >
              {firstPage + index}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={
              currentPage === totalPages
                ? "disabled bg-white h-[30px] w-[30px] text-sm"
                : "active bg-white h-[30px] w-[30px] text-sm hover:bg-blue-500 hover:text-white"
            }
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default customerList;
