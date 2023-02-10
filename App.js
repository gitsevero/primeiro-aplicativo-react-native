import react from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Severo </Text>
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 28,
  },
  title: {
    fontSize: 32,
    color: '#f1f1f1f1',
    fontWeight: 'bold',
  }
})