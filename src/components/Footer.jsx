import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { github } from "../assets";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://github.com/tentalha/tentalha"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="GitHub" style={{ width: 24, height: 24 }} />
      </a>
      <a
        href="https://www.linkedin.com/in/tentalha/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
    </footer>
  );
};

export default Footer;