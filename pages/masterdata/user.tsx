import Head from "next/head";
import React from "react";
import NavSideBar from "../component/sidenavbar";
import HeadButton from "../component/button";
import data from "../../data/userdata.json";

export default function User() {
  return (
    //Halaman Master Data Akun User
    <div className="w-screen h-full m-0 flex container">
      <Head>
        <title>Master Data Akun User</title>
      </Head>
      <NavSideBar />

      {/* Content */}
      <div className="absolute h-full w-4/5 right-0 p-7 bg-neutral-100">
        {/* atas */}
        <div className="flex flex-row justify-between">
          {/* informasi Halaman */}
          <div className="flex flex-col m-1 pb-5">
            <h1 className="title font-bold text-2xl">Data Akun User</h1>
            <h3 className="text-base">Master Data</h3>
          </div>
          <HeadButton />
        </div>
        <div className="text-sm w-fit m-1">
          <table className=" text-left border-2 border-blue-500 ">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-2 py-1 font-medium">No</th>
                <th className="px-2 py-1 font-medium">Username</th>
                <th className="px-9 py-1 font-medium">Email</th>
                <th className="px-7 py-1 font-medium">Role</th>
                <th className="px-2 py-1 font-medium">Kata Sandi</th>
                <th className="px-2 py-1 font-medium">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white text-left">
              {data.map((data, index) => (
                <tr
                  className="p-2 hover:bg-blue-100 border-blue-200 border table-auto"
                  key={index}
                >
                  <th className="px-2 py-1 font-normal">{index + 1}</th>
                  <th className="px-2 py-1 font-normal">{data.Username}</th>
                  <th className="px-9 py-1 font-normal">{data.Email}</th>
                  <th className="px-7 py-1 font-normal">{data.Role}</th>
                  <th className="px-2 py-1 font-normal">{data.Sandi}</th>
                  <th className="px-2 py-1 font-medium">Aksi</th>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-2 p-1 w-full flex flex-row items-center justify-between">
            <div>Menampilkan xx data dari xx</div>
            <div>
              <strong>1</strong> 2 3 4 5 6 7 8 9
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
