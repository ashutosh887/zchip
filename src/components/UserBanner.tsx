import { User } from "@/config/types";
import getRandomColor from "@/utils/getRandomColor";
import getUserInitials from "@/utils/getUserInitials";
import Image from "next/image";
import React from "react";

type Props = {
  height: number;
  width: number;
  user: User;
};

function UserBanner({ height, width, user }: Props) {
  const bgColor = getRandomColor();
  const initials = getUserInitials(user.name);

  return (
    <div
      style={{ backgroundColor: bgColor, width, height }}
      className="rounded-full text-white text-center flex items-center justify-center"
    >
      {user.imageURL ? (
        <Image
          src={user.imageURL}
          width={30}
          height={30}
          alt={user.name}
          className="rounded-full"
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}

export default UserBanner;
