//import library
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

//make Component
const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>{props.textHeader}</Text>
        </View>
    );
};

//make Component export
export default Header;

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20
  }
});
