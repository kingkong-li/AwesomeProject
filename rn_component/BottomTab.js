import React from "react";
import {Image, Text, View} from "react-native";
import Badge from "@ant-design/react-native/es/badge";

/**
 * @Description: 控件 ，底部选择栏
 * @Author: jingang.li
 */
export default class BottomTab extends React.Component {

    render() {
        return (
            <View
                style={{flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', padding: 15}}>
                <View style={{
                    borderColor: '#FF34B3',
                    borderWidth: 1, borderRadius: 5
                }}>
                    <Text style={{paddingRight: 20, paddingBottom: 10, paddingLeft: 20, paddingTop: 10}}>幸运送</Text>
                </View>
                <View style={{
                    borderColor: '#FF34B3',
                    borderWidth: 1, borderRadius: 5
                }}>
                    <Text style={{paddingRight: 20, paddingBottom: 10, paddingLeft: 20, paddingTop: 10}}>发红包</Text>
                </View>

                <Badge text={'策略1/9啦啦'} size='small'>
                    <View style={{
                        borderColor: '#FF34B3',
                        borderWidth: 1, borderRadius: 5
                    }}>
                        <Text style={{paddingRight: 25, paddingBottom: 10, paddingLeft: 25, paddingTop: 10}}>充值钱包</Text>
                    </View>
                </Badge>

            </View>
        );
    }

}