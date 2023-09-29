import { useState } from "react"
import { BsList, BsXLg } from "react-icons/bs"

function Navbar() {
  const [navOpen, setNavOpen] = useState(false)
  const openNav = () => setNavOpen(true)
  const closeNav = () => setNavOpen(false)

  return (
    <div className="bg-black/50 backdrop-blur-lg text-white absolute w-full z-50 top-0">
      <div className="h-[64px] w-full max-w-7xl mx-auto flex flex-row items-center justify-between px-4 xl:px-0">
        <span className="text-xl font-medium">IEEE CIS</span>

        <div className="flex max-md:hidden flex-row gap-x-6 text-white/90 items-center">
          <span className="hover:text-white cursor-pointer">Home</span>
          <span className="hover:text-white cursor-pointer">About Us</span>
          <span className="hover:text-white cursor-pointer">Event</span>
          <span className="hover:text-white cursor-pointer">Speakers</span>
          <span className="hover:text-white cursor-pointer">Sponsors</span>
          <span className="bg-white text-black hover:bg-black hover:outline outline-1 outline-white hover:text-white px-4 py-1 rounded-full cursor-pointer">Register Now!</span>
        </div>
        
        <div className="hidden max-md:flex relative h-full aspect-square cursor-pointer">
          <BsList onClick={openNav} className={`${!navOpen ? "block" : "hidden"} absolute top-0 bottom-0 m-auto right-0`} size={36} />
          <BsXLg onClick={closeNav} className={`${navOpen ? "block" : "hidden"} absolute top-0 bottom-0 m-auto right-0`} size={30} />
        </div>
      </div>
      <div className={`${navOpen ? "max-md:flex" : "hidden"} flex-col gap-y-6 text-white/90 px-4 pb-8 pt-4`}>
        <span className="hover:text-white cursor-pointer">Home</span>
        <span className="hover:text-white cursor-pointer">About Us</span>
        <span className="hover:text-white cursor-pointer">Event</span>
        <span className="hover:text-white cursor-pointer">Speakers</span>
        <span className="hover:text-white cursor-pointer">Sponsors</span>
        <span className="w-max bg-white text-black hover:bg-black hover:outline outline-1 outline-white hover:text-white px-4 py-1 rounded-full cursor-pointer">Register Now!</span>
      </div>
    </div>
  )
}

export default Navbar