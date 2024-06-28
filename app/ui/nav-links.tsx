import clsx from "clsx";
import Link from "next/link";
import { useState } from 'react';


const links = [
    {'name': 'HOME', 'href': '/'},
    {'name': 'ABOUT', 'href': '/'},
    {'name': 'TOOLS', 'href': '/'},
    {'name': 'EVENTS', 'href': '/'},
    {'name': 'STAY CONNECTED', 'href': '/'},
    {'name': 'OUTREACH', 'href': '/'},
    {'name': 'SHOP', 'href': '/'},
    {'name': 'CONTENT', 'href': '/'},
    {'name': 'SPONSORS', 'href': '/'},
    {'name': 'PRESS', 'href': '/'},
];
interface NavLinksProps {
    selectedNavLink: string;
    setSelectedNavLink: (value: string) => void;
}

export default function NavLinks({
    selectedNavLink, setSelectedNavLink
}:NavLinksProps) {
    return (
        <div className=" hidden flex-row md:flex">
            {links.map((link) => {
                return(
                <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                        'border-white mx-2 text-white',
                        {'border-b-2': link.name == selectedNavLink}
                    )}
                    onClick={() => setSelectedNavLink(link.name)}
                >
                {link.name}
                </Link>
                )
            })
            }
        </div>
    )
};