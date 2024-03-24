import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { ModeToggle } from "../mode-toogle";
import Link from "next/link";

export function DropDownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="p-2">
          <Image
            src="/menu.svg"
            alt="menu.svg"
            width={20}
            height={20}
            loading="lazy"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Trends Graph</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={"/"}>
            <DropdownMenuItem>Home</DropdownMenuItem>
          </Link>
          <Link href={"/explore"}>
            <DropdownMenuItem>Explore</DropdownMenuItem>
          </Link>
          <Link href={"/explore"}>
            <DropdownMenuItem>Realtime Trends</DropdownMenuItem>
          </Link>
          <Link href={"/explore"}>
            <DropdownMenuItem>Interest Over Time</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Social Networks</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <Link href={"https://github.com/jsglen1"} target="_blank">
                  <DropdownMenuItem>GitHub</DropdownMenuItem>
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/jesus-miguel-g-75956a1b6/"}
                  target="_blank"
                >
                  <DropdownMenuItem>Linkedin</DropdownMenuItem>
                </Link>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>

        <DropdownMenuItem>Close</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
