import Footer from "./Footer";
import Navbar from "./Navbar";

import { Rubik } from "next/font/google";

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin']
});

export default function Layout({ children }) {
  return (
    <div className={`flex flex-col ${rubik.variable} font-sans`}>
      <style jsx global>{`
        * {
          font-family: ${rubik.style.fontFamily}
        }
      `}</style>
      <Navbar />
      <main className="flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}