"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./common/Button";
import { LuMenu } from "react-icons/lu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "./ui/separator";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        isScrolled
          ? "bg-white shadow-lg py-4" // When scrolled, add bg & shadow
          : "bg-transparent py-5"
      }`}
    >
      <nav className="flexBetween container padding-container relative">
        <Link href="/">
          <Image
            src="/logo1.png"
            alt="Connect2p"
            width={0}
            height={0}
            sizes="100vw"
            className="w-60 h-auto"
          />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                const section = document.getElementById(link.key);
                if (section) {
                  const offsetTop =
                    section.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({ top: offsetTop, behavior: "smooth" });
                }
              }}
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="Contact Us"
            variant="btn_dark"
            onClick={() => {
              const contactSection = document.getElementById("contact-us");
              if (contactSection) {
                const offsetTop =
                  contactSection.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top: offsetTop, behavior: "smooth" });
              }
            }}
          />
        </div>

        <div className="inline-block cursor-pointer lg:hidden">
          <Sheet>
            <SheetTrigger>
              <LuMenu size={32} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <div className="py-4">
                  <Button
                    type="button"
                    title="Contact Us"
                    variant="btn_dark_mobile"
                    onClick={() => {
                      const contactSection =
                        document.getElementById("contact-us");
                      if (contactSection) {
                        const offsetTop =
                          contactSection.getBoundingClientRect().top +
                          window.scrollY;
                        window.scrollTo({ top: offsetTop, behavior: "smooth" });
                      }
                    }}
                  />
                </div>
                <Separator className="my-4" />
                <SheetDescription className="pt-4">
                  <ul className="h-full space-y-2">
                    {NAV_LINKS.map((link) => (
                      <Link
                        href={link.href}
                        key={link.key}
                        className="regular-18 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                        onClick={(e) => {
                          e.preventDefault();
                          const section = document.getElementById(link.key);
                          if (section) {
                            const offsetTop =
                              section.getBoundingClientRect().top +
                              window.scrollY;
                            window.scrollTo({
                              top: offsetTop,
                              behavior: "smooth",
                            });
                          }
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
