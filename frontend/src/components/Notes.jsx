import { useContext, useEffect, useState } from 'react';
import { addNotes } from '../context/NotesFunction';
import { ContextApi } from '../context/ContextApi';

const Notes = () => {
    const { showNotes, setShowNotes, noteData, handleFetchNote } = useContext(ContextApi);

    const [data, setData] = useState({
        title: "",
        description: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const AddNote = async (e) => {
        e.preventDefault();
        await addNotes(data);
        data.title = data.description = "";
        handleFetchNote();
    }

    // Get all notes for the user
    useEffect(() => {
        handleFetchNote();
    }, []);

    return (
        <div className="Home_Note">
            {
                showNotes ? (
                    <div className="shownotes" id="shownotes">
                        <div className="pop-head">
                            <h2 id="noteHead">{noteData.title}</h2>
                            <svg onClick={() => setShowNotes(!showNotes)} id="CloseNote" xmlns="http://www.w3.org/2000/svg" height="16" width="11" viewBox="0 0 352 512">
                                <path
                                    d="M242.7 256l100.1-100.1c12.3-12.3 12.3-32.2 0-44.5l-22.2-22.2c-12.3-12.3-32.2-12.3-44.5 0L176 189.3 75.9 89.2c-12.3-12.3-32.2-12.3-44.5 0L9.2 111.5c-12.3 12.3-12.3 32.2 0 44.5L109.3 256 9.2 356.1c-12.3 12.3-12.3 32.2 0 44.5l22.2 22.2c12.3 12.3 32.2 12.3 44.5 0L176 322.7l100.1 100.1c12.3 12.3 32.2 12.3 44.5 0l22.2-22.2c12.3-12.3 12.3-32.2 0-44.5L242.7 256z" />
                            </svg>
                        </div>
                        <p id="noteText">{noteData.description}</p>
                    </div>) : (
                    <div className="popup" id="popup">
                        <div className="pop-head">
                            <p>Add a note</p>
                        </div>
                        <form>
                            <div className="row title">
                                <label htmlFor='title'>Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={data.title}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    placeholder="Enter Title"
                                    spellCheck="false"
                                    required
                                />
                            </div>
                            <div className="row description">
                                <label>Description</label>
                                <textarea
                                    id='description'
                                    name='description'
                                    value={data.description}
                                    onChange={handleChange}
                                    spellCheck="false"
                                    autoComplete='false'
                                    placeholder='Type here...'
                                    required
                                >
                                </textarea>
                            </div>
                            <button type='button' disabled={(data.description.trim().length || data.title.trim().length) != 0 ? false : true} onClick={AddNote}>Save</button>
                        </form>
                    </div>
                )
            }
        </div>
    )
}

export default Notes