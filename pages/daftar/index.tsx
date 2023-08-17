import Head from "next/head";
import ilustrasidaftar from "../../assets/imgdaftar.png";
import React from "react";
import Image from "next/image";

export default function () {
  return (
    <div className="w-screen h-screen flex flex-row m-0 justify-center items-center bg-neutral-200">
      <Head>
        <title>Halaman Daftar</title>
      </Head>

      {/* pembungkus form */}
      <div className="w-3/5 flex justify-center">
        {/* kiri */}
        <div className=" w-1/2 p-12 bg-blue-500 rounded-l-lg flex flex-col justify-center items-center">
          <div>
            <Image
              className="flex mb-3"
              src={ilustrasidaftar}
              width={300}
              alt="ilustrasimasuk"
            />

            <h1 className="font-bold text-white text-2xl mb-1">
              Sistem <br />
              Manajemen Keuangan
            </h1>
            <p className="font-medium text-white text-lg">
              CV Karya Mandiri Sejahtera
            </p>
          </div>
        </div>

        {/* kanan */}
        <div className="w-1/2 p-12 bg-white border-blue-500 border-2 rounded-r-lg ">
          <div className="flex justify-center mb-1">
            <h1 className="font-bold text-blue-800 text-2xl">Daftar</h1>
          </div>

          <h3 className="text-sm flex justify-center">
            Lengkapi formulir dibawah ini!
          </h3>

          {/* form */}
          {/* field email */}
          <div className="py-1">
            <label htmlFor="email">
              Email <br />
              <input
                // ngide pake type email ^.^
                type="email"
                className="rounded-lg w-full p-1 border border-gray-200 border-rounded-lg"
                placeholder="Masukan Email Anda"
              />
            </label>
          </div>
          {/* field username */}
          <div className="py-1">
            <label htmlFor="username">
              Username <br />
              <input
                type="text"
                className="rounded-lg w-full p-1 border border-gray-200 border-rounded-lg"
                placeholder="Masukan Username Anda"
              />
            </label>
          </div>

          {/* field Kata Sandi */}
          <div className="py-1">
            <label htmlFor="katasandi">
              Kata Sandi <br />
              <input
                type="text"
                className="rounded-lg w-full p-1 border border-gray-200 border-rounded-lg"
                placeholder="Masukan Kata Sandi Anda"
              />
            </label>
          </div>
          {/* field Konfirmasi Kata Sandi */}
          <div className="py-1">
            <label htmlFor="konfirmasisandi">
              Kata Sandi <br />
              <input
                type="text"
                className="rounded-lg w-full p-1 border border-gray-200 border-rounded-lg"
                placeholder="Konfirmasi Kata Sandi Anda"
              />
            </label>
          </div>

          {/* ---------------------------------------------- */}
          {/* button */}
          <div className="flex flex-cols py-4 justify-center">
            <button className="w-fit px-6 py-1.5 bg-blue-700 rounded-md text-neutral-100">
              Daftar
            </button>
            {/* Masukkan link Halaman Masuk */}
          </div>
          <p className="flex justify-center">
            Sudah punya Akun?{" "}
            <a
              href="../masuk"
              className="font-bold hover:font-bold hover:text-blue-500"
            >
              &nbsp; Masuk
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
