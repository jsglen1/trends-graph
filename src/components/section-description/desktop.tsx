import Image from "next/image";
import React from "react";
import {
  DESCRIPTION_TOPICS,
  DESCRIPTION_MUSIC,
  DESCRIPTION_CELEBRITIES,
} from "./content";

export default function DesktopSectionDescription() {
  return (
    <section id="start" className="flex space-x-5 items-center justify-center">
      <div className="w-1/2 ">
        <p>{DESCRIPTION_TOPICS}</p>
        <br />
        <p>{DESCRIPTION_MUSIC}</p>
        <br />
        <p>{DESCRIPTION_CELEBRITIES}</p>
      </div>
      <div className="w-1/2 ">
        <Image
          src="/trend-add.svg"
          loading="lazy"
          width={300}
          height={300}
          alt="trend-color.svg"
          className="w-full h-96 object-fill"
        />
      </div>
    </section>
  );
}
