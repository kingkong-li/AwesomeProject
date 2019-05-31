import {FlatList, View, Text, StyleSheet, Alert} from 'react-native'
import React from "react";
import {dataList} from "./data/NativeData";
import MyListViewItem from "./MyListViewItem";


export default class MultiListPicker extends React.Component {

    constructor(props) {
        super(props);
        // 定义状态机
        this.state = {
            ToTalDepth: 3,
            CurrentColumnIndex0:0,
            CurrentColumnIndex1:0,
            CurrentColumnIndex2:0,
            CurrentColumnIndex3:0,
            ChooseResult:'',
            ChooserIndexArray:[],

        };
    }

    /**
     * 控件生命周期函数，表示该控件已经挂载到页面上，初始化渲染之后立马执行
     * 这个方法主要用于初始化之后从网络拉新数据
     */
    componentDidMount() {

        this.state.ToTalDepth=this.getDefaultCurrentDepth(dataList.godProviderData)

        // 加载默认的chooseIndexArray
        for(let k=0;k<this.state.ToTalDepth;k++){
            this.state.ChooserIndexArray[k]=0;
        }
        console.log('MultiListPicker componentDidMount start default ToTalDepth=' + this.state.ToTalDepth+", ChooserIndexArray"+this.state.ChooserIndexArray);
        this.setState((state) => {
            return {

            }});

    }

    objectIsUndefinedOrNull(object) {
        if (typeof(object) == "undefined" || object===null)
        {
            console.log('MultiListPicker checkUndefinedOrNull '+ "object is undefined or null")
            return true;
        }else {
            return false;
            console.log('MultiListPicker checkUndefinedOrNull '+ "object is valid")
        }

    }

    render() {

        var pages = [];

        var dataSource=dataList.godProviderData;
        this.state.ToTalDepth=this.getMyCurrentDepth(dataSource,0);
        console.log('MultiListPicker render depth= '+ this.state.ToTalDepth)
        for(let i=0;i<this.state.ToTalDepth;i++){
            var myListData=[];
            for(let j=0;j<this.getObjectLength(dataSource.subList);j++){
                myListData.push({key:dataSource.subList[j].Name})
            }
            console.log('MultiListPicker render myListData= '+ myListData)
            pages.push(
                <FlatList
                    data={myListData}
                    keyExtractor={item => item.keys}
                    renderItem={(item,index) => this.renderItem(item,i)}
                />
            );
            dataSource=dataSource.subList[this.state.ChooserIndexArray[i]];
        }

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
        console.log('MultiListPicker renderItem '+ "myIndex="+this.state.ChooserIndexArray[tag])
        return (
            <MyListViewItem
                onPressItem={()=>{
                    console.log("MultiListPicker-----------tag="+tag +',index'+item.index);
                    this.itemClick(item,tag);
                    // this.itemClick();
                }}
                title={item.item.key}
                onClickState={item.index ===this.state.ChooserIndexArray[tag]}
            />

        );


    }


    itemClick(item,tag){
        console.log('MultiListPicker itemClick start '+"tag="+tag+",index="+item.index);

        this.state.ChooserIndexArray[tag]=item.index;
        for(let ii=0;ii<this.state.ToTalDepth;ii++){
            if(ii>tag){
                this.state.ChooserIndexArray[ii]=0;
            }
        }
        if(tag===(this.state.ToTalDepth-1)){
            var showContent=this.getChooseContent(dataList.godProviderData);
            console.log('MultiListPicker itemClick  chooseContent='+showContent);
            Alert.alert(
                '选中区域为',
                ''+showContent,
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
            )
        }
        this.setState((state) => {
            return {

            }});



    }

    /**
     *  获取对象的长度,如果是数组返回数据长度，如果是string 返回length
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


    /***
     * 根据数据源和数据源级别确定它的深度
     * 比如初始数据源，我们未进行剥离的时候它级别就是0 剥离一次就是级别1
     * @param dataSource
     * @param dataLevel
     * @returns {number|*}
     */
    getMyCurrentDepth(dataSource,dataLevel) {
        console.log('MultiListPicker getMyCurrentDepth start dataSource=' + dataSource.Name);
        if (dataSource.subList === null || this.getObjectLength(dataSource.subList) === 0) {
            return 0;
        } else {
            if(this.objectIsUndefinedOrNull(this.state.ChooserIndexArray[dataLevel]))
            {
                return 0;
            }
            else {
                return 1+this.getMyCurrentDepth(dataSource.subList[this.state.ChooserIndexArray[dataLevel]],dataLevel+1)
            }

        }


    }

    getDefaultCurrentDepth(dataSource) {
        console.log('MultiListPicker getDefaultCurrentDepth start dataSource=' + dataSource.Name);
        if (dataSource.subList === null || this.getObjectLength(dataSource.subList) === 0) {
            return 0;
        } else {
                return 1+this.getDefaultCurrentDepth(dataSource.subList[0])

        }


    }


    getChooseContent(data) {
        var ChooseContent="";
        for(let i=0;i<this.state.ToTalDepth;i++){
            ChooseContent=ChooseContent+ data.subList[0].Name;
            console.log('MultiListPicker getChooseContent data=' + data.subList[0].Name+" ,i="+i+", ChooseContent= "+ChooseContent);
            data=data.subList[this.state.ChooserIndexArray[i]];


        }
        return ChooseContent;

    }
}