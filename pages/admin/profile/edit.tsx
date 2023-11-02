import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import NavSideBar from "@/pages/components/sidenavbar/admin";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import fotoProfile from "@/assets/elements/profileadmin.jpg";
import MSuccess from "@/pages/components/mSuccess";
import styles from "./profile.module.css";

const EditProfile = () => {
  const router = useRouter();
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        const imageDataUrl = reader.result as string;
        setProfileImage(imageDataUrl);
      };
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Ketika tombol ditekan, klik pada input file tersembunyi
    }
  };

  // State untuk menyimpan data profil yang akan diedit
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    oldPassword: "",
    newPassword: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    // Memperbarui state formData sesuai dengan inputan
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle ModalSuccess
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);
  const onModalSuccessClick = () => {
    setIsModalSuccessOpen(true);
  };

  return (
    <div className="relative flex h-screen">
      <Head>
        <title>Setting Profile</title>
      </Head>

      <div className="w-screen h-full m-0 flex flex-row relative">
        {/* kiri */}
        <NavSideBar />

        {/* kanan */}
        <div className="flex-grow right-0 justify-end p-5 bg-neutral-100">
          <h1 className={`${styles.h1}`}>Setting Profile</h1>
          <div className="flex flex-row mt-4 gap-6">
            {/* Change Photo Profile */}
            <div className="w-1/5 flex flex-col justify-start pt-2 items-center px-2 text-center">
              {profileImage ? (
                <img
                  src={profileImage}
                  className="rounded-full object-cover h-[120px] w-[120px] flex items-center justify-center"
                  alt="Foto Profile Anda"
                />
              ) : (
                <Image
                  src={fotoProfile}
                  alt="Foto Profile Anda"
                  className="rounded-full h-[120px] w-[120px] flex items-center justify-center bg-neutral-500"
                />
              )}
              <button
                className={`hover:text-blue-500 hover:border-b hover:border-blue-500 ${styles.button}`}
                onClick={handleButtonClick}
              >
                Choose File
              </button>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef} // Menghubungkan ref ke input file
                style={{ display: "none" }} // Sembunyikan input file secara visual
              />
            </div>

            {/* form */}
            <form className="w-4/5 p-4 flex flex-col gap-3">
              <div className={`${styles.label} pb-2`}>
                <label>
                  Username:
                  <input
                    type="text"
                    name="username"
                    placeholder="Masukkan username Anda yang baru"
                    value={formData.username}
                    onChange={handleChange}
                    className="bg-white rounded-lg w-full p-2 border border-gray-200 border-rounded-lg "
                  />
                </label>
              </div>
              <div className={`${styles.label} pb-2`}>
                <label>
                  Email:
                  <input
                    type="text"
                    name="email"
                    placeholder="Masukkan email Anda yang baru"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white rounded-lg w-full p-2 border border-gray-200 border-rounded-lg "
                  />
                </label>
              </div>
              <div className={`${styles.label} pb-2`}>
                <label>
                  Kata Sandi Lama:
                  <input
                    type="password"
                    name="oldPassword"
                    placeholder="Masukkan password lama Anda"
                    value={formData.oldPassword}
                    onChange={handleChange}
                    className="bg-white rounded-lg w-full p-2 border border-gray-200 border-rounded-lg "
                  />
                </label>
              </div>
              <div className={`${styles.label} pb-2`}>
                <label>
                  Kata Sandi Baru:
                  <input
                    type="password"
                    name="newPassword"
                    placeholder="Masukkan password baru Anda"
                    value={formData.newPassword}
                    onChange={handleChange}
                    className="bg-white rounded-lg w-full p-2 border border-gray-200 border-rounded-lg "
                  />
                </label>
              </div>

              <div className="flex flex-row justify-center m-4 gap-4">
                <Link href="/staff/profile">
                  <button
                    className={`bg-white border border-blue-500 rounded-md p-2 w-[80px] ${styles.button}`}
                  >
                    Kembali
                  </button>
                </Link>
                <button
                  onClick={onModalSuccessClick}
                  className={`bg-blue-500 rounded-md p-2 w-[80px] text-white ${styles.button}`}
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
        {isModalSuccessOpen && <MSuccess />}
      </div>
    </div>
  );
};

export default EditProfile;
