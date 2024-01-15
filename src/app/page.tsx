"use client";
import Button from "@/components/Button";
import { appDescription, appName } from "@/config/constants";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-medium text-white m-1 select-none">
        {appName}
      </h1>
      <h4 className="text-sm font-light text-gray-300 m-1 select-none">
        {appDescription}
      </h4>

      <div className="flex justify-center items-center m-2 p-2">
        <Button text="Get started" onClick={() => router.push("/chip")} />
      </div>
    </main>
  );
}
