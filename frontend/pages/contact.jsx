import React, { useState } from 'react';
import styled from 'styled-components';

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

const SubmitButton = styled.button`
  margin-left: auto;
`;

const FormResponse = styled.p`
  text-align: right;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setResponseMessage('Message sent');
    } else {
      setResponseMessage('Unable to send the message, please try again later.');
    }
    
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
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
        <SubmitButton type="submit">Submit</SubmitButton>
        {responseMessage && <FormResponse>{responseMessage}</FormResponse>}
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;
