/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-xl md:text-2xl ">
        About Me
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 20, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src="7.jpg"
        className="-mb-36 md:mb-0 flex-shrink-0 w-48 h-64 object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] "
      />
      <div className="space-y-5 px-0 md:px-10">
        <h4 className=" md:text-4xl text-xl font-semibold">
          Here is a{" "}
          <span className=" underline text-sm md:text-2xl decoration-[#F7AB0A]/50 hover:duration-100 md:hover:text-6xl hover:text-4xl hover:text-[#F7AB0A] hover:animate-pulse">
            little
          </span>{" "}
          background
        </h4>
        <p className="text-sm md:text-lg mt-5 ">
          My name is Lahav klugman I'm a second-year Software Engineer student
          at the Open University, and I am a Junior Web Developer. I am an
          accomplished coder and programmer, and I enjoy using my skills to
          contribute to the exciting technological advances that I have.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
