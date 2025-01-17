import styles from './Contact.module.css'

import Link from 'next/link'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa6'
import { FaTelegramPlane } from 'react-icons/fa'

export default function Contact() {
  const contactOptions = [
    {
      icon: <FaLinkedinIn />,
      link: 'https://www.linkedin.com/in/erfan-akbari/',
    },
    {
      icon: <FaTelegramPlane />,
      link: 'https://t.me/mohammaderrfan',
    },
    {
      icon: <FaGithub />,
      link: 'https://github.com/m-erfan-akbari',
    },
  ]

  return (
    <aside
      className={`fixed bottom-0 left-8 top-0 z-10 grid w-7 justify-items-center gap-5 text-xl portrait:left-12 portrait:gap-8 portrait:text-5xl ${styles.container}`}
    >
      <div className="h-full w-[2px] rounded-md bg-slate-500" />
      <div
        className={`flex flex-col gap-5 portrait:gap-12 ${styles.icon_container}`}
      >
        {contactOptions.map((c) => (
          <Link
            key={c.link}
            href={c.link}
            target="_blank"
            className="text-slate-400 transition-all hover:scale-110 hover:text-teal-300"
          >
            {c.icon}
          </Link>
        ))}
      </div>
      <div className="h-full w-[2px] rounded-md bg-slate-500" />
    </aside>
  )
}
