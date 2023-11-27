import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './layout/Header'
import LeftSideBar from './layout/LeftSideBar'
import Footer from './layout/Footer'
import RegisterForm from './components/RegisterForm'

function App() {


  return (
    <>


    <Header />
  <LeftSideBar/>
  <BrowserRouter>
  <Routes>
    
  </Routes>
  </BrowserRouter>
  <RegisterForm/>



    </>
  )
}

export default App
