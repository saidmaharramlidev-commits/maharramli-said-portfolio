'use client'

import Navbar from "@/components/Navbar"
import me from "@/public/me.jpg"
import Image from "next/image"
import Link from "next/link"

function page() {
    return (
        <div id="mainAboutPage">
            <Navbar />

            <div id="mainPartAbout">

                <div id="leftAbout-wrapper">
                    <span className="headerAbout">About me</span>
                    <h1 className="text-white questionOfAbout">Who I am beyond code</h1>
                    <p>I’m a 19-year-old frontend developer from Azerbaijan who enjoys turning simple ideas into clean, interactive experiences. I speak Azerbaijani and conversational English, and I focus on minimal design, smooth UI, and building things that actually work. Most of my projects come from my own ideas, where I aim to make something simple feel complete and polished. Right now, I’m focused on improving my skills and creating more meaningful digital products.</p>

                    <div id="leftCards-wrapper">
                        <div className="card-about">
                            <span>Experience</span>
                            <h1>1+</h1>
                        </div>

                        <div className="card-about">
                            <span>Projects</span>
                            <h1>5+</h1>
                        </div>

                        <div className="card-about">
                            <span>Focus</span>
                            <h1>UI/UX</h1>
                        </div>

                        <div className="card-about">
                            <span>Main Framework</span>
                            <h1>Next.js</h1>
                        </div>
                    </div>

                </div>

                <div className="intro-card-wrapper">
                    <div className="photo-wrapper">
                        <Image className="pictureOfMe" loading='eager' src={me} alt="Picture" />


                    </div>
                    <span className="text-gray-300 pt-4 emailIntro" >saidmaharramlidev@gmail.com</span>

                    <Link href={'/projects'} className="center cta-intro-card">
                        See my projects

                    </Link>

                </div>

            </div>

        </div>
    )
}

export default page