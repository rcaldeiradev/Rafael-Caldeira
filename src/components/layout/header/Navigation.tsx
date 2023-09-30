'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MenuToggler from "@/components/layout/header/MenuToggler";

interface NavigationItem {
  label: string,
  href: string
}

const NavigationObject: Array<NavigationItem> = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Projects',
    href: '/projects'
  },
];

export default function Navigation() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const openMobileMenuClasses = 'absolute top-16 w-full p-4 bg-gray-900';

  return (
    <>
      <MenuToggler toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />

      <ul
        className={isMenuOpen ? openMobileMenuClasses : `hidden navigation lg:flex lg:flex-wrap`}
      >
        {NavigationObject.map((item, key) => {
          const isActive = pathname.toString() === item.href;
          const menuItemBackgroundClass = isActive ? 'bg-gray-600' : 'bg-inherit';

          return (
            <li className="mx-1" key={key}>
              <Link href={item.href} className={`${menuItemBackgroundClass} px-4 py-2 block text-white`}>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  )
}
