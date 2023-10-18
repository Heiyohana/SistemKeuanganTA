import NavSideBar from "@/pages/components/sidenavbar";
import Head from "next/head";
import React, { useRef, useState } from "react";
import { IUser, PageEnum, dummyUserList } from "./user.type";
import UserList from "./userList";
import AddUserModal from "./addUserModal";
import { useReactToPrint } from "react-to-print";
import Link from "next/link";

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

  // Pencarian Data
  const [search, setSearch] = useState("");

  // Untuk mengatur export PDF
  const componentPDF = useRef(null);
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "Data User",
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
              <h1 className="title font-bold text-2xl">Data User Akun</h1>
              <h3 className="text-sm">Master Data</h3>
            </div>

            {/* 3 Button */}
            <div className="text-sm">
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
                // onClick={handleExportPDF}
                className="rounded-lg text-white bg-blue-500 px-4 py-2 mr-2 mb-2 cursor-pointer"
              >
                Export Data
              </Link>
            </div>
          </div>
          {/* Tabel Data Akun User */}
          <div
            ref={componentPDF}
            style={{
              display: showActions ? "auto" : "", // Set display sesuai showActions
              width: "100%",
              margin: "auto",
            }}
          >
            {shownModalAdd === PageEnum.list && (
              <UserList
                list={userList.filter(
                  (user) =>
                    user.username
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    user.email.toLowerCase().includes(search.toLowerCase())
                )}
                showActions={showActions}
                onDeleteClickHnd={deleteUser}
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
    </div>
  );
};

export default index;
