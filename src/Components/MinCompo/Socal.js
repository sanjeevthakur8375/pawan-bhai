import React from 'react';
import { FaFacebookSquare ,FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Socal = () => {
    return (
        <div className="socal_Main">
            <Link to="/" target="blank"><FaFacebookSquare /></Link>
            <Link to="/" target="blank"><FaTwitterSquare /></Link>
            <Link to="/" target="blank"><FaInstagramSquare /></Link>
        </div>
    )
}

export default Socal
