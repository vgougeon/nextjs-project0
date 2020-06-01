import React, { Component } from 'react';
import Link from 'next/link';
import Icon from '../elements/icon/icon';
import Avatar from '../elements/avatar/avatar';
import Logo from '../elements/logo/logo';
class Header extends Component {
    render() { 
        return (   
            <header>
                <div class="header-container">
                <div className="flex">
                <div id="logo">
                    <Logo />
                </div>
                
                <nav className="flex items-center">
                    <Link href="/"><a className="ml-5">Home</a></Link>
                    <Link href="/"><a className="ml-5">Games</a></Link>
                    <Link href="/create/game"><a className="ml-5">New game</a></Link>
                </nav>
                </div>
                
                <div className="flex items-center">
                    <Link href="/profile"><a className="profile flex items-center">
                        <div className="flex flex-col items-end">
                        <span className="ml-2 font-semibold leading-none">Njak</span>
                        <span className="ml-2 font-light leading-none text-sm opacity-75">Mon profil</span>
                        </div>
                        <Avatar size="42px" className="mx-2"/>
                    </a></Link>
                </div>
                </div>
            </header>
        );
    }
}
 
export default Header;