import React from "react";
import cx from "classnames";
import * as _DropdownMenu from "@radix-ui/react-dropdown-menu";

interface RadixMenuItem {
  label: string;
  shortcut?: string;
  icon?: React.ReactNode;
  custom_color?: string;
}

interface Props {
  trigger: React.ReactNode;
  menu: RadixMenuItem[];
}

const DropdownMenu: React.FC<Props> = ({ trigger, menu }) => {
  return (
    <div className="relative inline-block text-left">
      <_DropdownMenu.Root>
        <_DropdownMenu.Trigger asChild>{trigger}</_DropdownMenu.Trigger>
        <_DropdownMenu.Portal>
          <_DropdownMenu.Content
            align="end"
            sideOffset={5}
            className={cx(
              "radix-side-bottom:animate-slide-down radix-side-top:animate-slide-up",
              "w-48 rounded-lg px-1.5 py-1 shadow-sm shadow-gray-800 md:w-56",
              "bg-black"
            )}
          >
            <_DropdownMenu.Label />
            {menu.map(({ label, icon, shortcut, custom_color }, i) => (
              <_DropdownMenu.Item
                key={`${label}-${i}`}
                className={cx(
                  "flex cursor-pointer select-none items-center rounded-md px-2 py-2 text-xs outline-none",
                  {
                    "text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900":
                      !custom_color,
                  },
                  {
                    [`${custom_color}`]: custom_color,
                  }
                )}
              >
                {icon}
                <span className="flex-grow text-gray-700 dark:text-gray-300">
                  {label}
                </span>
                {shortcut && <span className="text-xs">{shortcut}</span>}
              </_DropdownMenu.Item>
            ))}

            <_DropdownMenu.Group>
              <_DropdownMenu.Item />
            </_DropdownMenu.Group>

            <_DropdownMenu.CheckboxItem>
              <_DropdownMenu.ItemIndicator />
            </_DropdownMenu.CheckboxItem>

            {/* <_DropdownMenu.RadioGroup>
            <_DropdownMenu.RadioItem>
              <_DropdownMenu.ItemIndicator />
            </_DropdownMenu.RadioItem>
          </_DropdownMenu.RadioGroup> */}

            <_DropdownMenu.Sub>
              <_DropdownMenu.SubTrigger />
              <_DropdownMenu.Portal>
                <_DropdownMenu.SubContent />
              </_DropdownMenu.Portal>
            </_DropdownMenu.Sub>

            <_DropdownMenu.Separator />
            <_DropdownMenu.Arrow />
          </_DropdownMenu.Content>
        </_DropdownMenu.Portal>
      </_DropdownMenu.Root>
    </div>
  );
};

export default DropdownMenu;
