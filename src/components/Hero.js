import React, { useState } from 'react';
import styled from 'styled-components';
import bg_image from '../images/bg.png';
import logo from '../images/logo-main.png';
import edit from '../images/edit-btn.png';
const Hero = () => {
  const [bg, setBg] = useState({});
  const [logoImg, setLogoImg] = useState({});

  //change background
  const changeBg = (e) => {
    const src = URL.createObjectURL(e.target.files[0]);
    let newItem = { id: new Date().getTime().toString(), url: src };
    setBg(newItem);
  };

  //change logo
  const changeLogo = (e) => {
    const src = URL.createObjectURL(e.target.files[0]);
    let newItem = { id: new Date().getTime().toString(), url: src };
    setLogoImg(newItem);
  };

  return (
    <Wrapper>
      <img src={(bg && bg.url) || bg_image} alt='background image' />
      <form>
        <div className='file'>
          <input type='file' accept='image/*' id='file' onChange={changeBg} />
          <label htmlFor='file'>
            <img src={edit} alt='edit-icon' />
          </label>
        </div>
      </form>
      <div className='logo'>
        <img src={(logoImg && logoImg.url) || logo} alt='logo' />
        <form>
          <div className='file'>
            <input
              type='file'
              accept='image/*'
              id='logo'
              onChange={changeLogo}
            />
            <label htmlFor='logo'>
              <img src={edit} alt='edit-icon' />
            </label>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  height: 260px;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  input {
    position: absolute;
    top: 10%;
    right: 0;
  }
  .logo {
    position: absolute;
    bottom: -27%;
    left: 5%;
    background-color: #fff;
    height: 155px;
    width: 155px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo > img {
    height: 80%;
    width: 80%;
    border-radius: 50%;
    border: 2px solid #0ca6dc;
  }
  input[type='file'] {
    display: none;
  }
  .file label img {
    position: absolute;
    top: 10%;
    right: 3%;
    z-index: 9999;
    cursor: pointer;
    height: 35px;
    width: 35px;
  }
`;

export default Hero;
