import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { HeroOrbit } from '@/components/HeroOrbit';

export const HeroSection = () => {
  return (
    <div className="py-32 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        {/* Background grain image */}
        <div className="absolute inset-0 -z-30 opacity-0">
          <Image
            src={grainImage}
            alt="Grain texture background"
            fill
            className="object-cover"
            quality={100}
          />
        </div>

        {/* Hero rings */}
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        {/* HeroOrbit components */}
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s" shouldSpin spinDuration="6s">
          <div className="size-2 rounded-full bg-emerald-300/10" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s" shouldSpin spinDuration="6s">
          <div className="size-2 rounded-full bg-emerald-300/10" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s" shouldSpin spinDuration="6s">
          <div className="size-3 rounded-full bg-emerald-300/10" />
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-71} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px] z-0" alt="Person peeking from behind laptop" />
          <div className="bg-gray-950 border border-gray-800 py-1.5 px-4 inline-flex items-center gap-3.5 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 inset-0 absolute animate-ping-large rounded-full"></div>
            </div>
            <div className="text-sm font-medium">Available for new projects</div>
          </div>
        </div>

        <div className="max-w-xl p-4 mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-7 tracking-wide bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Building Exceptional User Experiences
          </h1>
        </div>

        <p className="mt-4 text-center max-w-3xl sm:text-sm m-auto text-white/70 md:text-lg">
          Hi, I&apos;m Zaid, a passionate front-end developer with a love for crafting clean, responsive, and user-friendly web experiences. I specialize in turning ideas into reality using modern technologies like React, Framer Motion, GSAP, NextJS, Tailwind CSS, and JavaScript. Whether it&apos;s building intuitive interfaces or optimizing performance, I thrive on creating seamless digital solutions that leave a lasting impression. Let&apos;s build something amazing together!
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border border-white/15 px-5 h-11 rounded-xl z-0"
          >
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </a>
          <a
            href="https://www.instagram.com/amfastafboi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-5 h-11 rounded-xl z-0"
          >
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </a>
        </div>
      </div>
    </div>
  );
};