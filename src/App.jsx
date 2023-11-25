import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './layout/Header'
import LeftSideBar from './layout/LeftSideBar'
import Footer from './layout/Footer'

function App() {


  return (
    <>


    <Header />
  <LeftSideBar/>
  <BrowserRouter>
  <Routes>
    
  </Routes>
  </BrowserRouter>


    </>
  )
}

export default App
