import React, { useState } from 'react'
import { ILaporanPesanan } from './laporanPesanan.type';
import { format } from 'date-fns';

type LapPesananListProps = {
  list: ILaporanPesanan[];
  deleteProduksi: (data: ILaporanPesanan) => void;
  onDeleteClickHnd: (data: ILaporanPesanan) => void;
};
const laporanPesananList: React.FC<LapPesananListProps> = (props) => {
  const { list, onDeleteClickHnd } = props;

  // Pagination
  const [currentPage, setCurrentPage] = useState(1); // Inisialisasi currentPage
  const itemsPerPage = 15;
  const totalPages = Math.ceil(list.length / itemsPerPage);
  const maxVisiblePage = 5;
  const firstPage = Math.max(1, currentPage - Math.floor(maxVisiblePage / 2));
  const lastPage = Math.min(totalPages, firstPage + maxVisiblePage - 1);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage); // Set currentPage sesuai dengan halaman yang dipilih
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, list.length); // Pastikan endIndex tidak melebihi panjang list

  const itemsToShow = list.slice(startIndex, endIndex);

  return (
    <div className='text-sm w-max m-1 mt-3'>
        <table className='text-left border-2 border-blue-500'>
            <thead className='bg-blue-500 text-white'>
                <tr className='font-medium'>
                    <th className='px-2 py-1 text-center'>No</th>
                    <th className='px-4 py-1'>Tgl Order</th>
                    <th className='px-4 py-1'>Nama Customer</th>
                    <th className='px-2 py-1'>No Handphone</th>
                    <th className='px-2 py-1'>CS Desk</th>
                    <th className='px-2 py-1'>Total</th>
                    <th className='px-2 py-1'>Tgl Bayar</th>
                </tr>
            </thead>
            <tbody className='bg-white'>
                {list.map((data, index) => (
                    <tr key={index}>
                        <td className='text-center px-2 py-1 justify-start font-normal'>{index + 1}</td>
                        <td>{data.tanggal}</td>
                        <td className='px-4 py-1'>{format(new Date(data.tanggal), "dd-MM-yyyy")}</td>
                        <td>{data.namaCust}</td>
                        <td>{data.noHpCust}</td>
                        <td>{data.csDesk}</td>
                        <td>{data.total}</td>
                        <td>{data.tipeBayar}</td>
                        <td>{data.bukti}</td>
                        <td>{data.sisaTagihan}</td>
                        <td>{data.status}</td>
                    </tr>
                ))}
                <tr>
                    <th></th>
                </tr>
            </tbody>
        </table>
    </div>
);
}

export default laporanPesananList