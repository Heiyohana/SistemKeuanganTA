import Head from "next/head";
import ilustrasidaftar from "@/assets/elements/imgdaftar.png";
import React, { useState } from "react";
import Image from "next/image";
import router from "next/router";
import styles from "./daftar.module.css"

interface IDaftar {
  email: string;
  username: string;
  sandi: string;
  konfirmsandi: string;
}

interface IState {
  user: IDaftar;
  isLoginSuccessful: Boolean;
}

const Daftar: React.FC = () => {
  const [state, setState] = useState<IState>({
    user: {
      email: "",
      username: "",
      sandi: "",
      konfirmsandi: "",
    },
    isLoginSuccessful: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      user: {
        ...state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  // Form Handling
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(state.user);

    // Simulate Login Validation
    if (
      state.user.email === "heiyohana@gmail.com" &&
      state.user.username === "Miahana" &&
      state.user.sandi === "12345678" &&
      state.user.konfirmsandi === "12345678"
    ) {
      setState({ ...state, isLoginSuccessful: true });
      alert("Login Sukses");

      // Navigasi to dashboard page
      router.push("../dashboard");
    } else {
      setState({ ...state, isLoginSuccessful: false });
      alert("Login Gagal");
    }
  };

  return (
    <div className="w-screen h-screen flex flex-row m-0 justify-center items-center bg-neutral-100">
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

            <h1 className={`text-white mb-1 ${styles.h1Left}`}>
              Sistem <br />
              Manajemen Keuangan
            </h1>
            <h2 className={`${styles.h2} text-white`}>
              CV Karya Mandiri Sejahtera
            </h2>
          </div>
        </div>

        {/* kanan */}
        <div className="w-1/2 p-10 bg-white border-blue-500 border-2 rounded-r-lg">
          <div className="flex justify-center mb-1">
            <h1 className={`${styles.titleText} text-blue-800`}>Daftar</h1>
          </div>

          <h3 className={`${styles.h3} flex justify-center mb-4`}>
            Lengkapi formulir dibawah ini!
          </h3>

          {/* Formulir */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Field Email */}
            <div>
              <label
                htmlFor="emailInput"
                className={`${styles.label} text-gray-600 block`}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="emailInput"
                value={state.user.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-sm mt-1"
              />
            </div>
            {/* Field Username */}
            <div>
              <label
                htmlFor="usernameInput"
                className={`${styles.label} text-gray-600 block`}
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="usernameInput"
                value={state.user.username}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-sm mt-1"
              />
            </div>
            {/* Field Kata Sandi */}
            <div>
              <label
                htmlFor="sandiInput"
                className={`${styles.label} text-gray-600 block`}
              >
                Kata Sandi
              </label>
              <input
                type="password"
                name="sandi"
                id="sandiInput"
                value={state.user.sandi}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-sm mt-1"
              />
            </div>
            {/* Field Kata Sandi */}
            <div>
              <label
                htmlFor="sandiInput"
                className={`${styles.label} text-gray-600 block`}
              >
                Konfirmasi Kata Sandi
              </label>
              <input
                type="password"
                name="konfirmsandi"
                id="konfirmsandiInput"
                value={state.user.konfirmsandi}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-sm mt-1"
              />
            </div>
            {/* button */}
            <div className="flex flex-cols justify-center">
              <button
                type="submit"
                className={`w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white ${styles.textButtonSubmit}`}
              >
                Daftar
              </button>
            </div>
          </form>

          {/* Masukkan link Halaman Masuk */}
          <p className={`flex justify-center pt-2 ${styles.p}`}>
            Sudah punya Akun?
            <a
              href="../masuk"
              className={`${styles.linkMasuk} hover:font-bold hover:text-blue-500`}
            >
              &nbsp; Masuk
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Daftar;
