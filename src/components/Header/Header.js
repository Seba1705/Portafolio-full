import React, { Component } from 'react';
import { Link } from "react-router-dom";
import M from 'materialize-css';
import './header.css';
import Slider from '../Slider/Slider'

export default class Header extends Component {

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems);
        });
        console.log(instance);
    }

    render() {
        return (
            <header>
                <nav>
                    <div className="nav-wrapper black">
                        <a href="#!" className="brand-logo" id='logo' >Sebastián Aguirre
                        
                        </a>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            
                            <li><Link className='link' to='About'>About</Link></li>
                            <li><Link className='link' to='Home'>Home</Link></li>
                            <li><Link className='link' to='Home'>Home</Link></li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                    <li>
                        <Link className='link' to='About'>About</Link></li>
                        <li><Link className='link' to='Home'>Home</Link></li>
                        <li><Link className='link' to='Home'>Home</Link></li>
                </ul>

                <Slider/>
            </header>
        )
    }
}