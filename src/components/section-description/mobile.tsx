import Image from "next/image";
import React from "react";
import {
  DESCRIPTION_CELEBRITIES,
  DESCRIPTION_MUSIC,
  DESCRIPTION_TOPICS,
} from "./content";

export default function MobileSectionDescription() {
  return (
    <section
      id="start"
      className="flex flex-col space-y-5 items-center justify-center"
    >
      <Image
        src="/trend-add.svg"
        loading="lazy"
        width={300}
        height={300}
        alt="trend-color.svg"
      />
      <p>{DESCRIPTION_TOPICS}</p>
      <br />
      <p>{DESCRIPTION_MUSIC}</p>
      <br />
      <p>{DESCRIPTION_CELEBRITIES}</p>
    </section>
  );
}
