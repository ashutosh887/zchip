import { User } from "@/config/types";
import React, { useState } from "react";

type Props = {
  userData: User[];
};

function UserChipSelect({ userData }: Props) {
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [availableUsers, setAvailableUsers] = useState<User[]>(userData);

  const handleUserChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const userId = event.target.value;
    const selectedUser = availableUsers.find((user) => user.id === userId);

    if (selectedUser) {
      setSelectedUsers((prevUsers) => [...prevUsers, selectedUser]);
      setAvailableUsers((prevAvailableUsers) =>
        prevAvailableUsers.filter((user) => user.id !== userId)
      );
    }
  };

  const handleRemoveUser = (userId: string) => {
    const removedUser = selectedUsers.find((user) => user.id === userId);

    if (removedUser) {
      setSelectedUsers((prevUsers) =>
        prevUsers.filter((user) => user.id !== userId)
      );
      setAvailableUsers((prevAvailableUsers) => [
        ...prevAvailableUsers,
        removedUser,
      ]);
    }
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="users" className="text-gray-300 my-2">
        Select users
      </label>

      {selectedUsers && (
        <div className="flex flex-wrap gap-2 w-80">
          {selectedUsers.map((user) => (
            <div
              key={user.id}
              className="bg-blue-500 text-white px-3 py-1 rounded-full flex items-center"
            >
              <span className="mr-2">{user.name}</span>
              <button
                type="button"
                onClick={() => handleRemoveUser(user.id)}
                className="text-white font-bold focus:outline-none"
              >
                x
              </button>
            </div>
          ))}
        </div>
      )}

      <select
        className="min-w-60 mt-2"
        id="users"
        value={selectedUsers.map((user) => user.id).join(",")}
        onChange={handleUserChange}
      >
        <option value="" disabled>
          Select a user
        </option>
        {availableUsers.map((user) => (
          <option value={user.id} className="text-black" key={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UserChipSelect;
