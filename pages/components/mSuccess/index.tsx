import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const ModalSuccess = ( ) => {

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[200] flex flex-col bg-neutral-50 p-5 rounded-md relative">
        {/* informasi */}
        <FontAwesomeIcon icon={faCheckCircle} className="text-lime-300 w-[150] h-[150]"/>
        <p className="justify-center items-center text-center mb-3">
          Data telah tersimpan
        </p>        
      </div>
    </div>
  );
};

export default ModalSuccess;
