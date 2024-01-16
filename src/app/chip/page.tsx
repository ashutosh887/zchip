"use client";
import Button from "@/components/Button";
import UserChipSelect from "@/components/UserChipSelect";
import { sampleUsers } from "@/config/mock";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

function Chip({}: Props) {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <UserChipSelect userData={sampleUsers} />

      <div className="flex justify-center items-center m-1 p-2">
        <Button text="Back to home" onClick={() => router.push("/")} />
      </div>
    </div>
  );
}

export default Chip;
