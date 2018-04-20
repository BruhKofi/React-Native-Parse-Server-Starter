import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Container, Item, Label, Form, Input, Button, Text } from 'native-base';

export default class AuthScreen extends Component {
  componentWillMount() {
    console.log('Auth screen mounted');
  }

  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input autoCapitalize="none" autoCorrect={false} />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
            />
          </Item>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
            />
          </Item>
          <Button style={styles.loginbutton} full rounded success>
            <Text>Login</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10
  },
  loginbutton: {
    margin: 10
  }
});
