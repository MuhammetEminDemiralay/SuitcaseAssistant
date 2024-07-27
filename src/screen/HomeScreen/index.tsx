import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, FlatList, Image, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { Ionicons, FontAwesome6 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTabBar, setAllTravelData } from '../../redux/travelSlice';
import CountryFlag from 'react-native-country-flag'
import { useNavigation } from '@react-navigation/native';
import MapView from 'react-native-maps';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get("window")

const HomeScreen = () => {

  const dispatch: any = useDispatch();
  const { allTravelData, updateState } = useSelector((state: any) => state.travel);
  const navigation: any = useNavigation();

  const [weatherData, setWeatherData] = useState<any>([]);
  const [cityData, setCityData] = useState();
  const [mainData, setMainData] = useState<any>();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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
          `https://api.openweathermap.org/data/2.5/forecast?q=Rize&appid=406ac31f986f7082f58ba38065f856eb`
        );

        const data = await response.json();


        let fullDatas: any[] = []
        let datas: any[] = []
        let currentItem = new Date(data.list[0].dt_txt)
        let mainData: any[] = [];

        data.list.forEach((item: any, index: any) => {

          const date = new Date(item.dt_txt);

          if (date.getDate() == currentItem.getDate()) {
            datas.push(item)

            if (date.getHours() == 21) {

              let newDatas = [...datas];  // Önemli

              fullDatas.push(datas)
              const mainSortedData = newDatas.sort((a, b) => a.main.temp - b.main.temp)
              const data = {
                date: date,
                minTemp: mainSortedData[0],
                maxTemp: mainSortedData[mainSortedData.length - 1]
              }
              mainData.push(data)
              datas = []
            }
          } else {
            datas.push(item)
            currentItem = date;
          }

        })

        setMainData(mainData)
        setCityData(data.city);
        setWeatherData(fullDatas);

      } catch (error) {
        console.error(error);
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

  const weatherRef = useRef<any>();
  const [activeIndex, setActiveIndex] = useState<any>(0);
  const setTargetWeather = (item: any) => {
    weatherRef.current.scrollToIndex({ index: item.index, animated: true })
    setActiveIndex(item)
    console.log(item.item.maxTemp.weather[0].icon);
    
  }



  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: height * 0.85, borderWidth: 0.5, position: 'absolute', marginTop: height * 0.075 }}></View>


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
                  <FontAwesome6 name="hourglass-start" size={18} color="#343a40" />
                  <Text style={styles.dateText}>{startDate}</Text>
                </View>

                <View style={styles.date}>
                  <View style={{ transform: [{ rotate: '180deg' }] }}>
                    <FontAwesome6 name="hourglass-start" size={18} color="#343a40" />
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


      {/* WEATHER */}

      <View style={styles.weatherContainer}>

        <View style={styles.weatherTopBox}>
          <View style={styles.weatherContentTopBox}>
             <View style={styles.weatherIconBox}>
              <Image style={styles.weatherIcon} source={{ uri: `https://openweathermap.org/img/wn/${activeIndex.item.maxTemp.weather[0].icon}@2x.png` }} />
            </View> 
          </View>

          <View style={styles.weatherContentBottomBox}>
            <FlatList
              ref={weatherRef}
              data={weatherData}
              renderItem={({ item, index }) => (
                <View
                  key={index}
                  style={styles.weatherGraficBox}
                >
                  <FlatList
                    data={item}
                    renderItem={({ item, index }) => (
                      <View
                        key={index}
                        style={styles.tempInfoBox}
                      >
                        <View style={styles.tempValueBox}>
                          <Text style={styles.tempValueText}>{Math.ceil(item?.main?.temp - 272.15)}</Text>
                        </View>
                        <View style={styles.tempLineBox}>
                          <LinearGradient
                            style={[{ height: (height * 0.03) * (Math.ceil(item?.main?.temp - 272.15) / 50) }, styles.tempLine]}
                            colors={["orange", "#fff"]}
                          />
                          <View />
                        </View>
                        <View style={styles.tempTimeBox}>
                          <Text style={styles.tempTimeText}>{item.dt_txt.split(" ")[1].slice(0, 5)}</Text>
                        </View>
                      </View>
                    )}
                    style={styles.tempInfoContainer}
                    horizontal
                  />
                </View>
              )}
              horizontal
              style={styles.weatherGraficContainer}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>


        <View style={styles.weatherBottomBox}>
          {
            weatherData &&
            <FlatList
              data={mainData}
              renderItem={({ item, index }) => (
                <Pressable
                  key={index}
                  style={[{ backgroundColor: index == activeIndex.index ? '#02c39a' : 'rgba(0, 0,0,0)' }, styles.weatherBox]}
                  onPress={() => setTargetWeather({ item: item, index: index })}
                >
                  <View style={styles.dayBox}>
                    <Text style={styles.dayText}>{daysOfWeek[item.date.getDay()]}</Text>
                  </View>

                  <View style={styles.weatherIconBox}>
                    <Image style={styles.weatherIcon} source={{ uri: `https://openweathermap.org/img/wn/${item.maxTemp.weather[0].icon}@2x.png` }} />
                  </View>
                  <View style={styles.tempBox}>
                    <Text style={styles.maxTemp}>{Math.ceil(item.maxTemp.main.temp - 272.15)}°</Text>
                    <Text style={[{ color: activeIndex.index == index ? '#fff' : '#757474', }, styles.minTemp]}>{Math.ceil(item.minTemp.main.temp - 272.15)}°</Text>
                  </View>
                </Pressable>
              )}
              style={styles.weatherWrapper}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          }
        </View>

      </View>


      {/* Map */}

      <View style={styles.mapContainer}>

      </View>


      <View style={styles.noteContainer}>
        <Text style={{ fontSize: 25, fontWeight: '500' }}>Note</Text>

      </View>


    </View>
  )
}

export default HomeScreen
