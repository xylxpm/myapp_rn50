import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../App/util/Colors';

class ListPage extends Component {

    static navigationOptions = ({navigation,screenProps}) => ({
        title: 'ListPage',

        tabBarIcon: ({tintColor, focused}) => (
            <Ionicons
                name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
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
                <Text>ListPage</Text>
            </View> );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


export default ListPage;
