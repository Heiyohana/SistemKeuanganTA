import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function success() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[250px] h-[100px] flex flex-col">
        <button className="text-white text-xl place-self-end">x</button>
        <div className="bg-white w-full flex flex-col justify-center items-center p-6 rounded-md">
          <div className="pb-3">
            <FontAwesomeIcon
              className="h-12 w-12 text-lime-400"
              icon={faCheckCircle}
            />
          </div>
          <div className="text-md font-regular">Informasi telah tersimpan!</div>
        </div>
      </div>
    </div>
  );
}

export default success;
