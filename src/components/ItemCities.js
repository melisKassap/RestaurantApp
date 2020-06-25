import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from '../styles/styles'

const ItemCities = (props) => {
   
    return (
        <View style={styles.ItemCitiesCard.viewStyle} >
            <TouchableOpacity style={styles.ItemCitiesCard.container} onPress={props.onCitySelect}>
                <Text style={styles.ItemCitiesCard.text}>{props.cityData}</Text>
            </TouchableOpacity>
        </View>



    )
}

export { ItemCities };