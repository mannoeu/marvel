import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: Constants.statusBarHeight + 20,
    paddingBottom: Constants.statusBarHeight + 20,
  },
  mutedText: {
    color: "#999",
    fontSize: 16,
  },
  title: {
    fontSize: 32,
    color: "#191919",
    fontWeight: "bold",
  },
});
