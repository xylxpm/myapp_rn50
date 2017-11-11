import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../App/util/Colors';

class CustomerPage extends Component {

    static navigationOptions = ({navigation,screenProps}) => ({
        title: 'CustomerPage',

        tabBarIcon: ({tintColor, focused}) => (
            <Ionicons
                name={focused ? 'ios-people' : 'ios-people-outline'}
                size={26}
                style={{ color: tintColor }}
            />
        )
    })

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>CustomerPage</Text>
            </View> );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


export default CustomerPage;
