import { FC, useState } from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";

interface Props {
  title: string;
  callback?: () => void;
}

export const Button: FC<Props> = ({ title, callback }) => {
  const [pressed, setPressed] = useState(false);
  const onPress = callback ?? (() => {});
  return (
    <View style={styles.cotainer}>
      <Pressable
        style={ pressed ? styles.buttonPressed : styles.buttonNormal}
        onPressIn={() => {setPressed(true);  onPress()}}
        onPressOut={() => setPressed(false)}
      >
        <Text style={ pressed ? styles.buttonTextPressed : styles.buttonTextNormal }>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    padding: 35,
  },
  buttonNormal: {
    alignitems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  buttonPressed: {
    alignitems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderColor: "black",
    borderWidth: 0.5,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "white",
  },
  buttonTextNormal: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  buttonTextPressed: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
});
