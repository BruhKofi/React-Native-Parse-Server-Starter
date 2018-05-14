import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthNavigation from './AuthNavigation';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';
import { SwitchNavigator } from 'react-navigation';

createRootNavigator = (signedIn = true) => {
  return SwitchNavigator(
    {
      Main: {
        screen: MainTabNavigator
      },
      Auth: {
        screen: AuthNavigation
      }
    },
    {
      initialRouteName: signedIn ? 'Main' : 'Auth'
    },
    {
      navigationOptions: () => ({
        headerTitleStyle: {
          fontWeight: 'normal'
        }
      })
    }
  );
};

export default class RootNavigator extends React.Component {
  state = {
    signedIn: false,
    user: null
  };

  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    const { signedIn } = this.state;
    const Layout = createRootNavigator(signedIn);
    return <Layout />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
  }

  _handleNotification = ({ origin, data }) => {
    console.log(
      `Push notification ${origin} with data: ${JSON.stringify(data)}`
    );
  };
}
