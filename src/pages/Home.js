import React from 'react';
import Hero from '../components/Hero';
import styled from 'styled-components';
import Form from '../components/Form';

const Home = () => {
  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <Hero />
        <Form />
      </Wrapper>
    </section>
  );
};
const Wrapper = styled.div`
  border-radius: 10px;
  background-color: var(--clr-white);
  -webkit-box-shadow: 0px 3px 12px 0px rgba(0, 0, 0, 0.37);
  box-shadow: 0px 3px 12px 0px rgba(0, 0, 0, 0.37);
`;
export default Home;
