import Image from 'next/image';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero-section/Hero';
import StickyNav from './components/Navbar/StickyNav';
import Productivity from './components/Productivity/Productivity';
import Collaboration from './components/Collaboration/Collaboration';
import Security from './components/Contact/Contact';
import {Globe} from './components/Footer/Globe';


export default function Home() {
  
  return (
    <div className=' '>
      <div className='relative z-50'>
        <div className='absolute'>
          <Navbar />
        </div>
      </div>
      <div>
        <div className='overflow-hidden'>
          <div className='relative'>
            <img
              className='absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] -z-30 image'
              width='4377'
              src='https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp'
              alt=''
            />
          </div>
          <div className='hero-section px-3 '>
            <Hero />
          </div>
          <StickyNav />
          <div
            id='productivity'
            className='home-campaign-productivity px-4 pt-8 overflow-hidden'
          >
            <Productivity />
          </div>
          <div
            id='collaboration'
            className='home-campaign-productivity px-4 pt-8  overflow-hidden'
          >
            <Collaboration />
          </div>
          <div
            id='security'
            className='home-campaign-productivity px-4 pt-8  overflow-hidden'
          >
            <Security />
          </div>
          <div>
            <Globe />
          </div>
          <div className='max-w-[1280px] mx-auto relative z-[2]  px-5 md:mt-8'>
            <ul className='lg:w-9/12 text-[14px] pt-16 text-[#7d8590] space-y-1'>
              <li className='flex gap-4'>
                Vibhav Bhartiya
                <a href='mailto:vibhavbhartiya13@gmail.com'>
                  bhartiyavibhav@gmail.com
                </a>
              </li>
              <li className='flex gap-4'>Github-Portfolio@2024
                 <a href='https://github.com/vibhav13122003'>Github</a> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
