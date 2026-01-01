"use client";

import { ArrowRightCircle, FileText, Wrench, Shield, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import doc2 from "../assets/doc2.png"; // adjust path if your components folder is nested

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center scroll-smooth">

      <section className="hero-section">
      <h1 className="hero-title">Welcome to Doc-Type-Converter</h1>
      <p className="hero-subtitle">
        Easily convert your documents with speed and security. 
        Our tools are designed to save you time and make your workflow seamless.
      </p>

      <div className="hero-buttons">
        <Link href="/uploadfile" className="primary">
          Get Started
        </Link>
        <Link href="/about" className="secondary">
          Learn More
        </Link>
      </div>
    </section>

     {/* ABOUT */}
<section id="about" className="about-intro">
  <div className="about-intro-container">

    <div className="about-intro-image">
      <Image
        src={doc2}
        alt="About DocConverter"
        priority
      />
    </div>

    <div className="about-intro-text">
      <h3>About Us</h3>
      <p>
        <strong>DocConverter</strong> is your all-in-one document transformation
        platform — converting PDFs, merging images, and simplifying workflows.
        <br /><br />
        <strong>Our mission</strong> is to make file conversion effortless, fast,
        and accessible to everyone. We combine cutting-edge AI technology with a
        user-friendly interface for a seamless experience. Security and privacy
        are at the core of our services — your files are always safe with us. At
        Doc-Type-Converter, we continuously strive to innovate and expand our
        tools to meet your needs.
      </p>
    </div>

  </div>
</section>


    <section id="services" className="services-section">
      <h3>Our Services</h3>

      <div className="services-container">
        <div className="service-box">
          <FileText />
          <h4>PDF to Word Converter</h4>
          <p>Convert PDFs into editable Word documents quickly.</p>
        </div>

        <div className="service-box">
          <Wrench />
          <h4>Image to PDF Converter</h4>
          <p>Merge and convert images into a single high-quality PDF.</p>
        </div>

        <div className="service-box">
          <Shield />
          <h4>Secure File Handling</h4>
          <p>All files are encrypted and deleted after processing.</p>
        </div>
      </div>
    </section>
 


<section className="contact-section">
      <h2>Contact Us</h2>

      <p>
        Have questions or feedback? We’d love to hear from you!
      </p>

      <form className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          rows="4"
          placeholder="Your Message"
        />

        <button type="submit">
          <Mail />
          Send Message
        </button>
      </form>
    </section>
    </div>
  );
}