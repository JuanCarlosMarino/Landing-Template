import React from 'react'
import Video from '../../videos/CenterheroCompressed.m4v'
import Tilt from 'react-vanilla-tilt';
import '../../App.css'
import {
    HeroContainter,
    HeroBg,
    VideoBg,
    HeroH1,
    HeroContent,
    HeroP,
    HeroBtn,
    HeroBtnLink,
    HeroPhone,
    HeroBtnLinkSocials,
    HeroPhoneBackground1,
} from './HeroElements'

import AppleStoreLight from '../../images/AppleStoreLight.png'
import GooglePlayLight from '../../images/GooglePlayLight.png'
import Twitter from '../../images/twitter.png'
import Facebook from '../../images/facebook.png'
import Instagram from '../../images/insta.png'
import Phone from '../../images/Phone/phoneFrame.png'


const HeroSection = () => {

    return (

        <HeroContainter id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />

            </HeroBg>
            
            <Tilt className="tilt">
                <HeroPhone >                    
                    <HeroPhoneBackground1 BGPhone={Phone} BG={20}/>           
                                          
                </HeroPhone>

            </Tilt>
            <HeroContent >
                <HeroH1>THIS IS SOME GENERIC TEST</HeroH1>
                <HeroP>
                    This is also some generic text
                </HeroP>
                <HeroP>DOWNLOAD FOR FREE!</HeroP>
                <HeroBtn>
                    <HeroBtnLink to="/download" button={GooglePlayLight} ></HeroBtnLink>
                </HeroBtn>
                <HeroBtn>
                    <HeroBtnLink to="/download" button={AppleStoreLight} ></HeroBtnLink>
                </HeroBtn>
            </HeroContent>

            <HeroContent >
                <HeroBtn>
                    <HeroBtnLinkSocials to="/download" button={Twitter} ></HeroBtnLinkSocials>
                </HeroBtn>
                <HeroBtn>
                    <HeroBtnLinkSocials to="/download" button={Instagram} ></HeroBtnLinkSocials>
                </HeroBtn>
                <HeroBtn>
                    <HeroBtnLinkSocials to="/download" button={Facebook} ></HeroBtnLinkSocials>
                </HeroBtn>
            </HeroContent>
        </HeroContainter>
    )
}

export default HeroSection
