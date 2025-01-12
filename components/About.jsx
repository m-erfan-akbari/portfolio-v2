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
        <p className={`portrait:text-4xl ${styles.say_hello}`}>
          Hi, my name is
        </p>
        <h1
          className={`pb-1 pt-8 text-4xl font-bold text-teal-300 portrait:pb-5 portrait:pt-16 portrait:text-6xl ${styles.name}`}
        >
          Mohammad Erfan Akbari
        </h1>
        <h3
          className={`pb-8 pt-1 text-4xl font-bold text-teal-300 portrait:pb-16 portrait:text-6xl ${styles.position}`}
        >
          A Front-end Developer
        </h3>
        <p
          className={`text-lg tracking-wider text-slate-300 portrait:text-5xl portrait:leading-[3.5rem] ${styles.desc}`}
        >
          I build user friendly and engaging web experiences.
          <br /> I am passionate about find or creating solutions to challenges.
        </p>
      </div>

      <div
        className={`${styles.image_container} relative overflow-hidden rounded-lg`}
      >
        <Image src={'/picture/programmer.gif'} alt="Programmer image" fill />
      </div>

      <div
        className={`${styles.scrolldown} absolute bottom-0 left-0 right-0 top-0 -z-10`}
      >
        <ScrollDownIndicator />
      </div>

      {/* <div className={`text-9xl portrait:text-[12rem] ${styles.hand}`}>👋</div> */}
    </section>
  )
}
