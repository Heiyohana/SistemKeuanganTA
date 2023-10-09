import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";

type Props = {
  onCloseModal?: () => void;
};

const konfirmLogout: React.FC<Props> = (props) => {
  const handleCloseModal = () => {
    if (props.onCloseModal) {
      props.onCloseModal();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[200] flex flex-col bg-neutral-50 p-5 rounded-md relative">
        {/* informasi */}
        <p>Apakah Anda ingin keluar / logout dari sistem ini?</p>
        {/* button */}
        <div className="flex flex-row gap-4 justify-center">

        <button className="bg-blue-600 w-20 h-8 rounded-md text-white font-semibold justify-center items-center" onClick={handleCloseModal}>
          Batal
        </button>
        <button className="bg-blue-600 w-20 h-8 rounded-md text-white font-semibold justify-center items-center">
          Ya
        </button>
        </div>
      </div>
    </div>
  );
};

export default konfirmLogout;
