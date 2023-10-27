import { Backend_skill, Frontend_skill, Full_stack } from '@/constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

interface SkillImage {
  Image: string
  width: number
  height: number
}

const SkillCategory: React.FC<{ skills: SkillImage[] }> = ({ skills }) => (
  <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
    {skills.map((image, index) => (
      <SkillDataProvider
        key={index}
        src={image.Image}
        width={image.width}
        height={image.height}
        index={index}
      />
    ))}
  </div>
)

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden"
      style={{ transform: 'scale(0.9)' }}
    >
      <SkillText />
      <SkillCategory skills={Frontend_skill} />
      <SkillCategory skills={Backend_skill} />
      <SkillCategory skills={Full_stack} />
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  )
}

export default Skills
