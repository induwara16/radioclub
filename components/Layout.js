import { Rubik } from "next/font/google";

import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin']
});

export default function Layout({ children }) {
  return (
    <div className={`flex flex-col ${rubik.variable} font-sans`}>
      <style jsx global>{`
        .yarl__container {
          font-family: ${rubik.style.fontFamily};
        }
      `}</style>

      <Navbar />
      <main className="flex flex-col">{children}</main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}