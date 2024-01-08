import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_o5h682a', 'template_y9byt1q', form.current, '5VLrurHOUpdITKMNn')
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Message sent you bozo!', {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        },
        (error) => {
          console.log(error.text);
          toast.error('Couldnt send the message you bozo!', {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }
      );
  };

  return (
    <Container>
      <TextArea>
        <h2>Contact Me</h2>
        <p>Get In Touch or touch some grass</p>
      </TextArea>
      <StyledForm ref={form} onSubmit={sendEmail}>
        <input className='name' type='text' placeholder='Name' name='from_name' />
        <input className='email' type='text' placeholder='Email' name='email_id' />
        <textarea className='msg' placeholder='Message' rows={5} name='message' />
        <button className='subBtn' type='submit' value='Send'>
          Submit
        </button>
      </StyledForm>

      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  height: calc(100vh - 4rem);
  overflow: hidden;
  width: 100vw;
  max-width: auto;
  background-image: url('/images/conatctbg.jpg');
  background-size: cover;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const TextArea = styled.div`
  font-size: 2rem;
  font-weight: 600;
  padding-top: 3rem;
  margin-bottom: 1.5rem;
  h2,
  p {
    color: white;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input,
  textarea,
  button {
    margin-bottom: 1rem;
  }

  input,
  textarea,
  button {
    width: 300px;
    padding: 0.5rem;
    color: white;
    border: none;
    border-radius: 0.5rem;
    backdrop-filter: blur(2px);
    background-color: rgba(255, 255, 255, 0.5);
  }

  button {
    width: 100px;
    background: white;
    color: #393c41;
    font-weight: 800;
    margin: 1rem 0;
    padding: 0.75rem 1.5rem;
    border: None;
    border-radius: 2rem;
    transition: background-color 0.3s;
    &:hover {
        color: white;
      background-color: #393c41;
    }
  }
`;
