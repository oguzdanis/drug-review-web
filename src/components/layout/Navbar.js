import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
            <h1>
                <a href="/"><i className="fas fa-code"></i> İlaç Yorumlama</a>
            </h1>
            <ul>
                <li><Link to="/drugs">İlaçlar</Link></li>
                <li><Link to="/register">Üye ol</Link></li>
                <li><Link to="/login">Giriş Yap</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar