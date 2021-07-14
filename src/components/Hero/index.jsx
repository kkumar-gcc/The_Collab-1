import React, {useState} from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight , TattiBg, TattiBg2, TattiBg3, SocialHandle} from './HeroElements'
import { Button } from '../ButtonElements'
import {SocialIconLink, SocialIcons} from "../Footer/FooterElements";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id='home'>
      <HeroBg>
          <TattiBg/>
          <VideoBg/>
          <TattiBg2/>
          <TattiBg3/>
      </HeroBg>
      <HeroContent>
        <HeroH1> Public Policy And Opinion Cell</HeroH1>
        <HeroP>*Info about PPOC here*<br></br>**Insert some more catchy line here**</HeroP>
        <HeroBtnWrapper>
          <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'               smooth={true} duration={500} spy={true} exact='true' offset={-80}>
            Know More {hover ? <ArrowForward /> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
          <SocialHandle>
          <SocialIcons>
              <SocialIconLink href='//www.facebook.com/sos.iitk' target='_blank' arial-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='//www.instagram.com/ppoc_iitk/' target='_blank' arial-label='Instagram'>
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href='//www.youtube.com/channel/UCL6N8QXTgLIdj2SzxYhHrag/videos' target='_blank' arial-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' arial-label='Twitter'>
                <FaTwitter/>
              </SocialIconLink>
              <SocialIconLink href='//www.linkedin.com/company/sos-iitkanpur/' target='_blank' arial-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialHandle>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero