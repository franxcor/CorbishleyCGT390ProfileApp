import { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../styles/App.css'
import Wrapper from '../components/Wrapper.jsx'
import ProfileForm from '../components/ProfileForm.jsx'
import { AuthContext } from '../contexts/AuthContext.jsx'


const ProfileDetails = () => {
  const [mode, setMode] = useState(false);
  const {id} = useParams();
  const [profileData, setProfileData] = useState(null);
  const {isLogin} = useContext(AuthContext)
  useEffect(() => {
    console.log(id);
    fetch(`https://web.ics.purdue.edu/~fcorbish/CGT390ProfileApp/fetch-data-with-id.php?id=${id}`)
    .then((res) => res.json())
    .then((data) => {setProfileData(data)})
  }, [id])

  
  return (
      <Wrapper mode={mode}>
        {!profileData ? (
            <p>Loading...</p>
        ) : (
            <div>
                <h1>Profile Information of {profileData.name} </h1>
                <p> <a href={`mailto:${profileData.email}`}>{profileData.email}</a> </p>
                <p>{profileData.bio}</p>
                <img src={profileData.image_url} alt={profileData.name} />
                <p> &nbsp; </p>
                {isLogin && <Link to="edit"> Edit Profile </Link> }
                <p> &nbsp; </p>
            </div>
            
        )}
        
      </Wrapper>
  )
}

export default ProfileDetails;