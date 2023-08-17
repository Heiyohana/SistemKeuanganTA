import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

function konfirmasilogout() {
  return (
    <div className="flex inset-0 bg-black fixed bg-opacity-10 backdrop-blur-sm justify-center items-center">
      <div className="w-[350px] container h-max flex flex-col">
        <button className="text-white text-xl place self-end">x</button>
        <div className="bg-white w-full flex flex-col justify-center items-center p-6 rounded-md">
          <div className="text-center text-md pb-1">
            Anda yakin untuk Keluar dari Sistem ini?
          </div>
          <div className="flex flex-row justify-center items-center gap-3">
            <button className="bg-white w-20 h-10 mr-4 rounded-lg text-blue-600 font-semibold border border-blue-600">
              Reset
            </button>
            <button className="group bg-blue-600 w-20 h-10 rounded-lg text-white font-semibold">
              Bayar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default konfirmasilogout;
