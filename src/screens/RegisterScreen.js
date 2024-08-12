import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import RegisterSvg from '../assets/images/misc/registration.svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Google from '../assets/images/misc/google.svg';
import Facebook from '../assets/images/misc/facebook.svg';
import Twitter from '../assets/images/misc/twitter.svg';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import DatePicker from 'react-native-date-picker';

export default function RegisterScreen({navigation}) {
  const [date, setDate] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);
  const [dobLabel, setdobLabel] = React.useState('Date of Birth');

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <ScrollView style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <RegisterSvg
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
          Register
        </Text>
        <InputField
          label="Full Name"
          icon={
            <IonIcons
              name="person-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
        />
        <InputField
          label="Email ID"
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          keyboardType="email-address"
        />
        <InputField
          label="Password"
          icon={
            <IonIcons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          inputType="password"
        />
        <InputField
          label="Confirm Password"
          icon={
            <IonIcons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          inputType="password"
        />

        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 30,
          }}>
          <IonIcons
            name="calendar-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          <TouchableOpacity
            onPress={() => {
              setOpen(true);
            }}>
            <Text style={{marginLeft: 5, color: '#666', marginTop: 5}}>
              {dobLabel}
            </Text>
          </TouchableOpacity>
        </View>
        <DatePicker
          modal
          open={open}
          date={date}
          mode={'date'}
					textColor="#333"
					maximumDate={new Date("2005-01-01")}
					minimumDate={new Date('1980-01-01')}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
						setdobLabel(date.toDateString());
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />

        <CustomButton label="Register" onPress={() => {}} />
        <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
          Or, Register with....
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
          <Text style={{fontFamily: 'Roboto-Medium', color: '#333'}}>
            Already register?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text
              style={{
                fontWeight: '700',
                color: '#AD40AF',
                fontFamily: 'Roboto-Medium',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
