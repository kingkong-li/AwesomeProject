import React from "react";
import {LKCMTitleBar} from "../NavigationComponents";
import {Text, View} from "react-native";

export default class TreePage extends React.Component {
    /**
     * 导航栏 自定义 左边
     * @param navigation
     * @returns {{headerRight: *, headerLeft: *, headerTitle: *}}
     */
    static navigationOptions = ({navigation}) => ({
        headerTitle:
            <LKCMTitleBar titleName={"树View"}/>,
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
