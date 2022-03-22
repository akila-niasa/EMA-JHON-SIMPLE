
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './components/Shop/Shop';
import  AOS  from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div>
   <Header></Header>
  <div className='container-fluid'>
  <Shop></Shop>
  </div>
    </div>
  );
}

export default App;
