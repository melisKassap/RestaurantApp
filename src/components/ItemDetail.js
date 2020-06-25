import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import styles from '../styles/styles'

import Icon from 'react-native-vector-icons/FontAwesome';

const ItemDetail = (props) => {
    
    return (

        <View style={styles.RestaurantDetail.restaurantContainer}>

            <View style={styles.ItemRestaurant.container}>
                <View style={styles.ItemRestaurant.imageView}>
                    <Image style={styles.RestaurantDetail.imageStyle}
                        source={{ uri: props.data.image_url }} />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.RestaurantDetail.restaurantNameStyle}>
                        {props.data.name}
                    </Text>


                    <View style={styles.RestaurantDetail.container}>
                        <Icon name="location-arrow" size={15} color="#900">
                            <Text style={styles.RestaurantDetail.textStyle}>{props.data.city}</Text>
                        </Icon>
                    </View>

                    <View style={styles.RestaurantDetail.container}>
                        <Icon name="address-book" size={15} color="#900">
                            <Text style={styles.RestaurantDetail.textStyle}> {props.data.address}</Text>

                        </Icon>
                    </View>

                    <View style={styles.RestaurantDetail.container}>

                        <Icon name="phone-square" size={15} color="#900">
                            <Text style={styles.RestaurantDetail.textStyle}> {props.data.phone}</Text>

                        </Icon>
                    </View>

                    <TouchableOpacity style={styles.RestaurantDetail.touchableContainer}
                        onPress={
                            () => {
                                Linking.openURL(`${props.data.mobile_reserve_url}`);
                            }}
                    >
                        <Icon name="calendar-check-o" size={15} color="#900">
                            <Text style={styles.RestaurantDetail.textStyle}> Make Reservation</Text>

                        </Icon>
                    </TouchableOpacity>
                </View>


            </View>

        </View>
    )
}


export { ItemDetail };