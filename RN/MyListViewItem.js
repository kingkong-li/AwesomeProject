import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default class MyListViewItem extends React.Component {

    constructor(props) {
        super(props);
        // 定义状态机
        this.state = {
            onPressState:false,
        };

    }



    _onItemPress() {
        console.log('MyListViewItem onItemPress start')
        this.setState(() => {
                return {
                    onPressState: !this.state.onPressState,
                }

            }
        )
        this.props.onPressItem()
        console.log('MyListViewItem onItemPress end '+this.state.onPressState)
    };


    /**
     * 控件生命周期函数，该控件接收到新的props会调用
     * 如果新的pros导致页面重新渲染，那么这个会在渲染前被执行
     * @param nextProps
     * @param nextContext
     */
    componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {
        console.log('MyListViewItem componentWillReceiveProps')
        this.updateDataSource(nextProps.onClickState)

    }

    render() {

        let selectColor = this.state.onPressState ? "red" : "white";

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{
                    this._onItemPress()
                }}>
                    <View>
                        <Text style={{backgroundColor: selectColor}}>
                            {this.props.title}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    /**
     * 更新数据
     */
    updateDataSource(clickState) {
        if(clickState===true)
        {
            this.setState((state) => {
                    return {
                        onPressState: true,
                    }

                }
            );
        }else{
            this.setState((state) => {
                    return {
                        onPressState: false,
                    }

                }
            );
        }

    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    }
});