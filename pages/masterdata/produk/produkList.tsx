import React, { useState } from "react";
import { IProduk } from "./produk.type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import ViewProdukModal from "./viewProdukModal";

type Props = {
  list: IProduk[];
  onDeleteClickHnd: (data: IProduk) => void;
};
const produkList = (props: Props) => {
  const { list, onDeleteClickHnd } = props;
  const [showViewModal, setShowViewModal] = useState(false);
  const [detailsToShow, setDetailsToShow] = useState(null as IProduk | null);

  const viewDetails = (data: IProduk) => {
    setDetailsToShow(data);
    setShowViewModal(true);
  };

  const onCloseModal = () => setShowViewModal(false);

  return (
    <div>
      <table className="text-left border-2 border-blue-500">
        <thead className="bg-blue-500 items-center text-white">
          <tr className="font-medium">
            <td className="px-2 py-1">No</td>
            <td className="px-4 py-1">Kategori</td>
            <td className="px-4 py-1">Nama Produk</td>
            <td className="px-4 py-1">Ukuran</td>
            <td className="px-4 py-1">Jumlah / m2</td>
            <td className="px-4 py-1">Harga / m2</td>
            <td className="px-4 py-1">Aksi</td>
          </tr>
        </thead>
        <tbody>
          {list.map((produk, index) => {
            return (
              <tr key={index}>
                <td className="px-2 py-1 font-regular text-center">
                  {index + 1}
                </td>
                <td className="px-4 py-1 font-regular">{produk.kategori}</td>
                <td className="px-4 py-1 font-regular">{produk.nama}</td>
                <td className="px-4 py-1 font-regular text-center">
                  {produk.ukuran}
                </td>
                <td className="px-4 py-1 font-regular text-center">
                  {produk.jumlahm2}
                </td>
                <td className="px-4 py-1 font-regular text-center">
                  {produk.hargam2}
                </td>
                <td className="px-4 py-1">
                  <button
                    className="cursor-pointer"
                    value="Delete"
                    onClick={() => onDeleteClickHnd(produk)}
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-md mr-2 text-red-500"
                    />
                  </button>
                  <button
                    className="cursor pointer"
                    value="Edit"
                    onClick={() => viewDetails(produk)}
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
        <ViewProdukModal onClose={onCloseModal} data={detailsToShow} />
      )}
    </div>
  );
};

export default produkList;
