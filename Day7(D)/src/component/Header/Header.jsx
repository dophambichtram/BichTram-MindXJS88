import React from 'react'
import './Header.css';
import './HeaderContent'
const Header = () => {
  return (
    <div>
      <Block>
        <HeaderImage>
          <img src="https://whitefoobank.netlify.app/assets/img/whitefoologocap.png" width={150}></img>
        </HeaderImage>
        <HeaderTitle />
      </Block>
    </div>
  );
};

export default Header;