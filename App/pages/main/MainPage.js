import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    SafeAreaView,
    Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../../App/util/Colors';

class MainPage extends Component {

    static navigationOptions = ({navigation, screenProps}) => ({
        title: '喵主页',
        headerLeft: (<Ionicons
            name={'ios-contact'}
            size={26}
            style={{ color: colors.white,marginLeft:10 }}
        />),
        headerRight: (
            <Ionicons
                name={'ios-mail'}
                size={26}
                style={{ color: colors.white,marginRight:10}}
            />
        ),
        tabBarIcon: ({tintColor, focused}) => (
            <Ionicons
                name={focused ? 'ios-home' : 'ios-home-outline'}
                size={26}
                style={{ color: tintColor }}
            />
        ),
    })

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <SafeAreaView forceInset={{ top: 'always' }}>
                    <Text>主页</Text>
                </SafeAreaView>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


export default MainPage;
