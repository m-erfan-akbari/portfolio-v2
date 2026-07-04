import Link from 'next/link'
import styles from './ProjectItem.module.css'
import Image from 'next/image'

import { FiGithub } from 'react-icons/fi'
import { RiShareBoxFill } from 'react-icons/ri'

export default function ProjectItem({ project, isEven }) {
  const { name, description, tags, picture, github, website = '' } = project
  return (
    <figure className={`relative mb-32 mt-12 ${styles.container}`}>
      <div
        className={`shadow-surface relative h-[calc(50vw_/_2.22)] w-[50vw] overflow-clip rounded-md shadow-md hover:z-20 hover:shadow-lg portrait:mx-auto portrait:!h-[30vw] portrait:w-[calc(30vw_/_0.45)] ${styles.image_container} ${isEven ? 'landscape:ms-auto' : ''}`}
      >
        <Link
          className={`bg-surface absolute bottom-0 left-0 right-0 top-0 z-10 cursor-pointer opacity-70 hover:opacity-10 portrait:opacity-30`}
          href={website || picture}
          target="_blank"
        />

        <Image src={picture} alt="Cafenow picture" fill objectFit="contain" />
      </div>

      <div
        className={`absolute bottom-16 z-10 portrait:relative portrait:bottom-0 portrait:px-6 portrait:pt-10 ${
          isEven ? 'left-0 right-auto' : 'right-0'
        }`}
      >
        <Link href={website}>
          <h4
            className={`text-primary text-2xl font-bold portrait:mb-1 portrait:text-5xl ${
              isEven ? '' : 'landscape:text-right'
            }`}
          >
            {name}
          </h4>
        </Link>
        <figcaption
          className={`bg-surface text-text portrait:text-text-muted max-w-[35vw] rounded-md px-3 py-2 font-light tracking-wide portrait:max-w-none portrait:bg-transparent portrait:text-4xl portrait:leading-[3rem] portrait:tracking-wider ${
            isEven ? 'right-auto block' : ''
          }`}
        >
          {description}
        </figcaption>
      </div>

      <div
        className={`flex items-center justify-between pe-5 portrait:items-start portrait:px-7 ${
          isEven ? 'clear-end landscape:flex-row-reverse' : ''
        }`}
      >
        <ul className="ps-2 landscape:my-2" style={{ listStyle: 'inside' }}>
          {tags.map((t, index) => (
            <li
              key={index}
              className="text-text-muted m-3 inline portrait:block portrait:text-3xl"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="flex gap-5">
          {github && (
            <Link
              href={github}
              target="_blank"
              className="text-text-muted hover:text-text"
            >
              <FiGithub className="text-xl portrait:mx-3 portrait:text-5xl" />
            </Link>
          )}
          {website && (
            <Link
              href={website}
              target="_blank"
              className="text-text-muted hover:text-text"
            >
              <RiShareBoxFill className="text-xl portrait:mx-3 portrait:text-5xl" />
            </Link>
          )}
        </div>
      </div>
    </figure>
  )
}
