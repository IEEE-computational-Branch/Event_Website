

function Hero() {
  return (
    <div className="bg-transparent text-white/95 bg-cover bg-top ">
      <div className="h-screen w-full max-w-7xl mx-auto flex flex-col justify-center px-4 xl:px-0">
        <h1 className="font-display text-6xl max-md:text-5xl tracking-wider">Hello There!</h1>
        <p className="font-light mt-8 w-full max-w-[420px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <span className="mt-12 w-max bg-white text-black hover:bg-transparent active:bg-white/20 hover:outline outline-1 outline-white hover:text-white px-12 py-3 rounded-full cursor-pointer text-lg">Register Now!</span>
      </div>
    </div>
  )
}

export default Hero