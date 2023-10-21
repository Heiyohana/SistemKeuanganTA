import React from "react";
import NavSideBar from "@/pages/components/sidenavbar/staff";
import Head from "next/head";
import Link from "next/link";
import fotoProfile from "@/assets/elements/profilestaff.jpg";
import Image from "next/image";
import styles from "./profile.module.css";

export default function Setting() {
  return (
    <div className="relative flex h-screen">
      <Head>
        <title>Profile</title>
      </Head>
      <div className="w-screen h-full m-0 flex flex-row relative">
        {/* kiri side */}
        <NavSideBar />

        {/* Kanan */}
        <div className="flex-grow right-0 justify-end p-5 bg-neutral-100">
          <h1 className={`${styles.h1}`}>Profile</h1>
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
            <div className="w-4/5 p-4 flex flex-col gap-3">
              <div className={`${styles.label} pb-2`}>
                <label htmlFor="username">
                  Username
                  <input
                    type="text"
                    className="bg-white rounded-lg w-full p-2 border border-gray-200 border-rounded-lg "
                    placeholder="heiyohana"
                    disabled
                  />
                </label>
              </div>
              <div className={`${styles.label} pb-2`}>
                <label htmlFor="email">
                  Email
                  <input
                    type="text"
                    className="bg-white rounded-lg w-full p-2 border border-gray-200 border-rounded-lg"
                    placeholder="hendamiayohana@gmail.com"
                    disabled
                  />
                </label>
              </div>
              <div className={`${styles.label} pb-2`}>
                <label htmlFor="sandilama">
                  Kata Sandi Lama
                  <input
                    type="text"
                    className="bg-white rounded-lg w-full p-2 border border-gray-200 border-rounded-lg"
                    placeholder="*******"
                    disabled
                  />
                </label>
              </div>
              <div className={`${styles.label} pb-2`}>
                <label htmlFor="sandibaru">
                  Kata Sandi Baru
                  <input
                    type="text"
                    className="bg-white rounded-lg w-full p-2 border border-gray-200 border-rounded-lg"
                    placeholder="Masukan Kata Sandi Baru"
                    disabled
                  />
                </label>
              </div>

              <div className="flex justify-center m-4">
                <Link href="/staff/profile/edit">
                  <button
                    className={`bg-blue-500 rounded-md p-2 w-[80px] text-white ${styles.button}`}
                  >
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
