"use client";

import { SectionHeading } from "~/components/ui/section-heading";
import data from "../data.json";
import { Form } from "./form";
import { MessageProvider } from "~/contexts/message-context";

export function Contact() {
  return (
    <section className="w-full bg-[#141414]">
      <div className="container">
        <SectionHeading
          title={data.title}
          subTitle={data.subTitle}
          email={data.email}
          className="mt-12"
        />
      </div>
    </section>
  );
}
