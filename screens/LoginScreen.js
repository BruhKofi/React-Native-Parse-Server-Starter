import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Container, Item, Label, Form, Input, Button, Text } from 'native-base';
import Parse from 'parse/react-native'

export default class LoginScreen extends Component {
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
      confirm_password: '',
    };
  }

  async logInUser() {
    Parse.User.logIn(this.state.email, this.state.password, {
      success: function(user) {
        // Do stuff after successful login.
        console.log(user, "user is here");
        alert("success")
      },
      error: function(user, error) {
        // The login failed. Check error to see why.
        alert(error)
      }
    });
  }

  render() {
    const {isRegistered} = this.state
    return (
      <Container style={styles.container}>

        <Form>
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
            style={styles.loginbutton}
            full
            rounded
            success
            onPress={this.logInUser.bind(this)}
          >
            <Text>Login</Text>
          </Button>

          <Button style={styles.registerButton} transparent onPress={() =>  this.props.navigation.navigate('SignUp')}>
          <Text>Register</Text>
        </Button>
        </Form>

        <Text>{this.state.password}</Text>
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
  registerButton: {
    alignSelf: 'flex-end',
  }
});
