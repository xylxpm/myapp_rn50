import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../App/util/Colors';

class CategoryPage extends Component {

    static navigationOptions = ({navigation,screenProps}) => ({
        title: 'CategoryPage',

        tabBarIcon: ({tintColor, focused}) => (
            <Ionicons
                name={focused ? 'ios-cube' : 'ios-cube-outline'}
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
            <View style={styles.container}>
                <Text>CategoryPage</Text>
            </View> );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


export default CategoryPage;
