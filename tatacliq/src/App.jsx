import logo from './logo.svg';
import './App.css';

import {Route,Router,Routes} from 'react-router-dom';
import Navbar from './Tataweb/Navbar';
import Footer from './Tataweb/Footer';
import Home from './Tataweb/Home';
import Men from './Tataweb/Men';
import Ceteg from './Tataweb/Ceteg';
import MensMl from './Tataweb/MensML';
import SingleProduct from'./Tataweb/SingleProduct';

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path='SingleProduct'element={<SingleProduct/>}/>
        <Route exact path='MensMl' element={<MensMl/>}/>
        <Route exact path='Ceteg' element={<Ceteg/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/Men' element={< Men/>}/>
       

      </Routes>

      <Footer/>

    

      
    </div>
  );
}

export default App;
