import React, { useState } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import { BiCheckCircle } from 'react-icons/bi';
import styled from 'styled-components';

const Modalbtns = ({ item }) => {
  const { text } = item;
  const [clicked, setClicked] = useState(false);
  return (
    <Wrapper>
      <button
        className={`${clicked ? 'btn-benifit active' : 'btn-benifit'}`}
        type='button'
        onClick={() => setClicked(!clicked)}
      >
        <span>{text}</span>
        {clicked ? <BiCheckCircle /> : <BsPlusCircleFill />}
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .btn-benifit {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: transparent;
    padding: 0.3rem 0.5rem;
    border-radius: 99px;
    border: 1px solid #c1c1c1;
    cursor: pointer;
  }
  .btn-benifit svg {
    font-size: 15px;
    color: #f77631;
  }
  span {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .btn-benifit:focus {
    outline: none;
  }
  .active svg {
    color: #fff;
  }
  .active {
    background-color: #f77631;
    color: #fff;
  }
`;

export default Modalbtns;
