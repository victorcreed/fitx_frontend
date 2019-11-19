import React, {Component} from 'react';
import {Text, View, ScrollView, } from 'react-native';
import {CategoryCard, Form} from '../../components';


export default class Explore extends Component{
    render(){
        let categoryData = [
            {
                backgroundImage: 'https://konotta.bestdivesmaldives.com/wp-content/uploads/2016/04/wave-848x478.jpg',
                title: 'Water Sports',
                description: 'Explore World Calss Water Sports at our Resort'
            },
            {
                backgroundImage: 'https://www.wonderfulpackage.com/uploads/moxie/Maldives/PARADISE%20ISLAND%20RESORT%20%26%20SPA/8dbf8-Paradise_Island_069-water.jpg',
                title: 'Accommodation',
                description: 'Explore World Calss Water Sports at our Resort'
            },
            {
                backgroundImage: 'https://www.maldives.com/wp-content/uploads/2015/05/Restaurant-Paradise-Island-Resort-Spa.jpg',
                title: 'Restaurants',
                description: 'Explore World Calss Water Sports at our Resort'
            },
            {
                backgroundImage: 'https://i.ytimg.com/vi/bl8fG69NDkw/maxresdefault.jpg',
                title: 'Diving',
                description: 'Explore World Calss Water Sports at our Resort'
            }
        ];

        return(
            <ScrollView style={{flex: 1, padding: 0, backgroundColor: '#EAEBEA'}}>


                <View style={{marginLeft: 20, marginRight: 20}}>
                    {categoryData.map(category => {
                        return (
                            <CategoryCard backgroundImage={category.backgroundImage} title={category.title} description={category.description}/>
                        )
                    })}
                </View>


            </ScrollView>
        )
    }
}

