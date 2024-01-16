import { User } from "@/config/types";
import React, { useEffect, useRef, useState } from "react";
import UserBanner from "./UserBanner";
import UserChip from "./UserChip";

type Props = {
  userData: User[];
};

function UserChipSelect({ userData }: Props) {
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isListVisible, setIsListVisible] = useState<boolean>(false);
  const listRef = useRef<HTMLUListElement>(null);
  const componentRef = useRef<HTMLDivElement>(null);

  const handleUserChange = (userId: string) => {
    const selectedUser = userData.find((user) => user.id === userId);

    if (selectedUser) {
      setSelectedUsers((prevUsers) => [...prevUsers, selectedUser]);
      setSearchQuery("");
      setIsListVisible(false);
    }
  };

  const handleRemoveUser = (userId: string) => {
    const removedUser = selectedUsers.find((user) => user.id === userId);

    if (removedUser) {
      setSelectedUsers((prevUsers) =>
        prevUsers.filter((user) => user.id !== userId)
      );
      setSearchQuery("");
      setIsListVisible(false);
    }
  };

  const filteredUsers = userData.filter(
    (user) =>
      !selectedUsers.find((selectedUser) => selectedUser.id === user.id) &&
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInputMouseDown = () => {
    setIsListVisible(true);
  };

  const handleListMouseDown = () => {
    setIsListVisible(true);
  };

  const handleClearInput = () => {
    setSearchQuery("");
    setIsListVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target as Node)
      ) {
        setIsListVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col relative w-80" ref={componentRef}>
      <label htmlFor="users" className="text-gray-300 my-2">
        Select users
      </label>

      {selectedUsers.length > 0 && (
        <div className="flex flex-wrap gap-2 w-80">
          {selectedUsers.map((user) => (
            <UserChip key={user.id} user={user} action={handleRemoveUser} />
          ))}
        </div>
      )}

      <div className="relative">
        <div className="flex items-center relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onMouseDown={handleInputMouseDown}
            className="w-80 mt-2 p-2"
            placeholder="Search users..."
          />
          {searchQuery && (
            <button
              type="button"
              onClick={handleClearInput}
              className="absolute right-2 top-2 text-gray-500"
            >
              &#x2715;
            </button>
          )}
        </div>

        {isListVisible && filteredUsers.length > 0 && (
          <ul
            ref={listRef}
            className="flex flex-col items-center w-80 mt-2 p-1 rounded-md z-10 max-h-64 overflow-y-auto absolute bg-white space-y-1"
            onMouseDown={handleListMouseDown}
          >
            {filteredUsers.map((user) => (
              <li
                key={user.id}
                className="text-black cursor-pointer py-1 transition-all duration-150 border border-white hover:border-blue-300 mx-1 w-full text-center flex justify-start items-center space-x-4 p-1"
                onClick={() => handleUserChange(user.id)}
              >
                <UserBanner height={30} width={30} user={user} />

                <span>{user.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {filteredUsers.length === 0 && searchQuery && (
        <p className="text-gray-500 mt-2">No users found</p>
      )}
    </div>
  );
}

export default UserChipSelect;
