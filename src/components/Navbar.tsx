import React from 'react';
import Link from 'next/link';
import config from '../../config.json';

const Navbar = () => {
  return (
    <nav className="bg-light-background dark:bg-dark-background border-b border-light-yellow dark:border-dark-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-light-yellow dark:text-dark-yellow text-xl font-bold cursor-pointer">
                ./XYD
              </span>
            </Link>
          </div>
          
          <div className="flex space-x-4">
            <Link href="/about">
              <span className="text-light-foreground dark:text-dark-foreground hover:text-light-yellow dark:hover:text-dark-yellow cursor-pointer">
                About
              </span>
            </Link>
            <Link href="/projects">
              <span className="text-light-foreground dark:text-dark-foreground hover:text-light-yellow dark:hover:text-dark-yellow cursor-pointer">
                Projects
              </span>
            </Link>
            <Link href="/blog">
              <span className="text-light-foreground dark:text-dark-foreground hover:text-light-yellow dark:hover:text-dark-yellow cursor-pointer">
                Blog
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-light-foreground dark:text-dark-foreground hover:text-light-yellow dark:hover:text-dark-yellow cursor-pointer">
                Contact
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;