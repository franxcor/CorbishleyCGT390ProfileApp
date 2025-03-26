import {useRef, useEffect, memo} from 'react';


const Filters = memo(({title, titles, name, handleTitleChange, handleNameChange, handleClear}) => {

    const renderCounter = useRef(0);
    useEffect(() => {
        renderCounter.current = renderCounter.current + 1;
    })

    return (
        <>
            <div className="filter-wrapper" style={{display: 'flex', justifyContent: 'center'}}>
                <div className="filter-select" style={{padding: '15px'}}>
                    <label htmlFor='title-select'>Select a Title:</label>
                    <select id="title-select" onChange={handleTitleChange} value={title}>
                    <option value=""> ALL </option>
                    {titles.map((title)=> (<option key={title} value={title}>{title}</option>))}
                    </select>
                </div>
                <div className="filter-search" style={{padding: '15px'}}>
                    <label htmlFor='name-search'>Search by Name:</label>
                    <input onChange={handleNameChange} placeholder='search for a name' value={name}/>
                </div>
                    <button onClick={handleClear} style={{margin: '15px', padding: '5px'}}> Clear </button>
                    </div>

                    
        </>
    )
});

export default Filters;