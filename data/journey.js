import { TbBrandCSharp, TbCode } from 'react-icons/tb'
import { FaPython, FaBriefcase, FaHandshake } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'

const journey = [
  {
    title: 'Hello world!',
    date: '2021 September',
    description:
      'As a young computer student, I began my coding adventure with C#.',
    icon: <TbBrandCSharp />,
    tags: ['C#', 'Loop', 'Condition', 'Variable'],
  },
  {
    title: 'Better undrestanding',
    date: '2022 June',
    description: `In the summer of 2022, I joined a programming course at my school to learn Python which was a 
    good course but I wanted to go deeper so after ending course I continue to learn through an online course.
    Learning Python has significantly enhanced my understanding of programming.`,
    icon: <FaPython />,
    tags: ['Python', 'OOP', 'Class', 'Function', 'Array'],
  },
  {
    title: 'Web development',
    date: '2022 October',
    description:
      'Once I learned Python, I had to pick which field of programming I wanted to do next. After looking at a bunch of options, I found my interest in web development. So, I started learning the basics of the web, like HTML and CSS.',
    icon: <TbCode />,
    tags: ['HTML', 'CSS', 'Responsive Design', 'Semantic Elements'],
  },
  {
    title: 'Interact with user',
    date: '2023 March',
    description:
      "After covering the basics, it's time to dive into the fascinating world of JavaScript and interactive web applications, where engaging user experiences are created.",
    icon: <IoLogoJavascript />,
    tags: ['JavaScript', 'ES6', 'DOM', 'Promise', 'Hoisting'],
  },
  {
    title: 'A Successful Internship',
    date: '2023 Summer',
    description: `After honing my skills through various courses, I was eager to apply them in a real-world setting. My internship at <a href="https://mrk.co.ir" target="_blank" class="text-teal-300" style="color: #5eead4;">MRK</a> provided the perfect opportunity. There, I delved into the Express.js framework, gaining valuable experience. Soon after, I was tasked with designing web pages. The most exciting part was implementing a backend solution using APIs to store user data directly into server-side files.`,
    icon: <FaBriefcase />,
    tags: ['Vanilla JavaScript', 'Express.js', 'Restful API', 'HTML-CSS'],
  },
  {
    title: 'Opportunity to adventure',
    date: '2023 Sebtember-2024 October',
    description:
      'Upon completing my internship, I was entrusted with the "TV Management" project. This role allowed me to leverage my React.js skills to design an intuitive and engaging user interface. Building upon my previous experience with Express.js, I also contributed to the backend development, creating modules and APIs to support the frontend.',
    icon: <FaHandshake />,
    tags: ['React', 'React-Query', 'Express.js', 'JWT', 'Linux'],
  },
]

export default journey
