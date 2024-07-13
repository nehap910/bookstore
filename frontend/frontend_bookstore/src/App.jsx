import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Freebook from "./components/Freebook"
import Cards from "./components/Cards"
function App() {


  return (
    <>
      <div>
          <Navbar></Navbar>
          <Banner></Banner>
          <Freebook></Freebook>
          <Cards></Cards>
          <Footer></Footer>
      </div>
    </>
  )
}

export default App
