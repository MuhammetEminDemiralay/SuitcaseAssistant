import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, FlatList, Image, KeyboardAvoidingView, Keyboard, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import { styles } from './styles'
import { Ionicons, FontAwesome6, FontAwesome, MaterialCommunityIcons, Fontisto, Entypo, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveData, setActiveTabBar, setActiveTravelCategory, setAllTravelData, setTabBarVisible, updateAllTravelData } from '../../redux/travelSlice';
import CountryFlag from 'react-native-country-flag'
import { useNavigation } from '@react-navigation/native';
import MapView from 'react-native-maps';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get("window")

const HomeScreen = () => {

  const dispatch: any = useDispatch();
  const { allTravelData, activeData, activeTravelCategory } = useSelector((state: any) => state.travel);
  const navigation: any = useNavigation();

  const [weatherData, setWeatherData] = useState<any>([]);
  const [mainData, setMainData] = useState<any>();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")


  const contentViewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 })
  const contentFlatlistRef = useRef<any>()
  const contentOnViewRef = useRef((viewableItems: any) => {

    dispatch(setActiveTravelCategory(viewableItems.viewableItems[0].key))
    dispatch(setActiveData(viewableItems.viewableItems[0].item))


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

    if (activeData != undefined) {
      dispatch(updateAllTravelData(activeData))
    }

    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${activeData?.city?.name}&appid=406ac31f986f7082f58ba38065f856eb`
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

        setActiveWeatherItem(mainData[0])
        setMainData(mainData)

        setWeatherData(fullDatas);

      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherData();

    contentFlatlistRef.current.scrollToItem({ item: allTravelData.find((item: any) => item.key == activeTravelCategory), animated: true })


  }, [activeData, activeTravelCategory])


  const route = (item: string) => {
    dispatch(setActiveTabBar(`${item}`))
    navigation.navigate(`${item}`, activeTravelCategory)
  }


  // WEATHER
  const weatherRef = useRef<any>();
  const [activeWeatherIndex, setActiveWeatherIndex] = useState<any>(0);
  const [activeWeatherItem, setActiveWeatherItem] = useState<any>()

  const setTargetWeather = (item: any) => {
    weatherRef.current.scrollToIndex({ index: item.index, animated: true })
    setActiveWeatherIndex(item.index)
    setActiveWeatherItem(item.item)
  }

  const [weatherOption, setWeatherOption] = useState("temperature")


  // NOTE
  useEffect(() => {

    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      dispatch(setTabBarVisible(false));
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      dispatch(setTabBarVisible(true))
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);


  const textInputRef = useRef<any>();
  const [note, setNote] = useState("");
  const noteChangeText = (item: string) => {
    setNote(item)
  }

  const noteAdd = () => {
    if (allTravelData.length != 0 && note != "") {
      dispatch(setActiveData({
        ...activeData,
        notes: [{ note: note, check: false }, ...activeData.notes]
      }))
      const setAsync = async () => {
        await AsyncStorage.setItem(`${activeTravelCategory}`, JSON.stringify({ ...activeData, notes: [{ note: note, check: false }, ...activeData.notes] }))
      }
      setAsync();

      if (textInputRef.current) {
        textInputRef.current.clear()
      }
      setNote("");
    }
  }

  const noteDelete = (itemIndex: any) => {
    const filterNotes = activeData.notes.filter((item: any, index: any) => index != itemIndex)
    dispatch(setActiveData({
      ...activeData,
      notes: filterNotes
    }))

    const setAsync = async () => {
      await AsyncStorage.setItem(`${activeTravelCategory}`, JSON.stringify({ ...activeData, notes: filterNotes }))
    }
    setAsync();
  }

  const noteCheck = (item: any, itemIndex: any) => {

    const updatedNotes = activeData.notes.map((item: any, index: any) => {
      return index == itemIndex ? { ...item, check: !item.check } : item
    })

    dispatch(setActiveData({
      ...activeData,
      notes: updatedNotes
    }))

    const setAsync = async () => {
      await AsyncStorage.setItem(`${activeTravelCategory}`, JSON.stringify({ ...activeData, notes: updatedNotes }))
    }
    setAsync();
  }


  const createTravel = () => {
    dispatch(setActiveTabBar("createHoliday"))
    navigation.navigate("createHoliday")
  }



  return (
    <KeyboardAvoidingView
      behavior='padding'
      style={styles.container}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {/* Info */}

        <View style={styles.currentTravelContainer}>

          {
            allTravelData.length == 0 &&
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? '#fff' : 'rgba(0,0,0,0)'
                },
                styles.createTravelBox
              ]}
              onPress={createTravel}
            >
              <FontAwesome name="map" size={24} color="gray" />
              <Text style={styles.createTravelText}>Create</Text>
            </Pressable>
          }


          <FlatList
            data={allTravelData}
            renderItem={({ item, index }) => (

              <View key={index} style={styles.travelBox}>
                <View style={styles.contentWrapper}>
                  {
                    item.code &&
                    <CountryFlag style={styles.flag} isoCode={item.code} size={10} />
                  }
                  <Text style={styles.cityText}>{item.city.name}</Text>
                </View>
                <View style={styles.contentWrapper}>

                  <View style={styles.date}>
                    <FontAwesome5 name="hourglass-start" size={height * 0.025} color="#000814" />
                    <Text style={styles.dateText}>{startDate}</Text>
                  </View>

                  <View style={styles.date}>
                    <FontAwesome5 name="hourglass-end" size={height * 0.025} color="#000814" />
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
              onPress={() => route("suitcase")}
            >
              <FontAwesome6
                name="suitcase-rolling"
                size={height * 0.035}
                color={allTravelData.length == 0 ? 'gray' : 'black'}
              />
            </Pressable>
          </View>
        </View>


        {/* WEATHER */}
        {
          weatherData &&
          <View style={styles.weatherContainer}>
            {
              allTravelData.length == 0 &&
              <View style={styles.weatherEmtyDataBox}>
                <Text style={styles.weatherEmtyText}>Weather</Text>
              </View>
            }
            {
              allTravelData.length != 0 &&
              <>
                <View style={styles.weatherTopBox}>
                  {
                    activeWeatherItem != undefined &&
                    <View style={styles.weatherContentTopBox}>

                      <View style={styles.weatherContentLeftTopBox}>
                        <View style={[{ width: width * 0.1 }, styles.weatherIconBox]}>
                          <Image style={styles.weatherIcon} source={{ uri: `https://openweathermap.org/img/wn/${activeWeatherItem.maxTemp.weather[0].icon}@2x.png` }} />
                        </View>
                        <View style={styles.temperatureTextBox}>
                          <Text style={styles.temperatureText}>{Math.ceil(activeWeatherItem.maxTemp.main.temp - 272.15)}°</Text>
                        </View>
                        <View style={styles.weatherInfoBox}>
                          <Text style={[{ color: '#757474' }, styles.weatherInfoText]}>Rain : {Math.ceil(activeWeatherItem.maxTemp.pop * 100)}%</Text>
                          <Text style={[{ color: '#757474' }, styles.weatherInfoText]}>Humidity : {activeWeatherItem.maxTemp.main.humidity}%</Text>
                          <Text style={[{ color: '#757474' }, styles.weatherInfoText]}>Wind : {Math.ceil(activeWeatherItem.maxTemp.wind.speed * 3.6)}km/s</Text>
                        </View>
                        <View style={styles.weatherBigInfoBox}>
                          <Text style={[{ color: '#000814' }, styles.weatherInfoText]}>{activeData?.city.name}</Text>
                          <Text style={[{ color: '#757474' }, styles.weatherInfoText]}>{daysOfWeek[activeWeatherItem.date.getDay()]}</Text>
                          <Text style={[{ color: '#757474' }, styles.weatherInfoText]}>{activeWeatherItem.maxTemp.weather[0].description}</Text>
                        </View>
                      </View>

                      {/* weather option */}
                      <View style={styles.weatherContentRightTopBox}>
                        <Pressable
                          style={[{ backgroundColor: weatherOption == 'temperature' ? '#02c39a' : '#fff' }, styles.temperatureBtnBox]}
                          onPress={() => setWeatherOption("temperature")}
                        >
                          <FontAwesome
                            name="thermometer" size={20}
                            color={weatherOption == 'temperature' ? '#fff' : '#000814'}
                          />
                        </Pressable>
                        <Pressable
                          style={[{ backgroundColor: weatherOption == 'rain' ? '#02c39a' : '#fff' }, styles.temperatureBtnBox]}
                          onPress={() => setWeatherOption("rain")}
                        >
                          <Ionicons
                            name="rainy" size={20}
                            color={weatherOption == 'rain' ? '#fff' : '#000814'}
                          />
                        </Pressable>
                        <Pressable
                          style={[{ backgroundColor: weatherOption == 'wind' ? '#02c39a' : '#fff' }, styles.temperatureBtnBox]}
                          onPress={() => setWeatherOption("wind")}
                        >
                          <MaterialCommunityIcons
                            name="windsock" size={20}
                            color={weatherOption == 'wind' ? '#fff' : '#000814'}
                          />
                        </Pressable>
                      </View>
                    </View>
                  }


                  <View style={styles.weatherContentBottomBox}>
                    <FlatList
                      ref={weatherRef}
                      scrollEnabled={false}
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

                                  {
                                    weatherOption == 'temperature' &&
                                    <Text style={[{ color: '#757474', fontSize: 11 }, styles.tempValueText]}>{Math.ceil(item?.main?.temp - 272.15)}°</Text>
                                  }
                                  {
                                    weatherOption == 'rain' &&
                                    <Text style={[{ color: '#1a73e8', fontSize: 11 }, styles.tempValueText]}>{Math.ceil(item?.pop * 100)}%</Text>
                                  }
                                  {
                                    weatherOption == 'wind' &&
                                    <Text style={[{ color: '#757474', fontSize: 9, fontWeight: '500' }, styles.tempValueText]}>{Math.ceil(item.wind.speed * 3.6)} km/s</Text>
                                  }
                                </View>
                                <View style={styles.tempLineBox}>
                                  {
                                    weatherOption == 'temperature' &&
                                    <LinearGradient
                                      style={[{ height: (height * 0.03) * (Math.ceil(item?.main?.temp - 272.15) / 50), borderTopWidth: 2, borderTopColor: 'red' }, styles.tempLine]}
                                      colors={["orange", "#fff"]}
                                    />
                                  }
                                  {
                                    weatherOption == 'rain' &&
                                    <View
                                      style={[{ height: (height * 0.03) * item.pop, borderTopWidth: 1, borderTopColor: '#1a73e8', backgroundColor: '#e8f0fe' }, styles.tempLine]}
                                    />
                                  }
                                  {
                                    weatherOption == 'wind' &&
                                    <View
                                      style={{
                                        transform: [{
                                          rotate: `${item?.wind.deg}deg`
                                        }]
                                      }}
                                    >
                                      <Fontisto name="arrow-down" size={20} color="#9aaec0" />
                                    </View>
                                  }
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
                          style={[{
                            backgroundColor: index == activeWeatherIndex ? '#02c39a' : 'rgba(0, 0,0,0)',
                            borderBottomLeftRadius: index == 0 ? 10 : 0,
                            borderBottomRightRadius: index == 4 ? 10 : 0
                          },
                          styles.weatherBox
                          ]}
                          onPress={() => setTargetWeather({ item: item, index: index })}
                        >
                          <View style={styles.dayBox}>
                            <Text style={styles.dayText}>{daysOfWeek[item.date.getDay()]}</Text>
                          </View>

                          <View style={[{ width: width * 0.18 }, styles.weatherIconBox]}>
                            <Image style={styles.weatherIcon} source={{ uri: `https://openweathermap.org/img/wn/${item.maxTemp.weather[0].icon}@2x.png` }} />
                          </View>
                          <View style={styles.tempBox}>
                            <Text style={styles.maxTemp}>{Math.ceil(item.maxTemp.main.temp - 272.15)}°</Text>
                            <Text style={[{ color: activeWeatherIndex == index ? '#fff' : '#757474', }, styles.minTemp]}>{Math.ceil(item.minTemp.main.temp - 272.15)}°</Text>
                          </View>
                        </Pressable>
                      )}
                      style={styles.weatherWrapper}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                    />
                  }
                </View>
              </>

            }
          </View>
        }

        {/* Map */}

        <View style={styles.mapContainer}>
          {
            allTravelData.length == 0 &&
            <View style={styles.weatherEmtyDataBox}>
              <Text style={styles.weatherEmtyText}>Map</Text>
            </View>
          }

          <View style={styles.earthWrapperIconContainer}>
            <View style={styles.earthWrapperIconBox}>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? '#fff' : 'rgba(255,255,255,0.75)',

                  },
                  styles.earthIconBox
                ]}
                onPress={() => route("earth")}
              >
                <Ionicons
                  style={styles.earthIcon}
                  name="earth"
                  size={height * 0.04}
                  color={allTravelData.length != 0 ? 'black' : 'gray'} />
              </Pressable>
            </View>
          </View>
          {
            activeData?.city?.coord != undefined &&
            <MapView
              style={styles.mapViewContainer}
              initialRegion={{
                latitude: activeData.city.coord.latitude,
                longitude: activeData.city.coord.longitude,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1
              }}
              region={{
                latitude: activeData.city.coord.latitude,
                longitude: activeData.city.coord.longitude,
                latitudeDelta: 0.2,
                longitudeDelta: 0.2
              }}
            />
          }
        </View>


        {/* NOTES */}
        <View style={styles.noteContainer}>

          <View style={styles.noteAddBox}>
            <View style={styles.noteTextInputBox}>
              <TextInput
                ref={textInputRef}
                style={styles.noteTextInput}
                onChangeText={(value) => noteChangeText(value)}
                onSubmitEditing={Keyboard.dismiss}
                placeholder='note...'
                placeholderTextColor='gray'
                cursorColor='gray'
              />
            </View>

            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? '#fff' : 'rgba(255,255,255,0.75)'
                },
                styles.notePlusBox
              ]}
              onPress={noteAdd}
            >
              <Entypo name="plus" size={width * 0.05} color={allTravelData.length == 0 ? 'gray' : 'black'} />
            </Pressable>
          </View>

          <View style={styles.noteListContainer}>
            {
              allTravelData.length == 0 &&
              <View style={styles.noteEmtyBox}>
                <Text style={styles.createTravelText}>Notes</Text>
              </View>
            }
            {
              activeData != undefined &&
              <FlatList
                data={activeData.notes}
                renderItem={({ item, index }) => (
                  <View
                    style={[{ backgroundColor: item.check == false ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.25)' }, styles.noteWrapper]}
                  >
                    <View style={styles.noteTextBox}>
                      <Text style={[{ textDecorationLine: item.check ? 'line-through' : 'none' }, styles.noteText]}>{item.note}</Text>
                    </View>
                    <View style={styles.noteEditBox}>
                      <Pressable
                        onPress={() => noteDelete(index)}
                        style={styles.noteEditBtnBox}
                      >
                        <Entypo name="minus" size={width * 0.05} color="black" />
                      </Pressable>
                      <Pressable
                        onPress={() => noteCheck(item, index)}
                        style={styles.noteEditBtnBox}
                      >
                        <Entypo name="check" size={width * 0.05} color="black" />
                      </Pressable>
                    </View>
                  </View>
                )}
                style={styles.noteListBox}
                showsVerticalScrollIndicator={false}
              />
            }
          </View>
        </View>

      </ScrollView>
    </KeyboardAvoidingView >
  )
}

export default HomeScreen
