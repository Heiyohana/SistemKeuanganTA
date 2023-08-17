import Head from "next/head";
import React, { useState } from "react";
import { IUser, PageEnum, dummyUserList } from "./component/User.type";
import UserList from "./userList";
import AddUser from "./addUser";
import EditUser from "./editUser";

const Coba = () => {
  const [userList, setUserList] = useState(dummyUserList as IUser[]);
  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as IUser);

  const onAddUserClickHandle = () => {
    setShownPage(PageEnum.add);
  };

  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  // add data
  const addUser = (data: IUser) => {
    setUserList([...userList, data]);
  };

  // delete data dummy
  const deleteUser = (data: IUser) => {
    //to index from array i,e userList
    //splice that
    //update new record

    const indexToDelete = userList.indexOf(data);
    const tempList = [...userList];

    tempList.splice(indexToDelete, 1);
    setUserList(tempList);
  };

  const editUserData = (data: IUser) => {
    setShownPage(PageEnum.edit);
  };

  const updateData = (data: IUser) => {
    const filteredData = userList.filter((x) => x.id === data.id)[0];
    const indexOfRecord = userList.indexOf(filteredData);
  };

  return (
    <>
      <Head>
        <title>Halaman Coba</title>
      </Head>
      <article className="bg-blue-700 text-white border-3 border-solid border-transparent text-center p-4 font-bold">
        <header>
          <h1>React: Simple CRUD Application</h1>
        </header>
      </article>

      <section className="p-3 m-5">
        {shownPage === PageEnum.list && (
          <>
            <input
              type="button"
              value="Add User"
              className="rounded-lg bg-white border-2 border-blue-500 px-4 py-2 mr-2 mb-2 cursor-pointer float-right"
              onClick={onAddUserClickHandle}
            />
            <UserList
              list={userList}
              onDeleteClickHnd={deleteUser}
              onEditUserHnd={editUserData}
            />
          </>
        )}

        {shownPage === PageEnum.add && (
          <AddUser
            onBackBtnClickHnd={showListPage}
            onSubmitClickHnd={addUser}
          />
        )}

        {shownPage === PageEnum.edit && (
          <EditUser
            data={dataToEdit}
            onBackBtnClickHnd={showListPage}
            onUpdateClickHnd={updateData}
          />
        )}
      </section>
    </>
  );
};

export default Coba;
