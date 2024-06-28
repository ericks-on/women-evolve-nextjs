'use client'

import Logo from "./main-logo";
import NavLinks from "./nav-links";
import { useState } from "react";



export default function Header() {
    // creating state for selected nav link
    const [selectedNavLink, setSelectedNavLink] = useState<string>("HOME");     
    return (
        <div className="flex flex-row flex-nowrap fixed top-0 bg-black w-full h-20 justify-center items-center">
            <Logo />
            <NavLinks
                selectedNavLink={selectedNavLink}
                setSelectedNavLink={setSelectedNavLink}
            />
        </div>
    )
}