import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {windowWidth} from '../utils/Dimensions';

export default function ListItem({photo, title, subTitle, isFree, price, onPress}) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
      }}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={photo}
          style={{width: 55, height: 55, borderRadius: 10, marginRight: 8}}
        />
        <View style={{width: windowWidth - 220}}>
          <Text
            style={{fontSize: 14, color: '#333', fontFamily: 'Roboto-Medium'}}>
            {subTitle}
          </Text>
          <Text
						numberOfLines={1}
            style={{
              fontSize: 14,
              color: '#333',
              fontFamily: 'Roboto-Medium',
              textTransform: 'uppercase',
            }}>
            {title}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#0aada8',
          padding: 10,
          width: 100,
          borderRadius: 10,
        }}
        onPress={onPress}
      >
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontFamily: 'Roboto_medium',
            fontSize: 14,
          }}>
          {isFree === 'Yes' && 'Play'}
					{isFree === 'No' && price}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
