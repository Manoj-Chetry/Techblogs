import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { AiFillTwitterCircle, AiFillFacebook, AiFillMessage } from 'react-icons/ai';

export default function index() {
  return (
    <>
      <Head>
        <title>TechBlogs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' bg-gradient-to-b from-black to-purple-900 min-h-fit px-8 py-8 sm:h-screen sm:px-16 md:px-20 lg:px-28'>
        <Navbar />

        <section className='my-20 font-medium text-center max-w-sm mx-auto md:max-w-md lg:max-w-lg'>
          <h1 className='text-pink-600 text-3xl py-12 px-5'>Welcome to TechBlogs.<br /> Create and Post Blogs with Us.</h1>
          <p className='text-white px-5'>Get in touch with the trending <span className=' text-pink-300'>tech</span> news. Remain upadated with all the ongoing improvement in the tech field. Also have a space to share <span className='text-pink-300'>what you know </span>about the new arrivals in the World Of Tech</p>
          <div>

          </div>
        </section>

        <div className='w-40 mx-auto'>
          <Link className='contact_btn w-fit px-5 py-2 rounded-md' href="/signup">Create Account</Link>
        </div>

        <footer className='my-10'>
          <div className='flex text-5xl items-center justify-between max-w-sm mx-auto mt-20'>
            <a href="#"><AiFillTwitterCircle className='text-white' /></a>
            <a href='#'><AiFillFacebook className='text-white' /></a>
            <a href='#'><AiFillMessage className='text-white' /></a>
          </div>
        </footer>
      </main>
    </>
  )
}
