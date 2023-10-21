import React from 'react';
import styles from "./kop.module.css";

const kop = () => {
  return (
    <div className="w-full h-fit m-0 mt-5 bg-blue-500 text-white">
      <div className="w-full flex flex-row border-gray-200 h-fit px-5 py-3">
        <div className="justify-center w-full">
          <h1 className={`text-center ${styles.title}`}>CV Karya Mandiri Sejahtera</h1>
          <p className={`${styles.isikop} text-center`}>
            Perusahaan paving block yang menerima pesanan paving bata, cacing,
            grass block, hebel, uskup, dan lainnya. <br />
            Menerima jasa pasang dan pengiriman. <br />
            Jalan Sukarame | Info pemesanan : WA. 0812 - 3123 - 4678
          </p>
        </div>
      </div>
    </div>
  );
}

export default kop;