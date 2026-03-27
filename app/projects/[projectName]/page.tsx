
import Navbar from "@/components/Navbar"
import { projects } from "./projects-data"
import Image from "next/image"
import Link from "next/link"


export default function Page({ params }: { params: { name: string } }) {

    const projectName = params.name
    const project = projects[projectName as keyof typeof projects]

    if (!project) {
        return (
            <div id="mainProjectInfo">
                <Navbar />
                <h1 className="text-white mt-20">Project not found</h1>
            </div>
        )
    }




    return (
        <div id="mainProjectInfo">
            <Navbar />

            <div className="info-project-wrapper">

                <div className="left-site-picture">
                    {project.pictures.map((pic, i) => (
                        <Image key={i} className="info-picture" src={pic} alt="project" />
                    ))}
                </div>

                <div className="right-site-info">
                    <h1>{project.name}</h1>
                    <p>{project.desc}</p>

                    <Link href={project.link} target="_blank">Live Site</Link>

                    <p>
                        Inspired by:
                        <Link href={project.inspireLink} target="_blank">
                            Original Website
                        </Link>
                    </p>

                    <h3>Tech Stack</h3>
                    <ul>
                        {project.techStack.map((tech, i) => (
                            <li key={i}>{tech}</li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    )
}