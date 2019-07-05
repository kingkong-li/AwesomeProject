import React from "react";
import {Text, TouchableHighlight, View} from "react-native";
import {LKCMTitleBar} from "./NavigationComponents";
import BottomTab from "./BottomTab";
import CoffeeTicketList from "./CoffeeTicketList";
import {coffeeTicketData} from "./source/json/MonitorData";

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
            luckinTickInfoList: 1,

        };
    }


    componentWillMount() {
        //为navigation 方法，这个navigation有点像一个map了
        this.props.navigation.setParams({naviKey: this.onInvalidLuckinTicketClick});
        this.getWillExpiredTicketNum();
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
     *当标题栏中'无效券'被点击
     */
    onInvalidLuckinTicketClick = () => {
        this.props.navigation.navigate('InvalidLuckinTickets')
    }


    /**
     * 展示将要过期券提示
     * @returns {null|*}
     */
    showWillExpiredTicketTip() {
        if (this.state.willExpiredTicketNum === 0) {
            return null;
        } else {
            let numberString='您有'+this.state.willExpiredTicketNum+'杯咖啡券即将过期，点击查看>'
            return (
                <TouchableHighlight onPress={() => this.onWillExpiredTicketTipClicked()} style={{padding:10,backgroundColor:'#FFE4B5'}}
                                    underlayColor={'#FFB5C5'}>
                    <Text style={{marginLeft:10}}> {numberString}</Text>
                </TouchableHighlight>

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
                   <CoffeeTicketList
                       dataSource={coffeeTicketData.coffeeTicketList}/>
                </View>
            );
        }

    }

    /**
     *  当底部Tab列表中某一项被点击
     * @param itemId 点击Id
     */
    onTabItemClicked(itemId) {
        console.log('CoffeeWallet onTabItemClicked itemId=' + itemId);
    }

    /**
     * 获取将要过期咖啡券数目
     * 从网络获取
     */
    getWillExpiredTicketNum() {
        // 模拟数据start
        let number=Math.floor(Math.random()*5);
        // 模拟数据end
        console.log('CoffeeWallet getWillExpiredTicketNum number=' + number);
        this.setState((prevState, props) => ({
            willExpiredTicketNum:number,
        }));

    }

    /**
     * 当将要过期的Tip被点击时候触发
     */
    onWillExpiredTicketTipClicked() {
        console.log('CoffeeWallet onWillExpiredTicketTipClicked');
        this.props.navigation.navigate('CoffeeWillExpiredWallet')
    }
}