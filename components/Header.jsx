import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Header({ setDarkMode, darkMode }) {
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-xl font-yekan dark:text-white">شیخم :)</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl dark:text-white"
          />
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sheikhoo/"
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md mr-8 font-yekan dark:from-red-600 dark:to-orange-600"
          >
            رزومه
          </a>
        </li>
      </ul>
    </nav>
  );
}
