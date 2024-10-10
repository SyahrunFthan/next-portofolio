"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const dataServices = [
  {
    num: "01",
    title: "Web Development",
    href: "",
    description:
      "The user offers Frontend web development services, providing responsive, interactive, and modern website interface design.",
  },
  {
    num: "02",
    title: "Mobile Development",
    href: "",
    description:
      "The user offers Frontend Android development services, focusing on building responsive, user-friendly, and modern mobile interfaces for Android applications.",
  },
  {
    num: "03",
    title: "Backend",
    href: "",
    description:
      "The user offers Backend development services, specializing in building robust, scalable, and secure server-side solutions to support web and mobile applications.",
  },
  {
    num: "04",
    title: "Full Stack",
    href: "",
    description:
      "The user offers Full Stack development services, delivering comprehensive solutions that cover both frontend and backend development for web and mobile applications.",
  },
];

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[60px] min-h-[80vh]">
          {dataServices.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {item.num}
                  </div>
                  <h2 className="text-2xl text-outline-hover text-transparent group-hover:text-outline transition-all duration-500">
                    {item.title}
                  </h2>
                </div>

                <p>{item.description}</p>

                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
