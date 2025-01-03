import React from "react";
import * as motion from "motion/react-client";

function HomePage() {
  console.log("hi there!");
  const ball = {
    width: 100,
    height: 100,
    backgroundColor: "#dd00ee",
    borderRadius: "50%",
  };
  return (
    <section className="h-screen w-full flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: 45 }}
        animate={{ opacity: 1, scale: 1, rotate: 90 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        className=" w-44 h-44 bg-pink-500 rounded-3xl"
      ></motion.div>
      {/* <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        style={ball}
      /> */}
    </section>
  );
}

export default HomePage;
