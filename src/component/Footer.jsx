"use client";

import { Github, Mail, Upload } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div>
          <h2 className="footer-title">DocConverter</h2>
          <p className="footer-text">
            Convert documents with ease — fast and secure.
          </p>
        </div>

        <div>
          <h3 className="footer-subtitle">Quick Links</h3>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/uploadfile">Upload</Link></li>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/register">Register</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="footer-subtitle">Connect</h3>
          <div className="footer-connect">
            <a className="footer-connect"><Github /> GitHub</a>
            <a className="footer-connect"><Mail /> Email</a>
          </div>
        </div>

        <div>
          <label className="footer-upload">
            <Upload /> Upload File
            <input type="file" hidden />
          </label>
        </div>

      </div>
    </footer>
  );
}
