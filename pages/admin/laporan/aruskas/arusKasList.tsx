import React, { useState } from "react";
import { IArusKas } from "./arusKas.type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import styles from "./aruskas.module.css";

type ArusKasListProps = {
  list: IArusKas[];
  onDeleteClickHnd: (data: IArusKas) => void;
  showActions: boolean;
  // onEdit: (data: IArusKas) => void;
};

const ArusKasList: React.FC<ArusKasListProps> = (props) => {
  const { list, onDeleteClickHnd, showActions } = props;

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
    <div className="w-max m-1 mt-3">
      <table className=" text-left border-2 border-blue-500 ">
        <thead className={`bg-blue-500 text-white ${styles.thead}`}>
          <tr>
            <th className="px-2 py-1 text-center">No</th>
            <th className="px-4 py-1">Tanggal</th>
            <th className="px-4 py-1">Nama Pelapor</th>
            <th className="px-2 py-1">Kategori</th>
            <th className="px-5 py-1">Keterangan</th>
            <th className="px-2 py-1 text-center">Qty</th>
            <th className="px-2 py-1 text-center">Nominal</th>
            <th className="px-2 py-1 text-center">Total</th>
            <th className="px-2 py-1">Bukti</th>
            {showActions && <th className="px-2 py-1">Aksi</th>}
          </tr>
        </thead>
        <tbody className="bg-white">
          {list.map((data, index) => (
            <tr
              className={`p-2 hover:bg-blue-200 border-blue-200 border table-auto w-full ${styles.tdtable}`}
              key={index}
            >
              <td className="text-center px-2 py-1 justify-start font-normal">
                {index + 1}
              </td>
              <td className="px-4 py-1 text-center">
                {format(new Date(data.tanggal), "dd-MM-yyyy")}
              </td>
              <td className="px-4 py-1">{data.namapelapor}</td>
              <td className="px-2 py-1 text-center">{data.kategori}</td>
              <td className="px-5 py-1">{data.keterangan}</td>
              <td className="px-2 py-1 text-center">{data.qty}</td>
              <td className="px-2 py-1 text-center">{data.nominal}</td>
              <td className="px-2 py-1 text-center">
                {data.qty * data.nominal}
              </td>
              <td className="px-2 py-1">{data.bukti}</td>
              {showActions && (
                <td className="px-2 py-1">
                  <button
                    className="cursor-pointer"
                    value={"Delete"}
                    onClick={() => onDeleteClickHnd(data)}
                  >
                    <FontAwesomeIcon
                      className="text-md mr-2 text-red-500"
                      icon={faTrash}
                    />
                  </button>
                  <button
                    className="cursor-pointer"
                    value={"Edit"}
                    //   onClick={() => onEdit(data)}
                  >
                    <FontAwesomeIcon
                      className="text-md ml-2 text-lime-400"
                      icon={faEdit}
                    />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Layout Pagination */}
      <div className="items-center mt-3 flex justify-between">
        <a className={`text-neutral-400 ${styles.teks}`}>
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

export default ArusKasList;
