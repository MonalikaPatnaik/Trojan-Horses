import React, {useState} from 'react';
// import Footer from '../Components/Footer';
import HomeSection from '../Components/HomeSection';
import InfoSection from '../Components/InfoSection';
import { homeObjOne } from '../Components/InfoSection/Data';
import Navbar from '../Components/Navbar';
import Blogs from '../Components/Blogs';
import Sidebar from '../Sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
     <Navbar toggle={toggle}/> 
     <HomeSection/>
     <InfoSection {...homeObjOne}/>
    <Blogs/>
    {/* <Footer/> */}


    </>
  )
}

export default Home
