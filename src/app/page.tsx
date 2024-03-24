import SectionStart from "@/components/section-start/section-start";
import React from "react";
import { TITLE } from "./content";
import LineChart from "@/components/line-chart/line-chart";
import SectionDescription from "@/components/section-description/section-description";

export default function page() {
  return (
    <div className="space-y-2 container m-auto">
      <h1 className="text-center text-xl py-5 font-extrabold">{TITLE}</h1>
      <SectionStart />
      <SectionDescription />
    </div>
  );
}
