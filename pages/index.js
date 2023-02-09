import Head from 'next/head'

import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillFacebook } from 'react-icons/ai'
import deved from '../public/dev-ed-wave.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import Image from 'next/legacy/image'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
// import resume from '../public/cv-issac.pdf'
import { useState } from 'react'


export default function Home() {
  const [darkMode, setDarkMode] = useState()
  const [openCv, setOpenCv] = useState()
  const webImgs = [web1, web2, web3, web4, web5, web6]
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Issac Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen relative z-10'>
          <nav className='pt-10 mb-12 flex justify-between dark:text-white'>
            <h1 className='text-xl font-burtons dark:text-gray-200'>developedbyil</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-xl dark:text-gray-200' /></li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 cursor-pointer hover:animate-pulse'
                  onClick={() => setOpenCv(!openCv)}>Resume</a>
              </li>
            </ul>
          </nav>
          {openCv &&
            <div className='animate-slidedown'>
              <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' target="_blank" href="/cv.pdf">Open in new tab</a>
              <iframe src="/cv.pdf" className='min-w-full h-96 rounded-lg shadow-lg'></iframe>
            </div>}
          <div className='text-center py-10 '>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400 animate-slidedown'>Issac Levi</h2>
            <h3 className='text-2xl py-2 md:text-3xl  dark:text-white animate-slideup '>Fullstack Developer</h3>
            <div className='border-slate-600 animate-typing overflow-hidden whitespace-nowrap my-border max-w-fit max-h-fit'>
              <p className='text-md py-5 leading-8 text-gray-800 p-0 md:text-xl dark:text-gray-200 '>
                HI my name is Issac and this is my portfolio
              </p>
            </div>
          </div>
          <div className='text-5xl flex justify-center gap-16 text-gray-600 dark:text-gray-400 relative '>
            <a target="_blank" href="https://www.youtube.com/channel/UC-AlQ6ccXKqLEH1uRT4R3Wg">
              <AiFillYoutube className='hover:scale-110 ease-in duration-150 animate-slideleft' /></a>
            <a target="_blank" href="https://www.linkedin.com/in/issac-levi/">
              <AiFillLinkedin className='hover:scale-110 ease-in duration-150 animate-slowfade' /></a>
            <a target="_blank" href="https://www.facebook.com/itzik.levi.142/">
              <AiFillFacebook className='hover:scale-110 ease-in duration-150 animate-slideright' /></a>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 hover:from-cyan-600 ease-in duration-1000
           rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96 animate-slideup flex items-center'>
            <Image src={deved} layout="fill" objectFit='cover' />
          </div>
        </section>

        <section className='relative z-10'>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
              <Image src={design} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Frontend</h3>
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
              <Image src={code} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Backend</h3>
              {/* <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p> */}
              <h4 className='py-4 text-teal-600'>Backend tools I use</h4>
              <p className="text-gray-800 py-1">Node.js</p>
              <p className="text-gray-800 py-1">MongoDb</p>
              <p className="text-gray-800 py-1">Express</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
              <Image src={consulting} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Other</h3>
              {/* <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p> */}
              <h4 className='py-4 text-teal-600'>Other tools I use</h4>
              <p className="text-gray-800 py-1">Vuex</p>
              <p className="text-gray-800 py-1">Redux</p>
              <p className="text-gray-800 py-1">Tailwind</p>
              <p className="text-gray-800 py-1">Git</p>
            </div>
          </div>
        </section>
        <section className='relative z-10'>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            {webImgs.map((web, i) => {
              return <div className='basis-1/3 flex-1' key={i}>
                <Image src={web} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive' />
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
