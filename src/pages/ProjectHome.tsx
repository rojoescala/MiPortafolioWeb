import { useParams } from "react-router-dom"
import Carousel from "../components/Carousel"

function ProjectHome() {
    const { projectName } = useParams()
    return projectName === 'kwall360' ? (
        <>
            <div>
                <section className="bg-peaks text-justify">
                    <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                        <p className="mb-4 text-xl font-extrabold leading-none text-gray-900 md:text-2xl dark:text-white">{projectName}</p>

                        <div className="my-20">
                            <Carousel />
                        </div>

                        <dl>
                            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Project Overview</dt>
                            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                                This application is designed to streamline the consultation of insurance policies, bonds, and statistical data,
                                enhancing user experience and accessibility in the insurance sector.
                            </dd>
                        </dl>
                        <dl>
                            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Technology Stack</dt>
                            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                                KernoWall 360 is developed using a modern technology stack that includes:
                                <ul className="list-disc mx-5">
                                    <li>
                                        React: For building a dynamic and responsive user interface.
                                    </li>
                                    <li>
                                        TypeScript (TSX): Ensuring type safety and enhancing code maintainability.
                                    </li>
                                    <li>
                                        Tailwind CSS: Allowing us to create a custom, responsive design with minimal overhead.
                                    </li>
                                </ul>
                            </dd>
                        </dl>
                        <dl>
                            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Project Features</dt>
                            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                                <ul className="list-disc mx-5">
                                    <li>
                                        Insurance and Bond Consultation:
                                        The primary functionality of KernoWall 360 enables users to effortlessly search and retrieve information
                                        related to various insurance products and bonds. The intuitive design facilitates quick navigation and allows
                                        users to access critical information without unnecessary complexity.
                                    </li>
                                    <li>
                                        Statistical Insights:
                                        In addition to insurance consultations, KernoWall 360 incorporates a robust analytics module that provides users
                                        with valuable statistical insights. This feature empowers users to make informed decisions based on comprehensive
                                        data analysis.
                                    </li>
                                    <li>
                                        Upcoming Module Policy and Claims Management:
                                        Currently under development, this module will enhance KernoWall 360 by allowing users to directly consult insurance
                                        policies and track claims for incidents. This addition aims to provide a holistic view of the user's insurance portfolio,
                                        ensuring a seamless experience from policy purchase to claims processing.
                                    </li>
                                </ul>
                            </dd>
                        </dl>
                        <dl>
                            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Conclusion</dt>
                            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                                KernoWall 360 represents a significant advancement in how users interact with insurance and financial products. By leveraging
                                modern technologies and a user-centric approach, we are committed to delivering a comprehensive solution that meets the evolving
                                needs of our clients. We are excited about the upcoming features and look forward to the positive impact KernoWall 360 will have
                                in the insurance landscape.
                            </dd>
                        </dl>
                    </div>
                </section>
            </div>
        </>
    ) : (
        <div>
            <h1>Work in progress...</h1>
        </div>
    )
}
export default ProjectHome