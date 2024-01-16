import { User } from "@/config/types";
import React, { useState } from "react";
import Image from "next/image";

type Props = {
  userData: User[];
};

function UserChipSelect({ userData }: Props) {
  const [selectedUser, setSelectedUser] = useState<string>("");

  const handleUserChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUser(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="users" className="text-gray-300 my-2">
        Select users
      </label>

      <select
        className="min-w-60"
        id="users"
        value={selectedUser}
        onChange={handleUserChange}
      >
        <option value="" disabled>
          Select a user
        </option>
        {userData.map((user) => (
          <option value={user.id} className="text-black" key={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UserChipSelect;
