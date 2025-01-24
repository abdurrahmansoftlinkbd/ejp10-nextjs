import Link from "next/link";
import React from "react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const Navbar = async () => {
  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
    </>
  );

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  console.log(user);

  return (
    <div className="navbar container w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link
          href="/"
          className="text-3xl font-bold font-lustria text-default hover:text-second transition-colors duration-200 ease-in-out"
        >
          Letsblog
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-14 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  title={user?.given_name}
                  src={user?.picture}
                  className="w-full"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow text-zinc-950"
            >
              <li>
                <a className="justify-between">{user?.given_name}</a>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
        {user ? (
          <LogoutLink className="btn">Log out</LogoutLink>
        ) : (
          <>
            <LoginLink className="btn">Login</LoginLink>
            <RegisterLink className="btn">Register</RegisterLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
