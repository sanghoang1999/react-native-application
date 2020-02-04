import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import CategoryList from "./components/CategoryList";
export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <CategoryList />
        <CategoryList />
        <CategoryList />
        <CategoryList />
        <CategoryList />
        <CategoryList />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "stretch",
    paddingLeft: 16,
    paddingRight: 16
  }
});
