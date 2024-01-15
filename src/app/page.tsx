import { appDescription, appName } from "@/config/constants";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl font-medium">{appName}</h1>
      <h4 className="text-sm font-light">{appDescription}</h4>
    </main>
  );
}
