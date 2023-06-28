import React, { useState, useCallback } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

function NameCard({ name }) {
  if (name === undefined) return null
  return <View style={styles.wrapper}>
    <Text style={styles.text}>{name.fname} {name.mname} {name.lname}</Text>
  </View>
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    backgroundColor: 'red',
    color: 'white'
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  }
})


export default NameCard