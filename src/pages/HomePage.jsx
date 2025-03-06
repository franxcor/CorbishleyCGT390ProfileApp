import { useState, useEffect, useReducer } from 'react'
import ProfileCard from '../components/ProfileCard.jsx'
import '../styles/App.css'
import Wrapper from '../components/Wrapper.jsx'
import { Link } from 'react-router-dom';
import { homeReducer, initialState } from '../reducers/homeReducer.js';

function HomePage() {
  const [state, dispatch] = useReducer(homeReducer, initialState);
  const {titles, title, page, name, profiles, count} = state;
  /*
  const [titles, setTitles] = useState([]);
  const [title, setTitle] = useState("");
  const[page, setPage] = useState(1);
  const[name, setName] = useState("");
  const[profiles, setProfiles] = useState([]);
  const[count, setCount] = useState(1);
  */


/*
  useEffect(() => {
    fetch('https://web.ics.purdue.edu/~fcorbish/CGT390ProfileApp/fetch-data.php')
    .then((res) => res.json())
    .then((data) => {
      dispatch({type: "FETCH_PROFILES", payload: data.titles})
    });
  }, []);
  */
  
  useEffect(() => {
    fetch("https://web.ics.purdue.edu/~fcorbish/CGT390ProfileApp/get-titles.php")
    .then((res) => res.json())
    .then((data) => {
      //setTitles(data.titles);
      dispatch({type: "SET_TITLES", payload: data.titles})
    });
  }, []);

  useEffect(() => {
    fetch(
      `https://web.ics.purdue.edu/~fcorbish/CGT390ProfileApp/fetch-data-with-filter.php?title=${title}&name=${name}&page=${page}&limit=10`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "FETCH_DATA", payload: data });
      });
  }, [title, name, page]);

  const handleTitleChange = (event) => {
    dispatch({type: "SET_TITLE", payload: event.target.value})

  };

  const handleNameChange = (event) => {
    dispatch({type: "SET_NAME", payload: event.target.value})

  }

  const handleClear = () => {
    dispatch({type: "CLEAR_FILTERS"})
  }

  /*
  const filteredProfiles = profiles.filter((profile) => {
    return (title === "" || profile.title === title) && (profile.name.toLowerCase().includes(name.toLowerCase())); //one liner
  })
    */
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

        <div className = "profileCardContainer" style={appStyle.profileCards}>

          {profiles.map((profile) => (
            <Link to={`/profile/${profile.id}`} key={profile.id}>
            <ProfileCard {...profile}/>
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