import Link from 'next/link';
import React from 'react';
import { CommonPath } from '../../Components/Constant';

const HeadingLogo = () => {
  return (
    <div className='brand-logo'>
      <Link href={'/'}>
        {/*<svg className='svg-icon'>*/}
        {/*  <use className='fill-color' xlinkHref='/assets/svg/koalogo.png'></use>*/}
        {/*</svg>*/}
        <img src={`/assets/svg/koalogowhite.svg`} style={{maxWidth:"130px"}} className='img-fluid' alt='logo' />
      </Link>
    </div>
  );
};
export default HeadingLogo;
