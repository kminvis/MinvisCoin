import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <main>
        <header>
            <div className='header'>
                <div className='header_logo'>
                    <Link to="/" className='logo_link'>Minvis</Link>
                </div>
                <div className='header_link'>
                    <ul>
                        <li>
                            <Link to="/python"className='header_linklist'>파이썬</Link>
                        </li>
                        <li>
                            <Link to="/ETH"className='header_linklist'>이더리움</Link>
                        </li>
                        <li>
                            <Link to="/XRP"className='header_linklist'>리플</Link>
                        </li>
                        <li>
                            <Link to="/DOGE"className='header_linklist'>도지코인</Link>
                        </li>
                    </ul>
                </div>
                <div className='sign_link'>
                    <ul>
                        <li>
                            <Link to="/signin"className='header_linklist'>signin</Link>
                        </li>
                        <li>
                            <Link to="/signin"className='header_linklist'>signup</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    </main>
  );
}

export default Header;