
import './App.css'
import NavigationBar from './components/NavigationBar'
import Intro from "./components/Intro"
import "./style/landingpage.css"
import Shoes from "./components/Shoes"
import Tshirt from "./components/Tshirt"
import Jacket from './components/Jacket'
import Snapbag from './components/Snapbag'
import Bag from './components/Bag'
import Slappers from './components/Slappers'

function App() {
  return (
    <div>
      <div className='myBG'>
      <NavigationBar/>
      <Intro/>
      </div>
      
      <div className='shoes'>
        <Shoes/>
      </div>

      <div className='tshirt'>
        <Tshirt/>
      </div>

      <div className='jacket'>
        <Jacket/>
      </div>

      <div className='snapbag'>
        <Snapbag/>
      </div>

      <div className='bag'>
        <Bag/>
      </div>

      <div className='slappers'>
        <Slappers/>
      </div>
    </div>
  )
}

export default App;
