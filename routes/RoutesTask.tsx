import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FormTask } from "../views/FormTask";
import { ListTasks } from '../views/ListTasks';

const Stack = createNativeStackNavigator();

export const RoutesTask = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="List" component={ListTasks} /> */}
      <Stack.Screen name="Create New Task" component={FormTask} />
    </Stack.Navigator>
  );
};
