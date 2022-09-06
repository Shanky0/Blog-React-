
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogDetail } from '../App';

const Navbar = () => {
    const { logged, write, setWrite } = BlogDetail();
    const [nav, setNav] = useState('none');
    return (
        <>
            <div id='navContainer'>
                <div id='logo'>
                    <Link to={'/'}><h2> Blogs</h2></Link>
                </div>
                <nav >
                    <ul id="navList">
                        <Link to={'/'}> <li className='navItems'>Home </li></Link>
                        {logged.id >= 1 && <li className='navItems' onClick={() => setWrite({ open: !write.open, data: null })}>Write</li>}
                        {logged.id === 0 && <Link to={'/register'}><li className='navItems'>Register</li></Link>}
                        {logged.id === 0 && <Link to={'/login'}><li className='navItems'>Login</li></Link>}
                        {logged.id >= 1 && <li className='navItems'>Logout</li>}
                        {logged.id >= 1 && <li id='navProfile' className='navItems'>
                            <img src='https://thumbs.dreamstime.com/b/histoire-d-une-personne-r%C3%A9ussie-et-pleine-espoir-125798080.jpg' alt='user Profile' />
                            <span> {logged.user}</span>
                        </li>}
                    </ul>
                </nav>


                <i className="fa-solid fa-bars" onClick={() => setNav(nav === 'none' ? 'block' : 'none')} />
                <div style={{ display: `${nav}`,position:"absolute",top:"10vh",right:"0%"}}>
                    <ul id="navListMob">
                        <Link to={'/'}> <li className='navItems'>Home </li></Link>
                        {logged.id >= 1 && <li className='navItems' onClick={() => setWrite({ open: !write.open, data: null })}>Write</li>}
                        {logged.id === 0 && <Link to={'/register'}><li className='navItems'>Register</li></Link>}
                        {logged.id === 0 && <Link to={'/login'}><li className='navItems'>login</li></Link>}
                        {logged.id >= 1 && <li className='navItems'>Logout</li>}
                        {logged.id >= 1 && <li id='navProfile' className='navItems'>
                            <img src='https://thumbs.dreamstime.com/b/histoire-d-une-personne-r%C3%A9ussie-et-pleine-espoir-125798080.jpg' alt='user Profile' />
                            <span> {logged.user}</span>
                        </li>}
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Navbar