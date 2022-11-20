import React from "react";
import * as _Avatar from "@radix-ui/react-avatar";
import getFirstLetter from "../helpers/get-first-letter";

interface Props {
  name: string;
  image?: string;
}

const Avatar: React.FC<Props> = ({ name, image }) => {
  return (
    <_Avatar.Root className="inline-flex h-[32px] w-[32px] items-center justify-center overflow-hidden rounded-full bg-electric-pink-100 align-middle">
      <_Avatar.Image
        className="h-full w-full object-cover"
        src={image}
        alt="Avatar"
      />
      <_Avatar.Fallback
        className="flex h-full w-full items-center justify-center text-xs font-medium text-electric-pink-500"
        delayMs={600}
      >
        {getFirstLetter(name)}
      </_Avatar.Fallback>
    </_Avatar.Root>
  );
};

export default Avatar;
