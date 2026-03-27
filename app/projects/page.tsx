'use client'


import Navbar from "@/components/Navbar"
import Construction from '@/public/construction.png'
import later from '@/public/later.png'
import saga from '@/public/sagaHero.png'
import travelJoy from '@/public/traveljoy.png'
import afterReel from '@/public/AfterReel.png'
import Image from "next/image"
import Link from "next/link"





function page() {











    return (
        <div id="mainProjectsPage">
            <Navbar />

            <div className="mainProjects">
                <span className="headerAbout">Projects</span>

                <div className="projects-wrapper">

                    <Link href={'/projects/construction'} className="project" >
                        <Image className="projectPic" src={Construction} alt="" />
                        <h1>Construction Site</h1>
                        <p>I developed a responsive front-end recreation of the cortexconstruction.az website.This project displays my skills in component-based architecture, responsive design, and professional website structuring.</p>

                    </Link>

                    <Link href={'/projects/saga'} className="project">
                        <Image className="projectPic" src={saga} alt="" />
                        <h1>Saga Website</h1>
                        <p>This project is called Saga and inspired by ega.az.This project highlights my ability to build modern user interfaces using component-based architecture, implement fully responsive design principles, and structure content in a clear and scalable way</p>

                    </Link>

                    <Link href={'/projects/travelJoy'} className="project" >
                        <Image className="projectPic" src={travelJoy} alt="" />
                        <h1>TravelJoy</h1>
                        <p>TravelJoy is a modern, responsive travel website inspired by Voyalux.az, designed to showcase clean UI and smooth user experience. It highlights my frontend skills through elegant layouts, responsive design, and interactive components built with attention to detail.</p>

                    </Link>
                    <Link href={'/projects/afterReel'} className="project" >
                        <Image className="projectPic" src={afterReel} alt="" />
                        <h1>AfterReel</h1>
                        <p>AfterReel is an interactive web app built with React and modern CSS. It asks users questions and gives ratings based on their answers, combining functionality with a clean, responsive design.</p>

                    </Link>

                    <Link href={'/projects/later'} className="project" >
                        <Image className="projectPic" src={later} alt="" />
                        <h1>Later</h1>
                        <p>A self-initiated project built to demonstrate my frontend development skills through a clean user experience. While it explores the cost of waiting, the main focus is on performance, UI design, and turning a simple concept into a polished digital product.</p>

                    </Link>

                </div>

            </div>


        </div>
    )
}

export default page