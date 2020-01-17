import React from "react";
import {Button, Text, View} from "react-native";
import {WhiteSpace} from "@ant-design/react-native";
import {LKCMTitleBar, LuckinBackView} from "./NavigationComponents";

export default class HomeScreen extends React.Component {

    /**
     * 导航栏 自定义
     * 主页面 没有back 需要进行自定义
     * @param navigation
     * @returns {{headerRight: *, headerLeft: *, headerTitle: *}}
     */
    static navigationOptions = ({ navigation }) => ({
        headerLeft:<LuckinBackView/>,
        headerTitle:
            <LKCMTitleBar titleName={"主页面"} />,
        headerRight:
        <View/>
    });

    componentWillMount() {
        //设定key 对应的方法

    }




    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>this is Home Screen</Text>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <Button
                    title="Go to Modal"
                    onPress={() => this.props.navigation.navigate('Modal')}
                />
                <WhiteSpace/>
                <WhiteSpace/>
                <Button
                    title="Go to 多级联动城市列表"
                    onPress={() => this.props.navigation.navigate('MultiListPicker')}
                />
                <WhiteSpace/>
                <WhiteSpace/>
                <Button
                    title="Go to 咖啡钱包"
                    onPress={() => this.props.navigation.navigate('CoffeeWallet')}
                />
                <WhiteSpace/>
                <WhiteSpace/>
                <Button
                    title="Go to 支付失败"
                    onPress={() => this.props.navigation.navigate('LKDiscountResult')}
                />
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <Button
                    title="Go to 测试ES6 extend"
                    onPress={() => this.props.navigation.navigate('Man')}
                />

                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <Button
                    title="Go to 测试ScrollTab"
                    onPress={() => this.props.navigation.navigate('TestScrollTabPage')}
                />
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <Button
                    title="Go to svg"
                    onPress={() => this.props.navigation.navigate('SvgShow')}
                />
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <Button
                    title="Go to 测试控件页"
                    onPress={() => this.props.navigation.navigate('TestComponentPage')}
                />

            </View>
        );
    }
}
