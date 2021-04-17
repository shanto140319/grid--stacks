import styled from 'styled-components';
import React from 'react';
import { RiHealthBookLine } from 'react-icons/ri';
import { AiOutlineHome } from 'react-icons/ai';
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import ModalForm from './ModalForm';

const ModalBenifitsMiddle = () => {
  return (
    <Wrapper>
      <h5>Benefits</h5>
      <div className='wrapper'>
        <div className='benifit'>
          <span className='left'>
            <div className='icon-container'>
              <RiHealthBookLine />
            </div>
            <article>
              <h6>Excellent Health Care</h6>
              <p>
                We offer a comprehensi ve Benefits Package that includes
                Medical, dental, and vision coverage
              </p>
            </article>
          </span>
          <span>
            <MdEdit />
            <MdDelete />
            <BiDotsVerticalRounded />
          </span>
        </div>
        <div className='benifit'>
          <span className='left'>
            <div className='icon-container'>
              <AiOutlineHome />
            </div>
            <article>
              <h6>Daily Snacks</h6>
              <p>Enjoy various services and snacks in break room.</p>
            </article>
          </span>
          <span>
            <MdEdit />
            <MdDelete />
            <BiDotsVerticalRounded />
          </span>
        </div>

        {/* modal form  */}
        <ModalForm />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  h5 {
    font-size: 20px;
    color: #f15a29;
  }
  .wrapper {
    padding: 0.3rem;
    border-radius: 8px;
    border: 1px solid #dddddd;
  }
  .benifit {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    background-color: #f3ecdd;
    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;
  }
  h6 {
    font-size: 16px;
    line-height: 27px;
    color: #f15a29;
    font-weight: 400;
  }
  p {
    font-size: 12px;
    line-height: 27px;
    color: #2a3b8f;
    font-weight: 400;
  }
  .left {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .icon-container {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f4d7bb;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .left svg {
    font-size: 25px;
    color: #f15a29;
  }
  span {
    display: flex;
    gap: 0.5rem;
  }
  span svg {
    color: #6f6c65;
    font-size: 20px;
    cursor: pointer;
  }
`;
export default ModalBenifitsMiddle;
