import styles from './Mail.module.css'

export default function Mail() {
  return (
    <aside
      className={`fixed bottom-0 right-8 top-0 z-10 grid w-7 justify-items-center gap-5 portrait:right-12 ${styles.container}`}
    >
      <div className="h-full w-[2px] rounded-md bg-slate-500" />
      <div
        className={`flex flex-col gap-5 text-xs tracking-widest text-slate-400 portrait:text-3xl ${styles.mail}`}
        style={{ textOrientation: 'mixed', writingMode: 'vertical-lr' }}
      >
        <a href="mailto:m.erfan.akbari@gmail.com">m.erfan.akbari@gmail.com</a>
      </div>
      <div className="h-full w-[2px] rounded-md bg-slate-500" />
    </aside>
  )
}
