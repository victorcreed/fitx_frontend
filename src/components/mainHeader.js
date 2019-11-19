import React, {Component} from 'react'
import {Text, Image, View} from 'react-native';
import {connect,} from 'react-redux';
import * as actions from '../store/actions';

import {FontSize} from '../config';

class mainHeader extends Component {

    render() {
        return (
            <View style={{
                alignItems: 'center',
                justifyContent:'flex-start',
                flexDirection: 'row',
                backgroundColor: '#fff',
                width: '100%',
                padding:10,
            }}>

                <View style={{width:50, borderRadius:25, borderColor:'#ccc', alignItems:'center', justifyContent:'center', borderWidth:1, height:50, marginRight:10}}>
                    <Image source={require('../../assets/icons/avatar.png')}/>
                </View>

                <View>
                    <Text style={FontSize.H1}>Good Morning</Text>
                    <Text style={[FontSize.H3, {color:'#59BBAC', marginTop:-5}]}>Jaah {this.props.authToken}</Text>
                </View>
            </View>
        )

    }
}

function mapStateToProps(state) {
    return {
        authToken: state.auth.authToken,
    };
}

export default connect(mapStateToProps, {actions})(mainHeader);