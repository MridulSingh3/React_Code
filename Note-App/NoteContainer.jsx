import React from 'react'

const NoteContainer = ({ notes }) => {
    return (
        <>
            <h1 className="notes-title">Your Notes</h1>

            <div className="notes-container">
                {
                    notes.map((note, index) => (
                        <div className="note-card" key={index}>
                            <h2>{note.title}</h2>
                            <p>{note.text}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default NoteContainer