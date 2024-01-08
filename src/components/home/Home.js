import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

const Home = () => {
  return (
      <Wrap id='home'>
        <ItemText>
          <Fade top>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '800' }}>Hello,</h2>
            <h1 style={{ fontSize: '3rem' }}>I'm <HighlightedText>Aarambh</HighlightedText></h1>
            Computer Science Student
            <p style={{ fontSize: 'large', fontWeight: '520', paddingBottom: '15px'}}>At University of Maryland, College Park.</p>
          </Fade>
          <Fade bottom>
            <StoryButton>
                My Story
            </StoryButton>
          </Fade>
          
        </ItemText>
        <Buttons>
        <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
          <DownArrow src = '/images/arrow.png'/>
          </ScrollLink>
        </Buttons>
      </Wrap>
     
  )
}

export default Home;


const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-image: url('/images/homebg.jpg');
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: center;`;

const ItemText = styled.div`
  position: absolute;
  top: 25vh; 
  left: 5vw;
  padding: 0;  
  font-size: 3rem;
  font-weight: 700;
`;

const HighlightedText = styled.span`
  color: red;
`;



const StoryButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);  
  height: 45px;
  width: 125px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.8;
  text-transform: uppercase;
  font-size: 18px;
  cursor: pointer;
`;

const Buttons = styled.div`
padding-top: 92.5vh;
text-align: center;`;

const DownArrow = styled.img`

  width: 40px;
  height:40px;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`