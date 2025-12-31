"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, companyInfo } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHomePage
          ? "bg-white shadow-md py-3"
          : "bg-dark py-4"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Left - Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <Image
              src="/images/logo/logo.png"
              alt="Starlink Logo"
              width={40}
              height={40}
              className="w-10 h-10 flex-shrink-0"
            />
            <span
              className={`font-display text-lg font-bold ${
                scrolled || !isHomePage ? "text-dark" : "text-white"
              }`}
            >
              <span className="hidden md:inline">{companyInfo.name}</span>
              <span className="md:hidden">{companyInfo.shortName}</span>
            </span>
          </Link>

          {/* Center - Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`font-medium transition-colors ${
                  pathname === link.href
                    ? "text-primary"
                    : scrolled || !isHomePage
                    ? "text-gray-700 hover:text-primary"
                    : "text-gray-200 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right - CTA Section */}
          <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
            <a
              href={`tel:${companyInfo.phone}`}
              className={`flex items-center gap-2 font-medium ${
                scrolled || !isHomePage ? "text-gray-700" : "text-white"
              }`}
            >
              <Phone className="w-4 h-4 text-primary" />
              {companyInfo.phone}
            </a>
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-dark text-dark font-semibold px-5 py-2.5 rounded-lg transition-all"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 ${
              scrolled || !isHomePage ? "text-dark" : "text-white"
            }`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-lg"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="container-custom py-4">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`font-medium py-2 ${
                      pathname === link.href
                        ? "text-primary"
                        : "text-dark hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <hr className="border-gray-200" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center gap-2 text-dark font-medium py-2"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  {companyInfo.phone}
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-primary hover:bg-primary-dark text-dark font-semibold py-3 px-6 rounded-lg text-center"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
