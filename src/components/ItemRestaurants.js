import React from 'react';
import { View, Text, Image,TouchableOpacity } from 'react-native';

import styles from '../styles/styles'



const ItemRestaurants = (props) => {
    
    return (
        <View style={styles.ItemRestaurant.containerView}>
            <View style={styles.ItemRestaurant.container}>
                <TouchableOpacity style={styles.ItemRestaurant.imageView} onPress={props.onRestaurantSelect}>
                    <Image style={styles.ItemRestaurant.imageStyle} source={{ uri: props.restaurantData.image_url }} />
                </TouchableOpacity>

                <Text style={styles.ItemRestaurant.textStyle}>{props.restaurantData.name}</Text>
            </View>
        </View>

    )
}

export { ItemRestaurants }