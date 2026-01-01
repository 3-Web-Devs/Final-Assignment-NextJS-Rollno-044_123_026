// src/app/layout.jsx
import "./globals.css"; // make sure path is correct
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#FFF9F3] text-white ">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}