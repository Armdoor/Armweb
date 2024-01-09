import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
     <Container id='about'>
        <Fade top>
        <TextItem>
            <h1>What I Do? </h1>
            <p> Your MOM</p>
        </TextItem>
        </Fade>
        
        <Cards>
        <Fade bottom>
            <Card>
                <img src='/images/ios.png' alt='apple'/>
                <h2>Ios </h2>  
                <p>Yes this too</p>
            </Card>
            <Card>
                <img src='/images/ui.png' alt='apple'/>
                <h2>Web Dev </h2>  
                <p>Yes this too</p>
            </Card>
            <Card>
                <img src='/images/web.png' alt='apple'/>
                <h2>Machine Learning and Data Science </h2>  
                <p>Yes this too</p>
            </Card>
            </Fade>
        </Cards>
     </Container>
  )
}

export default About

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-image: url('/images/aboutbg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    margin:  0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const TextItem = styled.div`
font-size: 2rem;
font-weight: 600;
padding-top: 3rem;
margin-bottom: 1.5rem;
h1{
    color: white;
}
`

const Cards = styled.div`
    margin: 1.5rem;
    width: 100vw;
    max-width: 50%;
    text-align: left;
    color: white;`

const Card = styled.div`
display: flex;
margin: 1rem;
padding: 1.5rem 2rem;
border-radius: 0.5rem;

backdrop-filter: blur(2px);
background-color: rgba(255, 255, 255, 0.5);`



