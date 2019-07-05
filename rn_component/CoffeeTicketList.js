import React from "react";
import {View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';

export default class CoffeeTicketList extends React.Component{


    /**
     * 构造函数
     * @param props
     */
    constructor(props) {
        console.log('CoffeeTicketList constructor start')
        super(props);

    }

    /**
     * 控件生命周期函数，该控件接收到新的props会调用
     * 如果新的pros导致页面重新渲染，那么这个会在渲染前被执行
     * @param nextProps
     * @param nextContext
     */
    componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {
        console.log('CoffeeTicketList componentWillReceiveProps ')

    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.dataSource}
                    keyExtractor={(item, index) => index}
                    renderItem={({item,index})=>this.renderItem({item,index})}
                    horizontal={false}
                    numColumns={2}
                />
            </View>
        )
    };

    renderItem({item, index}) {
        console.log('CoffeeTicketList componentWillReceiveProps item='+item+',index='+index);
        return (
           <CoffeeTicketItem
           data={item}/>

        );
    }

}

/**
 * 咖啡券Item 控件
 */
class CoffeeTicketItem extends React.Component{

    render() {
        return (
            <View style={styles.coffeeItem}>
                <View style={{flexDirection:'row',justifyContent: 'flex-start',alignItems: 'flex-start'}}>
                    <Text style={{marginLeft:5,marginTop: 5,fontSize: 20,fontWeight: 'bold'}} numberOfLines={1}>{this.props.data.ticketLevel}</Text>
                    <Text style={{marginTop: 10,marginLeft:7}} numberOfLines={1}>{this.props.data.ticketType}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{justifyContent: 'flex-start'}}>
                        <Text style={{marginLeft:5,marginTop: 5,fontSize: 20,fontWeight: 'bold'}} numberOfLines={1}>{'¥'+this.props.data.ticketPrice}</Text>
                        <Text style={{marginLeft:5,marginTop: 5}} numberOfLines={1}>{'尚余杯量为'+this.props.data.remainCups}</Text>
                    </View>
                    <Image
                        source={require('./source/img/coffeeCup.png')}
                        style={{width: 50, height: 50,marginLeft:10}}
                    />
                </View>
            </View>
        )
    };

}



const ScreenW = Dimensions.get('window').width;
const CoffeeItemPadding = 15;
const itemW = (ScreenW - (CoffeeItemPadding * 3)) / 2;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 15,
    },
    coffeeItem: {
        width:itemW,
        marginTop:10,
        backgroundColor:'white',
        marginLeft:CoffeeItemPadding,
        alignItems: 'flex-start',
        borderWidth: 1, borderRadius: 5
    }
})
