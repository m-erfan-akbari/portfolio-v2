import styles from './Journey.module.css'
import JourneyItem from './JourneyItem'
import steps from '@/data/journey'

import { GiPathDistance } from 'react-icons/gi'

export default function Journey() {
  return (
    <section
      className={`fixed bottom-0 left-0 right-0 top-0 min-h-screen translate-y-0 ${styles.container}`}
    >
      <div className={`mx-16 my-12 flex flex-col items-center`}>
        <h1
          className={`flex items-center justify-center gap-2 text-center font-sans text-3xl font-bold text-slate-50 portrait:text-7xl ${styles.title}`}
        >
          <GiPathDistance /> My journey
        </h1>
        <h6
          className={`mt-1 font-light text-slate-100 portrait:mt-8 portrait:text-4xl ${styles.desc}`}
        >
          From Learning to Company
        </h6>
      </div>
      <div className={`mx-auto h-[80vh] overflow-clip portrait:h-[90vh]`}>
        {steps.map((step, index) => (
          <JourneyItem key={index} step={step} />
        ))}
      </div>
    </section>
  )
}
