"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from '@/assets/icons/star.svg';
import bookImage from '@/assets/images/book-cover.png'
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/square-js.svg'
import TypescriptIcon from '@/assets/icons/typescripticon.svg'
import ReactIcon from '@/assets/icons/react.svg'
import NextjsIcon from '@/assets/icons/nextjsicon.svg'
import MotionIcon  from '@/assets/icons/motionicon.svg'
import TailwindIcon from '@/assets/icons/tailwindicon.svg'
import { TechIcon } from "@/components/TechIcon";
import mapImage from '@/assets/images/map2.png'
import smileMemoji from '@/assets/images/memoji-smile.png'
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: 'Javascript',
    iconType: JavascriptIcon},
  {
    title: 'Typescript',
    iconType: TypescriptIcon},
  {
    title: 'React',
    iconType: ReactIcon},
  {
    title: 'NextJs',
    iconType: NextjsIcon},
  {
    title: 'FramerMotion',
    iconType: MotionIcon},
  {
    title: 'TailwindCSS',
    iconType: TailwindIcon}
  
]

const hobbies = [
  {
    title: 'Football',
    emoji: '⚽',
    top: '5%',
    left: '5%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    top: '5%',
    left: '50%',
  },
  {
    title: 'Snooker',
    emoji: '🎱',
    top: '35%',
    left: '10%',
  },
  {
    title: 'Cricket',
    emoji: '🏏',
    top: '40%',
    left: '35%',
  },
  {
    title: 'Space',
    emoji: '🌌',
    top: '45%',
    left: '70%',
  },
  {
    title: 'Editing',
    emoji: '📹',
    top: '65%',
    left: '5%',
  },
  {
    title: 'Fitness',
    emoji: '💪',
    top: '70%',
    left: '45%',
  }
]

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return <div className="py-20 lg:py-28">
    <div className="container" id="about">
      <SectionHeader eyebrow="About me" title="Glimpse into my world" description="Learn about who I am, what I do, and what inspires me." />
      <div className="mt-20 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 md:gap-8">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader title="My Reads" description="Explore the books Shaping my perspectives." />
            <div className="w-40 mx-auto md:mt-0 mt-2">
              <Image src={bookImage} alt="Book Cover" />
            </div>
          </Card>
          <Card className="h-[320px] md:col-span-3 lg:col-span-2">
            <CardHeader title="My Toolbox" description="Explore the technologies and tools I use to craft exceptional digital experiences." className="" />
            <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
            <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:20s]" />
          </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
          <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader title="Beyond The Code" description="Explore my Interests and Hobbies beyond the digital realm" className="px-6 py-6" />
            <div className="relative flex-1" ref={constraintRef}>
              {hobbies.map(hobby =>(
                <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={{
                  left: hobby.left,
                  top: hobby.top,
                }}
                drag
                dragConstraints={constraintRef}
                >
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] relative md:col-span-2 lg:col-span-1">
          <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
            <Image src={smileMemoji} alt="memoji" className="size-20" />
          </div>
          </Card>
        </div>
      </div>
    </div>
  </div>;
};
