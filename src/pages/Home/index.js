import React from "react";
import { Text, SafeAreaView, ScrollView } from "react-native";

import List from "../../components/List";

import styles from "./styles";

const data = [
  {
    id: 1,
    title: "test",
  },
  {
    id: 2,
    title: "test",
  },
  {
    id: 3,
    title: "test",
  },
  {
    id: 4,
    title: "test",
  },
  {
    id: 5,
    title: "test",
  },
  {
    id: 6,
    title: "test",
  },
];

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mutedText}>Bem-vindo ao Marvel Heroes</Text>
      <Text style={styles.title}>Escolha o seu personagem</Text>
      <ScrollView decelerationRate={0.99} showsVerticalScrollIndicator={false}>
        <List title="Herois" data={data} />
        <List title="Vilões" data={data} />
        <List title="Anti-heróis" data={data} />
        <List title="Alienígenas" data={data} />
        <List title="Humanos" data={data} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
