import StorageService from "../../services/storage";
import * as actions from "../actions";

const initialState = {
    favourites: [],
};

export default function favourite(state = initialState, action = {}) {

    switch (action.type) {

        case actions.FAVOURITE_ADD: {
            const newState =  {
                ...state,
                favourites: [...state.favourites, action.payload]
            };
            StorageService.setFavourites(newState.favourites);
            return newState;

        }

        case actions.FAVOURITE_REMOVE: {
            const newState =  {
                ...state,
                favourites: state.favourites.filter(t => t.policy_id !== action.payload.policy_id)
            };
            StorageService.setFavourites(newState.favourites);
            return newState;
        }

        case actions.FAVOURITE_SET:
            return {
                ...state,
                favourites: action.payload
            };

        default:
            return state;

    }

}
