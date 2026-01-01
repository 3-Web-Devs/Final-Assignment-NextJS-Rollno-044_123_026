"use client";

import { FileText, Wrench, Shield } from "lucide-react";

export default function Services() {
  return (
    <section className="services-section">
      <h2>Our Services</h2>

      <div className="services-grid">
        <Service
          icon={FileText}
          title="PDF to Word"
          desc="Converts PDFs into editable Word documents quickly."
        />
        <Service
          icon={Wrench}
          title="Image to PDF"
          desc="Merge and convert images into a single high-quality PDF."
        />
        <Service
          icon={Shield}
          title="Secure Files"
          desc="All files are encrypted and deleted after processing."
        />
      </div>
    </section>
  );
}

function Service({ icon: Icon, title, desc }) {
  return (
    <div className="service-card">
      <Icon />
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}
