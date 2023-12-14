import NavSideBar from "@/pages/components/sidenavbar/admin";
import Head from "next/head";
import React, { useState } from "react";
import { IUser, PageEnum, dummyUserList } from "./user.type";
import UserList from "./userList";
import AddUserModal from "./addUserModal";
import Link from "next/link";
import styles from "./masteruser.module.css";
import Deletewarn from "@/pages/components/deletewarn";

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

  const [isDeleteWarningOpen, setIsDeleteWarningOpen] = useState(false);
  const [indexToDelete, setIndexToDelete] = useState<number | null>(null);

  const handleDeleteItem = (data: IUser) => {
    const indexToDelete = userList.indexOf(data);
    setIsDeleteWarningOpen(true);
    setIndexToDelete(indexToDelete);
  };

  const confirmDeleteCustomer = () => {
    const tempList = [...userList];
    tempList.splice(indexToDelete!, 1);
    setUserList(tempList);

    setIsDeleteWarningOpen(false);
  };

  const handleCancelDelete = () => {
    setIsDeleteWarningOpen(false);
  };

  // Pencarian Data
  const [search, setSearch] = useState("");

  return (
    <div className="relative flex h-screen">
      <Head>
        <title>Master Data Akun User</title>
      </Head>
      <div className="w-screen h-full m-0 flex flex-row relative">
        <NavSideBar />

        {/* Section Kanan */}
        <div className="flex-grow right-0 justify-end p-5 bg-neutral-100 h-full">
          <div className="flex flex-row justify-between items-center">
            {/* informasi halaman */}
            <div className="flex flex-col pb-5">
              <h1 className={`${styles.title}`}>Data User Akun</h1>
              <h3 className={`${styles.desctitle}`}>Master Data</h3>
            </div>

            {/* 3 Button */}
            <div className={`${styles.button}`}>
              <input
                type="button"
                value="Tambah Data"
                className="rounded-lg text-white bg-blue-500 px-4 py-2 mr-2 mb-2 cursor-pointer"
                onClick={onAddUserHnd}
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari"
                className="w-[200px] rounded-lg bg-white border-2 border-blue-500 px-4 py-2 mr-2 mb-2 cursor-pointer"
              />
              <Link
                href={"../masterdata/user/exportData"}
                className="rounded-lg text-white bg-blue-500 px-4 py-2 mr-2 mb-2 cursor-pointer"
              >
                Export Data
              </Link>
            </div>
          </div>
          {/* Tabel Data Akun User */}
          <div>
            {shownModalAdd === PageEnum.list && (
              <UserList
                list={userList.filter(
                  (user) =>
                    user.username
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    user.email.toLowerCase().includes(search.toLowerCase())
                )}
                onDeleteClickHnd={handleDeleteItem}
              />
            )}
          </div>
          {shownModalAdd === PageEnum.add && (
            <AddUserModal
              onBatalBtnHnd={showListPage}
              onSubmitClickHnd={showAddModal}
            />
          )}
        </div>
      </div>
      {/* <Deletewarn /> */}
      {isDeleteWarningOpen && (
        <Deletewarn
          onConfirm={confirmDeleteCustomer}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
};

export default index;
