import React from "react";
import {Text, View} from "react-native";
import Svg, {Rect} from "react-native-svg";
import {LKCMTitleBar} from "../NavigationComponents";

export default class SvgShow extends React.Component {
    /**
     * 导航栏 自定义 左边
     * @param navigation
     * @returns {{headerRight: *, headerLeft: *, headerTitle: *}}
     */
    static navigationOptions = ({navigation}) => ({
        headerTitle:
            <LKCMTitleBar titleName={"svg"}/>,
        headerRight: (
            <View/>
        ),
    });




    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Svg width="200" height='100'>
                    <Rect
                        x="25"
                        y="5"
                        width="150"
                        height="50"
                        fill="rgb(0,0,255)"
                        strokeWidth="3"
                        stroke="rgb(0,0,0)"
                    />
                </Svg>
                <Svg width="200" height='100'>
                    <Rect
                        x="25"
                        y="5"
                        width="150"
                        height="50"
                        fill="rgb(0,0,255)"
                        strokeWidth="3"
                        stroke="rgb(0,0,0)"
                    />
                </Svg>
            </View>
        );
    }

}
