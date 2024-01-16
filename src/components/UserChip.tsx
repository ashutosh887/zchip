import { User } from "@/config/types";
import React from "react";
import UserBanner from "./UserBanner";

type Props = {
  key: string;
  user: User;
  action: (id: string) => void;
};

function UserChip({ key, user, action }: Props) {
  return (
    <div
      key={key}
      className="flex justify-between items-center bg-gray-600 p-1 px-3 rounded-full text-white space-x-1"
    >
      <UserBanner user={user} height={20} width={20} textSize="sm" />

      <div className="flex justify-start items-center">
        <span className="text-sm">{user.name}</span>

        <button
          type="button"
          onClick={() => action(user.id)}
          className="text-white text-sm focus:outline-none ml-2"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default UserChip;
