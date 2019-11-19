import React, {Component} from 'react';
import {
    Text,
    View,
    Animated,
} from 'react-native';


export default class InputWrapper extends Component {
    static propTypes = {
        label: 'string|null',
        error: 'string|array|null',
    };

    static defaultProps = {
        label: '',
        error: null,
    };

    state = {
        lineOpacity: new Animated.Value(0),
        borderBottomColor: 'rgba(200,200,200,1)',
    };

    componentDidMount() {
        Animated.timing(
            this.state.lineOpacity,
            {
                toValue: 1,
                duration: 1000,
            }
        ).start();
    }

    render() {
        const {label, error, focus, children} = this.props;
        return (
            <View style={{backgroundColor: focus ? '#fff' : 'transparent', borderColor: focus ? 'transparent' : '#ccc', borderWidth:1, width: null, borderRadius: 5, padding:10, marginTop: 10,}}>
                <Text style={{
                    fontWeight: '400',
                    color: 'rgba(78,78,78,0.5)',

                }}>{label.toUpperCase()}</Text>

                {children}

                {error ? <Text style={{paddingTop: 5, color: 'red'}}>{error}</Text> : null}
            </View>
        )
    }
}
