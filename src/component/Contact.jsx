"use client";

import { Mail } from "lucide-react";

export default function Contact() {
  return (
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
  );
}
