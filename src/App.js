import './App.css';
import Home from './pages/home'
import Service from './pages/services'
import About from './pages/about'
import Contact from './pages/contact'
import Login from './pages/login'
import Register from './pages/register'
import Properties from './pages/properties'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Propertiesdetails from './pages/propertiesdetails';
function App() {
  return (
    <div className="App">
      <BrowserRouter >
       
       
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Properties' element={<Properties />} />
          {/* <Route path='/blog' element={<Blog />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/propertiesdetails' element={<Propertiesdetails/>}/>
        </Routes>


      </BrowserRouter>


    </div>
  );
}

export default App;
