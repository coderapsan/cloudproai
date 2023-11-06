import logo from '../logo.svg';
import Navbar from '../components/Navbar';
// import { Carousel } from 'antd';
import CarouselFrame from '../components/Carousel'
// import 'antd/dist/antd.css';
import Footer from '../components/Footer'


function HomePage() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <CarouselFrame/>

     <Footer/>
    </div>
  );
}

export default HomePage;
