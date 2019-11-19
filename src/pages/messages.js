import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import {FontSize} from '../config';

const {width, height, scale} = Dimensions.get("window");

export default class Messages extends Component {
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

        let data = [
            {label: 'My Trips', onPress: () => alert("trips")},
        ]
        return (
            <View style={{flex: 1, backgroundColor: '#F7F8F8',}}>

            </View>
        )
    }
}