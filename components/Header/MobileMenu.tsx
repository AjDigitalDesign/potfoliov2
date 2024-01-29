import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { MenuArrowProps } from "@radix-ui/react-dropdown-menu";
import { FC } from "react";
import Link from "next/link";

interface MobileToggleProps {
  menulist: {
    id: string;
    label: string;
    url: string;
  }[];
}

const MobileMenu = ({ menulist }: MobileToggleProps) => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="h-6 w-6" />
        </SheetTrigger>
        <SheetContent side="left">
          <div className="h-screen">
            <ul>
              {menulist?.map((item) => (
                <li key={item.id}>
                  <Link href={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
