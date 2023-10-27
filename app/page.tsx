import Encryption from '@/components/main/Encryption'
import Footer from '@/components/main/Footer'
import Hero from '@/components/main/Hero'
import Projects from '@/components/main/Projects'
import Skills from '@/components/main/Skils'

export default function Home() {
  return (
    <div className=" h-full flex flex-col items-center justify-center  w-full">
      <div className="flex max-w-[1200px]  flex-col gap-5">
        <Hero />
        <Skills />
        <Projects />
        <Encryption />
        <Footer />
      </div>
    </div>
  )
}
