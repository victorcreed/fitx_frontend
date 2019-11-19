import {Navigation} from 'react-native-navigation';
import {Hotel, Profile, Explore, Messages} from './pages';

import {MainHeader} from './components';

// register all screens of the app (including internal ones)
export function registerScreens(Provider, store) {
    Navigation.registerComponentWithRedux('smartStay.Hotel', () => Hotel, Provider, store);
    Navigation.registerComponentWithRedux('smartStay.Profile', () => Profile, Provider, store);
    Navigation.registerComponentWithRedux('smartStay.Explore', () => Explore, Provider, store);
    Navigation.registerComponentWithRedux('smartStay.Messages', () => Messages, Provider, store);
    Navigation.registerComponentWithRedux('smartStay.MainHeader', () => MainHeader, Provider, store);
}