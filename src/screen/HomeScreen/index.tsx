import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, FlatList, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { Ionicons, FontAwesome6 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTabBar, setAllTravelData } from '../../redux/travelSlice';
import CountryFlag from 'react-native-country-flag'
import { useNavigation } from '@react-navigation/native';
import MapView from 'react-native-maps';

const { width, height } = Dimensions.get("window")

const HomeScreen = () => {

  const dispatch: any = useDispatch();
  const { allTravelData, updateState } = useSelector((state: any) => state.travel);
  const navigation: any = useNavigation();

  const [weatherData, setWeatherData] = useState<any>();
  const [loading, setLoading] = useState(true);

  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const contentViewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 })
  const contentFlatlistRef = useRef<any>()
  const contentOnViewRef = useRef((viewableItems: any) => {
    setActiveKey(viewableItems.viewableItems[0].key)

    const startDate = new Date(viewableItems?.viewableItems[0]?.item?.startDate)
    const endDate = new Date(viewableItems?.viewableItems[0]?.item?.endDate)
    setStartDate(`${startDate.getDate() < 9 ? 0 : ""}${startDate.getDate()} ${startDate.getMonth() < 9 ? 0 : ""}${startDate.getMonth() + 1} ${startDate.getFullYear()}`)
    setEndDate(`${endDate.getDate() < 9 ? 0 : ""}${endDate.getDate()} ${endDate.getMonth() < 9 ? 0 : ""}${endDate.getMonth() + 1} ${endDate.getFullYear()}`)

  })


  useEffect(() => {
    const getAllAsyncStorageData = async () => {
      const keys = await AsyncStorage.getAllKeys()

      if (keys.length != allTravelData.length) {
        for (let key of keys) {
          const data = await AsyncStorage.getItem(key)
          if (data != null) {
            dispatch(setAllTravelData(JSON.parse(data)))
          }
        }
      }
    }
    getAllAsyncStorageData()

    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Istanbul&appid=406ac31f986f7082f58ba38065f856eb`
          // "https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=406ac31f986f7082f58ba38065f856eb"
        );

        const data = await response.json();
        console.log(data);

        setWeatherData(data); // 3 saatlik tahmin verileri
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchWeatherData();

  }, [])




  const [active, setActive] = useState("suitcase")
  const [activeKey, setActiveKey] = useState("");

  const activeRoute = () => {
    active == 'suitcase' ? setActive('earth') : setActive('suitcase')
  }

  const route = () => {
    dispatch(setActiveTabBar(`${active}`))
    navigation.navigate(`${active}`, activeKey)
  }



  return (
    <View style={styles.container}>
      {/* <View style={{ width: '100%', height: height * 0.8, borderWidth: 0.5, position : 'absolute', marginVertical : height * 0.1}}></View> */}


      {/* Info */}

      <View style={styles.currentTravelContainer}>
        <FlatList
          data={allTravelData}
          renderItem={({ item, index }) => (

            <View key={index} style={styles.travelBox}>
              <View style={styles.contentWrapper}>
                <CountryFlag style={styles.flag} isoCode={item.code} size={10} />
                <Text style={styles.cityText}>{item.countryName} -</Text>
                <Text style={styles.cityText}>{item.city}</Text>
              </View>
              <View style={styles.contentWrapper}>

                <View style={styles.date}>
                  <FontAwesome6 name="hourglass-start" size={20} color="#343a40" />
                  <Text style={styles.dateText}>{startDate}</Text>
                </View>

                <View style={styles.date}>
                  <View style={{ transform: [{ rotate: '180deg' }] }}>
                    <FontAwesome6 name="hourglass-start" size={20} color="#343a40" />
                  </View>
                  <Text style={styles.dateText}>{endDate}</Text>
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
                backgroundColor: pressed ? '#fff' : 'rgba(255, 255, 255, 0.75)',
              },
              styles.currentTravelBtn
            ]}
            onPress={() => route()}
            onLongPress={() => activeRoute()}
          >
            <View
              style={[
                {
                  position: active == 'suitcase' ? 'relative' : 'absolute',
                  bottom: active == 'suitcase' ? 0 : 5,
                },
                styles.suitcase]}>
              <FontAwesome6
                name="suitcase-rolling"
                size={active == 'suitcase' ? 30 : 20}
                color={active == 'suitcase' ? 'black' : 'gray'}
              />
            </View>

            <Ionicons
              style={[
                {
                  position: active == 'earth' ? 'relative' : 'absolute',
                  bottom: active == 'earth' ? 0 : 5

                }, styles.earth]}
              name="earth"
              size={active == 'earth' ? 35 : 20}
              color={active == 'earth' ? 'black' : 'gray'}
            />
          </Pressable>
        </View>
      </View>


      {/* weather */}

      <View style={styles.weatherContainer}>
        <Text style={{ fontSize: 25, fontWeight: '500' }}>Weather</Text>
      </View>


      {/* Map */}

      <View style={styles.mapContainer}>
        {
          weatherData &&
          <MapView
            style={styles.mapViewContainer}
            initialRegion={{
              latitude: weatherData.coord.lat,
              longitude: weatherData.coord.lon,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1
            }}
          />
        }
      </View>


      <View style={styles.noteContainer}>
        <Text style={{ fontSize: 25, fontWeight: '500' }}>Note</Text>

      </View>


    </View>
  )
}

export default HomeScreen
