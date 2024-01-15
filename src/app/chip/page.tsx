"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

function Chip({}: Props) {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h4 className="font-light text-gray-300 select-none">Chip Component</h4>

      <div className="flex justify-center items-center m-2 p-2">
        <Button text="Back to home" onClick={() => router.push("/")} />
      </div>
    </div>
  );
}

export default Chip;
