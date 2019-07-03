import React from "react";
import {Image, Text, View} from "react-native";

/**
 * @Description: 控件 ，底部选择栏
 * @Author: jingang.li
 */
export default class BottomTab extends React.Component {

    render() {
        return (
            <View
                style={{flexDirection: 'row', justifyContent: "space-between", alignItems: 'center',padding:15}}>
                <View style={{borderColor:'#FF34B3',
                    borderWidth:1,borderRadius:5}}>
                    <Text style={{padding:10}}>幸运送</Text>
                </View>
                <View style={{borderColor:'#FF34B3',
                    borderWidth:1,borderRadius:5}}>
                    <Text style={{padding:10}}>发红包</Text>
                </View>

                <View style={{borderColor:'#FF34B3',
                    borderWidth:1,borderRadius:5}}>
                    <Text style={{padding:10}}>充值钱包</Text>
                </View>


            </View>
        );
    }

}