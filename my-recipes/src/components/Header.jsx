'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react'; // importing icons

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItem = [
    { name: 'Home', link: '/' },
    { name: 'Recipes', link: '/recipes' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white text-black p-4 shadow-xl">
      <div className='container mx-auto max-w-[1240px]'>
        <div className="flex justify-between items-center">
          <Link href="/"><h1 className="text-2xl font-bold">Recipes</h1></Link>

          <nav className="hidden md:flex space-x-4">
            {menuItem.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className={`${pathname === item.link ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white" : ""} rounded-xl p-4 py-1`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col space-y-2">
              {menuItem.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.link}
                    className={`${pathname === item.link ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white" : ""} block rounded-xl p-2`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
