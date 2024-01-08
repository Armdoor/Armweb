import React from 'react'
import styled from 'styled-components'
const Links = () => {
  return (
      <Container>
        <TextArea>
            <h2>Work</h2>
        </TextArea>
        <Buttons>
            <Button>
                <img src="/images/resume.png" alt='Resume'  href="https://github.com/Armdoor/Resume/blob/main/Final_res.pdf"></img>
                
            </Button>
            <Button>
                <img src="/images/git.png" alt='Github'  href="https://github.com/Armdoor"></img>
                
            </Button>
            <Button>
                <img src="/images/linkedin.png" alt='Linkedin'  href="https://www.linkedin.com/in/akshit-sanoria/"></img>
                
            </Button>
            <Button>
                <img src="/images/school.png" alt='Resume'  href="#"></img>
                
            </Button>
        </Buttons>
        
      </Container>
  )
}

export default Links

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-image: url('/images/linksbg.jpg');
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `


const TextArea = styled.div`
    font-size: 2rem;
    font-weight: 600;
    padding-top: 3rem;
    margin-bottom: 1.5rem;
    h1{
        color: white;
    }
`
const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Button = styled.div`
  height: 200px;
  width: 200px; 
  border-radius: 2rem;
  backdrop-filter: blur(2px);
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.75rem; 

  img {
    height: 150px; 
    width: 150px; 
  }
`;