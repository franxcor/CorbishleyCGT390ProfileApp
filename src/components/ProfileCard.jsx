import PropTypes from 'prop-types';
import style from '../styles/card.module.css';
import { memo, useContext, useEffect, useRef} from 'react';
import { useSelector } from 'react-redux';

const ProfileCard = memo(({image_url, name, email, title}) => {
    const mode = useSelector((state => state.mode.mode));
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
                    <h2 className ={style.profileName}>{name}</h2>
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
