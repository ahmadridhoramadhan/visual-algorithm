import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { IconBurgerMenu } from "../../../icons/IconBurgerMenu"
import { IconX } from "../../../icons/IconX"


export default function Header() {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)
    const router = useRouter()

    return (
        <header className="border-b border-white bg-zinc-950 px-5 md:py-5 py-3 text-white">

            <nav className="hidden gap-5 md:flex max-w-[92rem] mx-auto text-gray-300">
                <div className={router.pathname == '/sortAlgorithm' ? "relative px-1 after:absolute after:-bottom-2 after:left-0 after:h-1 after:bg-indigo-600 after:transition-all after:w-full text-white" : "relative px-1 after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full"}>
                    <Link href={'/sortAlgorithm'} className="text-xl lg:text-2xl capitalize">sort algorithm</Link>
                </div>
                <div className={router.pathname == '/shortestWayAlgorithm' ? "relative px-1 after:absolute after:-bottom-2 after:left-0 after:h-1 after:bg-indigo-600 after:transition-all after:w-full text-white" : "relative px-1 after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full"}>
                    <Link href={'/shortestWayAlgorithm'} className="text-xl lg:text-2xl capitalize">shortest way algorithm</Link>
                </div>
                <div className={router.pathname == '/game' ? "relative px-1 after:absolute after:-bottom-2 after:left-0 after:h-1 after:bg-indigo-600 after:transition-all after:w-full text-white" : "relative px-1 after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full"}>
                    <Link href={'/game'} className="text-xl lg:text-2xl capitalize">game</Link>
                </div>
            </nav>
            <nav className="flex md:hidden flex-col justify-start transition-all">

                <button type="button" onClick={() => { setIsBurgerMenuOpen(!isBurgerMenuOpen) }}>
                    <div className="relative">
                        <span className={`relative top-0 left-0 transition-opacity ${isBurgerMenuOpen ? 'opacity-0' : 'opacity-100'}`}><IconBurgerMenu /></span>
                        <span className={`absolute top-0 left-0 transition-opacity ${isBurgerMenuOpen ? 'opacity-100' : 'opacity-0'}`}><IconX /></span>
                    </div>
                </button>

                {isBurgerMenuOpen ? (
                    <div className="flex flex-col gap-2 mt-2 text-gray-300 pl-7 box-border transition-all">
                        <Link href={'/sortAlgorithm'} className="capitalize relative before:absolute before:w-1 before:h-1 before:-left-2 before:bg-white before:bottom-2"><span className={`${router.pathname == '/sortAlgorithm' ? 'after:absolute after:w-full relative after:-bottom-1 px-2 after:left-0 after:bg-indigo-600 text-white after:h-1' : ''}`}>sort algorithm</span></Link>
                        <Link href={'/shortestWayAlgorithm'} className="capitalize relative before:absolute before:w-1 before:h-1 before:-left-2 before:bg-white before:bottom-2"><span className={`${router.pathname == '/shortestWayAlgorithm' ? 'after:absolute after:w-full relative after:-bottom-1 px-2 after:left-0 after:bg-indigo-600 text-white after:h-1' : ''}`}>shortest way algorithm</span></Link>
                        <Link href={'/game'} className="capitalize relative before:absolute before:w-1 before:h-1 before:-left-2 before:bg-white before:bottom-2"><span className={`${router.pathname == '/game' ? 'after:absolute after:w-full relative after:-bottom-1 px-2 after:left-0 after:bg-indigo-600 text-white after:h-1' : ''}`}>game</span ></Link>
                    </div>
                ) : (<div></div>)}

            </nav>
        </header>
    )
}