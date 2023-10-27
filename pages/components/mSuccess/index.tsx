import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const ModalSuccess = ( ) => {

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[200] flex flex-col bg-neutral-50 p-7 rounded-md items-center justify-center">
        {/* informasi */}
        <FontAwesomeIcon icon={faCheckCircle} className="text-lime-400 w-[60px] h-[60px] flex items-center justify-center mb-2"/>
        <p className="justify-center items-center text-center">
          Informasi yang Anda masukan <br /> telah tersimpan!
        </p>
      </div>
    </div>
  );
};

export default ModalSuccess;