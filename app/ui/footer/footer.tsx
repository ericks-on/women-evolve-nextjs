import React from 'react';
import Link from 'next/link';
import SocialIcons from '../icons/social-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 flex flex-col gap-5">
      <div className="container mx-auto flex flex-col gap-4 md:flex-row justify-between items-center">
        <div className="flex flex-col md: items-center">
          <Link href="/about" className="mx-2">About Us</Link>
          <Link href="/services"className="mx-2">Services</Link>
          <Link href="/contact"className="mx-2">Contact</Link>
        </div>
        <SocialIcons />
        <div className="text-center mt-4">
            <p>Email: contact@yourbrand.com</p>
            <p>Telephone: +1 234 567 8900</p>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>© {new Date().getFullYear()} Your Brand. All rights reserved.</p>
        <Link href="/privacy-policy"className="text-blue-400">Privacy Policy</Link> | 
        <Link href="/terms-of-use"className="text-blue-400"> Terms of Use</Link>
      </div>
    </footer>
  );
};

export default Footer;