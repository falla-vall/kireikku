import React from "react";
import Image from "next/image";

const Profile: React.FC = () => {
  return (
    <button className="hidden items-center gap-4 rounded-sm p-4 hover:bg-gray-900 sm:flex">
      <div className="text-sm">flla</div>
      <Image
        src="https://dummyimage.com/32x32/fff/000"
        alt="Avatar"
        className="rounded-sm outline-cetacean-blue-500 hover:outline"
        width={32}
        height={32}
      />
    </button>
  );
};

export default Profile;
