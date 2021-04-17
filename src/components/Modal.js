import React from 'react';
import styled from 'styled-components';
import { data } from '../benifitsData';
import ModalBenifitsMiddle from './ModalBenifitsMiddle';
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

        {/* //middle benifits  */}
        <ModalBenifitsMiddle />

        {/* last buttons */}
        <div className='btn-container'>
          <button className='btn' onClick={() => setModal(false)}>
            back
          </button>
          <button className='btn save-btn'>save</button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  min-height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99999999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  .modal {
    padding: 1rem 0.5rem;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: auto;
    background-color: #fff;
    z-index: 99999999;
    overflow-y: scroll;

    @media (max-width: 900px) {
      width: 95%;
      top: 100%;
    }
    @media (max-width: 400px) {
      width: 90%;
      top: 120%;
    }
  }
  header {
    font-size: 16px;
    color: #2a3b8f;
    font-weight: 600;
  }
  .modal-upper {
    margin: 1rem 0;
    background-color: #f7f7f7;
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
    gap: 1rem !important;
    justify-content: flex-end;
  }
  .btn {
    height: 46px;
    padding: 0 2rem;
  }
`;
export default Modal;
