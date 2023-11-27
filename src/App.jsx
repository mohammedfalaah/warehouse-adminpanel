import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'
import DashBoard from './pages/DashBoard'
import OrdersListPage from './pages/OrdersListPage'
import LoginForm from './components/LoginForm'

function App() {


  return (
  <>

{/* <BrowserRouter> */}
<DashBoard />
    <Header/>
    <LoginForm />
    {/* <Routes>
    <Route path="/"  element={ <DashBoard /> } />
    <Route path="/mens"  element={ <MensPage category="men" />} />
    <Route path="/womens"  element={ <WomensPage category=  "women"/> } />
    <Route path="/kids"  element={ <KidsPage category="kid"/> } /> 
    <Route path="/product" element={ <ProductPage /> } /> 
    <Route path='/productId' element={ <ProductPage />} >
    </Route> */}
    {/* <Route path='./cart' element={ <CartPage /> } />
    <Route path="/"  element={ <LoginSignPage /> } />
    </Routes>  */}
    <Footer /> 
    {/* </BrowserRouter> */}
    </>
  )
}
export default App
