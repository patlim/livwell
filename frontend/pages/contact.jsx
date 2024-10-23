import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useForm } from '@formspree/react';
import Head from 'next/head';

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 750px;
  gap: 24px;
  margin: 128px auto;
  @media (max-width: 767px) {
    gap: 12px;
    margin: 64px auto 0 auto;
  }
`;

const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FormField = styled.div`
  position: relative;
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  font-size: 1rem;
  pointer-events: none;
  transition: all 0.2s ease;
`;

const Input = styled.input`
  width: 100%;
  
  &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
    top: 0;
    padding: 0 5px;
    left: 10px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 120px;

  &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
    top: 0;
    padding: 0 5px;
    left: 10px;
  }
`;

const FormResponse = styled.p`
  text-align: right;
`;

const SubmitContainer = styled.div`
  margin: 0 20px 0 auto;
  display: flex;
  gap: 12px;
  align-items: center;
`

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingSpinner = styled.div`
  border: 2px solid var(--dark);
  border-top: 2px solid var(--accent);
  border-radius: 50%;
  width: 18px;
  height: 18px;
  animation: ${spin} 1s linear infinite;
`;

const pageTitle = 'Livwell | Contact'

const Contact = () => {
  const [state, handleFormSpreeSubmit] = useForm("xrbgbopz");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = pageTitle;
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage('');

    try {
      debugger
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      handleFormSpreeSubmit()
      if (state.succes && response.ok) {
        setResponseMessage('Message sent');
      } else {
        setResponseMessage('Unable to send the message, please try again later.');
      }
    } catch (e) {
      setResponseMessage('Unable to send the message, please try again later.');
    };

    setLoading(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} key="title" />
      </Head>
      <ContactSection>
        <h1 className='h3'>Contact</h1>
        <ContactForm onSubmit={handleSubmit}>
          <FormField>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder=" "
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Label htmlFor="name">Name</Label>
          </FormField>

          <FormField>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Label htmlFor="email">Email</Label>
          </FormField>

          <FormField>
            <TextArea
              id="message"
              name="message"
              placeholder=" "
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Label htmlFor="message">Message</Label>
          </FormField>
          <SubmitContainer>
            {loading && <LoadingSpinner />}
            <button type="submit">Submit</button>
          </SubmitContainer>
          {responseMessage && <FormResponse>{responseMessage}</FormResponse>}
        </ContactForm>
      </ContactSection>
    </>
  );
};

export default Contact;
