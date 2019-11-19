import StorageService from "../../services/storage";
import * as actions from "../actions";

const initialState = {
    authToken: "ss",
};

export default function auth(state = initialState, action = {}) {

    switch (action.type) {

        case actions.TOKEN_ADD: {
            const newState = {
                ...state,
                authToken: action.payload
            };
            StorageService.setToken(newState.authToken);
            return newState;

        }

        case actions.TOKEN_REMOVE: {
            const newState = {
                ...state,
                authToken: ""
            };
            StorageService.setToken(newState.authToken);
            return newState;
        }

        default:
            return state;

    }
}

