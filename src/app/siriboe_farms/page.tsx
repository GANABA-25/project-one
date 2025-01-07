import { Metadata } from "next";

import SiriboeFarms from "@/components/siriboeFarms/SiriboeFarms";

export const metadata: Metadata = {
  title: "siriboe farms",
  description: "search about and find out how we solve problems",
};

export default function SiriboeFarmsPage() {
  return (
    <>
      <main className="min-h-screen  text-[1.2rem] overflow-x-hidden">
        <SiriboeFarms />
      </main>
    </>
  );
}
