import React from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from '../styles/styles'
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = (props) => {

    return (
        <View style={styles.SearchBar.container}>
            <TextInput
                onChangeText={props.onSearchText}
                placeholder="Searching restaurant.."
            />
            
        </View>
    )
}

export { SearchBar }