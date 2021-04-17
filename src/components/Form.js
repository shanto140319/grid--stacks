import React from 'react';
import styled from 'styled-components';
import Benifits from './Benifits';
import { AiFillRightCircle } from 'react-icons/ai';
const Form = () => {
  return (
    <Wrapper>
      <form noValidate autoComplete='off' onClick={(e) => e.preventDefault()}>
        <label htmlFor='company'>About company*</label>
        <textarea
          required
          name='company'
          id='company'
          placeholder='type in your sumary'
        ></textarea>

        <div className='grid'>
          <div className='form-control'>
            <label htmlFor='company'>Website</label>
            <input type='text' id='website' placeholder='website (url)' />
          </div>

          <div className='form-control'>
            <label htmlFor='industry'>Industry*</label>
            <select required name='industry' id='industry'>
              <option value='select indusry'>select indusry</option>
            </select>
          </div>

          <div className='form-control'>
            <label htmlFor='company_size'>company_size*</label>
            <input
              required
              type='text'
              id='company_size'
              placeholder='employees'
            />
          </div>

          <div className='form-control'>
            <label htmlFor='headquarters'>Headquarters</label>
            <input type='text' id='headquarters' placeholder='enter text' />
          </div>

          <div className='form-control'>
            <label htmlFor='type'>Type</label>
            <input type='text' id='type' placeholder='enter text' />
          </div>

          <div className='form-control'>
            <label htmlFor='founded'>Founded</label>
            <input type='text' id='founded' placeholder='enter year' />
          </div>
        </div>
        <div className='form-control specialties'>
          <label htmlFor='specialties'>Specialties</label>
          <input type='text' id='specialties' placeholder='enter text' />
        </div>

        {/* benifits button components */}
        <Benifits />

        {/* skip and save butons  */}
        <div className='btn-containers'>
          <button type='button' className='btn skip-btn'>
            skip
          </button>
          <button type='submit' className='btn save-btn'>
            save <AiFillRightCircle />
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  padding: 5rem 2rem;
  label {
    display: block;
    margin-bottom: 0.3rem;
    font-size: 18px;
    font-family: 'Crimson Pro', serif;
  }
  #company {
    height: 100px;
    width: 100%;
    padding: 1rem;
    filter: drop-shadow(2.828px 2.828px 3px rgba(0, 0, 0, 0.16));
    border-radius: 5px;
    border: 1px solid #707070;
  }
  .grid {
    margin-top: 1rem;
    display: grid;
    gap: 1.5rem;
    /* justify-items: center; */
    @media (min-width: 600px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  input,
  select {
    width: 100%;
    height: 58px;
    border-radius: 4px;
    filter: drop-shadow(2.828px 2.828px 3px rgba(0, 0, 0, 0.16));
    background-color: #ffffff;
    border: 1px solid #707070;
    padding: 0.5rem 1rem;
  }
  .specialties {
    margin-top: 1rem;
  }
  .btn-containers {
    width: 100%;
    margin-top: 1.5rem;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }
  .btn {
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.21));
  }
  .btn svg {
    font-size: 30px;
    color: #ffffff;
    opacity: 0.5;
  }
  .skip-btn {
    background-color: #ffffff;
    border: 1px solid #2a3b8f;
    padding: 0.5rem 1.5rem;
    color: #2a3b8f;
  }
  .save-btn {
    background-color: #ffffff;
    border: 1px solid #2a3b8f;
    padding: 0.5rem 1.5rem;
    display: flex;
    padding: 0.1rem 1rem;
    padding-right: 0.1rem;
    align-items: center;
    justify-content: space-between;
    width: 100px;
    background-color: #2a3b8f;
    color: #ffffff;
  }
`;
export default Form;
