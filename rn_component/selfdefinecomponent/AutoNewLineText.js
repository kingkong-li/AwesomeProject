import React from "react";
import {StyleSheet, Text, View} from "react-native";


export default class AutoNewLineText extends React.Component {



    render() {
        return (
            <View style={myStyle.style1}>
                <View style={[{backgroundColor:'red'},{height: 30, width: 100, backgroundColor: 'yellow'}]}/>

                <Text style={{flex:1,fontSize: 15, marginLeft: 30, marginRight: 30}}>{this.props.text}</Text>
            </View>
        );
    }

}




const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
    },

});



const myStyle={
    'style1':{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 1,
        justifyContent:'flex-start',
        flex:1,  dd:123,
    }
};
