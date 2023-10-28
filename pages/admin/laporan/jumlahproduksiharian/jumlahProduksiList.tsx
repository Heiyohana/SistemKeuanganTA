import React, { useState } from "react";
import { IProduksiHarian, PageEnum } from "./jumlahProduksi.type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import Link from "next/link";
import editJumlahProduksi from "./editJumlahProduksi";
import styles from "./jumlahproduksiharian.module.css";

type JumlahProduksiProps = {
  list: IProduksiHarian[];
  onDeleteClickHnd: (data: IProduksiHarian) => void;
  onEdit: (data: IProduksiHarian) => void;
  showActions: boolean;
};
const jphList: React.FC<JumlahProduksiProps> = (props) => {
  const { list, onDeleteClickHnd, onEdit, showActions } = props;

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

  return (
    <div className="text-sm flex flex-col mt-2">
      <table className="text-left border-2 border-blue-500 ">
        <thead className="bg-blue-500 text-white">
          <tr className="p-2">
            <th className="px-2 py-1 font-medium text-center">No</th>
            <th className="px-5 py-1 font-medium">Tanggal</th>
            <th className="px-5 py-1 font-medium">Materials</th>
            <th className="px-9 py-1 font-medium">Jml Produksi</th>
            <th className="w-2/6 px-9 py-1 font-medium">Keterangan</th>
            {showActions && <th className="px-2 py-1 font-medium">Aksi</th>}
          </tr>
        </thead>
        <tbody className="bg-white">
          {list.map((data, index) => (
            <tr
              className="p-2 hover:bg-blue-200 border-blue-200 border table-auto w-full"
              key={index}
            >
              <td className="text-center px-2 py-1 justify-start font-normal">
                {index + 1}
              </td>
              <td className="px-5 py-1 font-normal">
                {format(new Date(data.tanggal), "dd-MM-yyyy")}
              </td>
              <td className="px-5 py-1 font-normal">{data.materials}</td>
              <td className="px-9 py-1 font-normal">{data.jmlProduksi}</td>
              <td className="px-9 py-1 font-normal">{data.keterangan}</td>
              {showActions && (
                <td className="px-2 py-1 font-medium">
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
                  <Link
                    href={"/admin/laporan/jumlahproduksiharian/editJumlahProduksi"}
                    className="cursor-pointer"
                    // onClick={() => onEdit(data)}
                  >
                    <FontAwesomeIcon
                      className="text-md ml-2 text-lime-400"
                      icon={faEdit}
                    />
                  </Link>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Layout Pagination */}
      <div className="items-center mt-3 flex justify-between">
        <a className="text-neutral-400">
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

export default jphList;
