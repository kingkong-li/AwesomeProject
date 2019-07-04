import React from "react";
import {Text, View} from "react-native";
import {LKCMTitleBar} from "./NavigationComponents";
import BottomTab from "./BottomTab";


/**
 * @Description : 咖啡钱包页面
 * @Author : jingang.li
 *
 */
export default class CoffeeWallet extends React.Component {
    /**
     * 导航栏 自定义
     * @param navigation
     * @returns {{headerRight: *, headerLeft: *, headerTitle: *}}
     */
    static navigationOptions = ({navigation}) => ({
        headerTitle:
            <LKCMTitleBar titleName={"咖啡钱包"}/>,
        headerRight: (
            <Text style={{fontSize: 15, marginRight: 10}} onPress={navigation.getParam("naviKey")}>
                无效咖啡券
            </Text>
        ),
    });

    constructor(props) {
        super(props);
        // 定义状态机
        this.state = {
            // 将要过期咖啡券数目
            willExpiredTicketNum: 15,
            luckinTickInfoList: 0,

        };
    }


    componentWillMount() {
        //设定key
        this.props.navigation.setParams({naviKey: this.onInvalidLuckinTicketClick});
        this.getWillExpiredTicketNum();
    }

    /**
     *
     */
    onInvalidLuckinTicketClick = () => {
        this.props.navigation.navigate('InvalidLuckinTickets')
    }


    render() {
        return (
            <View style={{flex: 1}}>
                {this.showWillExpiredTicketTip()}
                {this.showLuckinTicketList()}
                <BottomTab
                onTableClicked={(itemId)=>this.onTabItemClicked(itemId)}/>
            </View>
        );
    }

    /**
     * 展示将要过期券提示
     * @returns {null|*}
     */
    showWillExpiredTicketTip() {

        if (this.state.willExpiredTicketNum === 0) {
            return null;
        } else {
            return (
                <Text style={{marginLeft:15,marginTop:15}}>
                    张咖啡券将要过期
                </Text>
            );
        }
    }

    /**
     * 显示咖啡券列表
     * 如果没有券则需要展示无券提醒
     */
    showLuckinTicketList() {
        if (this.state.luckinTickInfoList === 0) {
            return(
                <View style={{flex: 1,justifyContent:'center',alignItems:'center'}}>
                    <Text>
                        您的咖啡钱包有点寂寞
                    </Text>
                </View>
            );
        } else {
            return (
                <View style={{flex: 1}}>
                    <Text>
                        你有很多咖啡钱包
                    </Text>
                </View>
            );
        }

    }

    onTabItemClicked(itemId) {
        console.log('CoffeeWallet onTabItemClicked itemId=' + itemId);
    }

    /**
     * 获取将要过期咖啡券数目
     * 从网络获取
     */
    getWillExpiredTicketNum() {
        // 模拟数据start
        let number=Math.floor(Math.random()*3);
        // 模拟数据end
        console.log('CoffeeWallet getWillExpiredTicketNum number=' + number);
        this.setState((prevState, props) => ({
            willExpiredTicketNum:number,
        }));

    }
}