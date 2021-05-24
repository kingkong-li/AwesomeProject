import React from "react";

import {Text, View} from "react-native";
import AutoNewLineText from "./AutoNewLineText";
import {LKCMTitleBar} from "../NavigationComponents";

export default class TestComponentPage extends React.Component {
    /**
     * 导航栏 自定义 左边
     * @param navigation
     * @returns {{headerRight: *, headerLeft: *, headerTitle: *}}
     */
    static navigationOptions = ({navigation}) => ({
        headerTitle:
            <LKCMTitleBar titleName={"测试控件页面"}/>,
        headerRight: (
            <View/>
        ),
    });

    componentDidMount() {
        let a=null
        console.log("a.length=","error")
        console.log("a.length=",a.length)
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>

                <AutoNewLineText
                    text={'当Text过长自动换行 当Text过长dddddsdds自动换行 当Text过长自动换行 当Text过长自动换行 当Text过长自动换行'}/>
            </View>
        );
    }

}
