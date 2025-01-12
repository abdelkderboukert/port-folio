"use client";
import Hom from "@utils/Home";
import About from "@utils/About";
import AnimatedBackground from "@utils/Background";
import Navbar from "@utils/Navbar";
import Portofolio from "@utils/Portofolio";
import ContactPage from "@utils/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <AnimatedBackground />
      <Hom />
      <About />
      <Portofolio />
      <ContactPage />
      <footer>
        <center>
          <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
          <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
            © 2024{" "}
            <a href="" className="hover:underline">
              Bluck™
            </a>
            . All Rights Reserved.
          </span>
        </center>
      </footer>
    </>
  );
}
