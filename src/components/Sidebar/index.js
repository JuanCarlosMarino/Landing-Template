import React from 'react'
import AppleStore from '../../images/AppleStore.png'
import AppleStoreHover from '../../images/AppleStoreHover.png'
import GooglePlay from '../../images/GooglePlay.png'
import GooglePlayHover from '../../images/GooglePlayHover.png'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarRoute,
    SidebarLink,
    SidebarMenu,
    SideBtnWrap,

} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                </SidebarMenu>

                <SideBtnWrap>
                    <SidebarRoute to="/download" button={GooglePlayHover} buttonHover={GooglePlay}> Google Play</SidebarRoute>
                </SideBtnWrap>
                <SideBtnWrap>
                    <SidebarRoute to="/download" button={AppleStoreHover} buttonHover={AppleStore}> Apple Store</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
