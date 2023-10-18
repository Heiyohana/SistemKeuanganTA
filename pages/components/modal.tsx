import React from "react";

// component modal add data Akun User
function modal() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[500px] flex flex-col">
        <button className="text-white text-xl place-self-end">x</button>
        <div className="bg-white p-4 rounded-md">
          <h1 className="title font-bold text-2xl mb-3">Tambah Data</h1>
          <form action="">
            <div className="pb-2 items-center">
              {/* Field Username */}
              <label className="pb-1" htmlFor="username">
                Username
                <input
                  type="text"
                  className="rounded-lg w-full p-1 border border-gray-200"
                  placeholder="Masukan Username Baru"
                />
              </label>
            </div>
            <div className="pb-2 items-center">
              {/* Field Email */}
              <label className="pb-1" htmlFor="email">
                Email
                <input
                  type="text"
                  className="rounded-lg w-full p-1 border border-gray-200"
                  placeholder="Masukan Email"
                />
              </label>
            </div>
            <div className="pb-2 items-center">
              {/* Field Role */}
              <label className="pb-1" htmlFor="role">
                Role
                <input
                  type="text"
                  className="rounded-lg w-full p-1 border border-gray-200"
                  placeholder="Masukan Role Anda"
                />
              </label>
            </div>
            <div className="pb-4 items-center">
              {/* Field Kata Sandi */}
              <label className="pb-1" htmlFor="Password">
                Kata Sandi
                <input
                  type="text"
                  className="rounded-lg w-full p-1 border border-gray-200"
                  placeholder="Masukan Kata Sandi Anda"
                />
              </label>
            </div>

            {/* button */}
            <div className="flex flex-cols justify-end gap-5">
              <button className="w-fit px-6 py-1.5 border-2 border-blue-700 rounded-md text-blue-700">
                Batal
              </button>
              <button className="w-fit px-6 py-1.5 bg-blue-700 rounded-md text-neutral-100">
                Simpan
              </button>
              {/* Masukkan link Halaman Masuk */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default modal;
