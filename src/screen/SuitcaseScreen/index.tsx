import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, FlatList, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { suitcaseDatas } from '../../datas/suitcaseData'
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons, FontAwesome6, Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux';
import CountryFlag from 'react-native-country-flag';
import { useRoute } from '@react-navigation/native';
import { setActiveData, setActiveTravelCategory } from '../../redux/travelSlice';


const { width, height } = Dimensions.get("window")

const SuitcaseScreen = () => {

    const { params } = useRoute();
    const [category, setCategory] = useState<any>([]);
    const [viewable, setViewable] = useState<any>('clothing');

    const dispatch: any = useDispatch();

    const contentFlatlistRef = useRef<any>()
    const contentOnViewRef = useRef((viewableItems: any) => {
        setViewable(viewableItems.viewableItems[0].item)
    })

    const contentViewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 })
    const [totalData, setTotalData] = useState(0);
    const [checkData, setCheckData] = useState(0);
    const { allTravelData, activeData, activeTravelCategory } = useSelector((state: any) => state.travel);


    useEffect(() => {

        const fetchData = async () => {
            try {

                if (activeTravelCategory == '') {
                    dispatch(setActiveTravelCategory(allTravelData[0].key))
                    if (params != undefined) {
                        dispatch(setActiveTravelCategory(params))
                    }
                }

                const travelData = await AsyncStorage.getItem(`${activeTravelCategory}`)

                if (travelData != null) {
                    const suitcaseInfo = JSON.parse(travelData)
                    if (Object.keys(suitcaseInfo).length != 0) {

                        dispatch(setActiveData(suitcaseInfo))
                        setTotalData(suitcaseInfo.data[viewable].length)
                        setCheckData(suitcaseInfo.data[viewable].filter((item: any) => item.check == true).length)
                    }
                }
            } catch (error) {
                throw error
            }
        }
        fetchData()
        setCategory(Object.keys(suitcaseDatas.male.sea))

    }, [activeTravelCategory, viewable])


    const [active, setActive] = useState('clothing');
    const setActiveCategory = (item: any) => {
        setActive(item)
        contentFlatlistRef.current.scrollToItem({ item: item, animated: true })
    }


    const check = (checkItem: any) => {
        const updatedCategory = activeData?.data[viewable].map((item: any) =>
            item.item === checkItem.item ? { ...item, check: checkItem.check ? false : true } : item
        );

        dispatch(setActiveData({
            ...activeData,
            data: {
                ...activeData.data,
                [viewable]: updatedCategory
            }
        }))

        const setAsync = async () => {
            await AsyncStorage.setItem(`${activeTravelCategory}`,
                JSON.stringify({
                    ...activeData,
                    data: {
                        ...activeData.data,
                        [viewable]: updatedCategory
                    }
                }))
            setCheckData(updatedCategory.filter((item: any) => item.check == true).length)
            setTotalData(updatedCategory.length)
        }
        setAsync();
    }

    const selectAll = (option: any) => {
        const updatedCategory = activeData?.data[viewable].map((item: any) =>
            item.check == option ? { ...item, check: !option } : item
        );

        dispatch(setActiveData({
            ...activeData,
            data: {
                ...activeData.data,
                [viewable]: updatedCategory
            }
        }))

        const setAsync = async () => {
            await AsyncStorage.setItem(`${activeTravelCategory}`,
                JSON.stringify({
                    ...activeData,
                    data: {
                        ...activeData.data,
                        [viewable]: updatedCategory
                    }
                }))
            setCheckData(updatedCategory.filter((item: any) => item.check == true).length)
            setTotalData(updatedCategory.length)
        }
        setAsync();
    }





    return (
        <View style={styles.container}>
            {/* <View style={{ width: width * 0.9, height: height * 0.875, borderWidth: 1, backgroundColor: 'red', left: width * 0.05, position: 'absolute', marginTop: height * 0.075, opacity: 0.2 }}></View> */}

            <View >
                <FlatList
                    data={allTravelData}
                    renderItem={({ item, index }) => (
                        <Pressable
                            key={index}
                            onPress={() => dispatch(setActiveTravelCategory(item.key))}
                            style={[{ backgroundColor: activeTravelCategory == item.key ? '#02c39a' : 'rgba(255,255,255,0.5)' }, styles.travelCategoryBtn]}
                        >
                            {
                                item.code &&
                                <CountryFlag style={styles.flag} isoCode={item.code} size={10} />
                            }
                            <Text style={styles.travelCategoryText}>{item.city.name}</Text>
                        </Pressable>
                    )}
                    style={styles.travelCategoryContainer}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

                <FlatList
                    data={category}
                    renderItem={({ item, index }) => (
                        <View style={{ justifyContent: 'center' }}>
                            <View style={styles.badgeBox}>
                                <Text style={styles.badgeText}>
                                    {
                                        activeData?.data?.[item] != undefined &&
                                        activeData.data[item].filter((item: any) => item.check == false).length
                                    }
                                </Text>
                            </View>
                            <Pressable
                                style={({ pressed }) => [
                                    {
                                        backgroundColor: active == item ? '#02c39a' : 'rgba(255, 255, 255, 0.75)',
                                    },
                                    styles.categoryBtnBox
                                ]}
                                onPress={() => setActiveCategory(item)}
                            >
                                {
                                    item == 'clothing' &&
                                    <FontAwesome5 name="tshirt" size={24} color={item == active ? '#fff' : 'black'} />
                                }
                                {
                                    item == 'food_and_drink' &&
                                    <MaterialCommunityIcons name="food-fork-drink" size={30} color={item == active ? '#fff' : 'black'} />
                                }
                                {
                                    item == 'personal_care' &&
                                    <FontAwesome6 name="face-laugh" size={30} color={item == active ? '#fff' : 'black'} />
                                }
                                {
                                    item == 'electronics' &&
                                    <MaterialIcons name="electric-bolt" size={30} color={item == active ? '#fff' : 'black'} />
                                }
                                {
                                    item == 'health_and_first_aid' &&
                                    <FontAwesome5 name="briefcase-medical" size={26} color={item == active ? '#fff' : 'black'} />
                                }
                                {
                                    item == 'documents' &&
                                    <MaterialCommunityIcons name="file-document-outline" size={30} color={item == active ? '#fff' : 'black'} />
                                }
                                {
                                    item == 'equipment' &&
                                    <Entypo name="tools" size={28} color={item == active ? '#fff' : 'black'} />
                                }
                            </Pressable>
                        </View >
                    )}
                    horizontal
                    contentContainerStyle={styles.categoryContainer}
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                />

                <FlatList
                    ref={contentFlatlistRef}
                    data={category}
                    renderItem={({ item, index }) => (
                        <View
                            key={index}
                            style={styles.contentBox}
                        >
                            {
                                item == viewable &&
                                <View style={{ flexDirection: 'column' }}>

                                    <FlatList
                                        data={activeData?.data?.[viewable]}
                                        renderItem={({ item, index }) => (
                                            <View
                                                key={index}
                                                style={styles.itemBox}>
                                                <View style={[
                                                    {
                                                        backgroundColor: item.check ? '#02c39a' : 'rgba(255,255,255,0.75)'
                                                    },
                                                    styles.item]}>
                                                    <Pressable onPress={() => check(item)} style={styles.checkBox}>
                                                        {
                                                            item.check == true &&
                                                            <Entypo name="check" size={22} color="black" />
                                                        }
                                                    </Pressable>
                                                    <Text>{item.item}</Text>
                                                </View>
                                            </View>
                                        )}
                                        style={styles.itemContainer}
                                        showsVerticalScrollIndicator={false}
                                        numColumns={3}
                                    />
                                    {
                                        allTravelData.length != 0 &&
                                        <View style={styles.loadingContainer}>
                                            <View style={styles.loadingSubContainer}>
                                                {
                                                    checkData != 0 && totalData != 0 &&
                                                    <>
                                                        <View style={[{ width: ((width * 0.58) * (checkData / totalData)) }, styles.loadingBox]}></View>
                                                        <Text style={styles.loadingText}>{checkData} / {totalData}</Text>
                                                    </>
                                                }
                                            </View>
                                            <View style={styles.optionBox}>
                                                <Pressable
                                                    style={styles.selectBox}
                                                    onPress={() => selectAll(true)}
                                                >
                                                    <MaterialIcons name="delete" size={24} color="#000814" />
                                                </Pressable>
                                                <Pressable
                                                    style={styles.selectBox}
                                                    onPress={() => selectAll(false)}
                                                >
                                                    <MaterialCommunityIcons name="checkbox-multiple-marked" size={24} color="#000814" />
                                                </Pressable>
                                            </View>
                                        </View>
                                    }
                                </View>
                            }
                        </View>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.contentContainer}
                    onViewableItemsChanged={contentOnViewRef.current}
                    snapToInterval={width * 0.9}
                    viewabilityConfig={contentViewConfigRef.current}
                    scrollEnabled={false}
                />
            </View>
        </View >
    )
}

export default SuitcaseScreen
