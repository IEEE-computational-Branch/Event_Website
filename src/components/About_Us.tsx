import About from '../assets/About.svg'

function About_Us() {
  return (
 <div className="bg-transparent text-white/95 bg-cover bg-top flex justify-item-center" style={{backgroundImage: "url('https://img.freepik.com/premium-photo/planet-earth-isolated-black_41050-3269.jpg?w=1060')"}}>
        <div className="h-screen w-full max-w-7xl mx-auto flex flex-col px-4 xl:px-0" style={{alignItems:"center",justifyContent:"center"}}>
        <h1 className="font-display text-6xl max-md:text-5xl tracking-wider">About Us</h1>
        <div className='my-10 flex flex-col-reverse sm:flex-row 'style={{justifyContent:"space-between",alignItems:"center"}}>
        <h3 className='font-light mt-8 w-full text-justify md:mt-.5 md:pl-10' style={{paddingRight:'10px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolores repellat illum amet ea quo quisquam quae magni explicabo ratione recusandae ipsum beatae, earum quas possimus illo dolorum ipsam reprehenderit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi impedit non ratione consectetur molestiae esse magni expedita adipisci! Numquam repudiandae nisi id dolor iusto rem, commodi animi exercitationem et totam nemo vel modi nihil sit necessitatibus? Harum reprehenderit quam dolorum quae quis, recusandae sapiente est.</h3>
          <img src={About} alt="" className='pr-7 md:pl-7 md:pt-10' style={{width:'24vw',minWidth:"150px"}}/>      
        </div>
      </div>
    </div>
  )
}

export default About_Us