import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";

function warning() {
  return (
    <div className="flex inset-0 fixed bg-black bg-opacity-25 backdrop-blur-sm justify-center items-center">
      <div className="w-[350px] container h-max flex flex-col">
        <button className="text-white text-xl place-self-end">x</button>
        <div className="bg-white w-full flex flex-col justify-center items-center p-6 rounded-md">
          <div className="pb-3">
            <FontAwesomeIcon
              className="h-12 w-12 text-yellow-300"
              icon={faWarning}
            />
          </div>
          <div className="text-md font-regular items-center pb-2 text-center">
            Maaf, tidak dapat diakses! Anda belum mengisi informasi pemesan.
            Silakan isi terlebih dahulu!
          </div>
          <button
            className="py-2 px-8 bg-blue-500 text-white rounded-lg"
            type="submit"
          >
            Oke
          </button>
        </div>
      </div>
    </div>
  );
}

export default warning;
