import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
            <h1>
                <a className='logo' href="/">
                    <i className="fas fa-code" />
                İlaç Yorumlama</a>
            </h1>
            <ul>
                <li className='lead'><Link to="/drugs">İlaçlar</Link></li>
                <li className='lead'><Link to="/register">Üye ol</Link></li>
                <li className='lead'><Link to="/login">Giriş Yap</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar