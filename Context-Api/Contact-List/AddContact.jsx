import React, { useContext, useState } from 'react'
import { ContactContext } from '../Context/CreateContext'
import { useNavigate } from 'react-router-dom';

const AddContact = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useContext(ContactContext);

    const [form, setForm] = useState({
        name: "",
        phone_no: ""
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault();

        dispatch({
            type: "ADD",
            payload: {
                name: form.name,
                phone_no: form.phone_no
            }
        })
        navigate('/')
    }



    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input type="text"
                    name='name'
                    placeholder='Enter Your name'
                    value={form.name} onChange={handleChange} />
                <br /><br />

                <input type="text"
                    name='phone_no'
                    placeholder='Enter Your phone_no'
                    value={form.phone_no}
                    onChange={handleChange} />

                <br /><br />

                <button type='submit'>Add</button>
            </form>

        </div>
    )
}

export default AddContact
