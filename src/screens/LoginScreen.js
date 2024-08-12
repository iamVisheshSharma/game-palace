import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LoginSvg from '../assets/images/misc/login.svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Google from '../assets/images/misc/google.svg';
import Facebook from '../assets/images/misc/facebook.svg';
import Twitter from '../assets/images/misc/twitter.svg';
import {AuthContext} from '../context/AuthContext';

export default function LoginScreen({navigation}) {
  const {login} = React.useContext(AuthContext);
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <LoginSvg
            height={300}
            width={300}
            style={{transform: [{rotate: '-5deg'}]}}
          />
        </View>
        <Text
          style={{
            fontSize: 28,
            fontFamily: 'Roboto-Medium',
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Login
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
            paddingBottom: 8,
            marginBottom: 25,
          }}>
          <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          <TextInput
            placeholder="Email ID"
            style={{flex: 1, paddingVertical: 0}}
            keyboardType="email-address"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
            paddingBottom: 8,
            marginBottom: 25,
          }}>
          <IonIcons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          <TextInput
            placeholder="Password"
            style={{flex: 1, paddingVertical: 0}}
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={() => {}}>
            <Text
              style={{
                color: '#AD40AF',
                fontWeight: '700',
                fontFamily: 'Roboto-Bold',
              }}>
              Forgot?
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {login()}}
          style={{
            backgroundColor: '#AD40AF',
            padding: 20,
            borderRadius: 10,
            marginBottom: 30,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontSize: 16,
              fontFamily: 'Roboto-Medium',
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
          Or, Login with....
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <Google height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <Facebook height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <Twitter height={24} width={24} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text style={{fontFamily: 'Roboto-Medium', color: '#333'}}>New to the App?</Text>
          <TouchableOpacity onPress={() => {navigation.navigate('Register')}}>
            <Text
              style={{
                fontWeight: '700',
                color: '#AD40AF',
                fontFamily: 'Roboto-Medium',
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
