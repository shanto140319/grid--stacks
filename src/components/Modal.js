import React from 'react';
import styled from 'styled-components';
import { data } from '../benifitsData';
import Modalbtns from './Modalbtns';
const Modal = ({ setModal }) => {
  return (
    <Wrapper>
      <div className='modal'>
        <header>Add Benefits</header>
        <hr />
        <div className='modal-upper'>
          <p>Choose benefit to add</p>
          <div className='modal-btn-container'>
            {data.map((item, index) => {
              return <Modalbtns key={index} item={item} />;
            })}
          </div>
        </div>

        {/* buttons */}
        {/* save button  */}
        <button className='btn'>save</button>

        {/* last buttons */}
        <div className='btn-container'>
          <button className='btn' onClick={() => setModal(false)}>
            back
          </button>
          <button className='btn'>save</button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99999999;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    padding: 1rem 0.5rem;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    width: 55%;
    height: 90%;
    background-color: #fff;
    z-index: 99999999;
    @media (max-width: 900px) {
      width: 75%;
    }
  }
  header {
    font-size: 16px;
    color: #2a3b8f;
    font-weight: 600;
  }
  .modal-upper {
    margin: 1rem 0;
    background-color: var(--clr-grey-10);
    padding: 0.8rem;
  }
  .modal-upper p {
    font-size: 14px;
    color: #666666;
    font-weight: 400;
  }
  .modal-btn-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .btn-container {
    position: fixed;
    bottom: 2%;
    right: 2%;
    gap: 1rem !important;
    justify-content: flex-end;
  }
`;
export default Modal;
