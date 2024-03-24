import SectionStart from "@/components/section-start/section-start";
import React from "react";
import { TITLE } from "./content";
import LineChart from "@/components/line-chart/line-chart";

export default function page() {
  return (
    <main className="space-y-2 container m-auto">
      <h1 className="text-center text-xl py-2">{TITLE}</h1>
      <SectionStart />
    </main>
  );
}
