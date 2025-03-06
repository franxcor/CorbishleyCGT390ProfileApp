export const initialState = {
    titles: [],
    title: "",
    name: "",
    profiles: [],
    page: 1,
    count: 0,
}

export const homeReducer = (state, action) => {
    switch (action.type) {
        case "SET_TITLES":
            return {
                ...state,
                titles: action.payload,
            };
        case "SET_TITLE": 
            return {
                ...state,
                title: action.payload,
                page: 1, 
            }
        case "SET_NAME" :
            return {
                ...state,
                name: action.payload,
                page: 1,
            }
        case "FETCH_DATA" : {
            return {
                ...state,
                profiles: action.payload.profiles,
                count: action.payload.count,
                page: action.payload.page
            }
        }
        case "CLEAR_FILTERS" : {
            return {
                ...state,
                title: "",
                search: "",
                page: 1,
            }
        }
        case "SET_PAGE" : {
            return {
                ...state,
                page: action.payload,
            }
        }
        default : 
            return state;
    }
}
