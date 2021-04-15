import React, { useState } from 'react';
import { FiCircle } from 'react-icons/fi';
import { BiCheckCircle } from 'react-icons/bi';

import styled from 'styled-components';

const BenifitBtn = ({ item }) => {
  const { icon, text } = item;
  const [clicked, setClicked] = useState(false);
  return (
    <Wrapper>
      <button
        className={`${clicked ? 'btn-benifit active' : 'btn-benifit'}`}
        type='button'
        onClick={() => setClicked(!clicked)}
      >
        <span>
          {icon}
          {text}
        </span>
        {clicked ? <BiCheckCircle /> : <FiCircle />}
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .btn-benifit {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    background-color: transparent;
    padding: 0.5rem 1rem;
    border-radius: 99px;
    border: 1px solid #c1c1c1;
    cursor: pointer;
  }
  .btn-benifit svg {
    width: 20px;
    height: 20px;
  }
  span {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .btn-benifit:focus {
    outline: none;
  }
  .active {
    background-color: #f77631;
    color: #fff;
  }
`;
export default BenifitBtn;
