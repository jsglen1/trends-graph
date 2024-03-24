import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DesktopFooter() {
  return (
    <footer>
      <div className="flex flex-wrap gap-5 items-center justify-center p-5">
        <ul className="mx-auto space-y-2 ">
          <li className="mb-2">
            <h2 className="font-semibold">Services</h2>
          </li>

          <li className="flex space-x-2 ">
            {" "}
            <Image
              loading="lazy"
              src={"/grade.svg"}
              width={30}
              height={30}
              alt="github.svg"
            />
            <p>Systems Engineer</p>
          </li>

          <li className="flex space-x-2 ">
            <Image
              loading="lazy"
              src={"/pc.svg"}
              width={30}
              height={30}
              alt="lineding.svg"
            />
            <p>Software Developer</p>
          </li>
        </ul>

        <ul className="mx-auto space-y-2">
          <li className="mb-2">
            <h2 className="font-semibold">Contact me</h2>
          </li>

          <li className="flex space-x-2">
            <Image
              loading="lazy"
              src={"/whatsapp.svg"}
              width={30}
              height={30}
              alt="whatsapp.svg"
            />
            <p>+(57) 3218774170</p>
          </li>

          <li className="flex space-x-2">
            {" "}
            <Image
              loading="lazy"
              src={"/email.svg"}
              width={30}
              height={30}
              alt="email.svg"
            />
            <p>jesusglenoficina@gmail.com</p>
          </li>
        </ul>

        <ul className="mx-auto space-y-2">
          <li className="mb-2">
            <h2 className="font-semibold">Networks</h2>
          </li>

          <li>
            <Link
              href={"https://github.com/jsglen1"}
              target="_blank"
              className="flex space-x-2 cursor-pointer"
            >
              <Image
                loading="lazy"
                src={"/github.svg"}
                width={30}
                height={30}
                alt="github.svg"
                className="bg-white p-1 rounded-md"
              />
              <p>Github</p>
            </Link>
          </li>

          <li>
            <Link
              href={"https://www.linkedin.com/in/jesus-miguel-g-75956a1b6/"}
              target="_blank"
              className="flex space-x-2 cursor-pointer"
            >
              <Image
                loading="lazy"
                src={"/linkedin.svg"}
                width={30}
                height={30}
                alt="lineding.svg"
              />
              <p>Linkedin</p>
            </Link>
          </li>
        </ul>
      </div>

      <div className="p-5 px-10">
        <div className="border border-b border-gray-500 rounded-xl shadow-md"></div>
      </div>
      <div className="flex items-center justify-center pb-5">
        <span>Copyright @2024 by jsglen1</span>
      </div>
    </footer>
  );
}
