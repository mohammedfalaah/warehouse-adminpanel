import './App.css'
// import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './layout/Header'
import DashBoard from './pages/DashBoard'
import LoginForm from './components/LoginForm'
import CheckOutPage from './pages/CheckOutPage'
import LeftSideBar from './layout/LeftSideBar'
function App() {


  return (
  <>
  <LeftSideBar />
<DashBoard />
    <Header/>
    <LoginForm />
    <CheckOutPage />
    </>
  )
}
export default App
