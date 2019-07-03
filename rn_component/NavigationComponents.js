import React from "react";
import {
    View,
    Text,
    Button,
    Image
} from 'react-native';

export class LuckinBackView extends React.Component {
    render() {
        return (
            <Image
                style={{width: '86%', height: 25, marginLeft: 18}}
                source={require('./source/img/baseline_arrow_back_black.png')}
                onClick={this.props.onClick}
            />
        );
    }
}

export class LKCMTitleBar extends React.Component {

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row', justifyContent: "center"}}>
                <Text style={{fontSize: 18, color: '#333333'}}>{this.props.titleName}</Text>
            </View>
        );
    }
}