import React from "react";
import DesktopSectionDescription from "./desktop";
import MobileSectionDescription from "./mobile";

export default function SectionDescription() {
  return (
    <div>
      <div className="hidden md:block py-20">
        <DesktopSectionDescription />
      </div>

      <div className="block md:hidden py-10">
        <MobileSectionDescription />
      </div>
    </div>
  );
}
