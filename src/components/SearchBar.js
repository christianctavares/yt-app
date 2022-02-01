import React, { useState } from 'react';

function SearchBar({onFormSubmit}) {
    const [term, setTerm] = useState('');
    
    const onSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(term) 
    }

    return (
        <div className='search-bar ui segment'>
            <form onSubmit={onSubmit} className='ui form'>
                <div className='field'>
                    <label>Search for a videos</label>
                    <input
                        placeholder='Search a video'
                        type="text"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;