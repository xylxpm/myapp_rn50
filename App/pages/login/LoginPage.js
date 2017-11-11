import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../App/util/Colors';

class LoginPage extends Component {

    static navigationOptions = ({navigation,screenProps}) => ({
        header: null,
        tabBarVisible: false
    })

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>注册</Text>
            </View> );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


export default LoginPage;
