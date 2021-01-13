import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from './auth/GoogleAuth'

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item" />
           <div className="right menu">
            <Link to="/"  className="item">Main menu</Link>
            <Link to="/streams/new"  className="item">new stream</Link>
            <Link to="/streams/edit"  className="item">edit stream</Link>
            <Link to="/streams/delete"  className="item">delete stream</Link>
            <Link to="/streams/show"  className="item">show stream</Link>
            <GoogleAuth />
           </div>
        </div>
    )
}

export default Header