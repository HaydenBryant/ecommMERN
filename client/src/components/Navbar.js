import React, { Component } from 'react';

class Navbar extends Component {

    render() {
        return (
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">Logo</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="equipment.html">Equipment</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="cart.html">Cart</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;