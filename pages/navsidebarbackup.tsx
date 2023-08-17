import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faCalculator,
  faPieChart,
  faFolder,
  faFileLines,
  faRightFromBracket,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

function NavSideBar() {
  return (
    <div className="relative left-0 h-full w-1/5">
      <div className="flex flex-col justify-center p-4 bg-white fixed lg:left-0 lg:w-70">
        <h1 className="text-base font-bold text-blue-900">
          Sistem Manajemen Keuangan
        </h1>
        <h1 className="text-md font-medium text-blue-900 pb-4 w-full">
          CV Karya Mandiri Sejahtera
        </h1>

        {/* sub menu Manage*/}
        <h2 className="text-sm font-medium border-b-2 border-gray-500">
          Manage
        </h2>

        <div className=" my-2">
          {/* Menu Dashboard */}
          <div className="group flex mb-2 p-2 gap-4 justify-left items-center hover:bg-blue-600 rounded-md cursor-pointer w-full ">
            <div className="w-8 h-8 flex justify-center items-center ">
              <FontAwesomeIcon
                className="text-xl text-gray-600 group-hover:text-white "
                icon={faPieChart}
              />
            </div>
            <a
              className="w-28 text-gray-600 font-semibold text-base group-hover:text-white"
              href="../dashboard"
            >
              Dashboard
            </a>
          </div>
          {/* Menu master Data */}
          <div className="group flex mb-2 p-2 gap-4 justify-left items-center hover:bg-blue-600 rounded-md cursor-pointer w-full ">
            <div className="w-8 h-8 flex justify-center items-center ">
              <FontAwesomeIcon
                icon={faFolder}
                className="text-xl text-gray-600 group-hover:text-white "
              />
            </div>
            <a
              className="w-28 text-gray-600 font-semibold text-base group-hover:text-white"
              href="../masterdata/customer"
            >
              Master Data
            </a>
            <div className="w-8 h-8 flex justify-center items-center ">
              <FontAwesomeIcon
                className="text-base text-gray-600 group-hover:text-white "
                icon={faChevronDown}
              />
            </div>
          </div>
          {/* Menu Transaksi */}
          <div className="group flex mb-2 p-2 gap-4 justify-left items-center hover:bg-blue-600 rounded-md cursor-pointer w-full ">
            <div className="w-8 h-8 flex justify-center items-center ">
              <FontAwesomeIcon
                className="text-xl text-gray-600 group-hover:text-white "
                icon={faCalculator}
              />
            </div>
            <a
              className="w-28 text-gray-600 font-semibold text-base group-hover:text-white"
              href="../transaksi/orderretail"
            >
              Transaksi
            </a>
            <div className="w-8 h-8 flex justify-center items-center ">
              <FontAwesomeIcon
                className="text-base text-gray-600 group-hover:text-white "
                icon={faChevronDown}
              />
            </div>
          </div>
          {/* Menu Laporan */}
          <div className="group flex mb-2 p-2 gap-4 justify-left items-center hover:bg-blue-600 rounded-md cursor-pointer w-full">
            <div className="w-8 h-8 flex justify-center items-center ">
              <FontAwesomeIcon
                className="text-xl text-gray-600 group-hover:text-white "
                icon={faFileLines}
              />
            </div>
            <h3 className="w-28 text-gray-600 font-semibold text-base group-hover:text-white">
              Laporan
            </h3>
          </div>
        </div>

        {/* Sub Menu 2 */}
        <h2 className="text-sm font-medium border-b-2 border-gray-500">
          Account
        </h2>

        {/* menu Account */}
        <div className=" my-1">
          {/* Menu Profile */}
          <div className="group flex mb-2 p-2 justify-between items-center hover:bg-blue-600 rounded-md cursor-pointer w-full">
            {/* Foto Profile */}
            <div className="flex w-8 h-8 rounded-full bg-blue-300"></div>
            <div className="w-28">
              <a
                className="text-gray-600 font-semibold text-base group-hover:text-white"
                href="../setting"
              >
                Miahana
              </a>
              <h5 className="font-regular text-sm group-hover:text-white">
                Admin
              </h5>
            </div>
            <FontAwesomeIcon
              className="text-xl justify-center text-gray-600 group-hover:text-white"
              icon={faSliders}
            />
          </div>
          {/* Menu LogOut */}
          <div className="group flex mb-2 p-2 gap-4 justify-left items-center hover:bg-blue-600 rounded-md cursor-pointer w-full ">
            <div className="w-8 h-8 flex justify-center items-center ">
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="text-xl text-gray-600 group-hover:text-white"
              />
            </div>
            {/* Link LogOut */}
            <a
              className="w-28 text-gray-600 font-semibold text-base group-hover:text-white"
              href="../"
            >
              LogOut
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavSideBar;
