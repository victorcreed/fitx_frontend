import React, {Component} from 'react';
import {connect,} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../store/actions';
import {
    View,
    Text,
    Animated,
    Easing,
    KeyboardAvoidingView,
    Dimensions,
    ImageBackground
} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import Explore from "./hotel/explore";
import Gallery from "./hotel/gallery";
import Quick from "./hotel/quick";
import {FontSize} from "../config";
import LinearGradient from 'react-native-linear-gradient';

const {width, height, scale} = Dimensions.get("window");
const maxHeight = height / 100 * 50;
const minHeight = 20;

class Hotel extends Component {
    static options(passProps) {
        return {
            topBar: {
                background: {
                    component: {
                        name: 'smartStay.MainHeader'
                    }
                },
                drawBehind: false,
                visible: true,
                animate: true
            }
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            animation: new Animated.Value(maxHeight),
            routes: [
                {
                    key: 'quick',
                    title: 'Quick',
                    type: 'quick'
                },
                {
                    key: 'explore',
                    title: 'Explore',
                    type: 'explore'
                },
                {
                    key: 'gallery',
                    title: 'Gallery',
                    type: 'gallery'
                },
            ],
        }
    }

    _renderScene = ({route}) => {
        if (route.key === "gallery") {
            return (

                <Gallery/>
            )
        }
        if (route.key === "quick") {
            return (

                <Quick/>
            )
        }
        else {
            return (

                <Explore/>
            );
        }

    };

    animateHeight() {
        let index = this.state.index;
        if (index === 0) {
            this.props.actions.addToken("Quick Redux");
            Animated.timing(
                this.state.animation,
                {
                    easing: Easing.elastic(),
                    toValue: maxHeight,
                    delay: 200,
                    duration: 600,
                }
            ).start();
        } else {
            this.props.actions.addToken("Explore Redux");

            Animated.timing(
                this.state.animation,
                {
                    toValue: minHeight,
                    easing: Easing.back(),
                    delay: 200,
                    duration: 600,
                }
            ).start();
        }
    }

    onIndexChange(index) {
        this.setState({index});
    }

    render() {

        return (
            <KeyboardAvoidingView style={{flex: 1,}} contentContainerStyle={{backgroundColor: '#fff'}}
                                  behavior="padding" enabled>
                <View style={{flex: 1, backgroundColor: '#fff'}}>

                    <Animated.View style={{height: this.state.animation}}>
                        <ImageBackground resizeMode="cover"
                                         source={{uri: 'http://www.halcon.pt/wp-content/uploads/paradise_island_Water-Villas-from-Lagoon.jpg'}}
                                         style={{height: maxHeight, backgroundColor: '#59BBAC', width: '100%'}}>
                            <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']}
                                            style={{flex: 1,}}>
                                <View style={{position: 'absolute', bottom: 10, left: 10,}}>
                                    <Text style={[FontSize.H2, {color: '#fff'}]}>Paradise Island Resort & Spa</Text>
                                    <View style={{
                                        flexDirection: 'row',
                                        width: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <View style={{width: '50%', alignItems: 'flex-start'}}>
                                            <Text style={[FontSize.H5, {color: '#fff'}]}>Five Star, North Male
                                                Atoll</Text>
                                        </View>
                                        <View style={{width: '50%', alignItems: 'center'}}>
                                            <Text style={{fontSize: 10, color: '#fff'}}>
                                                ****** star icons
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </LinearGradient>
                        </ImageBackground>
                    </Animated.View>

                    <TabView
                        navigationState={this.state}
                        renderScene={this._renderScene}
                        tabBarPosition="top"
                        bounces={true}
                        swipeEnabled={false}
                        onAnimationEnd={() => this.animateHeight()}
                        renderTabBar={props =>
                            <TabBar
                                {...props}
                                indicatorStyle={{backgroundColor: '#35BCA9',}}
                                labelStyle={{fontSize: 11, fontWeight: 'bold', color: '#000'}}
                                style={{backgroundColor: '#fff',}}
                                tabStyle={{alignItems: 'center', justifyContent: 'center', width: width / 3}}
                                scrollEnabled={true}
                            />
                        }
                        onIndexChange={index => this.onIndexChange(index)}
                        initialLayout={{width: width}}
                        useNativeDriver
                        bounces={true}
                    />

                </View>
            </KeyboardAvoidingView>
        );
    }
}

function mapStateToProps(state) {
    return {
        authToken: state.auth.authToken,
    };
}

export default connect(mapStateToProps,
    (dispatch) => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(Hotel);



