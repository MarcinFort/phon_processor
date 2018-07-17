import React from 'react';
import { Link } from 'react-router-dom';

export const Header = (props) => (
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
        <div id="show_inventory">
            {props.inventory.length === 0 ? "You are using all basic segments. To customise, create your own inventory." : (props.inventory.length === 1 ? "You are using a custom inventory consisting of 1 segment." : "You are using a custom inventory consisting of "+props.inventory.length+" segments.")}
        </div>
    </header>
)