import React, { useContext } from 'react';
import { ContextApi } from '../context/ContextApi';
import NavListItem from './NavListitem';


const Sidebar = () => {
    const { notes, readNote, handleFetchNote } = useContext(ContextApi);
    return (
        <div className="Home_Sidebar">
            <div className="btns">
                <button type="button" onClick={handleFetchNote}>
                    <span>Refresh</span>
                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                        <path
                            d="M370.7 133.3C339.5 104 298.9 88 255.8 88c-77.5 .1-144.3 53.2-162.8 126.9-1.3 5.4-6.1 9.2-11.7 9.2H24.1c-7.5 0-13.2-6.8-11.8-14.2C33.9 94.9 134.8 8 256 8c66.4 0 126.8 26.1 171.3 68.7L463 41C478.1 25.9 504 36.6 504 57.9V192c0 13.3-10.7 24-24 24H345.9c-21.4 0-32.1-25.9-17-41l41.8-41.7zM32 296h134.1c21.4 0 32.1 25.9 17 41l-41.8 41.8c31.3 29.3 71.8 45.3 114.9 45.3 77.4-.1 144.3-53.1 162.8-126.8 1.3-5.4 6.1-9.2 11.7-9.2h57.3c7.5 0 13.2 6.8 11.8 14.2C478.1 417.1 377.2 504 256 504c-66.4 0-126.8-26.1-171.3-68.7L49 471C33.9 486.1 8 475.4 8 454.1V320c0-13.3 10.7-24 24-24z" />
                    </svg>
                </button>
            </div>
            <ul className="notes_list" id="notes_list">
                {/* Notes will be added dynamically here */}
                <NavListItem notes={notes} readNote={readNote} />
            </ul>
        </div>
    )
}

export default Sidebar