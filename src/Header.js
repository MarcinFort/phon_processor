import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/processor'>Processor</Link></li>
                <li><Link to='/difference'>Difference</Link></li>
            </ul>
        </nav>
    </header>
)