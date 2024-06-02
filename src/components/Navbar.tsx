import React, { useState } from 'react'
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import { Button } from './ui/button';

type NavLink = {
    name: string;
    link: string;
    icon: any;
}

type SocialLink = {
    icon: React.JSX.Element;
    link: string;
}

const navLinks: NavLink[] = [
    {
        name: "Home",
        link: "#home",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinejoin='round' strokeLinecap='round' d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
    },
    {
        name: "Experiences",
        link: "#experiences",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>


    },
    {
        name: "Projects",
        link: "#projects",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap='round' strokeLinejoin='round' d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
        </svg>
    },
]

const SocialLinks: SocialLink[] = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>,
        link: "https://www.linkedin.com/in/olivier-tebar-323151204/"
    },
    {
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
                <path d="M6 17h12" />
            </svg>,
        link: "https://h1to.itch.io/"
    }
]

const Navbar = () => {
    const [activeLink, setActiveLink] = useState<string>('Home');

    return (
        <div className="fixed w-[60%] h-[6%] top-[5%] rounded-xl z-50 flex items-center bg-black px-4">
            <div className="flex flex-row items-center justify-between h-[80%] w-full gap-2">
                <div className="flex items-center gap-2 ml-6">
                    <h1 className="text-2xl mr-6">
                        <Link href="/" passHref>
                            H1to
                        </Link>
                    </h1>

                    <div className="flex flex-row gap-2 rounded-3xl px-5">
                        {navLinks.map((link) => {
                            return (
                                <Link key={link.name} href={link.link} passHref onClick={() => setActiveLink(link.name)} className={`flex flex-row w-auto px-3 py-2 text-base font-medium gap-2 rounded-3xl hover:bg-[#f1f1f1] hover:text-black border-border border-1 ${activeLink === link.name && "bg-[#f1f1f1] text-black"}`}>
                                    <div className='w-5 h-5'>
                                        {link.icon}
                                    </div>

                                    {link.name}
                                </Link>
                            )
                        })}
                    </div>
                </div>

                <div className="flex flex-row items-center gap-3 mr-3">
                    <ModeToggle />
                    {SocialLinks.map((link) => {
                        return (
                            <Link key={link.link} href={link.link} passHref target='_blank'>
                                <Button variant='outline' size='icon' className='border-border border-1'>
                                    {link.icon}
                                </Button>
                            </Link>
                        )
                    })}
                </div>
            </div>

        </div>
    );
}

export default Navbar