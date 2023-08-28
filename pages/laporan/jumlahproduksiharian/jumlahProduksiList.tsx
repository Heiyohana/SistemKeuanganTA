import React, { useState } from "react";
import { IProduksiHarian, PageEnum } from "./jumlahProduksi.type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

type Props = {
  list: IProduksiHarian[];
  onDeleteClickHnd: (data: IProduksiHarian) => void;
  onEdit: (data: IProduksiHarian) => void;
};
const jphList = (props: Props) => {
  const { list, onDeleteClickHnd, onEdit } = props;

  return (
    <div className="text-sm w-max m-1 mt-3">
      <table className=" text-left border-2 border-blue-500 ">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="px-2 py-1 font-medium text-center">No</th>
            <th className="px-5 py-1 font-medium">Tanggal</th>
            <th className="px-5 py-1 font-medium">Materials</th>
            <th className="px-9 py-1 font-medium">Jml Produksi</th>
            <th className="w-2/6 px-9 py-1 font-medium">Keterangan</th>
            <th className="px-2 py-1 font-medium">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {list.map((data, index) => (
            <tr
              className="p-2 hover:bg-blue-200 border-blue-200 border table-auto w-full"
              key={index}
            >
              <td className="text-center px-2 py-1 justify-start font-normal">
                {index + 1}
              </td>
              <td className="px-5 py-1 font-normal">{data.tanggal}</td>
              <td className="px-5 py-1 font-normal">{data.materials}</td>
              <td className="px-9 py-1 font-normal">{data.jmlProduksi}</td>
              <td className="px-9 py-1 font-normal">{data.keterangan}</td>
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
                <button
                  className="cursor-pointer"
                  value={"Edit"}
                  onClick={() => onEdit(data)}
                >
                  <FontAwesomeIcon
                    className="text-md ml-2 text-lime-400"
                    icon={faEdit}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default jphList;
