"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import Logo from "../../public/logo/BrainAlgo.png";

const serviceLinks = [
  { label: "Web App Development", href: "/service" },
  { label: "Mobile App Development", href: "/service" },
  { label: "Machine Learning", href: "/service" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/brainalgoit",
    label: "Facebook",
    icon: FaFacebookF,
  },
  {
    href: "https://www.instagram.com/brainalgoit/",
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    href: "https://www.linkedin.com/company/brainalgo-it/",
    label: "LinkedIn",
    icon: FaLinkedinIn,
  },
  {
    href: "https://x.com/brainalgoit",
    label: "X",
    icon: FaXTwitter,
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-secondary-color px-4 text-white">
      <div className="mx-auto w-full max-w-7xl py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.3fr] md:gap-8">
          <div className="flex flex-col items-start gap-5">
            <Link href="/" aria-label="BrainAlgo IT home">
              <Image
                src={Logo}
                alt="BrainAlgo IT"
                width={205}
                height={120}
                className="h-auto w-[205px] object-contain"
              />
            </Link>
            <p className="max-w-xs leading-7 text-white/70">
              Your growth partner for creative, reliable, and scalable digital
              solutions.
            </p>
            <a
              href="mailto:info@brainalgoit.com"
              className="flex items-center gap-3 text-white transition-colors hover:text-primary-color"
            >
              <IoMailOutline className="h-5 w-5 text-primary-color" />
              <span>info@brainalgoit.com</span>
            </a>
          </div>

          <div>
            <h2 className="mb-5 text-lg font-semibold">Company</h2>
            <nav
              aria-label="Company navigation"
              className="flex flex-col gap-3"
            >
              {companyLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="w-fit text-white/70 transition-colors hover:text-primary-color"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="mb-5 text-lg font-semibold">Our Services</h2>
            <nav
              aria-label="Services navigation"
              className="flex flex-col gap-3"
            >
              {serviceLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="w-fit text-white/70 transition-colors hover:text-primary-color"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="mb-5 text-lg font-semibold">Visit Our Office</h2>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Sector%2010%2C%20Uttara%2C%20Dhaka%201230"
              target="_blank"
              rel="noreferrer"
              className="flex max-w-xs items-start gap-3 text-white/70 transition-colors hover:text-primary-color"
            >
              <IoLocationOutline className="mt-1 h-5 w-5 shrink-0 text-primary-color" />
              <span>Sector #10, Uttara, Dhaka-1230</span>
            </a>
            <div className="mt-7 flex items-center gap-4">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-primary-color hover:text-primary-color"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-5 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} BrainAlgo IT. All rights reserved.</p>
          <Link href="/contact" className="w-fit hover:text-primary-color">
            Let&apos;s work together
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
