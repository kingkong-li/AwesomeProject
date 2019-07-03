import React from "react";
import {LKCMTitleBar} from "./NavigationComponents";
import {Button, Text, View} from "react-native";

export default class InvalidLuckinTickets extends React.Component {
    /**
     * 导航栏 自定义 左边
     * @param navigation
     * @returns {{headerRight: *, headerLeft: *, headerTitle: *}}
     */
    static navigationOptions = ({navigation}) => ({
        headerTitle:
            <LKCMTitleBar titleName={"无效咖啡券"}/>,
        headerRight: (
            <View/>
        ),
    });

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>这是无效咖啡券页面</Text>
            </View>
        );
    }

}