import React from 'react';
import styled from 'styled-components';

const ModalForm = () => {
  return (
    <Wrapper>
      <form onClick={(e) => e.preventDefault()}>
        <div className='form-control1'>
          <label htmlFor='title'>Title*</label>
          <input type='text' id='title' placeholder='Group A title' required />
        </div>
        <div className='form-control'>
          <label htmlFor='description'>Description*</label>
          <input
            type='text'
            id='description'
            placeholder='enter value'
            maxlength='150'
            required
          />
          <small>150 Characters</small>
        </div>
        <div className='modal-form-btn-container'>
          <button className='btn' type='submit'>
            save
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0.5rem;

  .form-control1 input {
    border: none;
    height: 30px;
    border-bottom: 1px solid #222;
    box-shadow: none;
    border-radius: 0;
    margin-bottom: 0.5rem;
    background-color: transparent;
  }
  .form-control {
    margin-bottom: 2rem;
  }
  small {
    float: right;
    color: #707070;
    padding: 0.2rem 0.5rem;
  }
  .modal-form-btn-container {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }
`;
export default ModalForm;
