import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import axios from 'axios'

import { ItemDetail } from '../components/'
import styles from '../styles/styles';

const RestaurantDetail = (props) => {

    const api = "https://opentable.herokuapp.com/api/";
    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchDetail()
    }, [])


    const fetchDetail = async () => {
        let restaurantDetailPage = await axios.get(api + `restaurants/${props.route.params.sendId}`)
        setDetail(restaurantDetailPage.data)
      
    }

   
    return (
        <SafeAreaView style={styles.generalFlexStyle}>
            <View style={styles.generalFlexStyle}>
               <ItemDetail data={detail}/>
            </View>
        </SafeAreaView>

    )
}

export { RestaurantDetail }