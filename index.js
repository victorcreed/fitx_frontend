import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {store} from "./src/store";

//
// //add favourites from async storage to redux
// StorageService.getFavourites().then((response) => {
//     store.dispatch({type: actions.FAVOURITE_SET, payload: response})
//
// });
// //add token from async storage to redux
// StorageService.getToken().then((response) => {
//     store.dispatch({type: actions.TOKEN_ADD, payload: response})
// });

import {registerScreens} from './src/screens';

registerScreens(Provider, store); // this is where you register all of your app's screens

Navigation.events().registerAppLaunchedListener(() => {

    Navigation.setDefaultOptions({
        topBar: {
            visible: false
        },
        bottomTab: {
            // text: 'Tab 1',
            // badge: '2',
            // badgeColor: 'red',
            testID: 'bottomTabTestID',
            // icon: require('tab.png'),
            iconColor: '#969696',
            selectedIconColor: '#15AC96',
            textColor: '#969696',
            selectedTextColor: '#15AC96',
            fontFamily: 'Helvetica',
            fontSize: 10
        },
    });

    Navigation.setRoot({
        root: {
            bottomTabs: {
                children: [
                    {
                        stack: {
                            children: [{
                                component: {
                                    name: 'smartStay.Explore',
                                    passProps: {
                                        text: 'This is tab 1'
                                    }
                                }
                            }],
                            options: {
                                bottomTab: {
                                  //  text: 'Explore',
                                    icon: require('./assets/icons/bottom_tab/browse.png'),
                                    testID: 'first'
                                },

                            }
                        }
                    },
                    {
                        stack: {
                            children: [{
                                component: {
                                    name: 'smartStay.Hotel',
                                    passProps: {
                                        text: 'This is tab 1'
                                    }
                                }
                            }],
                            options: {
                                bottomTab: {
                                  //  text: 'Hotel',
                                    icon: require('./assets/icons/bottom_tab/home.png'),
                                    testID: 'second'
                                },


                            }
                        }
                    },
                    {
                        stack: {
                            children: [{
                                component: {
                                    name: 'smartStay.Messages',
                                    passProps: {
                                        text: 'This is tab 1'
                                    }
                                }
                            }],
                            options: {
                                bottomTab: {
                                    //  text: 'Profile',
                                    icon: require('./assets/icons/bottom_tab/message.png'),
                                    testID: 'FIRST_TAB_BAR_BUTTON'
                                },

                            }
                        }
                    },
                    {
                        stack: {
                            children: [{
                                component: {
                                    name: 'smartStay.Profile',
                                    passProps: {
                                        text: 'This is tab 1'
                                    }
                                }
                            }],
                            options: {
                                bottomTab: {
                                  //  text: 'Profile',
                                    icon: require('./assets/icons/bottom_tab/profile.png'),
                                    testID: 'FIRST_TAB_BAR_BUTTON'
                                },

                            }
                        }
                    }
                ]
            }
        }
    })
});




