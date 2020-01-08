import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ModalExample from "./rn_component/ModalExample";
import MultiListPicker from "./rn_component/MultiListPicker";
import HomeScreen from "./rn_component/HomeScreen";
import CoffeeWallet from "./rn_component/CoffeeWallet";
import InvalidLuckinTickets from "./rn_component/InvalidLuckinTickets";
import LKDiscountResult from "./rn_component/LKDiscountResult";
import CoffeeWillExpiredWallet from "./rn_component/CoffeeWillExpiredWallet";
import Man from "./rn_component/extendtest/Man";
import TestScrollTabPage from "./rn_component/scrolltabtest/TestScrollTabPage";

/**
 * RN入口，在入口处
 * RN入口处其实就是把所有的View注册在一个Stack中，通过RN
 * 的Navigator进行页面的切换
 */
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
// 先定义RootStack
const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Modal:ModalExample,
        MultiListPicker:MultiListPicker,
        CoffeeWallet:CoffeeWallet,
        InvalidLuckinTickets:InvalidLuckinTickets,
        LKDiscountResult:LKDiscountResult,
        CoffeeWillExpiredWallet:CoffeeWillExpiredWallet,
        Man:Man,
        TestScrollTabPage:TestScrollTabPage,

    },
    {
        initialRouteName: 'Home',
    }
);
// 再使用RootStack 需要保持这个顺序
const AppContainer = createAppContainer(RootStack);



