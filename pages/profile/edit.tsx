import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import NavSideBar from "../component/sidenavbar";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import fotoProfile from "../../assets/miaprofile.jpg";

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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Mengarahkan kembali ke halaman Setting dengan mengirim data sebagai query parameters
    router.push({
      pathname: "/setting",
      query: formData, // Kirim data profil sebagai query parameters
    });
  };

  return (
    <div className="w-screen min-h-max">
      <Head>
        <title>Setting Profile</title>
      </Head>

      <div className="w-screen h-screen m-0 flex flex-row">
        {/* kiri */}
        <NavSideBar />

        {/* kanan */}
        <div className="fixed w-4/5 bg-neutral-100 h-screen right-0 justify-end p-7">
          <h1 className="title font-bold text-2xl">Setting Profile</h1>
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
              <button className="hover:text-blue-500 hover:border-b hover:border-blue-500" onClick={handleButtonClick}>
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
            <form
              onSubmit={handleSubmit}
              className="w-4/5 p-4 flex flex-col gap-3 text-sm"
            >
              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="bg-white rounded-lg w-full p-2 border border-gray-200 border-rounded-lg "
                />
              </label>
              <label>
                Email:
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white rounded-lg w-full p-2 border border-gray-200 border-rounded-lg "
                />
              </label>
              <label>
                Old Password:
                <input
                  type="password"
                  name="oldPassword"
                  value={formData.oldPassword}
                  onChange={handleChange}
                  className="bg-white rounded-lg w-full p-2 border border-gray-200 border-rounded-lg "
                />
              </label>
              <label>
                New Password:
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="bg-white rounded-lg w-full p-2 border border-gray-200 border-rounded-lg "
                />
              </label>
              <div className="flex flex-row justify-center m-4 gap-4">
                <Link href="/profile">
                  <button
                    type="submit"
                    className="bg-white border border-gray-500 rounded-md p-2 w-[80px]"
                  >
                    Back
                  </button>
                </Link>
                <button
                  type="submit"
                  className="bg-blue-500 rounded-md p-2 w-[80px] text-white"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
