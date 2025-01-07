import { Metadata } from "next";
import Innovation from "@/components/innovation/Innovation";

export const metadata: Metadata = {
  title: "Innovation Hub",
  description: "search about and find out how we solve problems",
};

const InnovationPage = () => {
  return (
    <>
      <main className="min-h-screen  text-[1.2rem] overflow-x-hidden">
        <Innovation />
      </main>
    </>
  );
};

export default InnovationPage;
