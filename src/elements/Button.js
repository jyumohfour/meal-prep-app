import React, { Component } from 'react'

import {
	StyleSheet, Button, View, SafeAreaView,
	Text, Alert
} from 'react-native';

function App1() {
	return (
		<View style={styles.container}>

			<Button

				// Some properties given to Button
				title="Geeks"
				onPress={() => Alert.alert(
					'Its GeeksforGeeks !')}
			/>
		</View>
	);
}
// Some styles given to button
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#71EC4C',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default App1;
