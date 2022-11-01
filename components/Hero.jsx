import Link from 'next/link'
import Image from 'next/image'
import Bts from '../public/assets/Bts'
import HeroImg from '../public/assets/images/hero-banner.png'
import { BsFacebook, BsYoutube, BsTwitter } from 'react-icons/bs'

function Hero() {
  return (
    <div className='flex h-[760px] w-[1360px] relative justify-between items-center'>
      <section className='w-5/12 h-full'>
        <h1 className='text-5xl font-bold text-eerieblack'>
          Building Digital{' '}
          <span className='underline decoration-solid decoration-Mustard decoration-4'>
            Product
          </span>
          Brand and Experience
        </h1>
        <p className='text-xl text-Coolgray'>
          At Pixology we specialize in designing, building, shipping and scaling beautiful, usable
          products with blazing-fast efficiency
        </p>

        <div className='flex gap-10'>
          <button className='flex justify-center px-16 py-4 font-bold text-center bg-Majorelleblue rounded-xl text-Ghostwhite'>
            How it Works
          </button>
          <button className='flex items-center justify-center h-16 gap-4 text-lg w-60 '>
            <Bts layout='fill' alt='' className='' />
            Behind the scenes
          </button>
        </div>
        {/* Social Links */}
        <div className='absolute bottom-0 flex gap-5'>
          <Link
            className='flex items-center justify-center gap-5 px-4 py-3 text-Blueryb80'
            href='#'
          >
            <BsFacebook />
            <span className='font-semibold uppercase text-Eerieblack'>facebook</span>
          </Link>
          <Link
            href='#'
            className='flex items-center justify-center gap-5 px-4 py-3 text-Bittersweet'
          >
            <BsYoutube />
            <span className='font-semibold uppercase text-Eerieblack'>youtube</span>
          </Link>
          <Link
            href='#'
            className='flex items-center justify-center gap-5 px-4 py-3 text-Skybluecrayola'
          >
            <BsTwitter />
            <span className='font-semibold uppercase text-Eerieblack'>twitter</span>
          </Link>
        </div>
      </section>
      <section className='w-7/12 h-full'>
        <Image src={HeroImg} alt='Hero' height={645} width={800} />
      </section>
    </div>
  )
}

export default Hero
