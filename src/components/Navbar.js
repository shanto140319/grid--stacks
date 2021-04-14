import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/company'>company</Link>
        </li>
        <li>
          <Link to='/candidate'>Find candidate</Link>
        </li>
        <li>
          <Link to='/guide'>Guide</Link>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem 5rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  ul {
    display: flex;
    gap: 2rem;
    justify-content: flex-end;
  }
  ul li {
    padding: 0.2rem;
  }
  ul li:last-child {
    border-right: 2px solid var(--clr-grey-5);
    padding-right: 1rem;
  }
  ul li a {
    color: var(--clr-grey-5);
    text-transform: capitalize;
    font-size: 13px;
  }
`;

export default Navbar;
