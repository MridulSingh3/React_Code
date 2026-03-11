import React, { useEffect, useState } from 'react'
import axios from 'axios'

const RandomUser = ({ api }) => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refresh, setRefresh] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);

    async function fetchUser() {
        setLoading(true);
        setError(null);
        try {
            const res = await axios.get(api);
            setUsers(res.data.results);
        } catch (err) {
            setError("Failed to load users. Please try again.");
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            fetchUser();
        }, 1200);
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

        <div className="wrapper">
            <h1 className="heading">🌟 Random User Profiles</h1>

            <button className="refreshBtn" onClick={() => setRefresh(Date.now())}>
                🔄 Refresh Users
            </button>

            {loading ? (<h2 style={{ textAlign: "center" }}>Loading Users...</h2>) : (<div className="container">

                {users.map((user, index) => (

                    <div className="card" key={index}>

                        <div className="imgBox">
                            <img src={user.picture.large} alt="" />
                        </div>

                        <div className="content">

                            <h2>
                                {user.name.first} {user.name.last}
                            </h2>

                            <p className="email">
                                {user.email}
                            </p>

                            <p className="country">
                                🌍 {user.location.country}
                            </p>

                        </div>
                        <div className="showMoreWrapper">
                            <button className="showMoreBtn" onClick={() => setSelectedUser(user)}>
                                Show More
                            </button>
                        </div>

                    </div>

                ))}
                {selectedUser && (
                    <div className="userDetailsOverlay">

                        <div className="userDetailsCard">

                            <img
                                src={selectedUser.picture.large}
                                alt=""
                                className="detailAvatar"
                            />

                            <h2 className="detailName">
                                {selectedUser.name.first} {selectedUser.name.last}
                            </h2>

                            <div className="detailInfo">

                                <p><span>Email:</span> {selectedUser.email}</p>

                                <p><span>Phone:</span> {selectedUser.phone}</p>

                                <p><span>City:</span> {selectedUser.location.city}</p>

                                <p><span>Country:</span> {selectedUser.location.country}</p>

                                <p><span>Age:</span> {selectedUser.dob.age}</p>

                            </div>

                            <button
                                className="closeBtn"
                                onClick={() => setSelectedUser(null)}
                            >
                                Close
                            </button>

                        </div>

                    </div>
                )}

            </div>)
            }

        </div >
    )
}

export default RandomUser