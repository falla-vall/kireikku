import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cx from "classnames";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { HomeIcon, HeartIcon, CountdownTimerIcon } from "@radix-ui/react-icons";

const Sidebar: React.FC = () => {
  const router = useRouter();
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
  ];
  return (
    <NavigationMenu.Root className="flex max-h-screen items-center justify-center">
      <NavigationMenu.List className="flex flex-col">
        {menus.map((menu) => (
          <NavigationMenu.Item key={menu.href}>
            <Link
              className={cx(
                "flex h-16 w-16 items-center justify-center rounded-sm border-l-4 border-transparent hover:bg-gray-900",
                {
                  "border-electric-pink-500": router.pathname === menu.href,
                }
              )}
              href={menu.href}
            >
              {menu.icon}
            </Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default Sidebar;
