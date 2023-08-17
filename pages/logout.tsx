import React from "react";

// component modal Konfirmasi Log Out
function LogOut() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[500px] flex flex-col">
        <button className="text-white text-xl place-self-end">x</button>
        <div className="flex flex-col items-center bg-white p-3 rounded-md justify-center">
          <div>Apakah Anda ingin keluar / logout dari sistem ini? </div>
          <div className="my-2 flex gap-8 w-full justify-center items-center">
            <button className="rounded-md p-1 border-2 border-blue-500 w-1/3 bg-white font-regular">
              Batal
            </button>
            <button className="rounded-md p-1 w-1/3 bg-blue-500 border-2 border-blue-500 text-white font-regular">
              Ya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogOut;
