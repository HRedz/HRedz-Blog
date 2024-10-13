import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/blog_logo.webp";

const NavBar = () => {
  return (
    <div className="navbar bg-base-300 shadow-md shadow-white mb-10">
      <div className="flex-none">
        <Link href="./">
          <Image
            src={logo}
            alt="Haris' Personal Logo"
            className="m-0 p-0 size-12"
          />
        </Link>
      </div>
      <div className="flex-1 place-content-center">
        <Link
          href="./about"
          className="btn btn-ghost sm:btn-sm md:btn-md lg:btn-lg"
        >
          About Me
        </Link>
        <Link
          href="./my-work"
          className="btn btn-ghost sm:btn-sm md:btn-md lg:btn-lg"
        >
          My Work
        </Link>
        <Link
          href="./contact"
          className="btn btn-ghost sm:btn-sm md:btn-md lg:btn-lg"
        >
          Contact
        </Link>
        <Link
          href="./blog"
          className="btn btn-ghost sm:btn-sm md:btn-md lg:btn-lg"
        >
          Blog
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
