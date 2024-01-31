import Banner from "./Components/Banner/Banner"
import Caring from "./Components/Caring/Caring"
import Client from "./Components/Client/Client"
import Community from "./Components/Community/Community"
import Demo from "./Components/Demo/Demo"
import Design from "./Components/Design/Design"
import Footer from "./Components/Footer/Footer"
import Local from "./Components/Local/Local"
import Navbar from "./Components/Navbar/Navbar"
import PixelGrade from "./Components/PixelGrade/PixelGrade"
import TimSmith from "./Components/TimSmith/TimSmith"


function App() {
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Client></Client>
    <Community></Community>
    <PixelGrade></PixelGrade>
    <Local></Local>
    <Design></Design>
    <TimSmith></TimSmith>
    <Caring></Caring>
    <Demo></Demo>
    <Footer></Footer>
    </>
  )
}

export default App
