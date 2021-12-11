import { useState } from 'react';

const AddNote = ({handleAddNote}) => {

    const [noteText,setNoteText] = useState('');
    const characterLimit = 200;

    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >=0){
            setNoteText(event.text.target.value);
        }
         
    };

    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }
        
    };

    return (
        <div className='note new'>
            <textarea 
               rows='8'
               cols='30'
               placeholder='Type to add a note...'
               value={noteChange}
               onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className='save'onClick={handleSaveClick}>Save</button>
            </div>


        </div>
    );
};

export default AddNote;