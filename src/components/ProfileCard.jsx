import PropTypes from 'prop-types';
import style from '../styles/card.module.css';
import { ModeContext } from '../contexts/ModeContext';
import { memo, useContext, useEffect, useRef} from 'react';

const ProfileCard = memo(({image_url, search, email, title}) => {
    const {mode} = useContext(ModeContext);
    const renderCounter = useRef(0);
    useEffect(() => {
        renderCounter.current = renderCounter.current + 1;
        console.log("card Rendered:", renderCounter.current);
    })
    return (
        <div 
        className={`${style["profileCard"]} ${style["is-entering"]} ${mode === "dark" ? style["darkMode"] : ""}`}>
            <div className={`${style["profileImgContainer"]} ${mode === "dark" ? style["darkMode"] : ""}`}>
                <img src={image_url} alt={name} className={style.profileImg}/>
                <div className ={style["profileInfoContainer"]}>
                    <h2 className ={style.profileName}>{search}</h2>
                    <p>{title} <br></br> {email}</p>
                </div>
            </div>
            
         </div>
    );
});

ProfileCard.propTypes = {
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,

}


export default ProfileCard;
