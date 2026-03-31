import React from 'react'
import { useContext } from 'react';
import { ContactContext } from '../Context/CreateContext';
import { useNavigate } from 'react-router-dom';

const ShowContact = ({ contact, setContact }) => {
    const navigate = useNavigate();

    const { state, dispatch } = useContext(ContactContext);

    function handleAdd() {
        navigate('/add');
    }
    function handleEdit(id) {
        navigate(`/edit/${id}`);
    }
    return (
        <div>
            <h1>Contact List</h1>

            <button onClick={handleAdd}>Add Contact</button>

            {
                state.Contacts.map((person) => (
                    <div key={person.id}>
                        <h3>{person.name}</h3>
                        <h3>{person.phone_no}</h3>

                        <button onClick={() => dispatch({ type: "DELETE", payload: person.id })}>Delete</button>
                        <button onClick={() => handleEdit(person.id)}>Edit</button>
                    </div>
                )
                )
            }
        </div>
    )
}

export default ShowContact
