import Image from "next/image";
import React from "react";
import { DESCRIPTION } from "./content";

export default function MobileSectionStart() {
  return (
    <section
      id="start"
      className="flex flex-col space-y-5 items-center justify-center"
    >
      <Image
        src="/trend-color.svg"
        loading="lazy"
        width={300}
        height={300}
        alt="trend-color.svg"
      />
      <p className="">{DESCRIPTION}</p>
    </section>
  );
}
