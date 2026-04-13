"use client";

import { IconMenu, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ShoppingList } from "./ShoppingList";

const navigationData = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Products",
    href: "/",
  },
  {
    title: "About Us",
    href: "/",
  },
];

export function Header() {
  return (
    <header className="bg-background sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <Image
              src="/next.svg"
              alt="Logo"
              width={100}
              height={100}
              priority
            />
          </Link>

          <div className="flex items-center">
            <div className="font-medium space-x-6 mr-6">
              {navigationData.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="hover:text-primary max-md:hidden"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon-lg" className="rounded-md">
                <IconUser className="size-5" />
              </Button>

              <div className="relative">
                <ShoppingList />
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger className="md:hidden" asChild>
                  <Button
                    variant="outline"
                    size="icon-lg"
                    className="rounded-md"
                  >
                    <IconMenu className="size-5" />
                    <span className="sr-only">Menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuGroup>
                    {navigationData.map((item, index) => (
                      <DropdownMenuItem key={index}>
                        <Link href={item.href}>{item.title}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
