import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import {FontSize} from '../config';
import TouchableScale from "../components/touchableScale";

const {width, height, scale} = Dimensions.get("window");

export default class Profile extends Component {
    static options(passProps) {
        return {
            topBar: {
                background: {
                    component: {
                        name: 'smartStay.MainHeader'
                    }
                },
                drawBehind: false,
                visible: false,
                animate: true
            }
        };
    }

    render() {

        let menuData = [
            {label: 'My Trips', onPress: () => alert("trips")},
            {label: 'Settings', onPress: () => alert("settings")},
            {label: 'About', onPress: () => alert("about")},
            {label: 'Terms & Conditions', onPress: () => alert("terms")},
            {label: 'Logout', onPress: () => alert("logout")}
        ]
        return (
            <View style={{flex: 1, backgroundColor: '#F7F8F8',}}>
                <View style={{height: height / 100 * 40, alignItems: 'flex-start', padding: 20, marginTop: 50,}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{width: '70%', alignItems: 'flex-start'}}>
                            <Text style={FontSize.H1}>Jaah A. Azeez</Text>
                            <Text style={[FontSize.H4, {color: '#777'}]}>View and edit profile</Text>
                        </View>
                        <View style={{
                            width: '30%',
                            shadowOffset: {
                                width: 0,
                                height: 5,
                            },
                            shadowOpacity: 0.50,
                            shadowRadius: 4.65,
                            elevation: 6, alignItems: 'flex-end'
                        }}>
                            <Image
                                source={{uri: 'https://www.smiledesignsofcolleyville.com/files/2015/06/Allieprofile.jpg'}}
                                style={{width: 100, height: 100, borderRadius: 50, backgroundColor: '#777'}}/>
                        </View>
                    </View>

                    <View style={{width: '70%'}}>
                        <Text style={[FontSize.H4, {color: '#777'}]}>Completing your profile helps Your Hotel to serve
                            you better.</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        width: '100%',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>

                        <View style={{width: '33%', alignItems: 'center'}}>
                            <TouchableScale>
                                <View style={{
                                    width: 100,
                                    borderRadius: 5,
                                    backgroundColor: '#fff',
                                    height: 80,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Text style={[FontSize.H1, {color: '#D6192B'}]}>39</Text>
                                    <Text style={FontSize.H4}>Trips</Text>
                                </View>
                            </TouchableScale>
                        </View>
                        <View style={{width: '33%', alignItems: 'center'}}>
                            <TouchableScale>
                                <View style={{
                                    width: 100,
                                    borderRadius: 5,
                                    backgroundColor: '#fff',
                                    height: 80,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Text style={[FontSize.H1, {color: '#777'}]}>1232</Text>
                                    <Text style={FontSize.H4}>Reviews</Text>
                                </View>
                            </TouchableScale>
                        </View>
                        <View style={{width: '33%', alignItems: 'center'}}>
                            <TouchableScale>
                                <View style={{
                                    width: 100,
                                    borderRadius: 5,
                                    backgroundColor: '#fff',
                                    height: 80,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Text style={[FontSize.H1, {color: '#777'}]}>44</Text>
                                    <Text style={FontSize.H4}>Messages</Text>
                                </View>
                            </TouchableScale>
                        </View>
                    </View>

                </View>


                <View style={{backgroundColor: '#fff', flex: 1, width: '100%'}}>

                    {menuData.map(menu => {
                        return (
                            <TouchableScale activeOpacity={0.5} onPress={menu.onPress}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        paddingLeft: 20,
                                        paddingRight: 20,
                                        alignItems: 'center',
                                        height: 60,
                                        borderBottomWidth: 1,
                                        borderColor: '#E3E3E3'
                                    }}>
                                    <View style={{width: '70%'}}>
                                        <Text style={[FontSize.H3, {color: '#777'}]}>{menu.label}</Text>
                                    </View>

                                    <View style={{width: '30%', alignItems: 'flex-end'}}>
                                        <Image source={require('../../assets/icons/arrow.png')}/>
                                    </View>
                                </View>
                            </TouchableScale>

                        )
                    })}

                </View>

            </View>
        )
    }
}