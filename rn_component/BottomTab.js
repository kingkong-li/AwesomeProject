import React from "react";
import {Text, View} from "react-native";

/**
 * @Description: 控件 ，底部选择栏
 * @Author: jingang.li
 */
export default class BottomTab extends React.Component{

    render() {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center',marginBottom:15}}>
                <Text>底部导航栏</Text>
            </View>
        );
    }

}