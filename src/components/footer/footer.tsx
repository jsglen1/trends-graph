import React from "react";
import DesktopFooter from "./desktop";
import MobileFooter from "./mobile";

export default function Footer() {
  return (
    <div>
      <div className="hidden md:block">
        <DesktopFooter />
      </div>
      <div className="block md:hidden">
        <MobileFooter />
      </div>
    </div>
  );
}
