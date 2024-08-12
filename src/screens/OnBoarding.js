import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import ContactImage from '../../assets/contactImage.svg';

export default function Main({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: 20}}>
        <Text style={styles.heading}>Game Place</Text>
      </View>
      <View style={styles.container}>
        <ContactImage width={300} height={300} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
        <Text style={styles.buttonFont}>Let's Go</Text>
        <MaterialIcon name="arrow-forward-ios" size={22} color="#FFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'Roboto-Bold',
    color: '#20315f',
  },
  button: {
    backgroundColor: '#AD40AF',
    padding: 20,
    width: '90%',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  buttonFont: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
    fontFamily: 'Roboto-Medium',
  },
});
