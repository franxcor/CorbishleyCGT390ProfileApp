import { useState, useEffect, useReducer, useRef, useLayoutEffect } from 'react'
import ProfileCard from '../components/ProfileCard.jsx'
import '../styles/App.css'
import Wrapper from '../components/Wrapper.jsx'
import { Link } from 'react-router-dom';
import useHomepageAPI from '../hooks/homepageAPI.js';

function HomePage() {
  const {state, dispatch} = useHomepageAPI();
  const {titles, title, page, name, profiles, count} = state;
  const [zoom, setZoom] = useState(1);
  const divRef = useRef();

  useLayoutEffect(() => {
    if (divRef.current.clientWidth > 1000) {
      setZoom(1.5)
    }
  }, []);

  const handleTitleChange = (event) => {
    dispatch({type: "SET_TITLE", payload: event.target.value})

  };

  const handleNameChange = (event) => {
    dispatch({type: "SET_NAME", payload: event.target.value})

  }

  const handleClear = () => {
    dispatch({type: "CLEAR_FILTERS"})
  }

  return (
      <Wrapper>
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

        <div ref={divRef} className = "profileCardContainer" style={appStyle.profileCards}>

          {profiles.map((profile) => (
            <Link to={`/profile/${profile.id}`} key={profile.id}>
            <ProfileCard {...profile} zoom={zoom} />
            </Link>
          
          ))} 

        </div>
        {
          count === 0 && <p>No Profiles Found !</p>
        }
        { count > 10 &&  <div className="pagination">
          <button onClick={() => dispatch({type: "SET_PAGE", payload: page-1})} disabled={page === 1} > 
            <span className="sr-only">Prev</span> </button>
          <button onClick={() => dispatch({type: "SET_PAGE", payload: page + 1})} disabled={page >= Math.floor(count/limit)}><span className="sr-only">Next</span>  </button>
        </div>
        }
        
      </Wrapper>
  )
}

export default HomePage;

const appStyle = {
  profileCards : {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '400px',
  }
}