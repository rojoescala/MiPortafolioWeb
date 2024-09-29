import { useLocation, useParams } from "react-router-dom"
import { useEffect } from "react";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function ProjectHome() {
    const { projectName } = useParams()

    const projectData = [
        {
            root: "kwall360",
            name: "KernoWall 360",
            images: [],
            overview: "This application is designed to streamline the consultation of insurance policies, bonds, and statistical data, enhancing user experience and accessibility in the insurance sector.",
            features: [
                "Insurance and Bond Consultation: The primary functionality of KernoWall 360 enables users to effortlessly search and retrieve information related to various insurance products and bonds. The intuitive design facilitates quick navigation.",
                "Statistical Insights: In addition to insurance consultations, KernoWall 360 incorporates a module that provides users with valuable statistical insights. This feature empowers users to make informed decisions based on comprehensive data analysis.",
                "Upcoming Module Policy and Claims Management: Currently under development, this module will enhance KernoWall 360 by allowing users to directly consult insurance policies and track claims for incidents. This addition aims to provide a holistic view of the user's insurance portfolio, ensuring a seamless experience from policy purchase to claims processing.",
            ],
            stack: [
                "React: For building a dynamic and responsive user interface.",
                "TypeScript (TSX): Ensuring type safety and enhancing code maintainability.",
                "Tailwind CSS: Allows to create a custom, responsive design with minimal overhead."
            ],
            conclusion: "KernoWall 360 represents a significant advancement in how users interact with insurance and financial products."
        },
        {
            root: "insurancehub",
            name: "InsuranceHub",
            images: [],
            overview: "InsuranceHub is a dynamic web application designed to streamline the process of quoting and issuing auto insurance for both individual and fleet policies. This project leverages modern web technologies, including React, JSX, and Bootstrap, to deliver a seamless and responsive user experience.",
            features: [
                "Quote Generation: Users can quickly obtain quotes by entering relevant vehicle information. The system aggregates data from multiple insurers to compare prices.",
                "Policy Issuance: Once users select their preferred quote, they can proceed with the policy issuance process directly through the platform.",
                "Fleet Management: For businesses with multiple vehicles, InsuranceHub offers a dedicated module for fleet management, enabling bulk quoting and policy management.",
            ],
            stack: [
                "React: The choice of React facilitates the creation of a dynamic and responsive user interface. Its component-based architecture allows for reusability and efficient updates.",
                "JSX: Utilizing JSX enables to write HTML-like syntax within JavaScript, improving the readability and maintainability of our codebase. This integration supports a smooth development workflow.",
                "Bootstrap: We implemented Bootstrap for its powerful front-end framework, which helps us achieve a consistent and visually appealing design across all devices. This ensures a mobile-first approach that caters to our users' needs."
            ],
            conclusion: "InsuranceHub stands out as a robust solution for auto insurance quoting and issuance. The project exemplifies modern web development and demonstrates commitment to delivering high-quality, user-centric applications."
        },
        {
            root: "ultraplan",
            name: "Ultraplan",
            images: [],
            overview: "UltraPlan is a mobile application designed to enhance the customer experience through a comprehensive benefits program for UltraPlan clients. Developed using Ionic, this project focuses on providing users with a seamless interface and robust functionality to access their benefits and manage their accounts effectively.",
            features: [
                "Benefits Management: Users can view and manage their benefits in real time, ensuring they are always informed about available offers and how to redeem them.",
                "Reward Tracking: The app includes a feature for tracking rewards accumulation, allowing users to see their progress and encouraging engagement with the program.",
                "Personalization: UltraPlan offers customizable settings that enable users to tailor their experience based on individual preferences and usage patterns.",
            ],
            stack: [
                "Ionic: Leveraging Ionic for this project allows to create a cross-platform mobile application that delivers a native-like experience on both iOS and Android devices. This framework enables rapid development and deployment, ensuring timely updates and feature enhancements.",
                "Angular: The application is built using Angular, which provides a robust structure for building dynamic single-page applications. This choice enhances performance and maintainability, allowing for the creation of responsive and engaging user interfaces.",
                "Capacitor: We utilized Capacitor to bridge the gap between web and native functionalities, enabling access to device features."
            ],
            conclusion: "UltraPlan represents a significant advancement in client engagement and benefits management for UltraPlan customers. By harnessing the power of Ionic and modern web technologies, with user-friendly design, but also rich in features."
        },
        {
            root: "segutiendaclient",
            name: "Segutienda Client",
            images: [],
            overview: "Segutienda is a cutting-edge web application designed to showcase and sell various types of insurance products. Developed using React, TSX, and Tailwind CSS, Segutienda aims to provide users with a seamless and visually appealing experience for exploring and purchasing insurance solutions.",
            features: [
                "Insurance Catalog: Users can browse an extensive catalog of insurance products, complete with detailed descriptions, pricing information, and comparisons to help them make informed decisions.",
                "User-Friendly Interface: The application is designed with an intuitive layout that enhances navigation and accessibility, ensuring a smooth experience for all users."                
            ],
            stack: [
                "React: Utilizing React allows to create a dynamic and responsive user interface, with components that facilitate efficient updates and reusability across the application.",
                "TSX: The integration of TypeScript with JSX (TSX) enhances the development process by providing static type checking, improving code quality and maintainability.",
                "Tailwind CSS: We chose Tailwind CSS for its utility-first approach to styling, enabling rapid design iterations and a highly customizable user interface that meets modern design standards."
            ],
            conclusion: "Segutienda provides users an engaging platform to discover and purchase a variety of insurance products. The combination of React, TSX, and Tailwind CSS not only ensures a high-performance application but also enhances the overall user experience. I am excited about the future potential of Segutienda and the value it brings to our customers."
        },
        {
            root: "segutiendamanager",
            name: "Segutienda Manager",
            images: [],
            overview: "I am excited to introduce Segutienda Manager, a management application built to support the Segutienda platform. Developed using React, TSX, and Material-UI (MUI), this application let users to configure clients, manage products, and customize various settings efficiently.",
            features: [
                "Client Configuration: Administrators can easily add, edit, and manage client profiles, ensuring that all customer information is up-to-date and accessible.",
                "Product Management: The application allows for the addition and modification of insurance products, including descriptions and other relevant details.",
                "Customization Options: Administrators can configure various settings, including color schemes and branding elements, to maintain a consistent look and feel across the Segutienda platform.",
            ],
            stack: [
                "React: By using React, we achieve a responsive and dynamic user interface that enhances the overall user experience through efficient component rendering.",
                "TSX: The incorporation of TypeScript with JSX (TSX) provides robust type checking and improves code maintainability, reducing the likelihood of runtime errors.",
                "Material-UI (MUI): Leveraging MUI allows to utilize a comprehensive set of pre-designed components that adhere to Material Design principles, facilitating rapid development and a polished user interface."
            ],
            conclusion: "Segutienda Administrador is an essential tool for managing the Segutienda platform, offering a user-friendly interface and powerful features that streamline administrative tasks. The combination of React, TSX, and Material-UI ensures a high-quality, maintainable application that enhances the overall efficiency of operations."
        },
        {
            root: "library",
            name: "Sekura Components Library",
            images: [],
            overview: "I am thrilled to introduce the Sekura Components Library, a dynamic component library designed to streamline the development of user interfaces for various projects within the Sekura organization. Built using React, TSX, and Tailwind CSS, this library enables rapid construction of screens while maintaining consistency and quality across applications.",
            features: [
                "Reusable Components: The library offers a wide range of pre-designed components—such as buttons, forms, modals, and navigational elements—that can be easily integrated into various applications, promoting code reusability.",
                "Customization Options: Each component is highly customizable, allowing developers to adjust styles, sizes, and functionalities according to the specific needs of each project.",
                "Documentation and Examples: The library includes thorough documentation and usage examples, making it easy for developers to understand how to implement and customize the components effectively with Storybook.",
            ],
            stack: [
                "React: Utilizing React enables the creation of dynamic and interactive user interfaces, ensuring that components are efficient and responsive to user interactions.",
                "TSX: The use of TypeScript with JSX (TSX) enhances code quality through static type checking, reducing errors and improving maintainability.",
                "Tailwind CSS: By incorporating Tailwind CSS, we leverage a utility-first approach to styling, allowing for rapid design iterations and ensuring a cohesive look and feel across all components.",
                "Storybook: The use of Storybook enables having an approach to the components and play with them to see how con be implemented in an app." 
            ],
            conclusion: "The Sekura Components Library is an invaluable resource for accelerating UI development within Sekura projects. By providing a set of dynamic, reusable components built with modern technologies, we empower developers to create high-quality applications more efficiently."
        },
        {
            root: "kerno2",
            name: "Kerno 2",
            images: [],
            overview: "Kerno 2 is a boilerplate application built with React and TSX that serves as a foundational framework for deploying user interfaces utilizing the Sekura Components Library. This project is designed to facilitate rapid application development by seamlessly integrating dynamic components through service consumption.",
            features: [
                "Component Integration: The boilerplate allows for straightforward integration of Sekura components, enabling developers to construct complex user interfaces quickly and efficiently.",
                "Service Consumption: Kerno 2 is designed to interact with various backend services, facilitating data retrieval and ensuring that the user interface is dynamic and responsive to real-time data changes.",                
            ],
            stack: [
                "React: Leveraging React allows to create a responsive and interactive user experience, while also enabling efficient state management and component lifecycle handling.",
                "TSX: The use of TypeScript with JSX (TSX) enhances type safety and maintainability, ensuring high code quality and reducing the likelihood of runtime errors."
            ],
            conclusion: "Kerno 2 serves as an essential boilerplate for developers looking to build applications that leverage the Sekura Components Library. Kerno 2 accelerates the development process and promotes best practices."
        },
        {
            root: "lp",
            name: "Landing Pages",
            images: [],
            overview: "I developed multiple landing pages for various clients, including Boutique Andrea, SportsWorld, Nexus Tours, and Amstar. Each landing page was designed to provide essential information and enhance user engagement, utilizing different technologies such as HTML, CSS, JavaScript, and Tailwind CSS.",
            features: [
                "A clean, responsive design that adapts to various screen sizes.",
                "PDF downloads for event schedules and product catalogs.",
                "Information sections detailing each brand."
            ],
            stack: [
                "HTML",
                "CSS",
                "JavaScript",
                "Tailwind CSS"
            ],
            conclusion: "These landing pages serve providing essential information and enhancing user engagement while utilizing modern web technologies."
        }
    ]

    return projectData.map((project) =>
        project.root === projectName ? (
            <>
                <ScrollToTop />
                <div>
                    <section className="text-justify">
                        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                            <p className="mt-16 mb-8 font-extrabold leading-none text-4xl text-white">{project.name}</p>

                            <dl>
                                <dt className="mb-2 font-semibold leading-none text-white">Project Overview</dt>
                                <dd className="mb-4 font-light sm:mb-5 text-gray-300">
                                    {project.overview}
                                </dd>
                            </dl>

                            {/**
                            <div className="my-32">
                                <Carousel />
                            </div>
                            */}

                            <dl>
                                <dt className="mb-2 font-semibold leading-none text-white">Technology Stack</dt>
                                <dd className="mb-4 font-light text-gray-300 sm:mb-5">
                                    {project.name} is developed using a modern technology stack that includes:
                                    <ul className="list-disc mx-5">
                                        {project.stack.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </dd>
                            </dl>

                            <dl>
                                <dt className="mb-2 font-semibold leading-none text-white">Project Features</dt>
                                <dd className="mb-4 font-light text-gray-300 sm:mb-5">
                                    <ul className="list-disc mx-5">
                                        {project.features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                </dd>
                            </dl>

                            <dl>
                                <dt className="mb-2 font-semibold leading-none text-white">Conclusion</dt>
                                <dd className="mb-4 font-light text-gray-300 sm:mb-5">
                                    {project.conclusion}
                                </dd>
                            </dl>
                        </div>
                    </section>
                </div>
            </>
        ) : null
    );

}
export default ProjectHome