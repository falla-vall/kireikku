import React from "react";
import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

const Menu: React.FC = () => {
  const menus = [
    {
      name: "Popular",
      href: "/popular",
    },
    {
      name: "New",
      href: "/new",
    },
    {
      name: "Top",
      href: "/top",
    },
  ];
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="flex">
        {menus.map((menu) => (
          <NavigationMenu.Item key={menu.name}>
            <Link
              className="rounded-full p-2 text-sm hover:bg-gray-900"
              href={menu.href}
            >
              {menu.name}
            </Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default Menu;
