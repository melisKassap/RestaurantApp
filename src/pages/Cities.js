import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, View, Button, ActivityIndicator, ImageBackground } from 'react-native';


import { ItemCities, SearchBar } from '../components';
import styles from '../styles/styles';

const Cities = props => {

    const [originalList, setOriginalList] = useState([]);
    const [cityList, setCityList] = useState([]);
    const [loading, setLoading] = useState(false);
    const api = "https://opentable.herokuapp.com/api/";

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        setLoading(true)
        let responseCityData = await axios.get(api + "cities")

        setCityList(responseCityData.data.cities)
        setOriginalList(responseCityData.data.cities)
        setLoading(false)

    }

    const renderCities = ({ item }) => {
        return (
            <ItemCities
                cityData={item}
                onCitySelect={() => onCitySelect(item)}
            />

        )
    }

    function onCitySelect(cityName) {
      
        props.navigation.navigate("RestaurantsPage", { sendCityName: cityName })
    }

    const searchCity = (cityText) => {
      
        let filteredCity = originalList.filter(function (item) {
            const itemData = item.toUpperCase()
            const cityData = cityText.toUpperCase()

            return itemData.indexOf(cityData) > -1
        })

        setCityList(filteredCity)
    }


    return (
        <SafeAreaView style={styles.generalFlexStyle}>
            <View style={styles.generalFlexStyle}>

                <ImageBackground style={styles.cityPage.imageBackgroundStyle} source={require('../assets/duvarkagidi.jpg')}>
                    <SearchBar onSearchText={searchCity} />

                    {
                        loading ?
                            <View style={styles.cityPage.loadingView}>

                                <ActivityIndicator />
                            </View>
                            :
                            <FlatList
                                keyExtractor={(item, index) => index.toString()}
                                data={cityList}
                                renderItem={renderCities}
                            />


                    }

                </ImageBackground>
            </View>

        </SafeAreaView>
    )
}

export { Cities }
