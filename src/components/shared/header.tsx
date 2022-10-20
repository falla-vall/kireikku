import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavigationMenu from "../navigation-menu";
import Button from "../button";

const Header: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-primary-500">
      <div className="flex items-center gap-8">
        <Link href="/">
          <a className="flex items-center bg-primary-600 hover:bg-primary-700 rounded-r-full gap-4 -ml-6 pl-10 pr-4 py-2">
            <div className="w-12 h-12 rounded-full overflow-clip relative">
              <Image
                src="/images/icons/icon-72x72.png"
                alt="icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="text-xl text-quaternary-500 font-bold">
              Kireikki
            </div>
          </a>
        </Link>
        <NavigationMenu />
      </div>
      <Button className="bg-white hover:bg-primary-600 text-primary-500 hover:text-white rounded-full">
        Masuk
      </Button>
    </nav>
  );
};

export default Header;
