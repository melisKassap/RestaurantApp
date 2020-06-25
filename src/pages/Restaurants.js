import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';

import { ItemRestaurants } from '../components/'
import styles from '../styles/styles'

const Restaurants = (props) => {
    const api = "https://opentable.herokuapp.com/api/";
    const [restaurantDetail, setRestaurantDetail] = useState({});
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchRestaurants()
    }, [])

    const fetchRestaurants = async () => {
        setLoading(true)
        let restaurantsDetail = await axios.get(api + `restaurants?city=${props.route.params.sendCityName}`);
        setRestaurantDetail(restaurantsDetail.data.restaurants);
        setLoading(false);
    }

    const renderRestaurants = ({ item }) => {

        return (

            <ItemRestaurants
                restaurantData={item}
                onRestaurantSelect={() => onRestaurantSelect(item.id)}
            />
        )
    }

    function onRestaurantSelect(restaurantId) {

        props.navigation.navigate("Detail", { sendId: restaurantId })
    }

    return (
        <SafeAreaView style={styles.generalFlexStyle}>
            <View style={styles.restaurantPage.container}>

                {
                    loading ?

                        <View style={styles.restaurantPage.loadingView}>
                            <ActivityIndicator />
                        </View>
                        :
                        <FlatList
                            keyExtractor={(_, index) => index.toString()}
                            data={restaurantDetail}
                            renderItem={renderRestaurants}
                        />
                }
            </View>

        </SafeAreaView>
    )
}

export { Restaurants };