import React from "react";
import {TouchableHighlight, StyleSheet, Text, View} from "react-native";
import Badge from "@ant-design/react-native/es/badge";
import PropTypes from 'prop-types';

/**
 * @Description: 控件 ，底部选择栏
 * @Author: jingang.li
 */
export default class BottomTab extends React.Component {

    /**
     * 自定义属性，并且限制类型
     * @type {{badgeValue: *}}
     */
    static propTypes = {
        badgeValue: PropTypes.string,
        onTableClicked: PropTypes.func,
    };

    /**
     * 为属性设定默认值
     * @type {{badgeValue: string}}
     */
    static defaultProps = {
        badgeValue: '充5送5',
        onTableClicked: null,
    };


    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={() => this.onTableClick(1)} style={styles.tableStyle1}
                                    underlayColor={'#FFB5C5'}>
                    <Text>幸运送</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => this.onTableClick(2)} style={styles.tableStyle1}
                                    underlayColor={'#FFB5C5'}>
                    <Text>发红包</Text>
                </TouchableHighlight>

                <Badge text={this.props.badgeValue} size='small'>
                    <TouchableHighlight onPress={() => this.onTableClick(3)} style={styles.tableStyle2}
                                        underlayColor={'#FFB5C5'}>
                        <Text>充值钱包</Text>
                    </TouchableHighlight>
                </Badge>

            </View>
        );
    }

    /**
     * 当某一个Tab项目点击触发
     * @param tableId
     */
    onTableClick(tableId) {
        console.log('BottomTab onTableClick tableId=' + tableId);
        if (this.props.onTableClicked != null) {
            this.props.onTableClicked(tableId);
        }
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 15
    },
    tableStyle1: {
        paddingRight: 20,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingTop: 10,
        borderColor: '#FF34B3',
        borderWidth: 1, borderRadius: 5
    },
    tableStyle2: {
        paddingRight: 25,
        paddingBottom: 10,
        paddingLeft: 25,
        paddingTop: 10,
        borderColor: '#FFBBFF',
        borderWidth: 1, borderRadius: 5,
        backgroundColor: '#FFBBFF'
    },

});