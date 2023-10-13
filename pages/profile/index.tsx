import React from "react";
import NavSideBar from "../component/sidenavbar";
import Head from "next/head";
import Link from "next/link";
import fotoProfile from "../../assets/miaprofile.jpg";
import Image from "next/image";

export default function Setting() {
  return (
    <div className="w-screen min-h-max">
      <Head>
        <title>Profile</title>
      </Head>
      <div className="w-screen h-screen m-0 flex flex-row">
        {/* kiri side */}
        <NavSideBar />

        {/* Kanan */}
        <div className="fixed w-4/5 bg-neutral-100 h-screen right-0 justify-end p-7">
          <h1 className="title font-bold text-2xl">Profile</h1>
          <div className="flex flex-row mt-4 gap-6">
            <div className="w-1/5 flex flex-col justify-start pt-2 items-center px-2 text-center">
              <div className="h-[120px] w-[120px]">
                {/* gambar foto profile */}
                <Image
                  src={fotoProfile}
                  alt="Foto Profile"
                  className="rounded-full flex object-cover"
                />
              </div>
              
            </div>
            <div className="w-4/5 p-4 flex flex-col gap-3 text-sm">
              <label htmlFor="username">
                Username
                <input
                  type="text"
                  className="bg-white rounded-lg w-full p-2 border border-gray-200 border-rounded-lg "
                  placeholder="Miahana"
                  disabled
                />
              </label>
              <label htmlFor="email">
                Email
                <input
                  type="text"
                  className="bg-white rounded-lg w-full p-2 border border-gray-200 border-rounded-lg"
                  placeholder="hendamiayohana@gmail.com"
                  disabled
                />
              </label>
              <label htmlFor="sandilama">
                Kata Sandi Lama
                <input
                  type="text"
                  className="bg-white rounded-lg w-full p-2 border border-gray-200 border-rounded-lg"
                  placeholder="*******"
                  disabled
                />
              </label>
              <label htmlFor="sandibaru">
                Kata Sandi Baru
                <input
                  type="text"
                  className="bg-white rounded-lg w-full p-2 border border-gray-200 border-rounded-lg"
                  placeholder="Masukan Kata Sandi Baru"
                  disabled
                />
              </label>
              <div className="flex justify-center m-4">
                <Link href="/profile/edit">
                  <button className="bg-blue-500 rounded-md p-2 w-[80px] text-white">
                    Edit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
