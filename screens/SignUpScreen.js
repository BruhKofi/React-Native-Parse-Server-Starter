import React, { Component } from 'react';
import { StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Container, Item, Label, Form, Input, Button, Text } from 'native-base';
import Parse from 'parse/react-native';

export default class AuthScreen extends Component {
  componentWillMount() {
    console.log('Auth screen mounted');
  }

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirm_password: ''
    };
  }

  async signUpUser() {
    const user = new Parse.User();
    user.set('username', this.state.email);
    user.set('FirstName', this.state.FirstName);
    user.set('LastName', this.state.LastName);
    user.set('email', this.state.email);
    user.set('password', this.state.password);

    user.signUp(null, {
      success: function(user) {
        // Hooray! Let them use the app now.
        console.warn('sign up success');
      },
      error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        alert('Error: ' + error.code + ' ' + error.message);
      }
    });
  }

  render() {
    const { isRegistered } = this.state;
    return (
      <Container style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={email => this.setState({ email })}
              />
            </Item>

            <Item floatingLabel>
              <Label>First Name</Label>
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={firstName => this.setState({ firstName })}
              />
            </Item>

            <Item floatingLabel>
              <Label>Last Name</Label>
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={lastName => this.setState({ lastName })}
              />
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
                onChangeText={confirm_password =>
                  this.setState({ confirm_password })
                }
              />
            </Item>

            <Button
              style={styles.loginbutton}
              full
              rounded
              primary
              onPress={this.signUpUser.bind(this)}
            >
              <Text>Sign Up</Text>
            </Button>
            </Form>

            <Text>{this.state.password}</Text>
            </KeyboardAvoidingView>
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
  },
  form: {
    flex: 1,
    justifyContent: 'space-between'
  }
});
