import React from 'react'

function About() {
  return (
    <div name="about" className=' w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className=' max-w-screen-lg p-4 max-auto flex flex-col justify-center w-full h-full lg:px-20'>
            <div className=' pb-8'>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>About</p>

            </div>
            <p className=' text-xl mt-10'>Welcome to my portfolio! I'm a front-end web developer specializing in HTML, CSS, JavaScript, and React. With a keen eye for design and functionality, I craft engaging and responsive web experiences that captivate users.</p>
            <br/>
            <p className='text-xl'>In addition to my expertise in front-end development, I'm proficient in Python and utilize it for various tasks, including web scraping. Leveraging Python, I generate leads for businesses by extracting valuable data from the web. Whether it's aiding in product listing or providing support for web projects, I'm committed to delivering high-quality solutions tailored to meet your needs.</p>
            <br/>
            <p className='text-xl'>Furthermore, I'm experienced in working with WordPress sites, offering comprehensive support and development services to ensure your online presence is both efficient and visually striking.
            
</p>
            
        </div>
    </div>
  )
}

export default About