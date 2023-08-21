import NavSideBar from "@/pages/component/sidenavbar";
import Head from "next/head";
import React, { useState } from "react";
import { IUser, PageEnum, dummyUserList } from "./user.type";
import UserList from "./userList";
import AddUserModal from "./addUserModal";

const index = () => {
  const [userList, setUserList] = useState(dummyUserList as IUser[]);

  const [shownModalAdd, setShownModalAdd] = useState(PageEnum.list);

  const onAddUserHnd = () => {
    setShownModalAdd(PageEnum.add);
  };

  const showListPage = () => {
    setShownModalAdd(PageEnum.list);
  };

  const showAddModal = (data: IUser) => {
    setUserList([...userList, data]);
  };

  const deleteUser = (data: IUser) => {
    //To index from array i,e userlist
    //Splice that
    //Update new record
    const indexToDelete = userList.indexOf(data);
    const tempList = [...userList];
    tempList.splice(indexToDelete, 1);
    setUserList(tempList);
  };

  return (
    <div className="w-screen h-screen m-0 flex container">
      <Head>
        <title>Master Data Akun User</title>
      </Head>
      <NavSideBar />

      {/* Section Kanan */}
      <section className="absolute h-full w-4/5 right-0 p-5 bg-neutral-50">
        <div className="flex flex-row justify-between items-center">
          {/* informasi halaman */}
          <div className="flex flex-col m-1 pb-5">
            <h1 className="title font-bold text-2xl">Data User Akun</h1>
            <h3 className="text-sm">Master Data</h3>
          </div>

          {/* 3 Button */}
          <div className="flex">
            <input
              type="button"
              value="Tambah Data"
              className="rounded-lg text-white bg-blue-500 px-4 py-2 mr-2 mb-2 cursor-pointer"
              onClick={onAddUserHnd}
            />
            <input
              type="button"
              value="Cari"
              className="w-[200px] rounded-lg bg-white border-2 text-blue-500 border-blue-500 px-4 py-2 mr-2 mb-2 cursor-pointer"
            />
            <input
              type="button"
              value="Export Data"
              className="rounded-lg text-white bg-blue-500 px-4 py-2 mr-2 mb-2 cursor-pointer"
            />
          </div>
        </div>
        {/* Tabel Data Akun User */}
        {shownModalAdd === PageEnum.list && (
          <UserList list={userList} onDeleteClickHnd={deleteUser} />
        )}
        {shownModalAdd === PageEnum.add && (
          <AddUserModal
            onBatalBtnHnd={showListPage}
            onSubmitClickHnd={showAddModal}
          />
        )}
      </section>
    </div>
  );
};

export default index;
