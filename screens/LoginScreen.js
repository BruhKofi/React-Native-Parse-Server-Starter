import React, { Component } from 'react';
import { StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Container, Content, Item, Label, Form, Input, Button, Text } from 'native-base';
import Parse from 'parse/react-native';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'kofi@new.com',
      password: 'pass',
      user: null,
      loggedIn: false
    };
  }

  componentWillMount() {
    console.log('Auth screen mounted');

    Parse.User.currentAsync().then(
      function(user) {
        const authstatus = user.authenticated();
        const username = user.getUsername();
        let sessionToken = user.getSessionToken();
        console.log(user, 'username', authstatus);

        switch (user) {
          case user:
            Parse.User.become(sessionToken).then(
              function(user) {
                user.logIn();
                this.setState = ({ user: user, loggedIn: true  });
              },
              function(error) {
                console.log('couldnt log user');
              }
            );
            break;

          default:
            this.props.navigation.navigate('SignUp');
            break;
        }
      }.bind(this)
    );
  }

  componentDidMount() {}



  render() {
    const { isRegistered, loggedIn } = this.state;
    return (
      <Content contentContainerStyle={styles.container}>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
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

          <Button
            style={styles.registerButton}
            transparent
            onPress={() => this.props.navigation.navigate('SignUp')}
          >
            <Text>Register!</Text>
          </Button>
        </Form>

        <Text>{this.state.password}</Text>
        </KeyboardAvoidingView>
        </Content>

    );
  }

  async logInUser() {
    var that = this
    Parse.User.logIn(this.state.email, this.state.password, {
      success: function(user) {
        // Do stuff after successful login.
        console.log(user, 'user is here');
        that.props.navigation.navigate('Main')
      },
      error: function(user, error) {
        // The login failed. Check error to see why.
        alert(error);
      }
    });
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
    alignSelf: 'flex-end'
  }
});

export default LoginScreen;
