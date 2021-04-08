import React from 'react'
import { FaBars} from 'react-icons/fa'
import AppleStore from '../../images/AppleStore.png'
import AppleStoreHover from '../../images/AppleStoreHover.png'
import GooglePlay from '../../images/GooglePlay.png'
import GooglePlayHover from '../../images/GooglePlayHover.png'
//import logo from '../../images/logoBindeo.png'
import logoText from '../../images/logoText.png'

import {
    Nav,
    NavbarContainer,
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    LogoBindeo,
    NavBtn,
    NavBtnLink,
    
} from './NavbarElements'



const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'><LogoBindeo logo={logoText}/></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover" >Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" >Services</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/download" button={AppleStore} buttonHover={AppleStoreHover}></NavBtnLink>
                        <NavBtnLink to="/download" button={GooglePlay} buttonHover={GooglePlayHover}></NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
