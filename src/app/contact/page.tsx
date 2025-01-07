import { Metadata } from "next";
import Contact from "@/components/Contact/Contact";

export const metadata: Metadata = {
  title: "contact_us",
  description: "We Provide you with All the Tech Help you Need ",
};

export default function ContactPage() {
  return (
    <>
      <main>
        <Contact />
      </main>
    </>
  );
}
