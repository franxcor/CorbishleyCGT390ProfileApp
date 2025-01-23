
// using to replace other divs
const Wrapper = ({children}) => {
    return <div className = "section"> <div className = "container"> {children} </div> </div>
}

export default Wrapper;