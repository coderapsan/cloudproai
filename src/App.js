import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
// import { Carousel } from 'antd';
import CarouselFrame from './Components/Carousel'
// import 'antd/dist/antd.css';
import Footer from './Components/Footer'


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <CarouselFrame/>

     <Footer/>
    </div>
  );
}

export default App;
