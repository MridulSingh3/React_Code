import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ProductStore = ({ api }) => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refresh, setRefresh] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);

    async function fetchProduct() {
        setLoading(true);
        setError(null);
        try {
            const product = await axios.get(api);
            setProduct(product.data);
        } catch (err) {
            setError("Failed to load users. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchProduct();
        }, 1200)
        return () => clearTimeout(timer);
    }, [api, refresh])

    if (error) {
        return (
            <div className="errorBox">
                <h1 className="errorText">{error}</h1>
                <button className="retryBtn" onClick={fetchUser}>
                    Retry
                </button>
            </div>
        )
    }
    return (
        <>
            <h1 className="title">Product App</h1>
            <button className="refreshBtn" onClick={() => setRefresh(Date.now())}>
                🔄 Refresh Users
            </button>

            {loading ? (<h2 style={{ textAlign: "center" }}>Loading Users...</h2>) : (
                <div className="product-container">
                    {
                        product.map((prod) => (
                            <div className="card" key={prod.id}>

                                <div className="imgBox">
                                    <img src={prod.image} alt="" />
                                </div>

                                <div className="content">
                                    <h3>₹ {prod.price}</h3>
                                    <p>⭐ {prod.rating.rate}</p>
                                </div>

                                <button className="btn" onClick={() => setSelectedProduct(prod)}>Show More</button>

                            </div>
                        ))
                    }
                    {selectedProduct && (
                        <div className="modal">
                            <div className="modal-content">

                                <img src={selectedProduct.image} />

                                <h2>{selectedProduct.title}</h2>

                                <p>Price: ₹{selectedProduct.price}</p>

                                <p>Rating: ⭐{selectedProduct.rating.rate}</p>

                                <button onClick={() => setSelectedProduct(null)}>
                                    Close
                                </button>

                            </div>
                        </div>
                    )}
                </div >
            )}
        </>
    )
}

export default ProductStore