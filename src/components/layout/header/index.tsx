import React from "react";
import {
  BellIcon,
  ChatBubbleIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import IconButton from "../../icon-button";
import Input from "../../input";
import Logo from "./logo";
import Menu from "./menu";
import Profile from "./profile";

const Header: React.FC = () => {
  return (
    <div className="fixed top-0 flex w-full items-center justify-between bg-black">
      <div className="flex items-center gap-4">
        <Logo />
        <Menu />
      </div>
      <div className="flex items-center gap-12">
        <Input variant="filled" leftElement={<MagnifyingGlassIcon />} />
        <div className="flex items-center">
          <IconButton icon={<BellIcon />} />
          <IconButton icon={<ChatBubbleIcon />} />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Header;
