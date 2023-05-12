
import { BrowserRouter } from 'react-router-dom';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import SideNav from './Components/SideNav/SideNav';
import Dashboard from './Pages/Dashboard';
import About from './Pages/About';
import Products from './Pages/Products';

function App() {
  return (
    <BrowserRouter>
    <SideNav>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
      </SideNav>
    </BrowserRouter>
  );
}

export default App;
