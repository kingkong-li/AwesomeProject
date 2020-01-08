import React from "react";
import {Text, View} from "react-native";
import {LKCMTitleBar} from "../NavigationComponents";


import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

export default class TestScrollTabPage extends React.Component {

    /**
     * 导航栏 自定义 左边
     * @param navigation
     * @returns {{headerRight: *, headerLeft: *, headerTitle: *}}
     */
    static navigationOptions = ({navigation}) => ({
        headerTitle:
            <LKCMTitleBar titleName={"测试滚动Tab"}/>,
        headerRight: (
            <View/>
        ),
    });

    render() {
        return (
            <ScrollableTabView>
                <Text tabLabel='Tab 1'>Tab 1</Text>
                <Text tabLabel='Tab 2'>Tab 2</Text>
                <Text tabLabel='Tab 3'>Tab 3</Text>
            </ScrollableTabView>
        );
    }

}
