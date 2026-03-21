import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { ProductContext } from '../context/ContextProduct';
import { toast } from 'react-toastify';

const Home = () => {
    const [product, setProduct] = useState([]);

    const { wishlist, addWishlist, removeWishlist } = useContext(ProductContext);

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get("https://dummyjson.com/products");
            setProduct(res.data.products);
        }
        fetchData();
    }, []);

    function toggleWishlist(pro) {
        const exists = wishlist.find(item => item.id === pro.id);

        if (exists) {
            removeWishlist(pro.id);
        } else {
            addWishlist(pro);
            toast.success("💖 Product Added to Wishlist", {
                position: "top-center",   // ✅ center top
                autoClose: 1800,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,

                style: {
                    background: "rgba(20,20,20,0.9)",
                    color: "#fff",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "14px",
                    padding: "14px 20px",
                    fontWeight: "500",
                    fontSize: "14px",
                    boxShadow: "0 0 20px rgba(255,0,150,0.4)"
                },

                progressStyle: {
                    background: "linear-gradient(90deg, #ff00ff, #00f5ff)"
                },

                icon: "✨",

                className: "custom-toast"
            });
        }
    }

    return (
        <div className="home">

            <div className="product-container">
                {
                    product.map((pro) => {

                        const isLiked = wishlist.some(item => item.id === pro.id);

                        return (
                            <div className="card" key={pro.id}>

                                <div className="img-box">
                                    <img src={pro.thumbnail} alt="" />

                                    <div
                                        className="heart"
                                        onClick={() =>
                                            toggleWishlist(pro)
                                        }
                                    >
                                        <FontAwesomeIcon
                                            icon={isLiked ? solidHeart : regularHeart}
                                        />
                                    </div>
                                </div>

                                <div className="card-content">
                                    <h3>{pro.title}</h3>
                                    <p>₹{pro.price}</p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;