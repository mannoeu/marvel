import React from "react";
import { Text, SafeAreaView, ScrollView } from "react-native";

import List from "../../components/List";

import styles from "./styles";

import data from "../../../assets/application.json";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mutedText}>Bem-vindo ao Marvel Heroes</Text>
      <Text style={styles.title}>Escolha o seu personagem</Text>
      <ScrollView decelerationRate={0.99} showsVerticalScrollIndicator={false}>
        <List title="Heróis" data={data.heroes} />
        <List title="Vilões" data={data.villains} />
        <List title="Anti-heróis" data={data.antiHeroes} />
        <List title="Alienígenas" data={data.aliens} />
        <List title="Humanos" data={data.humans} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
