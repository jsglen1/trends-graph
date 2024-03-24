import Image from "next/image";
import React from "react";
import { DESCRIPTION } from "./content";

export default function DesktopSectionStart() {
  return (
    <section id="start" className="flex space-x-5 items-center justify-center">
      <div className="w-1/2 ">
        <Image
          src="/trend-color.svg"
          loading="lazy"
          width={300}
          height={300}
          alt="trend-color.svg"
          className="w-full h-80 object-fill"
        />
      </div>
      <div className="w-1/2 ">
        <p className="">{DESCRIPTION}</p>
      </div>
    </section>
  );
}
