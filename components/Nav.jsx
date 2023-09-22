"use client";

import Link from 'next/link' ;
import Image from 'next/image' ;
import { useState, useEffect } from 'react';
// import {signIn, signOut, useSession, getProviders} from 'next-auth/react'

const Nav = () => {
// const { data: session } = useSession();
const [providers, setProviders] = useState(null);
const [toggleDropdown, setToggleDropdown] = useState(false);

useEffect(() => {
    const setUpProviders = async () => {
    const response = await getProviders();
    setProviders(response);
    };
    setUpProviders();
}, []);

return (
    <nav className="flex-between w-full mt-3 mb-16">
    <Link href="/" className="flex gap-2 flex-center">
        <Image
        src="/next.svg"
        alt="Logo"
        width={30}
        height={30}
        className="object-contain"
        />
        <p className="logo_text">Prompt Community</p>
    </Link>
    {/* Desktop Navigation */}
    {/* <div className="sm:flex hidden">
        {session?.user ? (
        <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
            Create Post
            </Link>
            <Link href="/profile">
            <Image
                // Add google image here
                src={session?.user?.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="Profile"
            />
            </Link>
        </div>
        ) : null}
    </div> */}
    {/* Mobile Navigation */}
    {/* <div className="sm:hidden flex relative">
        {session?.user ? (
        <div className="flex">
            <Image
            // Add google image here
            src={session?.user?.image}
            width={37}
            height={37}
            className="rounded-full"
            alt="Profile"
            onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
            <div className="dropdown">
                <Link href="/profile" className="dropdown_link" onClick={() => setToggleDropdown(false)}>
                My Profile
                </Link>
                <Link href="/create-prompt" className="dropdown_link" onClick={() => setToggleDropdown(false)}>
                Create Promt
                </Link>
            </div>
            )}
        </div>
        ) : null}
    </div> */}
    </nav>
);
};
  

export default Nav