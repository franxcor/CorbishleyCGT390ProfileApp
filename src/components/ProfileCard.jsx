import PropTypes from 'prop-types';

const ProfileCard = ({img, Name, Email, title}) => {
    return (
        <div className="profileCard" style={ProfileCardStyle.body}>
            <div className = "profileImgContainer" style={ProfileCardStyle.profileImgContainer}>
                <img src={img} alt={Name} style={ProfileCardStyle.profileImg}/>
            </div>
            <div className = "profileInfoContainer">
                <h2 style={ProfileCardStyle.name}>{Name}</h2>
                <p>{title} <br></br> {Email}</p>
            </div>
            
         </div>
    );
}

ProfileCard.propTypes = {
    Name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,

}


export default ProfileCard;

const ProfileCardStyle = {
    body: {
        backgroundColor: 'lightpink',
        padding: '25px',
        width: '200px',
        paddingBottom: '10px',
        borderRadius: '25px',
        marginRight: '50px',

    },
    profileImg: {
        width: '200px',
    },
    name: {
        color: 'black',
        position: 'relative',
    }
}