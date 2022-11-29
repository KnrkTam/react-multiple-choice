import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDownIcon, HamburgerIcon, XIcon } from "../svg";
import Drawer from "./drawer";
import Logo from "./logo";
import NavItems from "./navItems";
import { useRouter } from "next/router";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };
  const router = useRouter();

  useEffect(() => {
    setNav(false);
  }, [router.pathname]);

  useEffect(() => {
    const closeNav = () => setNav(false);
    window.addEventListener("scroll", closeNav);
    return () => window.removeEventListener("scroll", closeNav);
  }, []);

  return (
    <>
      <nav className="w-full sticky top-0 h-30 bg-white lg:h-[13vh] z-50 lg:px-5">
        <div className="flex items-center justify-between space-around h-full m-auto max-w-[1400px] flex-nowrap px-5">
          <button className="md:hidden" onClick={toggleNav}>
            {!nav ? (
              <HamburgerIcon className=""></HamburgerIcon>
            ) : (
              <XIcon className=""></XIcon>
            )}
          </button>
          <Logo />
          <div className="invisible">nav gap</div>
          <div className="space-x-2 hidden md:flex items-center lg:ml-[30%]">
            <NavItems />
          </div>
          <div className="hidden md:flex space-x-2 max-w-1/5 p-0 justify-end ">
            <Link href="/application">
              <button className="hover:bg-red-600 bg-red-500 text-white rounded-lg  ">
                立即報名
              </button>
            </Link>
            <Link href="/application">
              <button className="hover:bg-red-100 bg-white border border-red-500 text-red-500 rounded-lg ">
                預約補鐘
              </button>
            </Link>
          </div>
        </div>
        <Drawer nav={nav} />
      </nav>
    </>
  );
}
