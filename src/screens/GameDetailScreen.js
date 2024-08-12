import React from 'react'
import { Text, View } from 'react-native'

export default function GameDetailScreen({navigation, route}) {
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<Text>Game Detail....</Text>
			<Text>{route.params?.title}</Text>
		</View>
	)
}
