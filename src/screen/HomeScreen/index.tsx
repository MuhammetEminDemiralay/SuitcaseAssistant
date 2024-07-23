import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, FlatList, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTravelData } from '../../redux/travelSlice';
import CountryFlag from 'react-native-country-flag'

const { width, height } = Dimensions.get("window")

const HomeScreen = () => {

  const dispatch: any = useDispatch();
  const { allTravelData } = useSelector((state: any) => state.travel)

  const [viewable, setViewable] = useState("");
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const contentViewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 })
  const contentFlatlistRef = useRef<any>()
  const contentOnViewRef = useRef((viewableItems: any) => {
    setViewable(viewableItems.viewableItems[0].item)

    const startDate = new Date(viewableItems.viewableItems[0].item.startDate)
    const endDate = new Date(viewableItems.viewableItems[0].item.endDate)

    setStartDate(`${startDate.getDate() < 9 ? 0 : ""}${startDate.getDate()} ${startDate.getMonth() < 9 ? 0 : ""}${startDate.getMonth() + 1} ${startDate.getFullYear()}`)
    setEndDate(`${endDate.getDate() < 9 ? 0 : ""}${endDate.getDate()} ${endDate.getMonth() < 9 ? 0 : ""}${endDate.getMonth() + 1} ${endDate.getFullYear()}`)

  })

  console.log("Start date", startDate);
  console.log('End date', endDate);



  useEffect(() => {
    const getAllAsyncStorageData = async () => {
      const keys = await AsyncStorage.getAllKeys()

      if (keys.length != allTravelData.length) {
        for (let key of keys) {
          const data = await AsyncStorage.getItem(key)
          if (data != null) {
            dispatch(getAllTravelData(JSON.parse(data)))
          }
        }
      }
    }

    getAllAsyncStorageData()
  }, [])



  return (
    <View style={styles.container}>
      {/* <View style={{ width: '100%', height: height * 0.8, borderWidth: 0.5, position : 'absolute', marginVertical : height * 0.1}}></View> */}


      {/* Info */}

      <View style={styles.currentTravelContainer}>

        <FlatList
          data={allTravelData}
          renderItem={({ item, index }) => (
            <View key={index} style={styles.travelBox}>
              <View style={styles.travelContentBox}>
                <View style={styles.contentWrapper}>
                  <CountryFlag style={styles.flag} size={10} isoCode={item.code} />
                  <Text style={styles.cityText}>{item.countryName} -</Text>
                  <Text style={styles.cityText}>{item.city}</Text>
                </View>
              </View>
              <View style={styles.travelContentBox}>
                <View style={styles.contentWrapper}>

                  <View style={styles.date}>
                    <FontAwesome6 name="hourglass-start" size={20} color="#343a40" />
                    <Text style={styles.dateText}>{startDate}</Text>
                  </View>

                  <View style={styles.date}>
                    <FontAwesome6 name="hourglass-start" size={20} color="#343a40" />
                    <Text style={styles.dateText}>{endDate}</Text>
                  </View>

                </View>
              </View>
            </View>
          )}
          ref={contentFlatlistRef}
          style={styles.travelContent}
          contentContainerStyle={styles.travelContenContainer}
          horizontal
          snapToInterval={(width * 0.9) - (height * 0.1)}
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={contentOnViewRef.current}
          viewabilityConfig={contentViewConfigRef.current}
        />

        <View style={styles.emtyBox}>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#fff' : 'rgba(255, 255, 255, 0.5)',
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
