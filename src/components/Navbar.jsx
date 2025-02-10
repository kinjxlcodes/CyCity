import React, { useState, useEffect, useRef } from "react";
import { Collapse, IconButton, Typography } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// NavList Component for the Links
const NavList = ({ position, setPosition }) => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },  // Use anchor link to scroll to section
    { name: "Services", path: "#services" },
    { name: "Teams", path: "#teams" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full bg-white p-1"
    >
      {navItems.map((item, index) => (
        <Tab key={index} setPosition={setPosition} path={item.path}>
          {item.name}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, path }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-gray-800 hover:text-white md:px-5 md:py-3 md:text-base"
    >
      <a href={path}> {/* Use anchor link with href */}
        {children}
      </a>
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-[#0266CC] md:h-12"
    />
  );
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  // Handle resizing and close nav on larger screens
  const handleWindowResize = () => window.innerWidth >= 960 && setNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="relative w-full px-6 py-3 ">
      {/* Gradient Glow Effect Behind the Navbar */}
      
      {/* Navbar Content */}
      <div className="bg-white dark:bg-white-800 shadow rounded-3xl">
        <div className="px-8 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <div className="w-full justify-between flex items-center">
              <a className="flex-shrink-0" href="/">
                <img className="w-16 h-16" src="src/assets/apple-touch-icon.png" alt="Workflow" />
              </a>
              {/* Desktop Links */}
              <div className="hidden md:block">
                <NavList position={position} setPosition={setPosition} />
              </div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setNav(!nav)}
            >
              {nav ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </IconButton>
          </div>
        </div>

        {/* Mobile Menu */}
        <Collapse open={nav}>
          <div className="block lg:hidden">
            <NavList position={position} setPosition={setPosition} />
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default Navbar;
