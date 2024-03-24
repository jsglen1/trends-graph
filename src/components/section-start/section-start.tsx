import Image from "next/image";
import React from "react";
import DesktopSectionStart from "./desktop";
import MobileSectionStart from "./mobile";

export default function SectionStart() {
  return (
    <div>
      <div className="hidden md:block py-20">
        <DesktopSectionStart />
      </div>

      <div className="block md:hidden pt-10">
        <MobileSectionStart />
      </div>
    </div>
  );
}
