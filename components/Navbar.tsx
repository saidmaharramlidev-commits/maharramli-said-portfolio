'use client'


import { setNavbar } from "@/redux/counterSlice";
import { RootState } from "@/redux/store";
import { IconButton } from "@mui/material";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { RiMenu3Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useEffect } from "react";


function Navbar() {


    const pathname = usePathname()
    const dispatch = useDispatch()
    const { isNavbarOpen } = useSelector((state: RootState) => state.counter)

    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Tech Stack", href: "/tech-stack" },
        { name: "Projects", href: "/projects" },
        { name: "Templates", href: "/templates" },
        { name: "Contact", href: "/contact" },
    ];





    const navbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                isNavbarOpen &&
                navbarRef.current &&
                !navbarRef.current.contains(event.target as Node)
            ) {
                dispatch(setNavbar()); // close it
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isNavbarOpen, dispatch]);






    return (
        <div id="mainNavbar" ref={navbarRef}>
            <h1 id="nameInNavbar">Said Maharramli</h1>

            <div id="navbarEndpoints-wrapper" className={isNavbarOpen ? 'navbarOpened' : ''} >

                {links.map(link => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`endpoint-navbar ${pathname === link.href ? 'activeLink' : ''}`}
                    >
                        {link.name}
                    </Link>
                ))}

            </div>

            <div id="menuToggle">
                <IconButton onClick={() => dispatch(setNavbar())}>
                    <RiMenu3Line className="text-white text-3xl" />
                </IconButton>

            </div>

        </div>
    )
}

export default Navbar