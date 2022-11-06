import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigation';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from "aws-amplify-react-native";
import awsconfig from './src/aws-exports';

Amplify.configure({...awsconfig, Analytics: {disabled: true} });

function App() {
  return (
    <View style={styles.container}>
      {/* <ChatScreen/> */}
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    paddingBottom: 15
  },
});

export default withAuthenticator(App);