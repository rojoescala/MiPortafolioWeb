import { useState } from 'react'
import './App.css'
import rojoImg from "./assets/me.jpg"
import { Link } from 'react-router-dom'

function App() {

  const projectList = [{
    id: 1,
    title: "Kerno Wall 360",
    subtitle: "React, TSX & Vite",
    body: "Currently developing a web application about insurance, bails and statistics using React, TS and Vite.",
    image: null,
    root: "kwall360",
    initials: "KW"
  },
  {
    id: 2,
    title: "Sekura Components Library",
    subtitle: "React, JSX & Storybook",
    body: "Created adaptable, dynamic and configurable components in React as a library (CMS) with documentation using Storybook.",
    image: null,
    root: "library",
    initials: "SCL"
  },
  {
    id: 3,
    title: "Kerno 2",
    subtitle: "React",
    body: "Migrated web application developed in AngularJS to React applying our own components library.",
    image: null,
    root: "kerno2",
    initials: "K2"
  },
  {
    id: 4,
    title: "InsuranceHub",
    subtitle: "React & JSX",
    body: "Designed and developed the frontend of a web application car insurance quotes using React",
    image: null,
    root: "insurancehub",
    initials: "IH"
  },
  {
    id: 5,
    title: "Ultraplan",
    subtitle: "Ionic",
    body: "Applied requirement updates of mobile application for Ultramar company with Ionic",
    image: null,
    root: "ultraplan",
    initials: "UP"
  },
  {
    id: 6,
    title: "Landing Pages",
    subtitle: "HTML, CSS & JS",
    body: "Attended design of landing pages for Andrea boutique, SportsWorld, Nexus Tours, Amstar and others using HTML, CSS and JS.",
    image: null,
    root: "lp",
    initials: "LP"
  },
  {
    id: 7,
    title: "Segutienda Manager",
    subtitle: "React, MUI & TSX",
    body: "Developed a manager app (CRUD) for a current insurance shop with Material UI.",
    image: null,
    root: "segutiendamanager",
    initials: "SM"
  },
  {
    id: 8,
    title: "Segutienda Client",
    subtitle: "React, MUI & TSX",
    body: "Developed an administrator app for a current insurance shop, and applied changes to the app based in the administrator.",
    image: null,
    root: "segutiendaclient",
    initials: "SC"
  },]

  const [visibleCount, setVisibleCount] = useState(4)

  const loadMoreProjects = () => {
    setVisibleCount(prevCount => prevCount + 4)
  }

  const loadLessProjects = () => {
    setVisibleCount(prevCount => Math.max(prevCount - 4, 4))
  }

  const displayedProjects = projectList.slice(0, visibleCount);

  return (
    <>
      <div className="h-screen">
        <section className="flex items-start justify-center h-screen">
          <div className="flex flex-col sm:flex-row max-w-screen-3xl grid-cols-12 px-4 m-auto gap-16 items-center justify-center">
            <div className="mr-auto place-self-center col-span-7">
              <h1 className="max-w-2xl mb-4 font-extrabold tracking-tight  sm:text-left text-center leading-none text-4xl xl:text-6xl text-white">
                Hi, my name is Roberto Escalante
              </h1>
              <p className="max-w-2xl font-light text-gray-100 md:text-lg lg:text-xl text-center sm:text-justify">
                I am an enthusiastic learner about frontend technologies. My
                interests are UI/UX design, mobile and web applications. I put all
                the effort in delivering quality software.
              </p>
            </div>
            <div className="my-0 sm:mt-4 flex justify-center w-full sm:w-1/3">
              <div className="sm:px-2 sm:py-5 p-4 w-60 sm:w-96 bg-white bg-contain sm:rounded-3xl rounded-full bg-opacity-20 backdrop-blur sm:border-4 border border-black">
                <img src={rojoImg} className='w-full h-52 sm:h-96 sm:object-contain object-cover rounded-full' alt="me" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <h2 className="mb-4 sm:text-5xl text-3xl tracking-tight font-extrabold text-white">Projects</h2>
              <p className="font-light lg:mb-16 sm:text-xl text-gray-100">
                I introduce the projects I been working on:</p>
            </div>
            <div className="grid gap-8 mb-6 lg:mb-16 xl:grid-cols-2">
              {displayedProjects.map((project) => (
                <Link to={`project/${project.root}`}>
                  <div key={project.id} className="items-center h-52 rounded-xl sm:flex bg-white bg-contain text-gray-100 hover:text-white bg-opacity-20 hover:bg-gray-400 hover:bg-opacity-10 backdrop-blur border-4 border-black">
                    <div className="hidden sm:block">
                      <span className="font-medium text-4xl rounded-full text-black m-16 border-2 border-white bg-white/90 w-24 h-24 flex items-center justify-center">
                        {project.initials}
                      </span>
                    </div>

                    <div className="p-5">
                      <h3 className="text-xl font-bold tracking-tight text-white">
                        <a href="#">{project.title}</a>
                      </h3>
                      <span>{project.subtitle}</span>
                      <p className="mt-3 mb-4 font-light text-justify">{project.body}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex">
              {visibleCount < projectList.length && (
                <div className="relative flex flex-col items-center mx-auto group">
                  <button onClick={loadMoreProjects} className='text-white hover:text-yellow-800 flex mx-auto animate-bounce'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-down-circle-fill mx-2" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                    </svg>
                  </button>
                  <span className="w-32 text-center absolute left-1/2 transform -translate-x-1/2 translate-y-10 text-gray-100 text-sm p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Show more (+)
                  </span>
                </div>
              )}
              {visibleCount > 4 && (
                <div className="relative flex flex-col items-center mx-auto group">
                  <button onClick={loadLessProjects} className='text-white hover:text-yellow-800 flex mx-auto animate-bounce'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                    </svg>
                  </button>
                  <span className="w-32 text-center absolute left-1/2 transform -translate-x-1/2 translate-y-10 text-gray-100 text-sm p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Show less (-)
                  </span>
                </div>
              )}
            </div>
          </div>
        </section>       
      </div>
    </>
  )
}

export default App
