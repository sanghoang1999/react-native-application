import React, { Component } from "react";
import { Image, Text, StyleSheet, View } from "react-native";
import SkiiImage from "../assets/skii.png";
export default class CategoryList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.categoryTitle}>CategoryListItem</Text>
        <Image source={SkiiImage} style={styles.categoryImage} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
    borderRadius: 4,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    marginBottom: 16,
    shadowOffset: { width: 0, height: 0 }
  },
  categoryTitle: {
    textTransform: "uppercase",
    marginBottom: 8,
    fontWeight: 700
  },
  categoryImage: {
    width: 64,
    height: 64
  }
});
