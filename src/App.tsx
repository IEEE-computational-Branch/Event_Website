import About_Event from "./components/About_Event"
import About_Us from "./components/About_Us"
import Backdrop from "./components/Backdrop"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Register from "./components/Register"
import Speakers from "./components/Speakers"
import Sponsors from "./components/Sponsors"


export default function App() {
    return (
        <div className='h-[100vh] w-[100vw] overflow-x-scroll'>
            <Backdrop/>
            <Navbar/>
            <Hero/>
            <About_Us/>
            <About_Event/>
            <Sponsors/>
            <Speakers/>
            <Register/>
            <Footer/>
        </div>
    )
}
