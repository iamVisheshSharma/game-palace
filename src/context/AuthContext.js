import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
	const [isLoading, setisLoading] = React.useState(false)
	const [userToken, setUserToken] = React.useState(null)

	const login = () => {
		setisLoading(true)
		setUserToken('qwerty');
		AsyncStorage.setItem('userToken', 'qwerty')
		setisLoading(false);
	}

	const logout = () => {
		setisLoading(true);
		setUserToken(null);
		AsyncStorage.removeItem('userToken');
		setisLoading(false);
	}

	const isLoggedIn = async () => {
		try {
			setisLoading(true)
			let userToken = await AsyncStorage.getItem('userToken');
			setUserToken(userToken);
			setisLoading(false)
		} catch (error) {
			console.log(`Logging error occur ${error}`);
		}
	}

	React.useEffect(() => {
		isLoggedIn();
	}, [])

	return(
		<AuthContext.Provider value={{login, logout, isLoading, userToken}}>
			{children}
		</AuthContext.Provider>
	)
}