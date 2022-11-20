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
import useMediaQuery from "../../../hooks/use-media-query";

const Header: React.FC = () => {
  const { isLG } = useMediaQuery();
  return (
    <div className="container fixed top-0 z-10 flex w-full items-center justify-between bg-black">
      <div className="flex items-center gap-4">
        <Logo />
        <Menu />
      </div>
      <div className="flex items-center lg:gap-12">
        {isLG ? (
          <Input variant="filled" leftElement={<MagnifyingGlassIcon />} />
        ) : (
          <IconButton icon={<MagnifyingGlassIcon />} />
        )}
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
