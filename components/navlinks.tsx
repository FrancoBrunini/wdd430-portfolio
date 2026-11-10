'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    { name: 'Inicio', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contacto', href: '/contact' },
  ];

  return (
    <nav className="flex items-center gap-4">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            aria-current={isActive ? 'page' : undefined}
            className={`text-sm font-medium px-3 py-1.5 rounded-lg transition-colors ${
              isActive
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}