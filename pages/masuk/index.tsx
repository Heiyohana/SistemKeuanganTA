import Image from "next/image";
import ilustrasimasuk from "@/assets/elements/iconMasuk.png";
import React, { useState } from "react";
import Head from "next/head";
import router from "next/router";
import styles from "./masuk.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

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
    // Reset any previous error messages
    setState({ ...state, isLoginSuccessful: false });

    // Check if the username or password empty
    if (!state.user.username && state.user.password) {
      alert("Maaf, username tidak boleh kosong");
      return;
    } else if (!state.user.password && state.user.username) {
      alert("Maaf, Password tidak boleh kosong");
      return;
    } else if (!state.user.username && state.user.password) {
      alert("Maaf, silakan lengkapi isi dari form masuk ini.");
    }

    // Simulate Login Validation
    if (
      // admin
      state.user.username === "Miahana" &&
      state.user.password === "12345678"
    ) {
      setState({ ...state, isLoginSuccessful: true });
      alert("Login Sukses");

      // Navigasi to dashboard page
      router.push("../admin/dashboard");
    } else if (
      // staff
      state.user.username === "heiyohana" &&
      state.user.password === "yohana12"
    ) {
      setState({ ...state, isLoginSuccessful: true });
      alert("Login Sukses");

      // Navigasi to dashboard page
      router.push("../staff/dashboard");
    } else if (
      (state.user.username != "Miahana" && state.user.password != "yohana12") ||
      (state.user.username != "Miahana" && state.user.password != "12345678")
    ) { 
      alert("Maaf, Username atau password yang Anda masukkan salah");
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-screen h-screen flex flex-row m-0 justify-center items-center bg-neutral-100">
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
            <h1 className={`${styles.titleText} text-blue-800`}>Masuk</h1>
          </div>

          <h3 className={`${styles.h3} flex justify-center mb-4`}>
            Silakan Isi Form dengan Akun Anda
          </h3>

          {/* form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Field Username */}
            <div>
              <label
                htmlFor="usernameInput"
                className={`${styles.label} text-gray-600 block`}
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
            <div className="relative">
              <label
                htmlFor="passwordInput"
                className={`${styles.label} text-gray-600 block`}
              >
                Password
              </label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                id="passwordInput"
                value={state.user.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-sm mt-1"
              />
              {/* Lihat sembunyikan password */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-8 right-2 text-gray-500"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye}/>
              </button>
            </div>
            <div>
              <a
                href=""
                className={`${styles.textForgot} text-blue-500 hover:text-blue-800 flex justify-end`}
              >
                Forgot Password?
              </a>
            </div>
            {/* Button Submit */}
            <div>
              <button
                type="submit"
                className={`w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white ${styles.textButtonSubmit}`}
              >
                Submit
              </button>
            </div>
          </form>

          {/* Masukkan link Halaman Daftar */}
          <p className={`flex justify-center pt-2 ${styles.p}`}>
            Belum punya Akun?
            <a
              href="../daftar"
              className={`${styles.linkDaftar} hover:font-bold hover:text-blue-500`}
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
