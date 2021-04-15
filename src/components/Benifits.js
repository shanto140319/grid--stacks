import React, { useState } from 'react';
import styled from 'styled-components';
import BenifitBtn from './BenifitBtn';
import Modal from './Modal';
import { data } from '../benifitsData';

const Benifits = () => {
  const [modal, setModal] = useState(false);

  return (
    <Wrapper>
      <div className='header'>
        <h5>benifits</h5>
        <button className='btn' type='button' onClick={() => setModal(!modal)}>
          add benifits
        </button>
      </div>

      {/* Modal  */}
      {modal && <Modal setModal={setModal} />}

      {/* benifit buttons */}
      <div className='btn-container'>
        {data.slice(0, 6).map((item, index) => {
          return <BenifitBtn key={index} item={item} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 1.5rem;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header h5 {
    font-size: 20px;
    color: #f15a29;
    margin-bottom: 0;
  }
  .btn-container {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    @media (max-width: 600px) {
      justify-content: center;
    }
  }
`;
export default Benifits;
