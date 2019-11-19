export const FAVOURITE_ADD = "favourite/add";
export const FAVOURITE_REMOVE = "favourite/remove";
export const FAVOURITE_SET = "favourite/set";

export const TOKEN_ADD = "token/add";
export const TOKEN_REMOVE = "token/remove";

export function addFavourite(data) {
    return (dispatch) => {
        dispatch({
            type: FAVOURITE_ADD,
            payload: data,
        })
    };
}

export function removeFavourite(data) {
    return (dispatch) => {
        dispatch({
            type: FAVOURITE_REMOVE,
            payload: data,
        })
    };
}

export function setFavourite(data) {
    return (dispatch) => {
        dispatch({
            type: FAVOURITE_SET,
            payload: data,
        })
    };
}

export function addToken(token) {
    return (dispatch) => {
        dispatch({
            type: TOKEN_ADD,
            payload: token,
        })
    };
}


export function removeToken() {
    return (dispatch) => {
        dispatch({
            type: TOKEN_REMOVE,
        })
    };
}