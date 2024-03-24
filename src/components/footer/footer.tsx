import React from "react";
import DesktopFooter from "./desktop";
import MobileFooter from "./mobile";

export default function Footer() {
  return (
    <div>
      <div className="hidden md:block pt-20">
        <DesktopFooter />
      </div>
      <div className="block md:hidden pt-10">
        <MobileFooter />
      </div>
    </div>
  );
}
