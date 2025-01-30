import PropTypes from 'prop-types';
import style from '../styles/card.module.css';

const ProfileCard = ({img, Name, Email, title, animate, updateAnimate, darkMode}) => {
    return (
        <div className={`${animate ? style["is-entering"] : "" }`}
        onAnimationEnd={updateAnimate}>
            <div className={`${style["profileImgContainer"]} ${darkMode ? style["darkMode"] : ""}`}>
                <img src={img} alt={Name} className={style.profileImg}/>
                <div className ={style["profileInfoContainer"]}>
                    <h2 className ={style.profileName}>{Name}</h2>
                    <p>{title} <br></br> {Email}</p>
                </div>
            </div>
            
         </div>
    );
};

ProfileCard.propTypes = {
    Name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,

}


export default ProfileCard;
