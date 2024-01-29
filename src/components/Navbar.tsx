'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const Navbar = () => {
  const [menuIsClose, setMenuIsClose] = useState(true)

  const handleMenuIcons = () => {
    setMenuIsClose(prev => !prev)
  }


  return (
    <div className="flex items-center justify-between min-h-16">
      <div>
        <Link href={"/"}>
          <h1 className="font-bold text-3xl text-orange-300">Toktomee</h1>
        </Link>
      </div>
      <div className="md:hidden cursor-pointer" onClick={handleMenuIcons}>
        <Image src={'/images/open-menu-icon.svg'} width={40} height={40} className={`${menuIsClose ? '': 'hidden'}`} alt='open menu icon'/>
        <Image src={'/images/close-menu-icon.svg'} width={40} height={40} className={`${menuIsClose ? 'hidden': ''}`} alt='close menu icon'/>
      </div>
      <nav className={`${menuIsClose? 'hidden md:block': ''}`}>
        <ul className="flex items-center gap-4 text-gray-300">
          <li className="hover:text-wihte hover:font-medium">
            <Link href={"/"}>Vioce Chat</Link>
          </li>
          <li className="hover:text-white hover:font-medium">
            <Link href={"/About"}>About Us</Link>
          </li>
          <li className="hover:text-wihte hover:font-medium">
            <Link href={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
