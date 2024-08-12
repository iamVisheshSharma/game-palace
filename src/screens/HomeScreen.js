import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';
// import Carousel from 'react-native-snap-carousel';
import {sliderData, paidGames, freeGames} from '../model/data';
// import { windowWidth } from '../utils/Dimensions';

export default function HomeScreen({navigation}) {
  const [gamesTab, setGamesTab] = React.useState(1);
  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = value => {
    setGamesTab(value);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Roboto-Medium',
              color: '#20315f',
            }}>
            Hello John Doe
          </Text>
          <TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <ImageBackground
                source={require('../assets/images/user-profile.jpg')}
                style={{width: 35, height: 35}}
                imageStyle={{borderRadius: 25}}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#C6C6C6',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
          }}>
          <Icon
            name="search"
            size={20}
            color="#C6C6C6"
            style={{marginRight: 5}}
          />
          <TextInput placeholder="Search" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 15,
          }}>
          <Text
            style={{
              fontFamily: 'Roboto-Bold',
              color: '#20315f',
              fontSize: 18,
            }}>
            Upcoming Games
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: '#0aada8', fontFamily: 'Roboto-Regular'}}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          {/* <Carousel
            ref={c => {
              this._carousel = c;
            }}
            data={sliderData}
            renderItem={renderBanner}
            sliderWidth={windowWidth - 40}
            itemWidth={300}
						loop={true}
          /> */}
        </View>
        <View style={{marginVertical: 20}}>
          <CustomSwitch
            selectionMode={1}
            option1="Free to Play"
            option2="Paid games"
            onSelectSwitch={onSelectSwitch}
          />
        </View>
        {gamesTab === 1 &&
          freeGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
              onPress={() => navigation.navigate('GameDetails', {title: item.title, id: item.id})}
            />
          ))}
        {gamesTab === 2 &&
          paidGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
              onPress={() => navigation.navigate('GameDetails', {title: item.title, id: item.id})}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}
