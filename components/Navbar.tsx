'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex space-x-6 items-center border-b">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-base font-medium transition-colors ${
              isActive
                ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                : 'text-gray-600 hover:text-blue-500'
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
