import {
  faChevronDown,
  faFileLines,
  faFolder,
  faCalculator,
  faPieChart,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import MKonfirmLogout from "../mKonfirmasiLogout";
import Image from "next/image";
import fotoProfile from "@/assets/elements/miaprofile.jpg";

const NavSideBar = () => {
  const Menus = [
    {
      title: "Dashboard",
      icon: faPieChart,
      path: "../dashboard",
      spacing: true,
      section: "MANAGE",
    },
    {
      title: "Master Data",
      icon: faFolder,
      submenu: true,
      path: "../masterdata/customer",
      submenuItems: [
        { title: "Master Data Customer", path: "../masterdata/customer" },
        { title: "Master Data Produk", path: "../masterdata/produk" },
        { title: "Master Data Akun User", path: "../masterdata/user" },
      ],
    },
    {
      title: "Transaksi",
      icon: faCalculator,
      submenu: true,
      path: "../transaksi/orderretail",
      submenuItems: [
        { title: "Order Retail", path: "../transaksi/orderretail" },
        { title: "Arus Kas", path: "../transaksi/aruskas" },
        {
          title: "Pencatatan Jumlah Produksi",
          path: "../transaksi/jumlahproduksi",
        },
      ],
    },
    {
      title: "Laporan",
      icon: faFileLines,
      submenu: true,
      path: "../laporan/laporanpesanan",
      submenuItems: [
        { title: "Pesanan", path: "../laporan/laporanpesanan" },
        { title: "Arus Kas", path: "../laporan/aruskas" },
        {
          title: "Jumlah Produksi Harian",
          path: "../laporan/jumlahproduksiharian",
        },
      ],
    },
    {
      title: "Profile",
      icon: faFolder,
      path: "../profile",
      spacing: true,
      section: "ACCOUNT",
    },
    {
      title: "Keluar",
      icon: faSignOut,
    },
  ];

  const [submenuOpenStatus, setSubmenuOpenStatus] = useState(
    Menus.map(() => false)
  );

  const handleSubmenuToggle = (index: number) => {
    // Create a copy of submenuOpenStatus array
    const updatedSubmenuOpenStatus = [...submenuOpenStatus];
    // Toggle the status of the submenu for the clicked menu
    updatedSubmenuOpenStatus[index] = !updatedSubmenuOpenStatus[index];
    // Update the state with the new array
    setSubmenuOpenStatus(updatedSubmenuOpenStatus);
  };

  const router = useRouter();

  const [isModalLogoutOpen, setIsModalLogoutOpen] = useState(false);
  const onModalLogoutClick = () => {
    setIsModalLogoutOpen(true);
  };
  const onCloseModalLogout = () => {
    setIsModalLogoutOpen(false);
  };

  return (
    <div className="flex h-full w-1/5 left-0">
      <div className="bg-blue900 p-2 pt-5 bg-white w-full">
        <div className="text-md font-bold text-neutral-900">
          Sistem Manajemen Keuangan
        </div>
        <div className="text-sm font-medium text-neutral-700 pb-4">
          CV Karya Mandiri Sejahtera
        </div>

        {/* sub menu */}
        <div>
          {Menus.map((menu, index) => {
            return (
              <React.Fragment key={index}>
                {/* Buat kasih section manage dan account */}
                {menu.spacing && (
                  <span className="flex text-xs font-bold border-b-2 mt-3 border-blue-400 text-blue-400">
                    {menu.section}
                  </span>
                )}
                {/* Buat menu */}
                {menu.title === "Keluar" ? (
                  <li className="text-sm flex items-center justify-between gap-x-4 cursor-pointer p-3 pl-4 decoration-none hover:bg-blue-600 hover:text-white">
                    <button
                      onClick={onModalLogoutClick}
                      className="text-base flex-inline"
                    >
                      <FontAwesomeIcon
                        icon={menu.icon}
                        className="h-5 w-5 pr-5 font-regular"
                      />
                      <span className="font-bold">{menu.title}</span>
                    </button>
                  </li>
                ) : menu.title === "Profile" ? (
                  <li className="text-sm flex items-center justify-between gap-x-4 cursor-pointer p-3 pl-4 decoration-none hover:bg-blue-600 hover:text-white">
                    <Link key={index} href={`${menu.path}`}>
                      <div className="flex flex-row group">
                        <div className="pr-4">
                          <Image
                            src={fotoProfile}
                            alt="Foto Profile"
                            className="h-[28px] w-[28px] rounded-full object-cover flex"
                          />
                        </div>
                        <span className="font-bold text-base flex">
                          {menu.title}
                        </span>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li
                    // className="text-base flex-inline"
                    className={`text-sm flex items-center justify-between gap-x-4 cursor-pointer p-3 pl-4 decoration-none hover:bg-blue-600 hover:text-white ${
                      router.pathname === menu.path
                        ? "bg-blue-600 text-white"
                        : ""
                    }`}
                  >
                    <Link
                      key={index}
                      href={`${menu.path}`}
                      className={`text-base flex-inline`}
                    >
                      <FontAwesomeIcon
                        icon={menu.icon}
                        className="h-5 w-5 pr-5 font-regular"
                      />
                      <span className="font-bold">{menu.title}</span>
                    </Link>

                    {/* Menambahkan icon chevron */}
                    {menu.submenu && (
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`${
                          submenuOpenStatus[index] && "rotate-180"
                        }`}
                        onClick={() => handleSubmenuToggle(index)}
                      />
                    )}
                  </li>
                )}

                {menu.submenu && submenuOpenStatus[index] && (
                  <ul>
                    {menu.submenuItems.map((submenuItem, subIndex) => (
                      <Link
                        href={submenuItem.path}
                        key={subIndex}
                        className={`text-neutral-500 text-sm font-semibold flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-blue-200 hover:text-blue-800`}
                      >
                        {submenuItem.title}
                      </Link>
                    ))}
                  </ul>
                )}
              </React.Fragment>
            );
          })}
        </div>
        {isModalLogoutOpen && (
          <MKonfirmLogout onCloseModal={onCloseModalLogout} />
        )}
      </div>
    </div>
  );
};

export default NavSideBar;
