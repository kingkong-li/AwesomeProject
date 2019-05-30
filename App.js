import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from "./RN/LoginScreen"; // Version can be specified in package.json
import ModalExample from "./RN/ModalExample";
import MultiListPicker from "./RN/MultiListPicker";
import {WhiteSpace} from "@ant-design/react-native";
class HomeScreen extends React.Component {


  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
              title="Go to Details"
              onPress={() => this.props.navigation.navigate('Detail')}
          />
            <Button
                title="Go to Login"
                onPress={() => this.props.navigation.navigate('Login')}
            />
            <WhiteSpace/>
            <Button
                title="Go to Modal"
                onPress={() => this.props.navigation.navigate('Modal')}
            />
            <WhiteSpace/>
            <WhiteSpace/>
            <Button
                title="Go to MultiListPicker"
                onPress={() => this.props.navigation.navigate('MultiListPicker')}
            />

        </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
        </View>
    );
  }
}

const RootStack = createStackNavigator(
    {
      Home: HomeScreen,
      Detail: DetailsScreen,
        Login:LoginScreen,
        Modal:ModalExample,
        MultiListPicker:MultiListPicker,
    },
    {
      initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
