import React, { Component } from "react";

import { Image, StyleSheet, Text, View, Button, Alert } from "react-native";
import {LKCMTitleBar, LuckinBackView} from "./NavigationComponents";


let DiscountResultData =
    {
        buyStateLabel: "购买失败",
        promptLabel: "非常抱歉,请再次尝试",
        buyAggain:"重试购买"
    };


export default class LKDiscountResult extends  Component{

    static navigationOptions = ({ navigation }) => ({
        headerBackImage:<Image
            source={require('./source/img/baseline_clear_black.png')}
            style={{width: 25, height: 25}}
            />,
        headerTitle:
            <LKCMTitleBar titleName={"购买失败"} />,
        headerRight:
            <View/>
    });

    _onPressButton() {
        Alert.alert('Plese retry to buy!')
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./source/img/fail_icon.png')}
                       style={styles.thumbnail}/>

                <View>
                    <Text style={styles.buyStateLabel}>{DiscountResultData.buyStateLabel}</Text>
                </View>

                <View>
                    <Text style={styles.promptLabel}>{DiscountResultData.promptLabel}</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="重试购买"
                        color="#FFFFFF"

                    />
                </View>
            </View>
        );
    }

}

let styles = StyleSheet.create({

    container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },

    thumbnail: {
        marginTop: 150,
        width: 75,
        height: 75
    },

    buyStateLabel: {
        marginTop: 50,
        fontSize: 28,
    },

    promptLabel: {
        marginTop: 30,
        fontSize: 16,
    },

    buttonContainer: {
        marginTop: 80,
        backgroundColor: "#7ca7d2",
        fontSize:16,
        borderRadius: 5,
        justifyContent: 'center',
        width: 152,
        height: 50

    },

});
