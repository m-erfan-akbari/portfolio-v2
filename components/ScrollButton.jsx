'use client'

import styles from './ScrollButton.module.css'
import { FaAngleDown } from 'react-icons/fa'

export default function ScrollButton() {
  const scrollTo = (value) =>
    window.scroll({
      top: value,
      left: 0,
      behavior: 'smooth',
    })

  return (
    <div
      className={`absolute bottom-[10%] left-1/2 -translate-x-1/2 ${styles.container}`}
    >
      <button
        onClick={() => scrollTo(window.innerHeight)}
        className={`text-3xl portrait:text-6xl ${styles.arrow_container}`}
      >
        <FaAngleDown />
      </button>
    </div>
  )
}
