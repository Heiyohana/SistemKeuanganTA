import NavSideBar from "@/pages/components/sidenavbar/admin";
import Head from "next/head";
import React, { useState } from "react";
import { ICustomer, PageEnum, dummyCustomerList } from "./customer.type";
import CustomerList from "./customerList";
import AddCustModal from "./addCustModal";
import Link from "next/link";
import styles from "./mastercustomer.module.css";

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

  const [showActions, setShowActions] = useState(true);

  return (
    <div className="relative flex h-screen">
      <Head>
        <title>Master Data Customer</title>
      </Head>
      <div className="w-screen h-full m-0 flex flex-row relative">
        {/* kiri */}
        <NavSideBar />

        {/* Section kanan */}
        <div className="flex-grow right-0 justify-end p-5 bg-neutral-100">
          <div className="flex flex-row justify-between items-center">
            {/* informasi halaman */}
            <div className="flex flex-col pb-5">
              <h1 className={`${styles.h1}`}>Data Customer</h1>
              <h3 className={`${styles.h3}`}>Data Pelanggan yang Sudah Terdaftar</h3>
            </div>
            {/* 3 Button */}
            <div className={`${styles.button}`}>
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
              <Link
                href={"../masterdata/customer/exportData"}
                placeholder="Export Data"
                className="rounded-lg text-white bg-blue-500 px-4 py-2 mr-2 mb-2 cursor-pointer"
              >
                Export Data
              </Link>
            </div>
          </div>
          {/* Tabel Data Customer */}
          <div>
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
        </div>
      </div>
    </div>
  );
};

export default index;