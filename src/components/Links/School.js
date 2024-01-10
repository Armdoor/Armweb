import React from 'react';
import Linkheader from '../Linkheader/Linkheader';
import styled from 'styled-components';
import Footer from '../Footer/Footer';

const School = () => {
  return (
    <Container>
      <Linkheader />
      <h1>University Of Maryland, College Park</h1>

      <Grid>
        
            <CardContainer>
            <h2>Fall 2022</h2>
            <p>CMSC 131: Object-Oriented Programming I</p>
            <p>ECON 181: Putting a Price on the Environment</p>
            <p>EDCP 210: Peer Counseling Skills</p>
            <p>GEOG 330: Society and Sustainability</p>
            <p>PHYS 235: The Manhattan Project</p>
            </CardContainer>

            <CardContainer>
            <h2>Spring 2023</h2>
            <p>CMSC 132: Object-Oriented Programming II</p>
            <p>CMSC 250: Discrete Structures</p>
            <p>COMM 107: Oral Communication: Principles and Practices</p>
            <p>MUSC 210: The Impact of Music on Life </p>
            </CardContainer>

            <CardContainer>
                <h2>Summer 2023</h2>
                <p>CMSC 216: Introduction to Computer Systems</p>
                <p>MATH 461: Linear Algebra for Scientists and Engineers</p>
                <p>ENGL 393: Technical Writing</p>
            </CardContainer>


            <CardContainer>
                <h2>Fall 2023</h2>
                <p>CMSC 330: Organization of Programming Languages</p>
                <p>CMSC 351: Algorithms</p>
                <p>CMSC 388J: Web Applications with Python and Flask</p>
                <p>EDHD 200: Paradigms and Perspectives in Human Development</p>
                <p>EDHD 306: Research Methods in Human Development</p>
            </CardContainer>
        
            <CardContainer>
                <h2>Spring 2024</h2>
                <p>CMSC 320: Introduction to Data Science</p>
                <p>CMSC 433: Programming Language Technologies</p>
                <p>CMSC 421: Introduction to Artificial Intelligence</p>
                <p>EDHD 320: Human Development Through the Lifespan</p>
                <p>PHIL 220: Bioethics: Regulating Right and Wrong</p>
            </CardContainer>
        </Grid>
      <Footer/>
    </Container>
  );
};

export default School;

const Container = styled.div`
  height: 107vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-image: url('/images/scbg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  align-items: center;
  justify-content: center;
  h1{
    padding-top: 10vh;
    padding-bottom: 30px;
  }
`;



const CardContainer = styled.div`
  height: 250px;
  width: 500px;
  padding-left: 25px;
  border-radius: 2rem;
  backdrop-filter: blur(2px);
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center; 
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05); /* Increase scale on hover */
  }
  h2{
    color: #81B8D7;
    padding-top: 0px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center; 
  }
  p{
    margin-bottom: 5px;
    font-weight: 400;
  }
`;

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 15px;
grid-auto-rows: minmax(100px, auto);
padding-bottom: 30px;
`