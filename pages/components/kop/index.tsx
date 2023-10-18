import React from 'react';
import logoImage from "@/assets/elements/miaprofile.jpg";
import Image from "next/image";

const kop = () => {
  return (
    <div className="w-full bg-white m-0 p-4">
      <div className="w-full flex flex-row border-gray-200 h-fit p-5">
        <Image src={logoImage} alt="logo app" className="h-20 w-20 mr-4" />
        <div className="justify-center w-full">
          <h1 className="text-center font-bold text-2xl">
            CV Karya Mandiri Sejahtera
          </h1>
          <p className="text-md text-center">
            Perusahaan Paving Block yang menerima pesanan atau pemasangan semua
            jenis paving block seperti paving bata, paving cacing, hebel, dan
            lainnya. Adapun layanan pesanan dapat dilakukan melalui whatsApp :
            082138154723. Perusahaan ini beralamatkan di Jln Tanjung Senang.
          </p>
        </div>
      </div>
      <hr className="border-gray-800" />
      <hr className="border-2 mt-1 border-gray-800" />
    </div>
  );
}

export default kop;