import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = (props) => (
    <header>
        <div id="logo">
            <h1 class="program_name">PhonProcessər</h1>
        </div>
        <nav>
            <ul>
                <li><NavLink to='/' exact activeClassName="active_link">Home</NavLink></li>
                <li><NavLink to='/inventory' activeClassName="active_link">Create or modify the inventory</NavLink></li>
                <li><NavLink to='/processor' activeClassName="active_link">Processor</NavLink></li>
                <li><NavLink to='/compare' activeClassName="active_link">Compare</NavLink></li>
            </ul>
        </nav>
        <div id="show_inventory">
            {props.inventory.length === 0 ? "You are using all basic segments. To customise, create your own inventory." : (props.inventory.length === 1 ? "You are using a custom inventory consisting of 1 segment." : "You are using a custom inventory consisting of "+props.inventory.length+" segments.")}
        </div>
    </header>
)