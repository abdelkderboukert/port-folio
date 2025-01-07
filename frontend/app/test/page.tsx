"use client";
import React from "react";
import * as motion from "motion/react-client";
import { useState } from "react";

function Page() {
  console.log("hi there!");
  const [Click, setClick] = useState(false);
  return (
    <section className="h-screen w-full flex justify-center items-center flex-col">
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: 45 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        className={
          !Click
            ? " w-44 h-44 bg-gradient-to-b from-pink-500 to-pink-200 rounded-3xl"
            : " w-44 h-44 bg-gradient-to-b from-blue-500 to-blue-200 rounded-3xl"
        }
      ></motion.div>
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          duration: 0.2,
          scale: { type: "spring", visualDuration: 0.2, bounce: 0.5 },
        }}
        whileTap={{ scale: 0.8 }}
        type="button"
        className={
          !Click
            ? "w-44 h-16 bg-pink-200 mt-8 rounded-2xl"
            : "w-44 h-16 bg-blue-200 mt-8 rounded-2xl"
        }
        onClick={() => setClick(!Click)}
      >
        g
      </motion.button>
    </section>
  );
}

export default Page;
