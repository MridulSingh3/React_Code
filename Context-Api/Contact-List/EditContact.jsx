import React, { useContext, useState, useEffect } from 'react'
import { ContactContext } from '../Context/CreateContext'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EditContact = () => {
    const { state, dispatch } = useContext(ContactContext);
    const navigator = useNavigate();
    const { id } = useParams();
    const personData = state.Contacts.find((person) => person.id == id);
    const [form, setForm] = useState({
        name: "",
        phone_no: ""
    });

    useEffect(() => {
        if (personData) {
            setForm({
                name: personData.name,
                phone_no: personData.phone_no
            })
        }
    }, [personData]);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }



    function handleSubmit(e) {
        e.preventDefault();

        dispatch({
            type: "EDIT",
            payload: {
                id: id,
                name: form.name,
                phone_no: form.phone_no
            }
        });

        navigator('/');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name='name'
                    placeholder='Enter your name'
                    value={form.name}
                    onChange={handleChange} />

                <br /><br />

                <input type="text"
                    name='phone_no'
                    placeholder='Enter your phone'
                    value={form.phone_no}
                    onChange={handleChange} />

                <br /><br />

                <button type='submit'>Update</button>
            </form>

        </div>
    )
}

export default EditContact
