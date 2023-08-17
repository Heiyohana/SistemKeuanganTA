import NavSideBar from "@/pages/component/sidenavbar";
import Head from "next/head";
import React, { useState } from "react";
import CustomerList from "./customerList";
import { ICustomer, PageEnum, dummyCustomerList } from "./Customer.type";
import AddCust from "./addCust";
import EditCust from "./editCust";

const customer = () => {
  const [customerList, setCustomerList] = useState(
    dummyCustomerList as ICustomer[]
  );
  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as ICustomer);

  const onAddCustClickHnd = () => {
    setShownPage(PageEnum.add);
  };

  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  // Add (Tambah) Data
  const tambahCust = (data: ICustomer) => {
    setCustomerList([...customerList, data]);
  };

  // Delete (Hapus) Data
  const deleteCust = (data: ICustomer) => {
    //to index from array i,e, customerlist
    //splice that
    // update new record
    const indexToDelete = customerList.indexOf(data);
    const tempList = [...customerList];

    tempList.splice(indexToDelete, 1);
    setCustomerList(tempList);
  };

  const editCustData = (data: ICustomer) => {
    setShownPage(PageEnum.edit);
    setDataToEdit(data);
  };

  const updateData = (data: ICustomer) => {
    const filteredData = customerList.filter((x) => x.id === data.id)[0];
    const indexOfData = customerList.indexOf(filteredData);
    const tempData = { ...customerList };
    tempData[indexOfData] = data;
    setCustomerList(tempData);
  };

  return (
    <div className="w-screen h-screen m-0 flex container">
      <Head>
        <title>Master Data Customer</title>
      </Head>
      <NavSideBar />

      {/* Atas */}
      <section className="absolute h-full w-4/5 right-0 p-5 bg-neutral-50">
        <div className="flex flex-row justify-between items-center">
          {/* informasi halaman */}
          <div className="flex flex-col m-1 pb-5">
            <h1 className="title font-bold text-2xl">Data Customer</h1>
            <h3 className="text-base">Master Data</h3>
          </div>

          {shownPage === PageEnum.list && (
            <div>
              {/* Tambah Data */}
              <input
                type="button"
                value="Tambah Data"
                className="rounded-lg text-white border-2 bg-blue-500 px-4 py-2 mr-2 mb-2 cursor-pointer"
                onClick={onAddCustClickHnd}
              />
              {/* Search Bar */}
              <input
                type="button"
                value="Cari"
                className="rounded-lg bg-white border-2 border-blue-500 px-4 py-2 mr-2 mb-2 cursor-pointer"
              />
              {/* Export Data */}
              <input
                type="button"
                value="Export Data"
                className="rounded-lg bg-white border-2 border-blue-500 px-4 py-2 mr-2 mb-2 cursor-pointer"
              />
            </div>
          )}
        </div>

        {shownPage === PageEnum.list && (
          <div>
            <CustomerList
              list={customerList}
              onDeleteClickHnd={deleteCust}
              onEdit={editCustData}
            />
          </div>
        )}

        {shownPage === PageEnum.add && (
          <AddCust
            onBatalClickHnd={showListPage}
            onSimpanClickHnd={tambahCust}
          />
        )}

        {shownPage === PageEnum.edit && (
          <EditCust
            data={dataToEdit}
            onBatalClickHnd={showListPage}
            onUpdateClickHnd={updateData}
          />
        )}
      </section>
    </div>
  );
};

export default customer;
