import About from '@/components/About'
import Connect from '@/components/Connect'
import Journey from '@/components/Journey'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <main className={`h-[400rem] portrait:h-[2000rem]`}>
      <About />
      <Journey />
      <Projects />
      <Connect />
    </main>
  )
}
