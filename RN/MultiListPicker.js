import {FlatList, View, Text, StyleSheet, Alert} from 'react-native'
import React from "react";
import {dataList} from "./data/NativeData";
import MyListViewItem from "./MyListViewItem";


export default class MultiListPicker extends React.Component {

    constructor(props) {
        super(props);
        // 定义状态机
        this.state = {
            Data: [],
            ToTalDepth: 3,
            CurrentColumnIndex0:0,
            CurrentColumnIndex1:0,
            CurrentColumnIndex2:0,
            CurrentColumnIndex3:0,
            ChooseResult:'',

        };
    }

    /**
     * 控件生命周期函数，表示该控件已经挂载到页面上，初始化渲染之后立马执行
     * 这个方法主要用于初始化之后从网络拉新数据
     */
    componentDidMount() {

        this.state.ToTalDepth=this.getMyCurrentDepth(dataList.godProviderData)
        console.log('MultiListPicker componentDidMount start ToTalDepth=' + this.state.ToTalDepth);

    }

    render() {

        var pages = [];

        for(let i=0;i<this.state.ToTalDepth;i++){

        }

            pages.push(
                <FlatList
                    data={[{key: dataList.cityList[0].cityName}, {key: dataList.cityList[1].cityName}]}
                    keyExtractor={item => item.keys}
                    renderItem={(item,index) => this.renderItem(item,0)}
                />
            );
        pages.push(
            <FlatList
                data={[{key: dataList.cityList[this.state.CurrentColumnIndex0].areaList[0].areaName}, {key: dataList.cityList[this.state.CurrentColumnIndex0].areaList[1].areaName},
                    {key: dataList.cityList[this.state.CurrentColumnIndex0].areaList[2].areaName}, {key: dataList.cityList[this.state.CurrentColumnIndex0].areaList[3].areaName}]}
                keyExtractor={item => item.keys}
                renderItem={(item,index) => this.renderItem(item,1)}
            />
        );
        pages.push(
            <FlatList
                data={[{key: dataList.cityList[this.state.CurrentColumnIndex0].areaList[this.state.CurrentColumnIndex1].townList[0].townName},
                    {key: dataList.cityList[this.state.CurrentColumnIndex0].areaList[this.state.CurrentColumnIndex1].townList[1].townName},
                    {key: dataList.cityList[this.state.CurrentColumnIndex0].areaList[this.state.CurrentColumnIndex1].townList[2].townName},
                    {key: dataList.cityList[this.state.CurrentColumnIndex0].areaList[this.state.CurrentColumnIndex1].townList[3].townName}]}
                keyExtractor={item => item.keys}
                renderItem={(item,index) => this.renderItem(item,2)}
            />
        );

        return (
            <View style={{flexDirection: 'row'}}>
                {pages}
            </View>
        );

    }


    /**
     *
     * @param item
     * @param index
     * @returns {*}
     */
    renderItem(item,tag) {
        console.log('MultiListPicker renderItem '+ "tag="+tag)
        var myIndex=this.getCurrentColumnSelect(tag);
        console.log('MultiListPicker renderItem '+ "myIndex="+myIndex)
        return (
            <MyListViewItem
                onPressItem={()=>{
                    console.log("MultiListPicker-----------"+tag +':'+item.index);
                    this.itemClick(item,tag);
                    // this.itemClick();
                }}
                title={item.item.key}
                onClickState={item.index ===myIndex}
            />

        );


    }

    getCurrentColumnSelect(column){
        console.log('MultiListPicker getCurrentColumnSelect '+ "column="+column)
        if(column===0)
        {
            return this.state.CurrentColumnIndex0
        }
        if(column===1)
        {
            return this.state.CurrentColumnIndex1
        }
        if(column===2)
        {
            return this.state.CurrentColumnIndex2
        }

        if(column===3)
        {
            return this.state.CurrentColumnIndex3
        }


    }

    itemClick(item,tag){
        console.log('MultiListPicker itemClick start '+"tag="+tag+",index="+item.index);
        if(tag===0){
            this.setState((state) => {
                return {
                    CurrentColumnIndex0: item.index,
                }
            })
        }
        if(tag===1){
            this.setState((state) => {
                return {
                    CurrentColumnIndex1: item.index,
                }
            })
        }
        if(tag===2){

            let chooseContent=dataList.cityList[this.state.CurrentColumnIndex0].cityName+
                dataList.cityList[this.state.CurrentColumnIndex0].areaList[this.state.CurrentColumnIndex1].areaName+
                dataList.cityList[this.state.CurrentColumnIndex0].areaList[this.state.CurrentColumnIndex1].townList[item.index].townName;

                console.log('MultiListPicker itemClick  chooseContent='+chooseContent);

                    //点击dismiss事件也放在这里，但是要做个判断
            Alert.alert(
                '选中区域为',
                ''+chooseContent,
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
            )
            this.setState((state) => {
                return {
                    CurrentColumnIndex2: item.index,
                }
            })

        }
        if(tag===3){
            this.setState((state) => {
                return {
                    CurrentColumnIndex3: item.index,
                    // 这里看下怎么拼接吧
                    ChooseResult:item.key,
                }
            })
            if(tag>=this.state.ToTalDepth)
            console.log('MultiListPicker itemClick  chooseContent'+dataList.cityList[this.state.CurrentColumnIndex0].cityName+
                dataList.cityList[this.state.CurrentColumnIndex0].areaList[this.state.CurrentColumnIndex1].areaName+
                dataList.cityList[this.state.CurrentColumnIndex0].areaList[this.state.CurrentColumnIndex1].townList[this.state.CurrentColumnIndex2].townName
            );
        }

    }

    /**
     *  获取对象的长度
     * @param o
     * @returns {number|*}
     */
     getObjectLength(o){
        var t = typeof o;

        if(t == 'string'){
            return o.length;

        }else if(t == 'object'){

            var n = 0;

            for(var i in o){

                n++;
            }

            return n;
        }
        return 0;

    }


    /**
     * 根据数据源类型设定数据深度
     * @param dataSource
     */
    getMyCurrentDepth(dataSource) {
        console.log('MultiListPicker getMyCurrentDepth start dataSource=' + dataSource.toString());
        if (dataSource.subList === null || this.getObjectLength(dataSource.subList) === 0) {
            return 0;
        } else {
            return 1+this.getMyCurrentDepth(dataSource.subList[0])
        }


    }


}