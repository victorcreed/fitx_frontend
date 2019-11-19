import React, {Component} from 'react';
import {Text, KeyboardAvoidingView, View, ScrollView, } from 'react-native';
import {CategoryCard, Form} from '../../components';


export default class Gallery extends Component{
    render(){

        return(

            <ScrollView style={{flex: 1, padding: 0, backgroundColor: '#EAEBEA'}}>

                <View style={{margin:20}}>
                    <Form
                        onChange={formData => this.setState({formData: formData})}
                        fields={[
                            {
                                name: 'country',
                                type: 'text',
                                label: 'Country',
                                onChange: this.resetUuid,
                            },
                            {
                                name: 'card_number',
                                type: 'text',
                                label: 'Card Number',
                                onChange: this.resetUuid,
                            },
                            {
                                name: 'mobile',
                                type: 'text',
                                label: 'Mobile Number',
                                onChange: this.resetUuid,
                            },
                            {
                                name: 'mobile',
                                type: 'text',
                                label: 'Mobile Number',
                                onChange: this.resetUuid,
                            },
                            {
                                name: 'mobile',
                                type: 'text',
                                label: 'Mobile Number',
                                onChange: this.resetUuid,
                            },
                            {
                                name: 'mobile',
                                type: 'text',
                                label: 'Mobile Number',
                                onChange: this.resetUuid,
                            },
                            {
                                name: 'mobile',
                                type: 'text',
                                label: 'Mobile Number',
                                onChange: this.resetUuid,
                            },
                        ]} />
                </View>

            </ScrollView>
        )
    }
}

