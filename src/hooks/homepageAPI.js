import { useReducer, useEffect } from "react";
import { initialState, homeReducer } from "../reducers/homeReducer";

function useHomepageAPI() {
    const [state, dispatch] = useReducer(homeReducer, initialState);
    const {title, name, page} = state;

    //getting titles
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


    return {state, dispatch};
}

export default useHomepageAPI;