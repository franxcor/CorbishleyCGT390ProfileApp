import React from 'react'

const Navbar = () => {
    return (
        <div style={navbarStyles.navBarDiv}>
            <a href="#" style={ navbarStyles.links}>Home</a>
            <a href="#"  style={ navbarStyles.links}>About</a>
            <a href="#"  style={ navbarStyles.links}>About</a>
        </div>
    );
};
export default Navbar;


const navbarStyles = {
    links : {
        color: 'black',
        fontSize: '16px',
        marginLeft: '40px'
    },
    navBarDiv : {
        backgroundColor: 'lightpink',
        width: '100%',
        padding: '25px', 
    },
};