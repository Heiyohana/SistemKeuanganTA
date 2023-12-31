import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from '@fortawesome/free-solid-svg-icons';
import styles from "./pemesanan.module.css";

type Props = {
  onCloseModal?: () => void;
};

const modalwarnbook: React.FC<Props> = (props) => {
  const handleCloseModal = () => {
    if (props.onCloseModal) {
      props.onCloseModal();
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[450px] flex flex-col bg-neutral-50 p-5 rounded-md relative">
        {/* icon */}
        <FontAwesomeIcon
          icon={faWarning}
          className="w-14 h-14 text-yellow-500 mx-auto mb-2"
        />
        {/* informasi */}
        <p className={`text-center ${styles.tex}`}>
          Maaf, tidak dapat diakses! Anda belum mengisi informasi pemesan.
          Silakan isi terlebih dahulu!
        </p>
        {/* button */}
        <button className={`bg-blue-600 w-full max-w-[100px] h-8 rounded-md text-white mx-auto mt-3 ${styles.button}`} onClick={handleCloseModal}>
          Oke
        </button>
      </div>
    </div>
  );
}

export default modalwarnbook