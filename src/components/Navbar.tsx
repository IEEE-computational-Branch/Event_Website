

function Navbar() {
  return (
    <div className="bg-transparent text-white sticky z-50">
      <div className="h-[64px] w-full max-w-6xl mx-auto flex flex-row items-center justify-between">
        <span className="text-xl font-medium">IEEE CIS</span>

        <div className="flex flex-row gap-x-6 text-white/90 items-center">
          <span className="hover:text-white cursor-pointer">Home</span>
          <span className="hover:text-white cursor-pointer">About Us</span>
          <span className="hover:text-white cursor-pointer">Event</span>
          <span className="hover:text-white cursor-pointer">Speakers</span>
          <span className="hover:text-white cursor-pointer">Sponsors</span>
          <span className="bg-white text-black hover:bg-black hover:outline outline-1 outline-white hover:text-white px-4 py-1 rounded-full cursor-pointer">Register Now!</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar