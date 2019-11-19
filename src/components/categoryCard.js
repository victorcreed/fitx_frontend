import React, {Component} from 'react';
import {Text, View, Animated, TouchableWithoutFeedback, ImageBackground} from 'react-native';
import {FontSize} from "../config";
import LinearGradient from 'react-native-linear-gradient';
import TouchableScale from './touchableScale';

export default class CategoryCard extends Component {

    render() {

        return (
            <TouchableScale onPress={this.props.loading ? console.log("button disabled already loading") : this.props.onPress}>
            <View style={{
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,
                elevation: 6,
                marginTop: 20,
            }}>
                <ImageBackground
                    source={{uri: this.props.backgroundImage}}
                    style={{
                        height: 180, overflow: 'hidden', backgroundColor: '#fff', borderRadius: 5,
                    }}>
                    <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']}
                                    style={{flex: 1,}}>

                        <View style={{position: 'absolute', bottom: 10, left: 10,}}>
                            <Text style={[FontSize.H2, {color: '#fff'}]}>{this.props.title}</Text>
                            <View style={{
                                flexDirection: 'row',
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <View style={{width: '100%', alignItems: 'flex-start'}}>
                                    <Text style={[FontSize.H5, {color: '#fff'}]}>{this.props.description}</Text>
                                </View>

                            </View>
                        </View>

                    </LinearGradient>
                </ImageBackground>
            </View>
            </TouchableScale>
        )
    }
}

