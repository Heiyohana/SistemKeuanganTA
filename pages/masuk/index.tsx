import Image from "next/image";
import ilustrasimasuk from "../../assets/iconMasuk.png";
import React, { useState } from "react";
import Head from "next/head";
import router from "next/router";

interface ILogin {
  username: string;
  password: string;
}
interface IState {
  user: ILogin;
  isLoginSuccessful: Boolean;
}

const Masuk: React.FC = () => {
  const [state, setState] = useState<IState>({
    user: { username: "", password: "" },
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
      state.user.username === "Miahana" &&
      state.user.password === "12345678"
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
        <div className="w-1/2 p-10 bg-white border-blue-500 border-2 rounded-r-lg">
          <div className="flex justify-center mb-1">
            <h1 className="font-bold text-blue-800 text-2xl">Masuk</h1>
          </div>

          <h3 className="text-sm flex justify-center mb-4">
            Silakan Isi Form dengan Akun Anda
          </h3>

          {/* form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Field Username */}
            <div>
              <label
                htmlFor="usernameInput"
                className="text-sm font-bold text-gray-600 block"
              >
                Username
              </label>
              <input
                name="username"
                type="text"
                id="usernameInput"
                value={state.user.username}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-sm mt-1"
              />
            </div>
            {/* Field  Password*/}
            <div>
              <label
                htmlFor="passwordInput"
                className="text-sm font-bold text-gray-600 block"
              >
                Password
              </label>
              <input
                name="password"
                type="password"
                id="passwordInput"
                value={state.user.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-sm mt-1"
              />
            </div>
            <div>
              <a
                href=""
                className="font-medium text-sm text-blue-500 hover:text-blue-800 flex justify-end"
              >
                Forgot Password?
              </a>
            </div>
            {/* Button Submit */}
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-sm text-white"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Masukkan link Halaman Daftar */}
          <p className="flex justify-center text-sm pt-2">
            Belum punya Akun?
            <a
              href="../daftar"
              className="font-bold hover:font-bold hover:text-blue-500"
            >
              &nbsp; Daftar
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Masuk;
