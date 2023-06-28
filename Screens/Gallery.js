import React, { useState, useCallback } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

function Gallery({ navigation }) {
    return <View>
        <Text>Gallery</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>Back</Text>
        </TouchableOpacity>
    </View>
}

export default Gallery