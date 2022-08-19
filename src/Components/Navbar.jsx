import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ logged, setlogged }) => {

    return (
        <>
            <div id='navContainer'>
                <div id='logo'>
                    <Link to={'/'}><h2> Blogs</h2></Link>
                </div>
                <nav >
                    <ul id="navList">
                        <Link to={'/'}> <li id='navItems'>Home </li></Link>
                        {logged && <Link to={'/write'}><li id='navItems'>Write</li></Link>}
                        {logged ? "" : <Link to={'/register'}><li id='navItems'>Register</li></Link>}
                        {logged ? "" : <Link to={'/login'}><li id='navItems'>login</li></Link>}
                        {logged ? <Link to={'/'}><li id='navItems'>Logout</li></Link> : ""}
                        {logged && <li id='navProfile'>
                            <img src='https://thumbs.dreamstime.com/b/histoire-d-une-personne-r%C3%A9ussie-et-pleine-espoir-125798080.jpg' alt='user Profile' />
                            <span> User</span>
                        </li>}
                    </ul>

                </nav>


            </div>
        </>
    )
}

export default Navbar