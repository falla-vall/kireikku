import React from "react";
import Image from "next/image";

const CardItem: React.FC = () => {
  return (
    <div className="flex max-w-[150px] flex-col gap-2">
      <Image
        src="https://dummyimage.com/150x210/fff/000"
        alt="card-pic"
        width={150}
        height={210}
        className="overflow-clip rounded-lg object-cover"
      />
      <div className="flex flex-col">
        <div className="text-lg font-bold">Title</div>
        <div className="text-sm">Description</div>
      </div>
    </div>
  );
};

export default CardItem;
