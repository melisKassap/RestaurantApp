import { StyleSheet, Dimensions } from 'react-native'

const styles = {
    generalFlexStyle: StyleSheet.create({
        flex: 1
    }),

    cityPage: StyleSheet.create({
        ImageBackGround: {
            flex: 1,
            width: null,
            height: null
        }
    }),
    ItemCitiesCard: StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#EFF6EE",
            padding: 10,
            margin: 5,
            borderRadius: 10,
            opacity: 0.5,
            width: Dimensions.get("window").width / 2,

        },
        viewStyle: {
            alignItems: 'center'
        },
        text: {
            color: "#000000",
            textAlign: "center",
            fontWeight: "bold",


        }
    }),

    cityPage: StyleSheet.create({

        imageBackgroundStyle: {
            flex: 1,
            width: null,
            height: null
        },

        loadingView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    }),

    restaurantPage: StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#c43c00" //ff6d00
        },

        loadingView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    }),

    ItemRestaurant: StyleSheet.create({
        containerView: {
            flex: 1,
            alignItems: 'center'
        },
        container: {
            flex: 1,
            padding: 10,
            margin: 10,
            backgroundColor: '#ff9e40',
            borderRadius: 10,
            width: Dimensions.get('window').width / 1.1,
            height: Dimensions.get('window').height / 2

        },

        imageView: {
            flex: 1,
            alignItems: 'center'
        },
        imageStyle: {
            flex: 1,
            borderRadius: 10,
            width: Dimensions.get('window').width / 1.2,
            height: Dimensions.get('window').height / 2.2
        },

        textStyle: {
            fontSize: 16,
            padding: 5,
            alignSelf: 'center',
            fontWeight: 'bold',
            color: "#900",
            opacity: 0.5
        }
    }),

    SearchBar: StyleSheet.create({
        container: {
            backgroundColor: "#EFD6EE",
            margin: 5,
            padding: 2,
            borderRadius: 10,
            elevation: 3,
            height: 40,
            opacity: 0.7,
            color: "#900",

        }
    }),

    RestaurantDetail: StyleSheet.create({
        restaurantContainer: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: "#c43c00"
        },

        container: {

            backgroundColor: "#EFF6EE",
            padding: 8,
            margin: 5,
            borderRadius: 10,
            opacity: 0.5,
            width: Dimensions.get("window").width / 1.2,
            height: 35,
            shadowOpacity: 0.36,
            elevation: 3
        },
        imageStyle: {

            borderRadius: 10,
            width: Dimensions.get('window').width / 1.2,
            height: Dimensions.get('window').height / 2.2
        },

        restaurantNameStyle: {
            color: '#900',
            fontSize: 18,
            padding: 10,
            fontWeight: 'bold',
            textDecorationLine: 'underline',
            opacity: 0.6
        },

        touchableContainer: {
            backgroundColor: "#81b9bf",
            padding: 8,
            margin: 5,
            borderRadius: 10,
            opacity: 0.5,
            width: Dimensions.get("window").width / 1.2,
            height: 35,
            shadowColor: '#000',
            elevation: 3
        },
        textStyle: {
            fontWeight: 'bold'
        }
    })
}

export default styles;