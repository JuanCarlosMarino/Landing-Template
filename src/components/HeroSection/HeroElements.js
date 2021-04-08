import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'


export const HeroContainter = styled.div`
    background: #080b1d;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 0 20px;
    margin:auto;
    height: 1200px;
    position:relative;
    z-index:1;

    /* Add: before styles */

    display:flex;
    flex-direction:row;
    justify-content:space-around;
    flex-flow:wrap;
`

export const HeroBg = styled.div`
    position:absolute;/*should be absolute*/
    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height:100%;
    overflow: hidden;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    flex-flow:wrap;
`
export const VideoBg =styled.video`
    --o-object-fit:cover;
    /*object-fit:cover;
    width:100%;
    height:100%;*/
    background: #080b1d;
    width:auto;
    height:100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);    
`

export const HeroContent =styled.div`
    z-index:3;
    max-width:1200px;
    position:left; /*change order*/
    padding: 8px 24px;
    display:flex;
    flex-direction: column; /*column*/    
    align-items:center;
    
       
`
export const HeroPhone = styled.div`    
    z-index:3;
    height:660px;
    width:350px;
    display:flex;
    flex-direction: column;
    align-items:center;   
    
    @media screen and (max-width:878){
        height:330px;
        width:175px;
        display:none;
    }
      
`
export const HeroPhoneDetails2 = styled.div`
    content:url(${props => props.BGPhone});
    transform: translateZ(${props => props.BG}px);
    z-index:2;        
    height:650px;
    width:390px;
    position:absolute;
    @media screen and (max-width:878){
        height:330px;
        width:175px;
        display:none;
    }
    
    
`
export const HeroPhoneBackground1 = styled.div`
    content:url(${props => props.BGPhone});
    transform: translateZ(${props => props.BG}px);
    z-index:2;        
    height:650px;
    width:390px;
    position:absolute;
    @media screen and (max-width:878){
        height:330px;
        width:175px;
        display:none;
    }
    
`
export const HeroPhoneDetails = styled.div`    
    content:url(${props => props.BGPhoneD});
    transform: translateZ(${props => props.BG}px);
    z-index:3;        
    height:650px;
    width:390px;
    position:absolute;
    @media screen and (max-width:878){
        height:330px;
        width:175px;
        display:none;
    }
    
`
export const HeroH1 =styled.h1`
    color:#fff;
    font-size:48px;
    font-weight:bold;
    text-align:center;

    @media screen and (max-width:878){
        font-size: 40px;
    }

    @media screen and (max-width:513){
        font-size: 30px;
    }

`
export const HeroP =styled.p`
    margin-top:24px;
    color:#fff;
    font-size:28px;
    text-align:center;
    max-width:600px;

    @media screen and (max-width:878){
        font-size: 24px;
    }

    @media screen and (max-width:513){
        font-size: 18px;        
    }
    
    
`
export const HeroBtn =styled.nav`
    display:flex;
    align-items:center;    
`


export const HeroBtnLink = styled(LinkR)`
    white-space: nowrap;
    padding: 0px 5px;
    outline:none;
    border:none;
    cursor:pointer;
    transform: all 0.2s ease-in-out;
    text-decoration:none;
    content:url(${props => props.button});
    width:170px;
    align-items:center;
    align-self:center;
    align-content:center;
    
    @media screen and (max-width:513){
        display:inline-block;
        text-align:center;
        inline-block:18px;    
        position:relative;    
    }
    
    
`
export const HeroBtnLinkSocials = styled(LinkR)`
    white-space: nowrap;
    margin-top:10px;
    padding: 10px 10px;
    outline:none;
    border:none;
    cursor:pointer;
    transform: all 0.2s ease-in-out;
    text-decoration:none;
    content:url(${props => props.button});
    width:70px;
    align-items:center;
    align-self:center;
    align-content:center;
    
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(10px);
    border-radius:10px;

    @media screen and (max-width:513){
        display:inline-block;
        text-align:center;
        inline-block:18px;    
        position:relative;    
    }
    
    
`