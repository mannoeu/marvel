import React from "react";
import { View, Text, FlatList, ImageBackground } from "react-native";

import styles from "./styles";

const List = ({ title, data }) => {
  return (
    <View style={styles.listItems}>
      <Text>{title}</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.heroCard}>
            <Text style={styles.heroTitle}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default List;
