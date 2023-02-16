import Head from 'next/head'

import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillFacebook, AiFillGithub } from 'react-icons/ai'
// import deved from '../public/dev-ed-wave.png'
import deved from '../public/myAvatar.webp'
import frontend from '../public/frontend.jpg'
import backend from '../public/backend.jpg'
import tools from '../public/tools.jpg'
import Image from 'next/legacy/image'
import web1 from '../public/React-bitcoin.png'
import web2 from '../public/gigger.jpg'
import web3 from '../public/pixelPerfect.png'
import { useState } from 'react'


export default function Home() {
  const [darkMode, setDarkMode] = useState()
  const [openCv, setOpenCv] = useState()
  const webImgs = [{ img: web1, url: 'https://itzikil.github.io/Bit-coin-react/', header: 'Bit app' },
  { img: web2, url: 'https://gigerr.onrender.com/', header: 'Fiverr clone' },
  { img: web3, url: 'https://itzikil.github.io/Pixel-perfect-vue/', header: 'Pixel-perfect project' },
  ]

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Issac Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 dark:bg-gray-900 duration-500'>
        <section className='relative z-10'>
          <nav className='pt-10 mb-12 flex justify-between dark:text-white'>
            <h1 className='text-xl font-burtons dark:text-gray-200'>developedbyil</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-xl dark:text-gray-200' /></li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 cursor-pointer hover:animate-pulse'
                  onClick={() => setOpenCv(!openCv)}>{openCv ? 'Close' : 'Resume'}</a>
              </li>
            </ul>
          </nav>
          {openCv &&
            <div className='animate-slidedown'>
              <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' target="_blank" href="cv.pdf">Open in new tab</a>
              <iframe src="cv.pdf" className='min-w-full h-96 rounded-lg shadow-lg'></iframe>
            </div>}
          <div className='text-center py-10 '>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400 animate-slidedown'>Issac Levi</h2>
            <h3 className='text-2xl py-2 md:text-3xl  dark:text-white animate-slideup '>Fullstack Developer</h3>
            <div className='border-slate-600 animate-typing overflow-hidden whitespace-nowrap my-border max-w-fit max-h-fit'>
              <p className='text-md py-5 leading-8 text-gray-800 p-0 md:text-xl dark:text-gray-200 '>
                My name is Issac and this is my portfolio
              </p>
            </div>
          </div>
          <div className='text-5xl flex justify-center gap-16 text-gray-600 dark:text-gray-400 relative '>
            <a target="_blank" href="https://github.com/Itzikil">
              <AiFillGithub className='hover:scale-110 ease-in duration-150 animate-slideleft' /></a>
            <a target="_blank" href="https://www.linkedin.com/in/issac-levi/">
              <AiFillLinkedin className='hover:scale-110 ease-in duration-150 animate-slowfade' /></a>
            <a target="_blank" href="https://www.facebook.com/itzik.levi.142/">
              <AiFillFacebook className='hover:scale-110 ease-in duration-150 animate-slideright' /></a>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 hover:bg-slate-500 ease-in duration-300 
           rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96 animate-slideup flex items-center'>
            <Image src={deved} layout="fill" objectFit='cover' className='w-10' />
          </div>
        </section>

        <section className='relative z-10'>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Knowledge</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 mr-10">
              Those are some of the technologies I use on a <span className="text-teal-500"> daily bases </span>, I belive that knowing wide number of technologies
              and maste them may give you a brighter picture of the coding world, and make your developing more <span className="text-teal-500"> creative </span>

            </p>
            {/* <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p> */}
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
              <Image src={frontend} className='animate-float shadow-bottom hover:animate-none rounded-full' title='Let me float' />
              <h3 className='text-lg font-medium pb-2'>Frontend</h3>
              {/* <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p> */}
              <h4 className='py-4 text-teal-600'>Frontend tools I use</h4>
              <p className="text-gray-800 py-1">Vue</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Angular</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
              <Image src={backend} className='animate-float hover:animate-none rounded-full' title='Let me float' />
              <h3 className='text-lg font-medium pb-2'>Backend</h3>
              {/* <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p> */}
              <h4 className='py-4 text-teal-600'>Backend tools I use</h4>
              <p className="text-gray-800 py-1">Node.js</p>
              <p className="text-gray-800 py-1">Express</p>
              <p className="text-gray-800 py-1">MongoDb</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
              <Image src={tools} className='animate-float hover:animate-none rounded-full' title='Let me float' />
              <h3 className='text-lg font-medium pb-2'>Other</h3>
              {/* <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p> */}
              <h4 className='py-4 text-teal-600'>Other tools I use</h4>
              <p className="text-gray-800 py-1">Git</p>
              <p className="text-gray-800 py-1">Vuex</p>
              <p className="text-gray-800 py-1">Redux</p>
              <p className="text-gray-800 py-1">Tailwind</p>
            </div>
          </div>
        </section>
        <section className='relative z-10'>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 mr-10">
              As a junior developer I always want to learn more,
              and there is no better way to learn than make projects, those are few of my <span className="text-teal-500">favorite </span> projects
              I made, every one of them tells a diffrent story, and every one of them was made by diffrent
              <span className="text-teal-500"> tools </span>

            </p>
            {/* <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p> */}
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            {webImgs.map((web, i) => {
              return <div className='basis-1/3 flex-1 shadow-md rounded-lg' key={i}>
                <a href={web.url} target="_blank" className='relative project-image'>
                  <Image src={web.img} className="rounded-lg project-img hover:object-bottom duration-[2.5s]"
                    width={'100%'} height={'100%'} layout='responsive' />
                  <p className='absolute h-fit top-4 left-4 font-bold text-xl sm:text-4xl'>{web.header}</p>
                </a>
              </div>
            })}
          </div>
        </section>
      </main>
      <svg className='fixed bottom-0 opacity-75 z-0 h-28 sm:h-56' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" >
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          fill="#8AACAB" ></path></svg>
    </div>
  )
}
