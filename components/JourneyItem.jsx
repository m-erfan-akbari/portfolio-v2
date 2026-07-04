'use client'
import styles from './JourneyItem.module.css'

export default function JourneyItem({ step }) {
  const { title, date, description, icon, tags } = step

  return (
    <div className={`mx-auto w-[35rem] portrait:w-[80dvw] ${styles.container}`}>
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full bg-surface-elevated portrait:h-20 portrait:w-20 ${styles.circle}`}
      >
        <span className="text-2xl text-primary portrait:text-6xl">{icon}</span>
      </div>
      <div className={`w-1 rounded-full bg-surface ${styles.line}`}></div>

      <h3
        className={`flex items-center justify-between text-2xl font-bold tracking-wide text-primary portrait:ms-3 portrait:text-5xl ${styles.title}`}
      >
        {title}
        <span className="text-sm font-medium text-text-muted portrait:text-3xl">
          {date}
        </span>
      </h3>
      <div className={`mt-2 mb-5${styles.desc}`}>
        <p
          className="text-base font-light tracking-wide text-text-secondary portrait:max-w-[70dvw] portrait:text-4xl portrait:leading-[3rem] portrait:text-text"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <ul className="mb-10 mt-2 list-disc ps-5 text-sm text-text-muted portrait:mb-20 portrait:mt-3 portrait:text-4xl">
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
