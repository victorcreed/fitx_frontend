import React, {Component} from 'react';
import {Text, View, Animated, TouchableWithoutFeedback, ImageBackground} from 'react-native';
import {FontSize} from "../config";
import LinearGradient from 'react-native-linear-gradient';

export default class TouchableScale extends Component {

    componentWillMount() {
        this.animatedValue = new Animated.Value(1);
    }

    handlePressIn = () => {
        if (!this.props.loading) {
            Animated.spring(this.animatedValue, {
                toValue: 1.09,

            }).start();
        }
    };

    handlePressOut = () => {
        Animated.spring(this.animatedValue, {
            toValue: 1,

        }).start();
    };

    render() {
        const animatedStyle = {
            transform: [{scale: this.animatedValue}],
        };

        return (
            <TouchableWithoutFeedback onPressIn={() => this.handlePressIn()} onPressOut={() => this.handlePressOut()}
                                      onPress={this.props.loading ? console.log("button disabled already loading") : this.props.onPress}>
                <Animated.View {...this.props} style={[animatedStyle]} >
                    {this.props.children}
                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }
}

