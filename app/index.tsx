import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const RESTAURANTS = [
  {
    name: "Tatsu Ramen",
    tags: ["Ramen", "Casual", "Under $20"],
    distance: "1.2 miles",
  },
  {
    name: "Bongos Cuban Café",
    tags: ["Cuban", "Takeout"],
    distance: "0.8 miles",
  },
  {
    name: "Sushi Samurai",
    tags: ["Sushi", "Dinner"],
    distance: "2.1 miles",
  },
];

export default function Index() {
  const [index, setIndex] = useState(0);
  const restaurant = RESTAURANTS[index];

  const nextCard = () => {
    if (index < RESTAURANTS.length - 1) {
      setIndex(index + 1);
    }
  };

  const swipeLeft = () => {
    // later we'll track "dislikes"
    nextCard();
  };

  const swipeRight = () => {
    // later we'll track "likes"
    nextCard();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Nibblr</Text>

      <View style={styles.card}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <Text style={styles.meta}>
          {restaurant.tags.join(" • ")} • {restaurant.distance}
        </Text>
      </View>

      <View style={styles.buttons}>
        <Pressable style={[styles.button, styles.pass]} onPress={swipeLeft}>
          <Text style={styles.buttonText}>👎 Pass</Text>
        </Pressable>

        <Pressable style={[styles.button, styles.like]} onPress={swipeRight}>
          <Text style={styles.buttonText}>👍 Like</Text>
        </Pressable>
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050816",
    padding: 20,
    paddingTop: 60,
  },
  logo: {
    color: "white",
    fontWeight: "800",
    fontSize: 32,
    marginBottom: 30,
  },
  card: {
    backgroundColor: "#111827",
    padding: 24,
    borderRadius: 18,
  },
  name: {
    color: "white",
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 10,
  },
  meta: {
    color: "#9CA3AF",
    fontSize: 14,
  },
  buttons: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  pass: {
    backgroundColor: "#EF4444",
  },
  like: {
    backgroundColor: "#10B981",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
