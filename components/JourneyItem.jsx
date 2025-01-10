'use client'
import styles from './JourneyItem.module.css'

export default function JourneyItem({ step }) {
  const { title, date, description, icon, tags } = step

  return (
    <div className={`mx-auto w-[35rem] portrait:w-[80dvw] ${styles.container}`}>
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full bg-cyan-900 portrait:h-20 portrait:w-20 ${styles.circle}`}
      >
        <span className="text-2xl text-teal-300 portrait:text-6xl">{icon}</span>
      </div>
      <div className={`w-1 rounded-full bg-cyan-900 ${styles.line}`}></div>

      <h3
        className={`flex items-center justify-between text-2xl font-bold tracking-wide text-teal-400 portrait:ms-3 portrait:text-5xl ${styles.title}`}
      >
        {title}
        <span className="text-sm font-medium text-slate-400 portrait:text-3xl">
          {date}
        </span>
      </h3>
      <div className={`mt-2 mb-5${styles.desc}`}>
        <p
          className="text-base font-light tracking-wide text-teal-100 portrait:max-w-[70dvw] portrait:text-4xl portrait:leading-[3rem] portrait:text-slate-200"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <ul className="mb-10 mt-2 list-disc ps-5 text-sm text-gray-400 portrait:mb-20 portrait:mt-3 portrait:text-4xl">
          {tags.map((t, index) => (
            <li key={index} className="py-1">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
