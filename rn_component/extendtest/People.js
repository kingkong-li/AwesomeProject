import React from "react";
import {Text, TouchableHighlight, View} from "react-native";
import Badge from "@ant-design/react-native/es/badge";
import PropTypes from "prop-types";

export default class People extends React.Component{

    /**
     * 自定义属性，并且限制类型
     * @type {{badgeValue: *}}
     */
    static propTypes = {
        age: PropTypes.number,
        height:PropTypes.number,
    };

    constructor(props) {
        super(props);

        this.weight=100;
        // 定义状态机
        this.state = {


        };
    }



    /**
     * 为属性设定默认值
     * @type {{badgeValue: string}}
     */
    static defaultProps = {
        age: 18,
        height: 170,
        sex:'woman'
    };

    render() {
        return (
            <View>
                <Text> -你好啊，this is a people-,他是 </Text>
                <Text> {this.props.sex} </Text>


            </View>
        );
    }
}
