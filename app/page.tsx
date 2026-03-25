import Navbar from "@/components/Navbar";
import Image from "next/image";
import pictureOfMe from '@/public/me.jpg'
import Link from "next/link";

export default function Home() {
  return (
    <div id="mainHomePage">
      <Navbar />

      <div id="introduction-wrapper">

        <div id="intro-text-wrapper">
          <h1>Frontend Developer</h1>
          <p>I’m Said Maharramli, a frontend developer turning ideas into interactive web experiences. I focus on clean code, smooth UI, and projects that actually work.</p>

          <div id="hashtags-wrapper">
            <div className="hashtag center">Frontend</div>
            <div className="hashtag center">MinimalDesign</div>
            <div className="hashtag center">Next.js</div>
            <div className="hashtag center">Social Worker</div>
          </div>

          <div id="cta-projects-wrapper">
            <Link id="cta-projects" href={'/projects'}>See my work</Link>
          </div>

        </div>

        <div className="intro-card-wrapper">
          <div className="photo-wrapper">
            <Image className="pictureOfMe" loading='eager' src={pictureOfMe} alt="Picture" />


          </div>
          <span className="text-gray-300 pt-4 emailIntro" >saidmaharramlidev@gmail.com</span>

          <Link href={'/about'} className="center cta-intro-card">
            About me

          </Link>

        </div>



      </div>



    </div>
  );
}
