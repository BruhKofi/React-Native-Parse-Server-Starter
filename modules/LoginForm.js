import React, { Component } from 'react';
import {  View } from 'react-native';
import { Container, Item, Label, Form, Input, Button, Text } from 'native-base';

export default class LoginForm extends Component {
  render() {
    return (
      <View>
      <Item floatingLabel>
            <Label>Email</Label>
            <Input autoCapitalize="none" autoCorrect={false} onChangeText={email => this.setState({ email })} />
          </Item>

          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
            />
          </Item>

          <Button

          full
          rounded
          success
          onPress={this.logInUser.bind(this)}
        >
          <Text>Login</Text>
        </Button>
          </View>
    );
  }
}
