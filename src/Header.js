import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
    <header>
        <div id="logo">
            <h1 class="program_name">PhonProcessər</h1>
        </div>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/inventory'>Create or modify the inventory</Link></li>
                <li><Link to='/processor'>Processor</Link></li>
                <li><Link to='/difference'>Difference</Link></li>
            </ul>
        </nav>
    </header>
)