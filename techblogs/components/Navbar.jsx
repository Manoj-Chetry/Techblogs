import React from "react";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs"

export default function Navbar() {
    return (
        <nav className=' flex justify-between'>

            <ul className='flex items-center'>
                <BsFillMoonStarsFill className='text-pink-600 mr-2 sm:mr-3 md:mr-4 lg:mr-8' />
                <Link href="/index">
                    <h1 className='text-white text-xl'>TechBlogs</h1>
                </Link>
            </ul>

            <a className='contact_btn px-4 py-1 rounded-md text-lg text-white font-semibold md:px-6 lg:px-8' href="#">Blogs</a>

        </nav>
    )
}