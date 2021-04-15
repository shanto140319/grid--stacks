import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <ul>
        <li>About Company</li>
        <li> Privacy Policy</li>
        <li>Terms & Conditions</li>
        <li>Blog</li>
        <li>Contact Us</li>
      </ul>
    </Wrapper>
  );
};
const Wrapper = styled.footer`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  background-color: #2a3b8f;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 0 2rem;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    gap: 3rem;
    flex-wrap: wrap;
    font-size: 14px;
    @media (max-width: 600px) {
      gap: 1rem;
    }
  }
`;
export default Footer;
