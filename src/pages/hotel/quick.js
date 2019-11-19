import React, {Component} from 'react';
import {Text, View, Image, ScrollView,} from 'react-native';
import {TouchableScale} from "../../components";

export default class Quick extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#EAEBEA', alignItems: 'center', justifyContent: 'center'}}>
                <View style={{flexDirection: 'row',}}>

                    <View style={{width: '33%', alignItems: 'center',}}>
                        <TouchableScale>
                            <View style={{
                                backgroundColor: '#fff',
                                height: 100,
                                width: 100,
                                borderRadius: 50,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image source={require('../../../assets/icons/info.png')}/>
                            </View>
                            <Text style={{paddingTop: 5, textAlign: 'center', fontWeight: '400'}}>HOTEL INFO</Text>

                        </TouchableScale>
                    </View>


                    <View style={{width: '33%', alignItems: 'center',}}>
                        <TouchableScale>
                            <View style={{
                                backgroundColor: '#fff',
                                height: 100,
                                width: 100,
                                borderRadius: 50,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image source={require('../../../assets/icons/buggy.png')}/>
                            </View>
                            <Text style={{paddingTop: 5, textAlign: 'center', fontWeight: '400'}}>BUGGY</Text>
                        </TouchableScale>
                    </View>

                    <View style={{width: '33%', alignItems: 'center',}}>
                        <TouchableScale>
                            <View style={{
                                backgroundColor: '#fff',
                                height: 100,
                                width: 100,
                                borderRadius: 50,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image source={require('../../../assets/icons/phone.png')}/>
                            </View>
                            <Text style={{paddingTop: 5, textAlign:'center', fontWeight: '400'}}>WAKE UP CALL</Text>
                        </TouchableScale>
                    </View>

                </View>
            </View>
        )
    }
}

