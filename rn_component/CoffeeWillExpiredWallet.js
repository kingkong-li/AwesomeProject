import React from "react";
import {LKCMTitleBar} from "./NavigationComponents";
import {Text, View} from "react-native";

export default class CoffeeWillExpiredWallet extends React.Component {
    /**
     * 导航栏 自定义 左边
     * @param navigation
     * @returns {{headerRight: *, headerLeft: *, headerTitle: *}}
     */
    static navigationOptions = ({navigation}) => ({
        headerTitle:
            <LKCMTitleBar titleName={'将要过期咖啡券'}/>,
        headerRight: (
            <View/>
        ),
    });

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>这是将要过期咖啡券页面</Text>
            </View>
        );
    }

}