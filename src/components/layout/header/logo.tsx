import React from "react";
import Link from "next/link";
import { PlayLogo } from "../../../../public/svg";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex gap-4 p-4 hover:bg-gray-900">
      <div className="max-w-8 relative">
        <PlayLogo width="32" height="32" />
      </div>
      <div className="text-2xl font-bold">キレイック</div>
    </Link>
  );
};

export default Logo;
