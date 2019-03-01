import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';
import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react-native';
import { ApolloProvider } from 'react-apollo';
import { AppNavigator } from './routes';
import { store } from './redux/store';
import client from './apollo/client';

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  </ApolloProvider>
);

const theme = StyleSheet.create({
  ...AmplifyTheme,
  container: {
    ...AmplifyTheme.container,
    backgroundColor: '#FFFFFF'
  },
});

export default withAuthenticator(App, false, [], null, theme);
