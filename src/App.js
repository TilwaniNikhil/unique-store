
import { BrowserRouter } from 'react-router-dom';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import SideNav from './Components/SideNav/SideNav';
import Dashboard from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Product/Products';
import Cart from './Pages/Cart/Cart';
import { TopNav } from './Components/TopNav/TopNav';
import ShopContextProvider from './context/ShopContextProvider';
function App() {
  return (
    <div className='App'>
    <ShopContextProvider>
    <BrowserRouter>
    <TopNav/>
    <SideNav>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </SideNav>
    </BrowserRouter>
    </ShopContextProvider>
    
    </div>
  );
}

export default App;
