import './App.css'
import Navbar from './components/Navbar'
import rojoImg from "./assets/IMG_20220618_114604.jpg"
import { Link } from 'react-router-dom'


function App() {

  const projectList = [{
    id: 1,
    title: "Kerno Wall 360",
    subtitle: "React, TSX & Vite",
    body: "Currently developing a web application about insurance, bails and statistics using React, TS and Vite.",
    image: null,
    root: "kwall360"
  },
  {
    id: 2,
    title: "Sekura components library",
    subtitle: "React, JSX & Storybook",
    body: "Created adaptable, dynamic and configurable components in React as a library (CMS) with documentation using Storybook.",
    image: null,
    root: "library"
  },
  {
    id: 3,
    title: "Kerno 2",
    subtitle: "React",
    body: "Migrated web application developed in AngularJS to React applying our own components library.",
    image: null,
    root: "kerno2"
  },
  {
    id: 4,
    title: "InsuranceHub",
    subtitle: "React & JSX",
    body: "Designed and developed the frontend of a web application car insurance quotes using React",
    image: null,
    root: "insurancehub"
  },
  {
    id: 5,
    title: "Ultraplan",
    subtitle: "Ionic",
    body: "Applied requirement updates of mobile application for Ultramar company with Ionic",
    image: null,
    root: "ultraplan"
  },
  {
    id: 6,
    title: "Landing pages",
    subtitle: "HTML, CSS & JS",
    body: "Attended design of landing pages for Andrea boutique, SportsWorld, Nexus Tours, Amstar and others using HTML, CSS and JS.",
    image: null,
    root: "lp"
  },]

  return (
    <>      
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Hi my name is Roberto Escalante
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                I am an enthusiastic learner about frontend technologies. My
                interests are UI/UX design, mobile and web applications. I put all
                the effort in deliver quality software.
              </p>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src={rojoImg} className='w-auto rounded-xl m-auto object-fit' alt="me" />
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Projects</h2>
              <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                This are some of the projects i been working...</p>
            </div>
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
              {projectList.map((project) => (
                <Link to={`/project/${project.root}`}>
                  <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700" key={project.id}>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="currentColor" className="bi bi-browser-chrome object-fit m-16" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M16 8a8 8 0 0 1-7.022 7.94l1.902-7.098a3 3 0 0 0 .05-1.492A3 3 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8M0 8a8 8 0 0 0 7.927 8l1.426-5.321a3 3 0 0 1-.723.255 3 3 0 0 1-1.743-.147 3 3 0 0 1-1.043-.7L.633 4.876A8 8 0 0 0 0 8m5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a3 3 0 0 0-1.252.243 2.99 2.99 0 0 0-1.81 2.59M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                      </svg>
                    </a>
                    <div className="p-5">
                      <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">{project.title}</a>
                      </h3>
                      <span className="text-gray-500 dark:text-gray-400">{project.subtitle}</span>
                      <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{project.body}</p>
                    </div>
                  </div>
                </Link>
              ))}             
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
