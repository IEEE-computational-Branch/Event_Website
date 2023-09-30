import sponsors from '../data/sponsors.json'


interface Sponsor {
  name: string
  imageUrl: string
}

function Sponsors() {
  return (
    <div className=" bg-transparent " >
      <div>      
       <div className="flex items-center justify-center" >
          <h1 className="text-white/75 pt-10 md:pt-20  text-4xl md:text-5xl tracking-wider font-display">Sponsors</h1>
       </div>
        <div className='p-2 mt-16 grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3  gap-y-10 object-cover   ' >
          {sponsors.map((sponsor:Sponsor) => (
            <div className="flex items-center justify-center" key={sponsor.name}>
                <img className="w-[160px] h-[160px] rounded-full object-cover  " 
                  src={sponsor.imageUrl}
                  alt={sponsor.name}
                  
                />
             
            </div>
          ))}
        </div>
    </div>
    </div>
  )
}

export default Sponsors