import Navbar from "@/components/Navbar"
import Image from "next/image"
import gymCore from '@/public/gymCore.png'
import memoryPhoto from '@/public/memory-photo.png'
import { Button } from "@mui/material"



function page() {
    return (
        <div id='mainTemplatesPage'>
            <Navbar />



            <div className="mainProjects">
                <span className="headerAbout">Templates</span>

                <div className="projects-wrapper">

                    <div className="project" >
                        <Image className="projectPic" src={gymCore} alt="" />
                        <h1>GymCore</h1>
                        <p>A modern, fully responsive gym template with bold sections, training programs, services, and clear call-to-action buttons to engage and convert visitors online.</p>
                        <Button href="https://said-gym-template.vercel.app/" variant="contained" sx={{ backgroundColor: "#D4AF37", color: "black" }}>Go to project</Button>

                    </div>

                    <div className="project">
                        <Image className="projectPic" src={memoryPhoto} alt="" />
                        <h1>MemoryPhoto</h1>
                        <p>Memory Photo is fully responsive photography portfolio template designed to help photographers showcase their work.It features a clean hero,about,portfolio, and sections for services and contact that is easy for visitors to get in touch.</p>
                        <Button href="https://said-memory-photo.vercel.app/" variant="contained" sx={{ backgroundColor: "#D4AF37", color: "black" }}>Go to project</Button>

                    </div>



                </div>

            </div>

        </div>
    )
}

export default page