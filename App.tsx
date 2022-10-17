import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { RoutesTask } from './routes/RoutesTask';
 

export default function App() {
  return (
    <NavigationContainer>
      <RoutesTask/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
