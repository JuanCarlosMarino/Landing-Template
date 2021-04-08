import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'



export const Nav = styled.nav`
    background-color:black;
    height: 80px;
    /* margin-top: -80px;*/
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index:10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content:space-between;
    height:80px;
    z-index:1;
    width: 100%;
    padding: 0 24 px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items:center;
    margin-left:10px;
    width:auto;
    
    text-decoration:none;    
`
export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width:878px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform:translate(-100%,60%);
        font-size:1.8rem;
        cursor: pointer;
        color: #fff;
    }
`
export const NavMenu = styled.div`
    display:flex;
    align-items:center;
    list-style:none;
    text-align:center;
    margin-right:40px;

    @media screen and (max-width:878px){
        display:none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`
export const NavLinks = styled(LinkS)`
    color: #fff;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    margin-inline-end:15px;    
    
    &.active {
        border-bottom:3px solid #01bf71;
    }
`
export const LogoBindeo =styled.li`
    object-fit:contain;
    margin:0;
    padding:0;
    border: 16px solid rgba(0,0,0,0.0);
    content:url(${props => props.logo});
    max-width:100%;
    max-height:100%;
    align-content:center;
`
export const NavBtn =styled.nav`
    display:flex;
    align-items:center;

    @media screen and (max-width: 878px) {
        display:flex;
        margin-right:70px;
    }
`

export const NavBtnLink = styled(LinkS)`
    white-space: nowrap;
    padding: 0px 5px;
    outline:none;
    border:none;
    cursor:pointer;
    transform: all 0.2s ease-in-out;
    text-decoration:none;
    content:url(${props => props.button});
    width:170px;
    
    &:hover {
        content:url(${props => props.buttonHover});
        transition:all 0.2s ease-in-out;
    }
    @media screen and (max-width: 878px) {
        width:135px;        
    }
    @media screen and (max-width: 513px) {
        display:none;      
    }
`

