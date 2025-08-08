import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 80px 0;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 40px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactBox = styled.div`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 20px;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
    transform: translateY(-2px);
  }
`;

const ContactIcon = styled.div`
  font-size: 24px;
  min-width: 40px;
  text-align: center;
`;

const ContactDetails = styled.div`
  flex: 1;
`;

const ContactLabel = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 4px;
`;

const ContactLink = styled.a`
  font-size: 18px;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.text_primary};
  }
`;

const FooterText = styled.div`
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 16px;
`;

const Contact = () => {
  return (
    <Container id="Contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        
        <ContactBox>
          <ContactTitle>Get In Touch 🚀</ContactTitle>
          
          <ContactItem>
            <ContactIcon>📧</ContactIcon>
            <ContactDetails>
              <ContactLabel>Email</ContactLabel>
              <ContactLink href="arunimasaha202@gmail.com">
                arunimasaha202@gmail.com
              </ContactLink>
            </ContactDetails>
          </ContactItem>
          
          <ContactItem>
            <ContactIcon>📱</ContactIcon>
            <ContactDetails>
              <ContactLabel>Phone</ContactLabel>
              <ContactLink href="tel:+91 6291998711">
                +91 6291998711
              </ContactLink>
            </ContactDetails>
          </ContactItem>
          
          <FooterText>
            I'll get back to you as soon as possible!
          </FooterText>
        </ContactBox>
      </Wrapper>
    </Container>
  );
};

export default Contact;