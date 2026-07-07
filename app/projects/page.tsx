'use client'


import Navbar from "@/components/Navbar"
import later from '@/public/later.png'
import saga from '@/public/sagaHero.png'
import travelJoy from '@/public/traveljoy.png'
import afterReel from '@/public/AfterReel.png'
import mcdonalds from '@/public/mcdonalds.png'
import Image from "next/image"
import stuckLife from '@/public/stuckLife.png'
import { Button } from "@mui/material"





function page() {











    return (
        <div id="mainProjectsPage">
            <Navbar />

            <div className="mainProjects">
                <span className="headerAbout">Projects</span>

                <div className="projects-wrapper">

                    <div className="project" >
                        <Image className="projectPic" src={mcdonalds} alt="" />
                        <h1>Mcdonald's Remake</h1>
                        <p>I rebuilt the McDonald’s Azerbaijan website as a front-end project, focusing on fixing UI/UX inconsistencies and improving overall usability.I redesigned key parts with my own modern design choices to create a cleaner and more engaging experience.</p>
                        <Button href="https://mcdonalds-remake.vercel.app/" variant="contained" sx={{ backgroundColor: "#D4AF37", color: "black" }}>Go to project</Button>

                    </div>





                    <div className="project" >
                        <Image className="projectPic" src={travelJoy} alt="" />
                        <h1>TravelJoy</h1>
                        <p>TravelJoy is a modern, responsive travel website inspired by Voyalux.az, designed to showcase clean UI and smooth user experience. It highlights my frontend skills through elegant layouts, responsive design, and interactive components built with attention to detail.</p>
                        <Button href="https://said-travel-joy.vercel.app/" variant="contained" sx={{ backgroundColor: "#D4AF37", color: "black" }}>Go to project</Button>

                    </div>
                    <div className="project" >
                        <Image className="projectPic" src={afterReel} alt="" />
                        <h1>AfterReel</h1>
                        <p>AfterReel is an interactive web app built with React and modern CSS. It asks users questions and gives ratings based on their answers, combining functionality with a clean, responsive design.</p>
                        <Button href="https://afterReel.vercel.app/" variant="contained" sx={{ backgroundColor: "#D4AF37", color: "black" }}>Go to project</Button>

                    </div>

                    <div className="project" >
                        <Image className="projectPic" src={later} alt="" />
                        <h1>Later</h1>
                        <p>A self-initiated project built to demonstrate my frontend development skills through a clean user experience. While it explores the cost of waiting, the main focus is on performance, UI design, and turning a simple concept into a polished digital product.</p>
                        <Button href="https://said-later.vercel.app/" variant="contained" sx={{ backgroundColor: "#D4AF37", color: "black" }}>Go to project</Button>

                    </div>
                    <div className="project" >
                        <Image className="projectPic" src={stuckLife} alt="" />
                        <h1>StuckLife</h1>
                        <p>Created a modern idea-generation platform that delivers practical, step-by-step concepts with difficulty, time, and cost insights. Emphasizes user engagement through minimal design, category targeting, and controlled daily usage.</p>
                        <Button href="https://stucklife.vercel.app" variant="contained" sx={{ backgroundColor: "#D4AF37", color: "black" }}>Go to project</Button>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default page