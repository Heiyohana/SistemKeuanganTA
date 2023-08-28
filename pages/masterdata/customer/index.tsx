import NavSideBar from "@/pages/component/sidenavbar";
import Head from "next/head";
import React, { useState } from "react";
import { ICustomer, PageEnum, dummyCustomerList } from "./customer.type";
import CustomerList from "./customerList";
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
    setCustomerList([...customerList, data]);
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

  return (
    <div className="w-screen h-screen m-0 flex container">
      <Head>
        <title>Master Data Customer</title>
      </Head>
      <NavSideBar />

      {/* Section kanan */}
      <section className="absolute h-full w-4/5 right-0 p-5 bg-neutral-50">
        <div className="flex flex-row justify-between items-center">
          {/* informasi halaman */}
          <div className="flex flex-col pb-5">
            <h1 className="title font-bold text-2xl">Data Customer</h1>
            <h3 className="text-sm">Data Pelanggan yang Sudah Terdaftar</h3>
          </div>
        </div>
        {/* Tabel Data Customer */}
        {shownModalAdd === PageEnum.list && (
          <CustomerList
            list={customerList}
            onDeleteClickHnd={deleteCustomer}
            onEdit={editCustomer}
          />
        )}
        {shownModalAdd === PageEnum.add && (
          <AddCustModal
            onBatalBtnHnd={showListPage}
            onSubmitClick={showAddModal}
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
