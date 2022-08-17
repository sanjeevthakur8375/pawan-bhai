import React from 'react';
import { Link } from 'react-router-dom';

const ColorBtn = (prop) => {
  return (
    <Link className='colorBtn' to={prop.btnPath}>{prop.btnName}</Link>
  )
}

export default ColorBtn
