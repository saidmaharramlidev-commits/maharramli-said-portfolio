'use client'


import Navbar from "@/components/Navbar"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import Tooltip from '@mui/material/Tooltip';




function page() {


    return (
        <div id='mainTechStack'>
            <Navbar />



            <div id="techStack-wrapper">
                <span className="headerAbout">Tech Stack</span>

                <div className="techStack-div">
                    <h1 className="text-white techStackName">Tech Stack</h1>

                    <FaArrowRight className='text-white arrow-techStack' />

                    <div className="languages-wrapper">

                        <div className="stack-group">
                            <span className="stack-label">Languages</span>

                            <Tooltip title='Standard markup language for web pages'>
                                <div className="language center">
                                    <FaHtml5 style={{ color: "#E34F26" }} />
                                    <span>HTML</span>
                                </div>
                            </Tooltip>

                            <Tooltip title='Styles and designs web pages'>
                                <div className="language center">
                                    <FaCss3 style={{ color: "#1572B6" }} />
                                    <span>CSS</span>
                                </div>

                            </Tooltip>

                            <Tooltip title='Adds interactivity to websites'>
                                <div className="language center">
                                    <DiJavascript style={{ color: "#F7DF1E" }} />
                                    <span>JavaScript</span>
                                </div>

                            </Tooltip>

                            <Tooltip title='Typed superset of JavaScript'>
                                <div className="language center">
                                    <SiTypescript style={{ color: "#3178C6" }} />
                                    <span>TypeScript</span>
                                </div>

                            </Tooltip>






                        </div>


                        <div className="stack-group">
                            <span className="stack-label">Frameworks & Libraries</span>

                            <Tooltip title='JavaScript library for building UI'>
                                <div className="language center">
                                    <FaReact style={{ color: "#61DAFB" }} />
                                    <span>React.js</span>
                                </div>

                            </Tooltip>

                            <Tooltip title='React framework for server-side rendering & routing'>
                                <div className="language center">
                                    <SiNextdotjs style={{ color: "#ffffff" }} />
                                    <span>Next.js</span>
                                </div>
                            </Tooltip>




                        </div>


                        <div className="stack-group">
                            <span className="stack-label">Styling / UI</span>

                            <Tooltip title='Classic CSS framework with ready-made components'>
                                <div className="language center">
                                    <FaBootstrap style={{ color: "#7952B3" }} />
                                    <span>Bootstrap</span>
                                </div>
                            </Tooltip>

                            <Tooltip title='Utility-first CSS framework for fast styling'>
                                <div className="language center">
                                    <RiTailwindCssFill style={{ color: "#06B6D4" }} />
                                    <span>Tailwind</span>
                                </div>
                            </Tooltip>

                            <Tooltip title='React component library with Google’s Material Design'>
                                <div className="language center">
                                    <SiMui style={{ color: "#007FFF" }} />
                                    <span>Material UI</span>
                                </div>
                            </Tooltip>
                        </div>

                    </div>



                </div>


            </div>


        </div>
    )
}

export default page