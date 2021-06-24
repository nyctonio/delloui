import React,{useState,useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll';

import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavLinks,
    NavItem,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

export default function Navbar({toggle}) {
    const [scrollNav,setscrollNav]=useState(false);

    const changeNav = () =>{
        if(window.scrollY >= 80){
            setscrollNav(true)
        }else{
            setscrollNav(false)
        }
    }

    const toggleHome = ()=>{
        scroll.scrollToTop();
    }

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    }, [])

    return (
        <>
        <IconContext.Provider value={{color:"#fff"}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>dolla</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks 
                        to="about" 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        to="discover"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        to="services"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        to="signup"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}