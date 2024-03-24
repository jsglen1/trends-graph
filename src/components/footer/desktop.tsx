import React from "react";

export default function DesktopFooter() {
  return (
    <footer className="flex flex-wrap gap-5 items-center justify-center">
      <ul className="mx-auto">
        <li>About</li>
        <li>Services</li>
        <li>Tecnologies</li>
        <li>How To</li>
      </ul>

      <ul className="mx-auto">
        <li>F.A.Q</li>
        <li>SiteMap</li>
        <li>Condicions</li>
        <li>Licenses</li>
      </ul>

      <ul className="mx-auto">
        <li>Twitter</li>
        <li>Linkedin</li>
        <li>Github</li>
        <li>Instagram</li>
      </ul>
    </footer>
  );
}
