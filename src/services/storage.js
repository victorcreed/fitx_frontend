import {AsyncStorage} from "react-native";

async function getFavourites() {
    let favourites = [];
    try {
        const value = await AsyncStorage.getItem('favourites');
        if (value !== null) {
            favourites = JSON.parse(value);
        }

        return favourites;

    } catch (error) {
        throw error;
    }
}

async function setFavourites(data) {
    try {
        const value = await AsyncStorage.setItem('favourites', JSON.stringify(data));

        return value;

    } catch (error) {
        throw error;
    }
}

async function getToken() {
    try {
        const value = await AsyncStorage.getItem('authToken');

        return value;

    } catch (error) {
        throw error;
    }
}


async function setToken(token) {
    try {
        const authToken = await AsyncStorage.setItem('authToken', token);
        return authToken;

    } catch (error) {
        throw error;
    }
}

const StorageService = {
    getFavourites, setFavourites, getToken, setToken
};
export default StorageService;