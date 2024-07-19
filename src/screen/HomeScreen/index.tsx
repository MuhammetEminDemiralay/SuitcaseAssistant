import React from 'react'
import { Dimensions, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { FontAwesome5 } from '@expo/vector-icons';


const { width, height } = Dimensions.get("window")

const HomeScreen = () => {


  return (
    <View style={styles.container}>
      {/* <View style={{ width: '100%', height: height * 0.8, borderWidth: 0.5, position : 'absolute', marginVertical : height * 0.1}}></View> */}


      {/* Info */}

      <View style={styles.currentTravelContainer}>
        <View style={styles.emtyBox}>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#fff' : 'rgba(255, 255, 255, 0.75)',
              },
              styles.currentTravelBtn
            ]}
          >
            <FontAwesome5 name="map-signs" size={30} color="black" />
          </Pressable>
        </View>
      </View>


      {/* weather */}

      <View style={styles.weatherContainer}>
        <Text style={{ fontSize: 25, fontWeight: '500' }}>Weather</Text>
      </View>


      {/* Map */}

      <View style={styles.mapContainer}>
        <Text style={{ fontSize: 25, fontWeight: '500' }}>Map</Text>
      </View>


    </View>
  )
}

export default HomeScreen
