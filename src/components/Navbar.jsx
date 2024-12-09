import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {navLinks.map((nav, index) => {
        if (nav.type === "logo") {
          return (
            <div key={nav.id} className="w-[64px] h-[64px] sm:mr-auto">
              <a href={`#${nav.id}`}>
                <img src={logo} alt={`${nav.title}-logo`} className=" w-[64px] h-[64px]" />
              </a>
            </div>
          );
        }
        return null;
      })}

      <div className="sm:hidden flex-1 flex justify-end items-center">
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        </div>

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              nav.type !== "logo" ? (
                <li
                  key={nav.id}
                  className={`font-visuletpro font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-white"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ) : null
            ))}
          </ul>
        </div>
      </div>

      <ul className="list-none sm:flex hidden items-center flex-1 justify-end">
        {navLinks.map((nav, index) => {
          if (nav.type !== "logo") {
            return (
              <li
                key={nav.id}
                className={`font-roboto font-normal cursor-pointer text-[16px] ${
                  active === nav.title ? "text-Jet" : "text-dimGrey"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
