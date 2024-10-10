"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";

import { FaPhone, FaEnvelope, FaMapMarked } from "react-icons/fa";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const info = [
  {
    icon: <FaPhone />,
    name: "Phone",
    description: "(+62) 812 4442 3801",
  },
  {
    icon: <FaEnvelope />,
    name: "Email",
    description: "syahrulmei002@gmail.com",
  },
  {
    icon: <FaMapMarked />,
    name: "Address",
    description: "Jl. Lekatu, Tatanga Distirct, Palu City",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    services: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formError, setFormError] = useState({
    firstname: "",
    lastname: "",
    services: "",
    email: "",
    phone: "",
    message: "",
  });

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (formData.firstname === "")
      return setFormError({ firstname: "Enter your first name" });
    if (formData.lastname === "")
      return setFormError({ lastname: "Enter your last name" });
    if (formData.email === "")
      return setFormError({ email: "Enter your email" });
    if (formData.phone === "")
      return setFormError({ phone: "Enter your phone number" });
    if (formData.services === "")
      return setFormError({ services: "Select a service" });
    if (formData.message === "")
      return setFormError({ message: "Enter your message" });

    try {
      const response = await axios.post("http://localhost:5000/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 201) {
        setFormData({
          email: "",
          firstname: "",
          lastname: "",
          message: "",
          phone: "",
          services: "",
        });
        setFormError({
          email: "",
          firstname: "",
          lastname: "",
          message: "",
          phone: "",
          services: "",
        });
        await Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
      }
    } catch (error) {
      setFormData({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phone: "",
        services: "",
      });
      setFormError({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phone: "",
        services: "",
      });
      await Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "The server is experiencing problems",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
    }
  };

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
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={HandleSubmit}
              className="flex rounded-xl flex-col gap-6 p-10 bg-[#272729] border hover:border-accent transition-all duration-500"
            >
              <h3 className="text-2xl text-accent">
                Let&apos;s work together<span className="text-white">.</span>
              </h3>
              <p className="max-w-[260px] xl:max-w-[460px] text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                dolorem?
              </p>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Input
                    type="text"
                    value={formData.firstname}
                    onChange={(e) =>
                      setFormData({ ...formData, firstname: e.target.value })
                    }
                    placeholder="First Name"
                    className={formError.firstname && "border-red-600"}
                  />
                  {formError.firstname && (
                    <p className="text-red-600 text-base">
                      {formError.firstname}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Input
                    value={formData.lastname}
                    onChange={(e) =>
                      setFormData({ ...formData, lastname: e.target.value })
                    }
                    type="text"
                    placeholder="Last Name"
                    className={formError.lastname && "border-red-600"}
                  />
                  {formError.lastname && (
                    <p className="text-red-600 text-base">
                      {formError.lastname}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Email Address"
                    className={formError.email && "border-red-600"}
                  />
                  {formError.email && (
                    <p className="text-red-600 text-base">{formError.email}</p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Input
                    type="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="Phone Number"
                    className={formError.phone && "border-red-600"}
                  />
                  {formError.phone && (
                    <p className="text-red-600 text-base">{formError.phone}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, services: value })
                  }
                >
                  <SelectTrigger
                    className={`w-full ${
                      formError.services && "border-red-600"
                    }`}
                  >
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a services</SelectLabel>
                      <SelectItem value="Web Development">
                        Web Development
                      </SelectItem>
                      <SelectItem value="Mobile Development">
                        Mobile Development
                      </SelectItem>
                      <SelectItem value="Backend">Backend</SelectItem>
                      <SelectItem value="Full Stack">Full Stack</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {formError.services && (
                  <p className="text-red-600 text-base">{formError.services}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Textarea
                  className={`h-[150px] xl:h-[200px] text-white placeholder:text-white/30 focus-visible:ring-1 rounded-[8px] bg-primary border border-white/30 ${
                    formError.message && "border-red-600"
                  }`}
                  placeholder="Type your message."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
                {formError.message && (
                  <p className="text-red-600 text-base">{formError.message}</p>
                )}
              </div>

              <Button
                type="submit"
                size={"md"}
                className="max-w-52 text-primary text-xl"
              >
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-start order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-[30px]">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div>
                      <div className="py-4 px-4 flex items-center justify-center rounded-full bg-accent text-primary text-6xl">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      <p className="text-[16px] text-white/60">{item.name}</p>
                      <p className="text-xl font-semibold">
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
