import { User } from "@/config/types";
import getRandomColor from "@/utils/getRandomColor";
import getUserInitials from "@/utils/getUserInitials";
import Image from "next/image";
import React from "react";

type Props = {
  height: number;
  width: number;
  user: User;
  textSize?: "sm" | undefined;
};

function UserBanner({ height, width, user, textSize }: Props) {
  const bgColor = getRandomColor();
  const initials = getUserInitials(user.name);

  const containerStyle = {
    backgroundColor: bgColor,
    width,
    height,
  };

  const textStyle = {
    fontSize: textSize === "sm" ? "0.75em" : "inherit",
  };

  return (
    <div
      style={containerStyle}
      className="rounded-full text-white text-center flex items-center justify-center"
    >
      {user.imageURL ? (
        <Image
          src={user.imageURL}
          width={width}
          height={height}
          alt={user.name}
          className="rounded-full"
          priority
        />
      ) : (
        <span style={textStyle}>{initials}</span>
      )}
    </div>
  );
}

export default UserBanner;
