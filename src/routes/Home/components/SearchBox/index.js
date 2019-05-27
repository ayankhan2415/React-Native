import React from 'react';
import {Text} from 'react-native';
import {View, InputGroup, Input } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './SearchBoxStyles';

export const SearchBox = ()=>{
  return(
    <View  style={styles.searchBox}  >
      <Text style= {styles.label} >
        Allah Tera Buht Shukar hy ! LOve You Soo Much
      </Text>

    <InputGroup>
    <Input  style={styles.inputSearch} placeholder='Choos Pickup location'  />

    </InputGroup>
    </View>
  );
}
export default SearchBox;