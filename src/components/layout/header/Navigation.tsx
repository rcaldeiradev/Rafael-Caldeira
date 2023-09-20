'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationItem {
  label: string,
  href: string
}

interface NavigationItems extends Array<NavigationItem> {}

const NavigationObject: NavigationItems = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Projetos', href: '/projetos' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <ul className="navigation flex flex-wrap">
      {NavigationObject.map((item, key) => {
        const isActive = pathname.toString() === item.href;
        const menuItemBackgroundClass = isActive ? 'bg-amber-200' : 'bg-inherit';

        return (
          <li className="mx-1" key={key}>
            <Link href={item.href} className={`${menuItemBackgroundClass} p-2 block`}>
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  )
}
