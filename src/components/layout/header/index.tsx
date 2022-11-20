import React from "react";
import { useSession } from "next-auth/react";
import {
  BellIcon,
  ChatBubbleIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import Button from "../../button";
import IconButton from "../../icon-button";
import Input from "../../input";
import Logo from "./logo";
import Menu from "./menu";
import useMediaQuery from "../../../hooks/use-media-query";
import Profile from "./profile";

const Header: React.FC = () => {
  const { isLG } = useMediaQuery();
  const { data: session } = useSession();
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
          {session ? (
            <Profile />
          ) : (
            <div className="px-4">
              <Button>Sign In</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
