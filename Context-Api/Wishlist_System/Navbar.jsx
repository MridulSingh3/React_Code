import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ContextProduct';


const Navbar = () => {

    const { wishlist } = useContext(ProductContext);

    return (
        <nav className="navbar">

            <div className="logo">ShopSphere</div>

            <div className="nav-links">

                <Link to="/" className="nav-item">
                    Home
                </Link>

                <Link to="/whislist" className="nav-item wishlist-link">
                    Wishlist

                    <span className="badge">
                        {wishlist.length}
                    </span>
                </Link>

            </div>

        </nav>
    )
}

export default Navbar