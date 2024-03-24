import LineChart from "@/components/line-chart/line-chart";
import { CommandSearch } from "@/components/search/search";
import React from "react";

export default function page() {
  return (
    <div className="space-y-2 container m-auto">
      <h1 className="text-center text-xl py-2">Explore</h1>
      <CommandSearch />
    </div>
  );
}
