import React, { useContext } from 'react';
import { ProductContext } from '../context/ContextProduct';


const Wishlist = () => {
    const { wishlist, removeWishlist } = useContext(ProductContext);

    return (
        <div className="wishlist-page">

            <h2 className="wishlist-title">❤️ My Wishlist</h2>

            {
                wishlist.length === 0 ? (
                    <div className="empty">
                        <h3>No items in wishlist 😢</h3>
                        <p>Start adding products you love!</p>
                    </div>
                ) : (
                    <div className="wishlist-container">
                        {
                            wishlist.map((pro) => (
                                <div className="wish-card" key={pro.id}>

                                    <div className="wish-img">
                                        <img src={pro.thumbnail} alt="" />
                                    </div>

                                    <div className="wish-content">
                                        <h4>{pro.title}</h4>
                                        <p>₹{pro.price}</p>

                                        <button
                                            className="remove-btn"
                                            onClick={() => removeWishlist(pro.id)}
                                        >
                                            Remove ❌
                                        </button>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                )
            }

        </div>
    )
}

export default Wishlist;