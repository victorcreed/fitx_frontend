import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';

export default class Explore extends Component{
    static options(passProps) {
        return {
            topBar: {
                drawBehind: true,
                visible: false,
                animate: true
            }
        };
    }
    render(){
        return (
            <View style={{flex:1}}>

                <View style={{backgroundColor:'#ccc', height:400, width:'100%'}}>

                </View>

            </View>
        )
    }
}