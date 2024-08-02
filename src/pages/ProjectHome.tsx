import { useParams } from "react-router-dom"

function ProjectHome() {
    const { projectName } = useParams()
    return (
        <>
            <h1> {projectName} </h1>
        </>
    )
}
export default ProjectHome