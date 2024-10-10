"use client";

import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";

import { SiTailwindcss, SiRedux, SiNextdotjs, SiVite } from "react-icons/si";

import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About Me",
  description: `Hello, my name is Syahrun Fathan Hidayah, and I am a recent graduate from Tadulako University with a degree in Informatics Engineering, achieving a GPA of 3.73. I have skills in developing both web and mobile applications, with a primary focus on mobile development. In addition, I have experience in building backend APIs.\n\nI am proficient in several programming languages, including JavaScript, PHP, and Python. As for frameworks, I am familiar with Express.js, React Native, Next.js, and Flask. I am always eager to learn more and contribute to innovative technology projects.`,
  info: [
    {
      fieldName: "Name",
      fieldValue: "Syahrun Fathan Hidayah",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 812 4442 3801",
    },
    {
      fieldName: "Email",
      fieldValue: "syahrulmei002@gmail.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Address",
      fieldValue: "Palu City",
    },
    {
      fieldName: "Country",
      fieldValue: "Indonesia",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Projects",
      fieldValue: "3+ Project",
    },
  ],
};

const educationData = {
  icon: "/assets/resume/badge.svg",
  title: "My Education",
  description:
    "I only show my educational history from high school to college.",
  items: [
    {
      institution: "Tadulako University",
      degree: "Informatics Engineering",
      duration: "2020 - 2024",
      gpa: "3.73",
    },
    {
      institution: "MA Alkhairaat Pusat Palu",
      degree: "High School",
      duration: "2017 - 2020",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "I have several skills.",
  items: [
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaJs />,
      name: "Java Script",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiVite />,
      name: "Vite.js",
    },
    {
      icon: <FaReact />,
      name: "React Native",
    },
    {
      icon: <SiRedux />,
      name: "React Redux",
    },
    {
      icon: <FaNodeJs />,
      name: "Node Js",
    },
  ],
};

const projectData = {
  icon: "/assets/resume/badge.svg",
  title: "My Project",
  description: "I have 2 projects, creating android-based applications.",
  items: [
    {
      title: "Face Recognition Attendance Application",
      company: "Thesis",
      duration: "Agu 2024 - Sep 2024",
    },
    {
      title: "Shortest Route Search Application",
      company: "Thesis",
      duration: "Mei 2024 - Jun 2024",
    },
    {
      title: "QR Code and SMS Gateway Attendance Application",
      company: "MA Alkhairaat Pusat Palu",
      duration: "Des 2023 - Jan 2023",
    },
  ],
};

const Resume = () => {
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
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="project"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto gap-6">
            <TabsTrigger value="project">Project</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="project" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{projectData.title}</h3>
                <p className="max-w-[400px] text-white/60 mx-auto xl:mx-0">
                  {projectData.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {projectData.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-3"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-2xl text-center font-semibold lg:text-left">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{educationData.title}</h3>
                <p className="max-w-[400px] text-white/60 mx-auto xl:mx-0">
                  {educationData.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {educationData.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-3"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-2xl text-center font-semibold lg:text-left">
                            {item.institution}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p>{item.degree}</p>
                          </div>
                          {item.gpa && (
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p>{item.gpa}</p> GPA
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[20px] text-center xl:text-left">
                <div className="gap-[20px] flex flex-col">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="text-white/60">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 xl:grid-cols-4 gap-4">
                  {skills.items.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl justify-center items-center flex group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-500">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[20px] text-left">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="text-white/60">{about.description}</p>
                </div>
                <ul className="grid grid-cols-1 xl:grid-cols-2 xl:mx-0 gap-y-4 max-w-[620px]">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}:</span>
                        <p className="text-white">{item.fieldValue}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Resume;
