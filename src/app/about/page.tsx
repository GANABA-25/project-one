import { Metadata } from "next";
import About from "@/components/about/About";

export const metadata: Metadata = {
    title: "innovation hub",
    description: "search about and find out how we solve problems",
  };
  
  export default function AboutPage() {
  
    return (
      <>
        <main className="min-h-screen  text-[1.2rem] overflow-x-hidden">
          <About/>
        </main>
      </>
    );
  }



