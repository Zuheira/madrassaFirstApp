import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
	return (
               <View style={styles.container}>
	               <Text>Zuheirahalymamad</Text>
<Text>App devolper </Text>
                      <statusBar style="auto"  />
	       </View>
       );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundcolor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
