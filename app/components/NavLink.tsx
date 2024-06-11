"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  label: string;
  href: string;
};

type NavLinkDropdownProps = {
  supLabel: string;
  dropdown: NavLinkProps[];
};
export const NavLink = ({ href, label }: NavLinkProps) => {
  const pathname = usePathname();

  const isCurrentPathname = pathname === href;
  return (
    <li>
      <Link
        href={href}
        className={`hover:text-rose-500 transition-colors duration-500 ${
          isCurrentPathname ? "text-rose-500 font-semibold" : "text-white"
        }`}
      >
        {label}
      </Link>
    </li>
  );
};

export const NavLinkDropdown = ({
  dropdown,
  supLabel,
}: NavLinkDropdownProps) => {
  const pathname = usePathname();

  const isCurrentPathname =
    dropdown.filter((nav) => nav.href === pathname).length > 0;

  return (
    <li className="group relative">
      <p className={`h-8 cursor-pointer ${isCurrentPathname ? 'text-rose-500 font-semibold' : 'text-white'}`}>{supLabel} </p>
      <div className="flex-col gap-3 bg-white text-black p-2 rounded-md w-52 group-hover:flex absolute right-0 top-8  hidden z-40 shadow-md">
        {dropdown.map((navItem) => (
          <Link
            href={navItem.href}
            key={navItem.href}
            className={`hover:text-rose-500 transition-colors duration-500 ${pathname === navItem.href ? 'text-rose-500' : 'text-current'}`}
          >
            {navItem.label}
          </Link>
        ))}
      </div>
    </li>
  );
};
