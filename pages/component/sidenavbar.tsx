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
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

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
      submenuItems: [
        { title: "Pesanan", path: "../laporan/laporan-pesanan" },
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
    { title: "Keluar", icon: faSignOut, path: "../masuk" },
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

  return (
    <div className="flex h-full w-1/5">
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
                <li
                  // className="text-base flex-inline"
                  className={
                    `${router.pathname == `/${menu.title}` && "active"}`
                      ? "text-sm flex items-center justify-between gap-x-4 cursor-pointer bg-blue-600 text-white p-3 pl-4 decoration-none hover:bg-white hover:text-neutral-700"
                      : "text-sm flex items-center justify-between gap-x-4 cursor-pointer text-neutral-500 hover:bg-blue-600 hover:text-white p-3 pl-4 decoration-none"
                  }
                >
                  <Link
                    key={index}
                    href={`${menu.path}`}
                    className="text-base flex-inline"
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
                      className={`${submenuOpenStatus[index] && "rotate-180"}`}
                      onClick={() => handleSubmenuToggle(index)}
                    />
                  )}
                </li>

                {menu.submenu && submenuOpenStatus[index] && (
                  <ul>
                    {menu.submenuItems.map((submenuItem, subIndex) => (
                      <Link
                        href={submenuItem.path}
                        key={index}
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
          <ul>
            {Menus.map((menu, index) => (
              <></>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavSideBar;
