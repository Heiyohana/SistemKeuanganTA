import NavSideBar from "@/pages/component/sidenavbar";
import Head from "next/head";
import React, { useRef, useState } from "react";
import { ICustomer, PageEnum, dummyCustomerList } from "./customer.type";
import CustomerList from "./customerList";
import { useReactToPrint } from "react-to-print";
import AddCustModal from "./addCustModal";

const index = () => {
  const [customerList, setCustomerList] = useState(
    dummyCustomerList as ICustomer[]
  );

  const [shownModalAdd, setShownModalAdd] = useState(PageEnum.list);

  const onAddCustomerHnd = () => {
    setShownModalAdd(PageEnum.add);
  };
  const showListPage = () => {
    setShownModalAdd(PageEnum.list);
  };

  const showAddModal = (data: ICustomer) => {
    setCustomerList([data, ...customerList]);
  };

  const deleteCustomer = (data: ICustomer) => {
    //To index from array i,e customerlist
    //Splice that
    //Update new record
    const indexToDelete = customerList.indexOf(data);
    const tempList = [...customerList];
    tempList.splice(indexToDelete, 1);
    setCustomerList(tempList);
  };

  const [dataToEdit, setDataToEdit] = useState({} as ICustomer);
  const editCustomer = (data: ICustomer) => {
    setShownModalAdd(PageEnum.list);
    setDataToEdit(data);
  };

  const updateData = (data: ICustomer) => {
    //To index from array i,e customerlist
    //Splice that
    //Update new record
    const filteredData = customerList.filter((x) => x.id === data.id)[0];
    const indexOfRecord = customerList.indexOf(filteredData);
    const tempData = { ...customerList };
    tempData[indexOfRecord] = data;
    setCustomerList(tempData);
  };

  // Pencarian Data
  const [search, setSearch] = useState("");

  // Untuk mengatur export PDF
  const componentPDF = useRef(null);
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "Data Customer",
  });

  // Untuk mengatur kolom aksi hilang saat diekspor
  const [showActions, setShowActions] = useState(true);
  const handleExportPDF = () => {
    setShowActions(false); // Set showActions ke false saat tombol export PDF diklik
    generatePDF();
    setTimeout(() => {
      setShowActions(true);
    }, 5000);
  };

  return (
    <div className="w-screen h-screen m-0 flex container">
      <Head>
        <title>Master Data Customer</title>
      </Head>
      <NavSideBar />

      {/* Section kanan */}
      <section className="absolute h-full w-4/5 right-0 p-5 bg-neutral-100">
        <div className="flex flex-row justify-between items-center">
          {/* informasi halaman */}
          <div className="flex flex-col pb-5">
            <h1 className="title font-bold text-2xl">Data Customer</h1>
            <h3 className="text-sm">Data Pelanggan yang Sudah Terdaftar</h3>
          </div>
          {/* 3 Button */}
          <div className="text-sm">
            <input
              type="button"
              value="Tambah Data"
              className="rounded-lg text-white bg-blue-500 px-4 py-2 mr-2 mb-2 cursor-pointer"
              onClick={onAddCustomerHnd}
            />
            {/* Pencarian */}
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-[200px] rounded-lg bg-white border-2 border-blue-500 px-4 py-2 mr-2 mb-2 cursor-pointer"
              placeholder="Cari"
            />
            <input
              type="button"
              value="Export Data"
              onClick={handleExportPDF}
              className="rounded-lg text-white bg-blue-500 px-4 py-2 mr-2 mb-2 cursor-pointer"
            />
          </div>
        </div>
        {/* Tabel Data Customer */}
        <div
          ref={componentPDF}
          style={{
            display: showActions ? "auto" : "", // Set display sesuai showActions
            width: "100%",
            margin: "auto",
          }}
        >
          {shownModalAdd === PageEnum.list && (
            <CustomerList
              list={customerList.filter((customer) =>
                customer.nama.toLowerCase().includes(search.toLowerCase())
              )}
              onDeleteClickHnd={deleteCustomer}
              onEdit={editCustomer}
              showActions={showActions}
            />
          )}
        </div>

        {shownModalAdd === PageEnum.add && (
          <AddCustModal
            onBatalBtnHnd={showListPage}
            onSubmitClickHnd={showAddModal}
          />
        )}

        {/* {shownModalAdd === PageEnum.edit && (
          <EditCustomer
            data={dataToEdit}
            onBatalBtnHnd={showListPage}
            onUpdateClickHnd={updateData}
          />
        )} */}
      </section>
    </div>
  );
};

export default index;
