"use client";

import Link from "next/link";
import { FileText } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-[#6F4E37] w-full shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3 text-white">
          <FileText className="w-6 h-6" />
          <span className="text-2xl font-semibold tracking-wide">
            Doc-Type-Converter
          </span>
        </div>

        {/* Links */}
        <ul className="navbar-links">
          <li>
            <Link href="/" >
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" >
              About
            </Link>
          </li>

          <li>
            <Link href="/services">
              Services
            </Link>
          </li>

          <li>
            <Link href="/contact" >
              Contact Us
            </Link>
          </li>


          <li>
            <Link href="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/uploadfile"
              className="uploadfile-btn"  >
              Upload File
            </Link>
          </li>

          {/* Register Button */}
          <li>
            <Link
              href="/register"
              className="register-btn"  >
              Register
            </Link>
          </li>
          {/* Login Button */}
          <li>
            <Link
              href="/login"
              className="login-btn"  >
              Login
            </Link>
          </li>
           
        </ul>

      </div>
    </nav>
  );
}
