import Image from "next/image";
import ilustrasimasuk from "../../assets/iconMasuk.png";
import React from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";

interface FormData {
  username: string;
  password: string;
}

function Masuk() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: "onChange" });

  const onSubmit = handleSubmit(({ username, password }) => {
    console.log(username, password);
  });

  return (
    <div className="w-screen h-screen flex flex-row m-0 justify-center items-center bg-neutral-200">
      <Head>
        <title>Halaman Masuk</title>
      </Head>

      {/* Pembungkus Form */}
      <div className="w-3/5 flex justify-center">
        {/* Kiri */}
        <div className=" w-1/2 p-12 bg-blue-500 rounded-l-lg flex flex-col justify-center items-center select-none">
          <div>
            <Image
              className="mb-5"
              src={ilustrasimasuk}
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
        <div className="w-1/2 p-12 bg-white border-blue-500 border-2 rounded-r-lg">
          <div className="flex justify-center mb-1">
            <h1 className="font-bold text-blue-800 text-2xl">Masuk</h1>
          </div>

          <h3 className="text-sm flex justify-center mb-4">
            Silakan Isi Form dengan Akun Anda
          </h3>

          {/* form */}
          <form action="" onSubmit={onSubmit} className="space-y-3">
            {/* Field Username */}
            <div>
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block"
              >
                Username
              </label>
              <input
                {...register("username", { required: true })}
                name="username"
                type="text"
                className="w-full p-2 border border-gray-300 rounded-sm mt-1"
                style={{ borderColor: errors.username ? "red" : "" }}
              />
              {errors.username && (
                <p className="text-red-600 italic text-sm">
                  This field is required!
                </p>
              )}
            </div>
            {/* Field  Password*/}
            <div>
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block"
              >
                Password
              </label>
              <input
                {...register("password", { required: true })}
                name="password"
                type="password"
                className="w-full p-2 border border-gray-300 rounded-sm mt-1"
                style={{ borderColor: errors.password ? "red" : "" }} //untuk dekorasi form jika error
              />
              {errors.password && (
                <p className="text-red-600 italic text-sm">
                  This field is required!
                </p>
              )}
            </div>
            <div>
              <a
                href=""
                className="font-medium text-sm text-blue-500 flex justify-end"
              >
                Forgot Password?
              </a>
            </div>
            {/* Button Submit */}
            <div>
              <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-sm text-white">
                Submit
              </button>
            </div>
          </form>
          {/* ------------- */}
        </div>
      </div>
    </div>
  );
}
export default Masuk;
