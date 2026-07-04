import Image from 'next/image'
import styles from './About.module.css'
import ScrollDownIndicator from './ScrollDownIndicator'

export default function About() {
  return (
    <section
      className={`flex h-screen items-center justify-center portrait:flex-col ${styles.container} `}
    >
      <div
        className={`mb-16 font-light leading-7 portrait:mx-auto portrait:max-w-[70dvw]`}
      >
        <p className={`portrait:text-4xl ${styles.say_hello}`}>Hi, I&apos;m</p>
        <h1
          className={`text-primary pb-1 pt-8 text-4xl font-bold portrait:pb-5 portrait:pt-16 portrait:text-6xl ${styles.name}`}
        >
          Mohammad Erfan Akbari
        </h1>
        <h3
          className={`text-primary pb-8 pt-1 text-4xl font-bold portrait:pb-16 portrait:text-6xl ${styles.position}`}
        >
          A Front-end Developer
        </h3>
        <p
          className={`text-text text-lg tracking-wider portrait:text-5xl portrait:leading-[3.5rem] ${styles.desc}`}
        >
          I build user friendly and engaging web experiences.
          <br /> I am passionate about find or creating solutions to challenges.
        </p>
      </div>

      <div
        className={`${styles.image_container} shadow-surface relative overflow-hidden rounded-lg shadow-md`}
      >
        <Image
          src={'/picture/programmer-optimized.gif'}
          alt="Programmer image"
          fill
          className="opacity-80"
        />
      </div>

      <div
        className={`${styles.scrolldown} absolute bottom-0 left-0 right-0 top-0 -z-10`}
      >
        <ScrollDownIndicator />
      </div>
    </section>
  )
}
