import React from 'react'
import HeroImage from '../assets/heroImage.svg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'

function Home() {
  return (
    <div name="home" className='sm:h-screen  w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20'>
        <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 sm:flex-row '>
            <div className='flex flex-col justify-center h-full px-5 mt-10'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Front-End Web Developer and Web Scrapper
                </h2>
                <p className=' text-gray-500 py-4 max-w-md'>
                    I have 5 years of experience in coding and designing websites.
                    Curently, I love to work on web applications using technology like
                    React, Tailwind, Python and Wordpress
                </p>
                <div className=' justify-center items-center'>
                    <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-1 flex items-center
                    rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                         <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className=' ml-1'/>
                            </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="my profile" className=' rounded-3xl mx-auto w-2/3 sm:w-full sm:my-0 my-10'/>
            </div>
        </div>
    </div>
  )
}

export default Home