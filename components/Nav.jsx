"use client";

import Link from 'next/link' ;
import Image from 'next/image' ;
import { useState, useEffect } from 'react';
// import {signIn, signOut, useSession, getProviders} from 'next-auth/react'

const Nav = () => {
// const { data: session } = useSession();
// const [providers, setProviders] = useState(null);
// const [toggleDropdown, setToggleDropdown] = useState(false);

useEffect(() => {
    const setUpProviders = async () => {
    const response = await getProviders();
    setProviders(response);
    };
    setUpProviders();
}, []);

return (
    // <nav className="flex-between w-full mt-3 mb-16">
    // <Link href="/" className="flex gap-2 flex-center">
    //     <Image
    //     src="/next.svg"
    //     alt="Logo"
    //     width={30}
    //     height={30}
    //     className="object-contain"
    //     />
    //     <p className="logo_text">Prompt Community</p>
    // </Link>
    // {/* Desktop Navigation */}
    // {/* <div className="sm:flex hidden">
    //     {session?.user ? (
    //     <div className="flex gap-3 md:gap-5">
    //         <Link href="/create-prompt" className="black_btn">
    //         Create Post
    //         </Link>
    //         <Link href="/profile">
    //         <Image
    //             // Add google image here
    //             src={session?.user?.image}
    //             width={37}
    //             height={37}
    //             className="rounded-full"
    //             alt="Profile"
    //         />
    //         </Link>
    //     </div>
    //     ) : null}
    // </div> */}
    // {/* Mobile Navigation */}
    // <div className="sm:hidden flex relative">
    //     {session?.user ? (
    //     <div className="flex">
    //         <Image
    //         // Add google image here
    //         src={session?.user?.image}
    //         width={37}
    //         height={37}
    //         className="rounded-full"
    //         alt="Profile"
    //         onClick={() => setToggleDropdown((prev) => !prev)}
    //         />
    //         {toggleDropdown && (
    //         <div className="dropdown">
    //             <Link href="/profile" className="dropdown_link" onClick={() => setToggleDropdown(false)}>
    //             My Profile
    //             </Link>
    //             <Link href="/create-prompt" className="dropdown_link" onClick={() => setToggleDropdown(false)}>
    //             Create Promt
    //             </Link>
    //         </div>
    //         )}
    //     </div>
    //     ) : null}
    // </div>
    // </nav>
    
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
            </li>
            <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
            </li>
            <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
            </li>
            <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>

);
};
  

export default Nav