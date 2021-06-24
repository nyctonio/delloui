import React,{useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import InfoSection from '../components/InfoSection'
import Services from '../components/Services'
import {homeObjOne,homeObjTwo,homeObjThree} from '../components/InfoSection/Data'
import Footer from '../components/Footer'

function Home() {
    const [isOpen,setisOpen]=useState(false);

    const toggle = () =>{
        setisOpen(!isOpen);
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Hero/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services />
            <InfoSection {...homeObjThree}/>
            <Footer/>
        </>
    )
}

export default Home
