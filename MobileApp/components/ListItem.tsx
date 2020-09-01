import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from "react-native-maps";

const ListItem = ({ item }) => {
    console.log('item', item)
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemTextTitle}>{item.fruit}</Text>
                <Text style={styles.listItemText}>Appearance: {item.review.appearance}</Text>
                <Text style={styles.listItemText}>Color: {item.review.color}</Text>
                <Text style={styles.listItemText}>Taste: {item.review.taste}</Text>
                <Text style={styles.listItemText}>Location: </Text>
                <View style={styles.mapView}>
                    <MapView
                        style={{ ...StyleSheet.absoluteFillObject }}
                        initialRegion={{
                            latitude: item.location.latitud,
                            longitude: item.location.longitud,
                            latitudeDelta: 0.05,
                            longitudeDelta: 0.05
                        }}
                    >
                        <Marker coordinate={{ latitude: item.location.latitud, longitude: item.location.longitud }} />
                    </MapView>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    listItemView: {
        justifyContent: 'space-between',
    },
    listItemText: {
        fontSize: 18
    },
    listItemTextTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    mapView: {
        height: 250
    }
})

export default ListItem;