import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const NoteApp = ({ notes, setNotes }) => {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const navigate = useNavigate();

    function handleSave() {

        const noteObj = {
            title: title,
            text: text
        }

        setNotes([...notes, noteObj]);

        setTitle('');
        setText('');
        navigate('/notes');
    }

    return (
        <>
            <h1 className="title">Note App</h1>

            <div className="note-container">
                <input
                    className="note-input"
                    type="text"
                    placeholder="Enter your title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    className="note-textarea"
                    placeholder="Enter your note"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                <button className="save-btn" onClick={handleSave}>
                    Submit
                </button>
            </div>
        </>
    )
}

export default NoteApp