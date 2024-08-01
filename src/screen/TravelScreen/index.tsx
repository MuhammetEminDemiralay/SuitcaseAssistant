import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, FlatList, Image, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import MapView, { Marker } from 'react-native-maps'
import { FontAwesome5, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setAllTravelData } from '../../redux/travelSlice';

const { width, height } = Dimensions.get("window")

const TravelScreen = () => {

    const travelCategory = [{ name: "sea", icon: "umbrella-beach" }, { name: "nature", icon: "tree" }, { name: "city", icon: "city" }, { name: "camp", icon: "campground" }, { name: "ski", icon: "skiing" }]
    const [activeCategory, setActiveCategory] = useState("sea")
    const { allTravelData } = useSelector((state: any) => state.travel);
    const dispatch: any = useDispatch();

    const [activeItem, setActiveItem] = useState<any>()
    const [activeIndex, setActiveIndex] = useState<any>()
    const travelRef = useRef<any>()
    const onViewTravelRef = useRef((viewableItems: any) => {
        setActiveItem(viewableItems.viewableItems[0].item)
        setActiveIndex(viewableItems.viewableItems[0].index)
    })

    const previousTravelItem = () => {
        if (activeIndex == 0) {
            travelRef.current.scrollToIndex({ index: allTravelData.length - 1, animated: true })
        }
        else {
            travelRef.current.scrollToIndex({ index: activeIndex - 1, animated: true })
        }
    }

    const nextTravelItem = () => {
        if (activeIndex == allTravelData.length - 1) {
            travelRef.current.scrollToIndex({ index: 0, animated: true })
        } else {
            travelRef.current.scrollToIndex({ index: activeIndex + 1, animated: true })
        }
    }

    useEffect(() => {
        console.log(allTravelData);

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
    }, [activeItem])

    const check = (checkItem: any) => {
        
        setActiveItem((prevData: any) => {

            const categoryItems = prevData.city.placeCategory[activeCategory];


            const updatedData = categoryItems.map((item: any) => {
                return checkItem.name == item.name ? { ...item, check: !item.check } : item
            })


            const setAsyncStorage = async () => {
                await AsyncStorage.setItem(`${activeItem.key}`, JSON.stringify({
                    ...prevData,
                    city: {
                        ...prevData.city,
                        placeCategory: {
                            ...prevData.city.placeCategory,
                            [activeCategory]: updatedData
                        }
                    }
                }))
            }
            setAsyncStorage()

            return {
                ...prevData,
                city: {
                    ...prevData.city,
                    placeCategory: {
                        ...prevData.city.placeCategory,
                        [activeCategory]: updatedData
                    }
                }
            }
        })

    }


    return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: height * 0.945, borderWidth: 1, position: 'absolute', marginTop: height * 0.075 }}></View>

            <View style={styles.mapContainer}
            >
                {
                    activeItem != undefined &&
                    <MapView
                        style={styles.mapViewContainer}
                        initialRegion={{
                            latitude: activeItem.city.coord.latitude,
                            longitude: activeItem.city.coord.longitude,
                            latitudeDelta: 0.1,
                            longitudeDelta: 0.1
                        }}
                        region={{
                            latitude: activeItem.city.coord.latitude,
                            longitude: activeItem.city.coord.longitude,
                            latitudeDelta: 0.1,
                            longitudeDelta: 0.1
                        }}
                    >
                        {   // SEA
                            activeItem.city.placeCategory.sea != undefined && activeItem.city.placeCategory.sea != null &&
                            activeItem.city.placeCategory.sea.map((item: any, index: any) => (
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
                            activeItem.city.placeCategory.nature != undefined && activeItem.city.placeCategory.nature != null &&
                            activeItem.city.placeCategory.nature.map((item: any, index: any) => (
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
                            activeItem.city.placeCategory.city != undefined && activeItem.city.placeCategory.city != null &&
                            activeItem.city.placeCategory.city.map((item: any, index: any) => (
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
                            activeItem.city.placeCategory.camp != undefined && activeItem.city.placeCategory.camp != null &&
                            activeItem.city.placeCategory.camp.map((item: any, index: any) => (
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
                            activeItem.city.placeCategory.ski != undefined && activeItem.city.placeCategory.ski != null &&
                            activeItem.city.placeCategory.ski.map((item: any, index: any) => (
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
                }
            </View>




            <View style={styles.placeContainer}>

                {/* Left */}
                <View style={styles.placeLeftContainer}>

                    <View style={[{}, styles.placeHeaderContainer]}>

                        <View style={styles.headerIconWrapper}>
                            <Pressable onPress={() => previousTravelItem()} style={styles.headerIconBox} >
                                <FontAwesome name="angle-left" size={22} color="#3e5c76" />
                            </Pressable>
                        </View>

                        <FlatList
                            ref={travelRef}
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
                                <FontAwesome name="angle-right" size={22} color="#3e5c76" />
                            </Pressable>
                        </View>

                    </View>


                    <View style={styles.placeContentContainer}>
                        {
                            activeItem != undefined &&
                            <FlatList
                                data={activeItem.city.placeCategory[activeCategory]}
                                renderItem={({ item, index }) => (
                                    <View style={styles.placeContentBox}>
                                        <View style={styles.placeContentTextBox}>
                                            <Text style={styles.placeContentText}>{item.name}</Text>
                                        </View>
                                        <View style={styles.placeBtnGroupBox}>
                                            <Pressable
                                                style={styles.placeBtnBox}
                                                onPress={() => check(item)}
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
                                    </View>
                                )}
                                showsVerticalScrollIndicator={false}
                            />
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

        </View>
    )
}

export default TravelScreen
