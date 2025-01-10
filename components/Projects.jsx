import styles from './Projects.module.css'
import ProjectItem from './ProjectItem'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section
      className={`fixed bottom-0 left-0 right-0 top-0 mx-auto h-screen w-[80vw] p-20 ${styles.container}`}
    >
      <h3
        className={`mb-2 text-3xl text-slate-50 portrait:mb-5 portrait:text-7xl ${styles.title}`}
      >
        {"Some Things I've Built"}
      </h3>
      <div className="flex flex-col overflow-clip py-5">
        {projects.map((prj, index) => (
          <ProjectItem
            key={index}
            project={prj}
            isEven={(index + 1) % 2 === 0}
          />
        ))}
      </div>
    </section>
  )
}
