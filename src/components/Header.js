import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import GoogleAuth from './auth/GoogleAuth'

const Header = ({ user }) => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">Home</Link>
            <div className="item header">{user === null ? '' : `${user.name}`}</div>
           <div className="right menu">
            <Link to="/"  className="item">Main menu</Link>
            <Link to="/streams/new"  className="item">new stream</Link>
            <Link to="/streams/show"  className="item">show stream</Link>
            <GoogleAuth />
           </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { user: state.auth.user }
}

export default connect(mapStateToProps)(Header)

// import React from 'react';
// import { Link } from 'react-router-dom';
// import GoogleAuth from './GoogleAuth';

// const Header = () => {
//   return (
//     <div className="ui secondary pointing menu">
//       <Link to="/" className="item">
//         Streamy
//       </Link>
//       <div className="right menu">
//         <Link to="/" className="item">
//           All Streams
//         </Link>
//         <GoogleAuth />
//       </div>
//     </div>
//   );
// };

// export default Header;
