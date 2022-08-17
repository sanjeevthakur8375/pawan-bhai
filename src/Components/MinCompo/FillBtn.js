import React from 'react';
import { Link } from 'react-router-dom';

const FillBtn = (prop) => {
  return (
    <Link className='fillBtn' to={prop.btnPath}>{prop.btnName}</Link>
  )
}

export default FillBtn
