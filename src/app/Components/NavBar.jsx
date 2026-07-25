'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const NavBar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const { data: session, isPending: loading } = authClient.useSession();
  const user = session?.user;

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'All Animals', href: '/animals' },
  ];

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      closeMenu();
      router.refresh();
      router.push('/'); 
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <nav className="bg-white/90 dark:bg-zinc-950/90 border-b border-zinc-200 dark:border-zinc-800/80 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-black tracking-tight text-emerald-600 dark:text-emerald-400">
                Qurbani<span className="text-amber-500">Hat</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-zinc-700 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400 font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}

            {!loading && (
              <>
                {user ? (
                  <div className="flex items-center gap-5">
                    <Link
                      href="/my-profile"
                      className="text-zinc-700 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400 font-medium transition-colors duration-200"
                    >
                      My Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-medium text-sm transition-colors cursor-pointer"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-5">
                    <Link
                      href="/login"
                      className="text-zinc-700 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400 font-medium transition-colors duration-200"
                    >
                      Login
                    </Link>

                    <Link
                      href="/signup"
                      className="bg-emerald-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 transition-all duration-200 shadow-sm hover:shadow"
                    >
                      Get Started
                    </Link>
                  </div>
                )}
              </>
            )}

            {/* Theme Toggle Button */}
            <div className="pl-2 border-l border-zinc-200 dark:border-zinc-800">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none"
              aria-label="toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6h12v12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800`}>
        <div className="px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block px-4 py-3 rounded-lg text-base font-medium text-zinc-700 dark:text-zinc-200 hover:bg-emerald-50 dark:hover:bg-zinc-900 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {!loading && (
            <>
              {user ? (
                <>
                  <Link
                    href="/my-profile"
                    onClick={closeMenu}
                    className="block px-4 py-3 rounded-lg text-base font-medium text-zinc-700 dark:text-zinc-200 hover:bg-emerald-50 dark:hover:bg-zinc-900 hover:text-emerald-600 dark:hover:text-emerald-400"
                  >
                    My Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={closeMenu}
                    className="block px-4 py-3 rounded-lg text-base font-medium text-zinc-700 dark:text-zinc-200 hover:bg-emerald-50 dark:hover:bg-zinc-900 hover:text-emerald-600 dark:hover:text-emerald-400"
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    onClick={closeMenu}
                    className="block w-full text-center bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium mt-4 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;