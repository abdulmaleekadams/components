import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavLink, NavLinkDropdown } from "./NavLink";

const NavLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    supLabel: "Explore",
    dropdown: [
      {
        href: "/historical-artifacts",
        label: "Historical Artifacts",
      },
      {
        href: "/documents",
        label: "Documents",
      },
      {
        href: "/photographs",
        label: "Photographs",
      },
      {
        href: "/audio-visual",
        label: "Audio/Visual Material",
      },
      {
        href: "/featured-collections",
        label: "Featured Collections",
      },
      {
        href: "/new-additions",
        label: "New Additions",
      },
      {
        href: "/popular-items",
        label: "Popular Items",
      },
      {
        href: "/africa",
        label: "Africa",
      },
      {
        href: "/asia",
        label: "Asia",
      },
      {
        href: "/europe",
        label: "Europe",
      },
      {
        href: "/americas",
        label: "Americas",
      },
    ],
  },
  {
    href: "/igbo-heritage",
    label: "Igbo Heritage",
  },
  {
    href: "/search",
    label: "Search",
  },
  {
    supLabel: "About Us",
    dropdown: [
      {
        href: "/our-mission",
        label: "Our Mission",
      },
      {
        href: "/our-team",
        label: "Our Team",
      },
      {
        href: "/partners",
        label: "Partners",
      },
      {
        href: "/contact-us",
        label: "Contact Us",
      },
    ],
  },
  {
    supLabel: "Get Involved",
    dropdown: [
      {
        href: "/volunteer",
        label: "Volunteer",
      },
      {
        href: "/donate",
        label: "Donate",
      },
      {
        href: "/events",
        label: "Events",
      },
    ],
  },
];

const Header = () => {
  return (
    <header className="flex justify-between py-4 px-24">
      <Link href="/">
        <Image src="" alt="logo" width={200} height={70} />
      </Link>

      <nav>
        <ul className="flex gap-8">
          {NavLinks.map((link) =>
            !link.supLabel ? (
              <NavLink href={link.href!} label={link.label!} key={link.href} />
            ) : (
              <NavLinkDropdown
                key={link.supLabel}
                supLabel={link.supLabel}
                dropdown={link.dropdown}
              />
            )
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
