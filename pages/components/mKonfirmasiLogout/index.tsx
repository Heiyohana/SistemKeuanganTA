import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

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
        <p className="justify-center items-center text-center mb-3">
          Apakah Anda ingin keluar / <br /> logout dari sistem ini?
        </p>
        {/* button */}
        <div className="flex flex-row gap-4 justify-center">
          <div className="flex bg-white border border-blue-500 rounded-md p-2 w-20 h-8 font-semibold text-blue-600 items-center justify-center">
            <button onClick={handleCloseModal}>Batal</button>
          </div>
          <div className="group flex bg-blue-500 rounded-md p-2 w-20 h-8 font-semibold text-white items-center justify-center">
            <Link
              href="../masuk"
            >
              Ya
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default konfirmLogout;
