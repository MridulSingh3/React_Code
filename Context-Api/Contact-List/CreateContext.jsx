import React, { useReducer } from 'react'
import { createContext } from 'react';

const initialState = {
    Contacts: []
}
export const ContactContext = createContext();

function generateId() {
    return Date.now() + Math.random().toString(36).substr(2, 9);
}

function reduce(state, action) {
    switch (action.type) {
        case "ADD":
            const newContact = {
                id: generateId(),
                name: action.payload.name,
                phone_no: action.payload.phone_no
            }
            return {
                ...state,
                Contacts: [...state.Contacts, newContact]
            }
        case "DELETE":
            return {
                ...state,
                Contacts: state.Contacts.filter((person) => person.id !== action.payload)
            }
        case "EDIT":
            return {
                ...state,
                Contacts: state.Contacts.map((person) => person.id === action.payload.id ? { ...person, ...action.payload } : person)
            }
        default:
            return state;
    }
}
export const ContactProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reduce, initialState);

    return (
        <ContactContext.Provider value={{ state, dispatch }}>
            {children}
        </ContactContext.Provider>
    )
}
