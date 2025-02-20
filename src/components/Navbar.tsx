"use client";
import siteLogo from "../assets/Sitelogo.png";
import message from "../assets/message.png";
import announcement from "../assets/announcement.png";
import avatar from "../assets/avatar.png";
import Image from "next/image";
import Link from "next/link";

interface MenuProps {
  menuClicked: () => void;
  isMenuOpen: boolean;
}

function Navbar({ menuClicked }: MenuProps) {
  return (
    <div className="flex justify-between items-center py-2 px-4 bg-gray-900">
      <div className="flex items-center gap-2">
        <Image
          src={siteLogo}
          alt="logo"
          width={25}
          height={25}
          className="py-2 cursor-pointer"
          onClick={menuClicked}
          priority // Load this image eagerly
          style={{ width: "auto", height: "auto" }} // Maintain aspect ratio
        />
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <span className="hidden lg:block text-white font-serif font-bold">
            Aakirt
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image
            src={message}
            alt="message"
            width={20}
            height={20}
            priority // Load this image eagerly
            style={{ width: "auto", height: "auto" }} // Maintain aspect ratio
          />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image
            src={announcement}
            alt="announcement"
            width={20}
            height={20}
            priority // Load this image eagerly
            style={{ width: "auto", height: "auto" }} // Maintain aspect ratio
          />
        </div>
        <div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-900 leading-3 font-medium">
              {"Guest"}
            </span>
          </div>
        </div>
        <Link href="/">
          <Image
            src={avatar}
            width={40}
            height={40}
            alt="avatar"
            className="rounded-full object-cover w-10 h-10"
            priority // Load this image eagerly
            style={{ width: "auto", height: "auto" }} // Maintain aspect ratio
          />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;