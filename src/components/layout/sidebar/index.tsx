import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cx from "classnames";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {
  HomeIcon,
  HeartIcon,
  CountdownTimerIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import useMediaQuery from "../../../hooks/use-media-query";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const { isSM } = useMediaQuery();
  const menus = [
    {
      icon: <HomeIcon />,
      href: "/",
    },
    {
      icon: <HeartIcon />,
      href: "/saved",
    },
    {
      icon: <CountdownTimerIcon />,
      href: "/top",
    },
    {
      icon: <PersonIcon />,
      href: "/profile",
      isHidden: isSM,
    },
  ];
  return (
    <NavigationMenu.Root className="fixed bottom-0 z-[5] flex max-h-screen w-full items-center justify-center bg-black md:top-0 md:w-auto">
      <NavigationMenu.List className="flex flex-row md:flex-col">
        {menus.map(
          (menu) =>
            !menu.isHidden && (
              <NavigationMenu.Item key={menu.href}>
                <Link
                  className={cx(
                    "flex h-16 w-16 items-center justify-center rounded-sm border-t-4 border-l-0 border-transparent hover:bg-gray-900 md:border-t-0 md:border-l-4",
                    {
                      "border-electric-pink-500": router.pathname === menu.href,
                    }
                  )}
                  href={menu.href}
                >
                  {menu.icon}
                </Link>
              </NavigationMenu.Item>
            )
        )}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default Sidebar;
