import React from "react";
import cx from "classnames";
import {
  PersonIcon,
  MixerHorizontalIcon,
  ExitIcon,
} from "@radix-ui/react-icons";
import DropdownMenu from "../../dropdown-menu";
import Avatar from "../../avatar";

const menus = [
  {
    label: "Profile",
    icon: <PersonIcon className="mr-2 h-3.5 w-3.5" />,
  },
  {
    label: "Settings",
    icon: <MixerHorizontalIcon className="mr-2 h-3.5 w-3.5" />,
    shortcut: "⌘+,",
  },
  {
    label: "Logout",
    icon: <ExitIcon className="mr-2 h-3.5 w-3.5" />,
    custom_color:
      "text-pink-400 focus:bg-pink-50 dark:text-pink-500 dark:focus:bg-pink-900",
  },
];

const Profile: React.FC = () => {
  return (
    <DropdownMenu
      trigger={
        <button
          className={cx(
            "hidden items-center gap-4 rounded-sm p-4 hover:bg-gray-900 sm:flex",
            "group",
            "radix-state-open:bg-gray-50 dark:radix-state-open:bg-gray-900",
            "radix-state-on:bg-gray-50 dark:radix-state-on:bg-gray-900",
            "radix-state-delayed-open:bg-gray-50 radix-state-instant-open:bg-gray-50"
          )}
        >
          <div className="text-sm">{"Fallah Andy Prakasa".split(" ")[0]}</div>
          <Avatar
            name="Fallah Andy Prakasa"
            image="https://dummyimage.com/32x32/fff/000"
          />
        </button>
      }
      menu={menus}
    />
  );
};

export default Profile;
