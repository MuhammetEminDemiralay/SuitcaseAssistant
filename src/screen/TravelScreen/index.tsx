import React, { useEffect, useRef, useState, } from 'react'
import { Dimensions, FlatList, Image, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import MapView, { Marker } from 'react-native-maps'
import { FontAwesome5, FontAwesome, MaterialIcons, FontAwesome6, Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setActiveData, setActiveTabBar, setActiveTravelCategory, setAllTravelData, updateAllTravelData } from '../../redux/travelSlice';
import { LinearGradient } from 'expo-linear-gradient';
import * as Location from 'expo-location';

const { width, height } = Dimensions.get("window")

const TravelScreen = () => {

    const travelCategory = [{ name: "sea", icon: "umbrella-beach" }, { name: "nature", icon: "tree" }, { name: "city", icon: "city" }, { name: "camp", icon: "campground" }, { name: "ski", icon: "skiing" }]
    const [activeCategory, setActiveCategory] = useState("sea")
    const { allTravelData, activeData, activeTravelCategory } = useSelector((state: any) => state.travel);

    const dispatch: any = useDispatch();
    const navigation: any = useNavigation()
    const [activeCoord, setActiveCoord] = useState<any>()

    const [currentLocation, setCurrentLocation] = useState<any>()

    const [activeIndex, setActiveIndex] = useState<any>()
    const travelFlatlistRef = useRef<any>()
    const onViewTravelRef = useRef((viewableItems: any) => {
        dispatch(setActiveData(viewableItems.viewableItems[0].item))
        dispatch(setActiveTravelCategory(viewableItems.viewableItems[0].key))
        setActiveIndex(viewableItems.viewableItems[0].index)
    })

    const previousTravelItem = () => {
        if (activeIndex == 0) {
            travelFlatlistRef.current.scrollToIndex({ index: allTravelData.length - 1, animated: true })
        }
        else {
            travelFlatlistRef.current.scrollToIndex({ index: activeIndex - 1, animated: true })
        }
    }

    const nextTravelItem = () => {
        if (activeIndex == allTravelData.length - 1) {
            travelFlatlistRef.current.scrollToIndex({ index: 0, animated: true })
        } else {
            travelFlatlistRef.current.scrollToIndex({ index: activeIndex + 1, animated: true })
        }
    }

    useEffect(() => {
        if (activeData != undefined) {
            dispatch(updateAllTravelData(activeData))
        }
        if (allTravelData.length != 0) {
            travelFlatlistRef.current.scrollToItem({ item: allTravelData.find((item: any) => item.key == activeTravelCategory) })
        }

        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                return;
            }

            let subscription = await Location.watchPositionAsync(
                {
                    accuracy: Location.Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                },
                (currentLocation) => {
                    setCurrentLocation({ lat: currentLocation.coords.latitude, long: currentLocation.coords.longitude })
                }
            );

            return () => {
                subscription.remove();
            };
        })();

    }, [activeData, activeTravelCategory])

    const check = (itemIndex: any) => {

        const categoryItems = activeData.city.placeCategory[activeCategory];
        const updatedData = categoryItems.map((item: any, index: any) => {
            return itemIndex == index ? { ...item, check: !item.check } : item
        })

        dispatch(setActiveData({
            ...activeData,
            city: {
                ...activeData.city,
                placeCategory: {
                    ...activeData.city.placeCategory,
                    [activeCategory]: updatedData
                }
            }
        }))

        const setAsyncStorage = async () => {
            await AsyncStorage.setItem(`${activeData.key}`, JSON.stringify({
                ...activeData,
                city: {
                    ...activeData.city,
                    placeCategory: {
                        ...activeData.city.placeCategory,
                        [activeCategory]: updatedData
                    }
                }

            }))
        }
        setAsyncStorage()
    }

    const createTravel = () => {
        dispatch(setActiveTabBar("createHoliday"))
        navigation.navigate("createHoliday")
    }


    const mapRef = useRef<any>();
    const zoomActiveCoord = (item: any) => {
        if (mapRef.current) {
            mapRef.current.animateToRegion({
                latitude: item.lat,
                longitude: item.long,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }, 1000);
        }
    };



    return (
        <View style={styles.container}>

            {/* Emty */}
            {
                allTravelData.length == 0 &&
                <View style={styles.emtyTravelBox}>
                    <Text style={styles.emtyTravelText}>Travel</Text>
                    <Pressable
                        onPress={createTravel}
                    >
                        <Ionicons
                            name="earth"
                            size={25}
                            color="gray"
                        />
                    </Pressable>
                </View>
            }

            {/* Map */}
            <View style={styles.mapContainer}
            >
                {
                    activeData?.city != undefined &&
                    <>
                        <MapView
                            style={styles.mapViewContainer}
                            ref={mapRef}
                            showsUserLocation={true}
                            initialRegion={{
                                latitude: activeData.city.coord.latitude,
                                longitude: activeData.city.coord.longitude,
                                latitudeDelta: 0.1,
                                longitudeDelta: 0.1
                            }}
                            region={{
                                latitude: activeData.city.coord.latitude,
                                longitude: activeData.city.coord.longitude,
                                latitudeDelta: 0.1,
                                longitudeDelta: 0.1
                            }}
                            showsMyLocationButton={true}
                        >

                            {
                                // My location
                                currentLocation != undefined &&
                                <Marker
                                    coordinate={{
                                        latitude: currentLocation.lat,
                                        longitude: currentLocation.long,
                                    }}
                                />
                            }
                            {   // SEA
                                activeData.city.placeCategory.sea != undefined && activeData.city.placeCategory.sea != null &&
                                activeData.city.placeCategory.sea.map((item: any, index: any) => (
                                    <Marker
                                        key={index}
                                        coordinate={{
                                            latitude: item.coord.latitude,
                                            longitude: item.coord.longitude,
                                        }}
                                    >
                                        <View style={styles.iconImageBox}>
                                            <Image style={styles.iconImage} source={require("../../datas/holidayCategoryIcon/sea_icon.png")} />
                                        </View>
                                    </Marker>
                                ))
                            }
                            {   // NATURE
                                activeData.city.placeCategory.nature != undefined && activeData.city.placeCategory.nature != null &&
                                activeData.city.placeCategory.nature.map((item: any, index: any) => (
                                    <Marker
                                        key={index}
                                        coordinate={{
                                            latitude: item.coord.latitude,
                                            longitude: item.coord.longitude
                                        }}
                                    >
                                        <View style={styles.iconImageBox}>
                                            <Image style={styles.iconImage} source={require("../../datas/holidayCategoryIcon/nature_icon.png")} />
                                        </View>
                                    </Marker>
                                ))
                            }
                            {   // CİTY
                                activeData.city.placeCategory.city != undefined && activeData.city.placeCategory.city != null &&
                                activeData.city.placeCategory.city.map((item: any, index: any) => (
                                    <Marker
                                        key={index}
                                        coordinate={{
                                            latitude: item.coord.latitude,
                                            longitude: item.coord.longitude
                                        }}
                                    >
                                        <View style={styles.iconImageBox}>
                                            <Image style={styles.iconImage} source={require("../../datas/holidayCategoryIcon/city_icon.png")} />
                                        </View>
                                    </Marker>
                                ))
                            }
                            { // CAMP
                                activeData.city.placeCategory.camp != undefined && activeData.city.placeCategory.camp != null &&
                                activeData.city.placeCategory.camp.map((item: any, index: any) => (
                                    <Marker
                                        key={index}
                                        coordinate={{
                                            latitude: item.coord.latitude,
                                            longitude: item.coord.longitude
                                        }}
                                    >
                                        <View style={styles.iconImageBox}>
                                            <Image style={styles.iconImage} source={require("../../datas/holidayCategoryIcon/camp_icon.png")} />
                                        </View>
                                    </Marker>
                                ))
                            }
                            {  // SKİ
                                activeData.city.placeCategory.ski != undefined && activeData.city.placeCategory.ski != null &&
                                activeData.city.placeCategory.ski.map((item: any, index: any) => (
                                    <Marker
                                        key={index}
                                        coordinate={{
                                            latitude: item.coord.latitude,
                                            longitude: item.coord.longitude
                                        }}
                                    >
                                        <View style={styles.iconImageBox}>
                                            <Image style={styles.iconImage} source={require("../../datas/holidayCategoryIcon/ski_icon.png")} />
                                        </View>
                                    </Marker>
                                ))
                            }
                        </MapView>
                        <LinearGradient colors={["#3e5c76", '#fff',]} style={styles.mapBorder}></LinearGradient>
                    </>

                }
            </View>


            {/* Content */}
            {
                allTravelData.length != 0 &&
                <View style={styles.placeContainer}>

                    {/* Left */}
                    <View style={styles.placeLeftContainer}>

                        <View style={styles.placeHeaderContainer}>

                            <View style={styles.headerIconWrapper}>
                                <Pressable onPress={() => previousTravelItem()} style={styles.headerIconBox} >
                                    <View style={styles.headerIconBoxWrapper}>
                                        <FontAwesome name="angle-left" size={22} color="#3e5c76" />
                                    </View>
                                </Pressable>
                            </View>

                            <FlatList
                                ref={travelFlatlistRef}
                                data={allTravelData}
                                renderItem={({ item, index }) => (
                                    <View style={styles.placeHeaderBox}>
                                        <Text style={styles.placeHeaderText}>{item.city.name}</Text>
                                    </View>
                                )}
                                style={styles.placeFlatListContainer}
                                horizontal
                                snapToInterval={(width * 0.75) - ((height * 0.06) + height * 0.02)}
                                showsHorizontalScrollIndicator={false}
                                onViewableItemsChanged={onViewTravelRef.current}
                            />

                            <View style={styles.headerIconWrapper}>
                                <Pressable
                                    onPress={() => nextTravelItem()}
                                    style={styles.headerIconBox}
                                >
                                    <View style={styles.headerIconBoxWrapper}>
                                        <FontAwesome name="angle-right" size={22} color="#3e5c76" />
                                    </View>
                                </Pressable>
                            </View>
                        </View>

                        {/* Content */}
                        <View style={styles.placeContentContainer}>
                            {
                                activeData != undefined &&
                                <>
                                    {
                                        activeData?.city?.placeCategory?.[activeCategory] == null &&
                                        <View style={styles.emtyContentBox}>
                                            <Text style={styles.emtyContentText}>Emty</Text>
                                        </View>
                                    }
                                    <FlatList
                                        data={activeData?.city?.placeCategory?.[activeCategory]}
                                        renderItem={({ item, index }) => (
                                            <Pressable
                                                onPress={() => zoomActiveCoord({ lat: item.coord.latitude, long: item.coord.longitude })}
                                                style={[
                                                    {
                                                        backgroundColor: item.check ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.75)'
                                                    },
                                                    styles.placeContentBox
                                                ]}
                                            >
                                                <View style={styles.placeContentTextBox}>
                                                    <Text style={[{
                                                        color: item.check ? '#fff' : 'black',
                                                        textDecorationLine: item.check ? 'line-through' : 'none'
                                                    },
                                                    styles.placeContentText
                                                    ]}>{item.name}</Text>
                                                </View>
                                                <View style={styles.placeBtnGroupBox}>
                                                    <Pressable
                                                        style={styles.placeBtnBox}
                                                        onPress={() => check(index)}
                                                    >
                                                        {
                                                            item.check == false &&
                                                            <MaterialIcons name="check-box-outline-blank" size={35} color="black" />}
                                                        {
                                                            item.check == true &&
                                                            <MaterialIcons name="check-box" size={35} color="black" />
                                                        }
                                                    </Pressable>
                                                </View>
                                            </Pressable>
                                        )}
                                        showsVerticalScrollIndicator={false}
                                    />
                                </>
                            }
                        </View>

                    </View>


                    {/* Right */}
                    <View style={styles.placeRightContainer}>
                        <FlatList
                            data={travelCategory}
                            renderItem={({ item, index }) => (
                                <Pressable
                                    style={[{
                                        backgroundColor: item.name == activeCategory ? '#02c39a' : 'rgba(255,255,255,0.75)',
                                    },
                                    styles.categoryBox]}
                                    onPress={() => setActiveCategory(item.name)}
                                >
                                    <FontAwesome5
                                        name={item.icon}
                                        size={24}
                                        color={item.name == activeCategory ? '#fff' : '#000814'} />
                                </Pressable>
                            )}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
            }
        </View >
    )
}

export default TravelScreen
