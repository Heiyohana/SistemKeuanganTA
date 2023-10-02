import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";

const modalwarnbook = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[250] flex flex-col bg-neutral-50 p-5 rounded-md relative">
        {/* informasi */}
        <p>Apakah Anda ingin keluar / logout dari sistem ini?</p>
        {/* button */}
        <button className="bg-blue-600 w-20 h-8 rounded-md text-white font-semibold justify-center items-center">
          Batal
        </button>
        <button className="bg-blue-600 w-20 h-8 rounded-md text-white font-semibold justify-center items-center">
          Ya
        </button>
      </div>
    </div>
  );
};

export default modalwarnbook;
