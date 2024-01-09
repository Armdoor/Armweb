import React from 'react';
import Header from '../Header/Header';
import styled from 'styled-components';

const School = () => {
  return (
    <Container>
      <Header />
      <TextArea>
        <h1>University Of Maryland, College Park</h1>
        <Semester>
        <CardContainer>
          <h2>Fall 2022</h2>
            <CourseCard>
              <BlurredBackground>
                <p>CMSC 131: Object-Oriented Programming I</p>
                <p>ECON 181: Putting a Price on the Environment</p>
                <p>EDCP 210: Peer Counseling Skills</p>
                <p>GEOG 330: Society and Sustainability</p>
                <p>PHYS 235: The Manhattan Project</p>
              </BlurredBackground>
            </CourseCard>
          </CardContainer>
        </Semester>

        <Semester>
        <CardContainer>
          <h2>Summer 2023</h2>
          <CourseCard>
              <BlurredBackground>
                <p>CMSC 216: Introduction to Computer Systems</p>
                <p>Math 461: Linear Algebra for Scientists and Engineers</p>
                <p>ENGL 393: Technical Writing</p>
              </BlurredBackground>
            </CourseCard>
          </CardContainer>
        </Semester>

        <Semester>
        <CardContainer>
          <h2>Fall 2023</h2>

          <CourseCard>
              <BlurredBackground>
                <p>CMSC 330: Organization of Programming Languages</p>
                <p>CMSC 351: Algorithms</p>
                <p>CMSC 388J: Building Secure Web Applications with Python and Flask</p>
                <p>EDHD 200: Paradigms and Perspectives in Human Development</p>
                <p>EDHD 306: Research Methods in Human Development</p>
              </BlurredBackground>
            </CourseCard>
          </CardContainer>
    
        </Semester>

        <Semester>
        <CardContainer>
          <h2>Spring 2024</h2>
          
          <CourseCard>
              <BlurredBackground>
                <p>CMSC 320: Introduction to Data Science</p>
                <p>CMSC 433: Programming Language Technologies</p>
                <p>CMSC 421: Introduction to Artificial Intelligence</p>
                <p>EDHD 320: Human Development Through the Lifespan</p>
                <p>PHIL 220: Bioethics: Regulating Right and Wrong</p>
              </BlurredBackground>
            </CourseCard>
          </CardContainer>
        </Semester>

        <Semester>
          
          <CardContainer>
          <h2>Spring 2024</h2>
          <CourseCard>
              <BlurredBackground>
                <p>CMSC 320: Introduction to Data Science</p>
                <p>CMSC 433: Programming Language Technologies</p>
                <p>CMSC 421: Introduction to Artificial Intelligence</p>
                <p>EDHD 320: Human Development Through the Lifespan</p>
                <p>PHIL 220: Bioethics: Regulating Right and Wrong</p>
              </BlurredBackground>
            </CourseCard>
          </CardContainer>
        </Semester>
        
      </TextArea>
    </Container>
  );
};

export default School;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-image: url('/images/scbg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  align-items: center;
  overflow-y: auto;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Semester = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  height: 250px;
  border-radius: 2rem;
  backdrop-filter: blur(2px);
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CourseCard = styled.div``;

const BlurredBackground = styled.div``;