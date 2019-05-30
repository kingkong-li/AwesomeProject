import React, {Component} from "react";
import {Modal, Text, TouchableHighlight, View, StyleSheet} from "react-native";

export default class ModalExample extends React.Component {
    state = {
        modalVisible: false
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <View style={styles.container}>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert("Modal has been closed.");
                    }}
                >
                    <View style={{marginTop: 192, backgroundColor: 'red'}}>
                        <View>
                            <Text>Hello World!</Text>
                            <Text>Hello World!</Text>
                            <Text>Hello World!</Text>
                            <Text>Hello World!</Text>
                            <Text>Hello World!</Text>
                            <Text>Hello World!</Text>
                            <Text>Hello World!</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}
                            >
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <View style={{marginTop: 22,}}>
                    <TouchableHighlight
                        onPress={() => {
                            this.setModalVisible(true);
                        }}
                        style={{marginBottom: 22, justifyContent: "center",}}
                    >
                        <Text>Show Modal,bugai ddekhkdjhdh</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        backgroundColor: 'white'
    },
});