import { useState } from "react";
import { View, TextInput, ScrollView, StyleSheet } from "react-native";
import { Button } from "../components/Button";

export const FormTask = () => {
  const [task, setTask] = useState({
    name: "",
  });
  return (
    <ScrollView>
      <View style={styles.cotainer}>
        <TextInput
          style={styles.inputGroup}
          placeholder="Name Task"
          onChange={(value) =>
            setTask({ ...task, name: value.nativeEvent.text })
          }
        />
      </View>
      <Button
        title="SAVE"
        callback={() => {
          console.log(task);
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    fontSize: 20,
  },
  cotainer: {
    flex: 1,
    padding: 35,
  },
});
