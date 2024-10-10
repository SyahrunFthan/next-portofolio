"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import GallerySlideBtn from "@/components/GallerySlideBtn";

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "QR Code and SMS Gateway Attendance Application",
    description:
      "This is the admin website dashboard display for managing data in the system.",
    stack: [
      {
        name: "React Native",
      },
      {
        name: "React Js",
      },
      {
        name: "Express Js",
      },
      {
        name: "Javascript",
      },
    ],
    image: "/assets/work/project1/project1.png",
  },
  {
    num: "01",
    category: "Full Stack",
    title: "QR Code and SMS Gateway Attendance Application",
    description:
      "This is the login display on the QR code and SMS gateway attendance application.",
    stack: [
      {
        name: "React Native",
      },
      {
        name: "React Js",
      },
      {
        name: "Express Js",
      },
      {
        name: "Javascript",
      },
    ],
    image: "/assets/work/project1/project1-login.jpg",
  },
  {
    num: "01",
    category: "Full Stack",
    title: "QR Code and SMS Gateway Attendance Application",
    description:
      "This is the home screen of the QR code and SMS gateway application.",
    stack: [
      {
        name: "React Native",
      },
      {
        name: "React Js",
      },
      {
        name: "Express Js",
      },
      {
        name: "Javascript",
      },
    ],
    image: "/assets/work/project1/project1-home.jpg",
  },
  {
    num: "01",
    category: "Full Stack",
    title: "QR Code and SMS Gateway Attendance Application",
    description: "This is a display of the QR code scan for attendance.",
    stack: [
      {
        name: "React Native",
      },
      {
        name: "React Js",
      },
      {
        name: "Express Js",
      },
      {
        name: "Javascript",
      },
    ],
    image: "/assets/work/project1/project1-scan.jpg",
  },
  {
    num: "01",
    category: "Full Stack",
    title: "QR Code and SMS Gateway Attendance Application",
    description:
      "This is a view of the profile page, which displays data from the highest attendance.",
    stack: [
      {
        name: "React Native",
      },
      {
        name: "React Js",
      },
      {
        name: "Express Js",
      },
      {
        name: "Javascript",
      },
    ],
    image: "/assets/work/project1/project1-profile.jpg",
  },
  {
    num: "02",
    category: "Full Stack",
    title: "Shortest Route Search Application",
    description:
      "This is a view of the shortest route search application using the Dijkstra algorithm.",
    stack: [
      {
        name: "React Native",
      },
      {
        name: "React Js",
      },
      {
        name: "Express Js",
      },
      {
        name: "Javascript",
      },
      {
        name: "Map Box",
      },
    ],
    image: "/assets/work/project2/project2.png",
  },
  {
    num: "03",
    category: "Full Stack",
    title: "Face Recognition Attendance Application",
    description: "Perform attendance using facial recognition",
    stack: [
      {
        name: "React Native",
      },
      {
        name: "React Js",
      },
      {
        name: "Express Js",
      },
      {
        name: "Javascript",
      },
      {
        name: "Python",
      },
      {
        name: "Flask",
      },
    ],
    image: "/assets/work/project3/Splash.jpg",
  },
  {
    num: "03",
    category: "Full Stack",
    title: "Face Recognition Attendance Application",
    description: "Perform attendance using facial recognition",
    stack: [
      {
        name: "React Native",
      },
      {
        name: "React Js",
      },
      {
        name: "Express Js",
      },
      {
        name: "Javascript",
      },
      {
        name: "Python",
      },
      {
        name: "Flask",
      },
    ],
    image: "/assets/work/project3/Login.jpg",
  },
  {
    num: "03",
    category: "Full Stack",
    title: "Face Recognition Attendance Application",
    description: "Perform attendance using facial recognition",
    stack: [
      {
        name: "React Native",
      },
      {
        name: "React Js",
      },
      {
        name: "Express Js",
      },
      {
        name: "Javascript",
      },
      {
        name: "Python",
      },
      {
        name: "Flask",
      },
    ],
    image: "/assets/work/project3/Home.jpg",
  },
  {
    num: "03",
    category: "Full Stack",
    title: "Face Recognition Attendance Application",
    description: "Perform attendance using facial recognition",
    stack: [
      {
        name: "React Native",
      },
      {
        name: "React Js",
      },
      {
        name: "Express Js",
      },
      {
        name: "Javascript",
      },
      {
        name: "Python",
      },
      {
        name: "Flask",
      },
    ],
    image: "/assets/work/project3/Face Recognition.jpg",
  },
  {
    num: "03",
    category: "Full Stack",
    title: "Face Recognition Attendance Application",
    description: "Perform attendance using facial recognition",
    stack: [
      {
        name: "React Native",
      },
      {
        name: "React Js",
      },
      {
        name: "Express Js",
      },
      {
        name: "Javascript",
      },
      {
        name: "Python",
      },
      {
        name: "Flask",
      },
    ],
    image: "/assets/work/project3/Absensi.jpg",
  },
  {
    num: "03",
    category: "Full Stack",
    title: "Face Recognition Attendance Application",
    description: "Perform attendance using facial recognition",
    stack: [
      {
        name: "React Native",
      },
      {
        name: "React Js",
      },
      {
        name: "Express Js",
      },
      {
        name: "Javascript",
      },
      {
        name: "Python",
      },
      {
        name: "Flask",
      },
    ],
    image: "/assets/work/project3/Profile.jpg",
  },
];
const Doc = () => {
  const [project, setProject] = useState(projects[0]);

  const HandleChangeSlide = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-4">
              <div className="text-6xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-6xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-[6px] h-[6px] bg-accent rounded-full"></div>
                <h2 className="text-xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.title}
                </h2>
              </div>
              <p className="text-white/60 my-2">{project.description}</p>
              <ul className="grid grid-cols-2 gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="w-full xl:w-[50%] order-1 xl:order-none">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={HandleChangeSlide}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="xl:h-[460px] h-[260px] relative group flex justify-center items-center">
                      <div className="relative w-full h-full">
                        <Image
                          src={item.image}
                          fill
                          className="object-contain"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <GallerySlideBtn
                containerStyles={
                  "flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none xl:gap-[20px]"
                }
                btnStyles={
                  "bg-accent xl:bg-primary xl:border xl:border-accent xl:text-white xl:hover:bg-accent xl:hover:text-primary text-primary rounded-full hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-500"
                }
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Doc;
