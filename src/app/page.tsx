"use client";
import Button from "@/components/Button";
import { appDescription, appName, userName } from "@/config/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col justify-center items-center flex-grow">
        <Image
          src="/zepto.jpeg"
          height={80}
          width={80}
          alt="Zepto"
          className="m-2"
        />

        <h1 className="text-3xl font-medium text-white m-1 select-none">
          {appName}
        </h1>
        <h4 className="text-base font-light text-gray-300 m-1 select-none">
          {appDescription}
        </h4>

        <div className="flex justify-center items-center m-2 p-2">
          <Button text="Get started" onClick={() => router.push("/chip")} />
        </div>
      </main>

      <footer className="text-center text-gray-400 p-4 text-sm">
        Designed and implemented by{" "}
        <Link href={`https://github.com/${userName}`} target="_blank">
          {userName}
        </Link>
      </footer>
    </div>
  );
}
