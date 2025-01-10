import Link from 'next/link'
import styles from './Connect.module.css'
import Image from 'next/image'

export default function Connect() {
  return (
    <section
      className={`fixed bottom-0 left-0 right-0 top-0 flex w-[200vw] translate-x-[-50vw] items-center justify-center gap-5 portrait:flex-col-reverse portrait:gap-10 ${styles.container}`}
    >
      <div className="max-w-[50%]">
        <h3 className="my-3 text-4xl text-slate-50 portrait:text-6xl">
          Let's Connect!
        </h3>
        <p className="max-w-[40rem] text-lg font-light portrait:max-w-[75dvw] portrait:text-5xl portrait:leading-tight">
          {/* Im open to connecting! <br />
          Feel free to message me if you have a question, a comment, or just
          want to say good morning. */}
          I'm always excited to hear from fellow creatives and curious minds.
          Feel free to reach out for a friendly chat or to explore potential
          collaborations. Drop me a message&nbsp;
          <Link href={'https://t.me/mohammaderrfan'} className="text-teal-300">
            here!
          </Link>
        </p>
      </div>

      <div className="relative h-60 w-60 max-w-[50%] overflow-clip rounded-md shadow-lg shadow-slate-900 portrait:h-[25dvw] portrait:w-[25dvw] portrait:rounded-lg">
        <Image
          src={'/picture/erfan.png'}
          // src={'/picture/me2.jpg'}
          alt="My picture"
          fill
          objectFit="contain"
        />
      </div>
    </section>
  )
}
