import { useState, useRef, useLayoutEffect, useCallback, useMemo } from 'react'
import ProfileCard from '../components/ProfileCard.jsx'
import '../styles/App.css'
import Wrapper from '../components/Wrapper.jsx'
import { Link } from 'react-router-dom';
import useHomepageAPI from '../hooks/homepageAPI.js';
import Filters from '../components/Filters.jsx';

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

  const handleTitleChange = useCallback((event) => {
    dispatch({type: "SET_TITLE", payload: event.target.value})

  }, []);

  const handleNameChange = useCallback((event) => {
    dispatch({type: "SET_NAME", payload: event.target.value})

  }, []);

  const handleClear = useCallback(() => {
    dispatch({type: "CLEAR_FILTERS"})
  }, []);

  const titlesValue = useMemo(() => titles, [titles]);

  return (
      <Wrapper>
        <Filters
        titles={titlesValue}
        title={title}
        name = {name}
        handleTitleChange={handleTitleChange}
        handleNameChange = {handleNameChange}
        handleClear = {handleClear}
        />
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