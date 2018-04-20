import React, { Component } from 'react';
import {  View } from 'react-native';
import { Container, Item, Label, Form, Input, Button, Text } from 'native-base';

export default class SignUpForm extends Component {
  render() {
    return (
      <View>
      <Item floatingLabel>
            <Label>Email</Label>
            <Input autoCapitalize="none" autoCorrect={false} onChangeText={email => this.setState({ email })} />
          </Item>

          <Item floatingLabel>
            <Label>First Name</Label>
            <Input autoCapitalize="none" autoCorrect={false} onChangeText={firstName => this.setState({ firstName })} />
          </Item>

          <Item floatingLabel>
            <Label>Last Name</Label>
            <Input autoCapitalize="none" autoCorrect={false} onChangeText={lastName => this.setState({ lastName })} />
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

          <Item floatingLabel>
            <Label>Confirm Password</Label>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              onChangeText={confirm_password => this.setState({ confirm_password })}
            />
          </Item>

          <Button

          full
          rounded
          primary
          onPress={this.signUpUser.bind(this)}
        >
          <Text>Sign Up</Text>
        </Button>

        <Button transparent light>
            <Text>Light</Text>
          </Button>


          </View>
    );
  }
}
