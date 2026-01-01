"use client";

import Image from "next/image";
import doc2 from "../assets/doc2.png";
import girl1 from "../assets/girl1.jpg";
import girl2 from "../assets/girl2.jpg";
import girl3 from "../assets/girl3.jpg";

export default function About() {
  const team = [
    {
      name: "Bismah Zermin",
      desc: "Full-stack Developer and Designer Roll no:044",
      img: girl1,
    },
    {
      name: "Aman Imtiaz",
      desc: "Backend Developer and UI Specialist Roll no:026",
      img: girl2,
    },
    {
      name: "Hamna Noor",
      desc: "Project Manager and Lead Designer Roll no:123",
      img: girl3,
    },
  ];

  return (
    <section className="about-section">
      <h2>Meet Our Team</h2>

      {team.map((member, i) => (
        <div key={i} className="team-member">
          <Image src={member.img} alt={member.name} width={150} height={150} />
          <div className="team-member-info">
            <h3>{member.name}</h3>
            <p>{member.desc}</p>
          </div>
        </div>
      ))}

      {/* Mission Section */}
      <div className="about-mission">
        <Image
          src={doc2}
          alt="Our Mission"
          width={400}
          height={300}
        />

        <div className="about-mission-text">
          <h3>Our Mission</h3>
          <p>
            Our mission is to make file conversion effortless, fast, and
            accessible to everyone. We combine cutting-edge AI technology with a
            user-friendly interface for a seamless experience. Security and
            privacy are at the core of our services—your files are always safe
            with us. At Doctype Converter, we continuously strive to innovate and
            expand our tools to meet your needs.
          </p>
        </div>
      </div>
    </section>
  );
}

