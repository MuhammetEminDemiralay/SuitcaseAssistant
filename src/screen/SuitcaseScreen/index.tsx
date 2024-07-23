import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, FlatList, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { suitcaseDatas } from '../../datas/suitcaseData'
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons, FontAwesome6, Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useSelector } from 'react-redux';


const { width, height } = Dimensions.get("window")

const SuitcaseScreen = () => {

    const [data, setData] = useState([]);
    const [category, setCategory] = useState<any>([]);
    const [viewable, setViewable] = useState<any>('clothing');

    const contentFlatlistRef = useRef<any>()
    const contentOnViewRef = useRef((viewableItems: any) => {
        setViewable(viewableItems.viewableItems[0].item)
    })

    const contentViewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 })
    const [keys, setKeys] = useState<readonly string[]>([])
    const [activeTravelCategory, setActiveTravelCategory] = useState<string>("");
    const [activeData, setActiveData] = useState<any>([])
    const [totalData, setTotalData] = useState(0);
    const [checkData, setCheckData] = useState(0);
    const { allTravelData } = useSelector((state: any) => state.travel)


    useEffect(() => {

        const fetchData = async () => {
            try {
                const key = await AsyncStorage.getAllKeys()
                setKeys(key);
                if (activeTravelCategory == '') {
                    setActiveTravelCategory(key[0])
                }

                const travelData = await AsyncStorage.getItem(`${activeTravelCategory}`)
                setActiveData(travelData)

                if (travelData != null) {
                    const suitcaseInfo = JSON.parse(travelData)
                    if (Object.keys(suitcaseInfo).length != 0) {
                        setData(suitcaseInfo.data)
                        setTotalData(suitcaseInfo.data[viewable].length)
                        setCheckData(suitcaseInfo.data[viewable].filter((item: any) => item.check == true).length)
                    }
                }
            } catch (error) {
                throw error
            }
        }
        setCategory(Object.keys(suitcaseDatas.male.sea))
        fetchData()
    }, [activeTravelCategory, viewable, keys[0]])



    const [active, setActive] = useState('clothing');
    const setActiveCategory = (item: any) => {
        setActive(item)
        contentFlatlistRef.current.scrollToItem({ item: item, animated: true })
    }


    const check = (checkItem: any) => {

        setData((prevData: any) => {
            const updatedCategory = prevData[viewable].map((item: any) =>
                item.item === checkItem.item ? { ...item, check: checkItem.check ? false : true } : item
            );

            const setAsync = async () => {
                await AsyncStorage.setItem(`${activeTravelCategory}`,
                    JSON.stringify({
                        gender: activeData.gender,
                        startDate: activeData.startDate,
                        endDate: activeData.endDate,
                        countryName: 'Turkey',
                        city: 'İstanbul',
                        data: {
                            ...prevData,
                            [viewable]: updatedCategory
                        }
                    }))
                setCheckData(updatedCategory.filter((item: any) => item.check == true).length)
                setTotalData(updatedCategory.length)

            }
            setAsync();

            return {
                ...prevData,
                [viewable]: updatedCategory
            };
        });

    }

    const selectAll = (option: any) => {

        setData((prevData: any) => {
            const updatedCategory = prevData[viewable].map((item: any) =>
                item.check == option ? { ...item, check: !option } : item
            );

            const setAsync = async () => {
                await AsyncStorage.setItem(`${activeTravelCategory}`,
                    JSON.stringify({
                        gender: activeData.gender,
                        startDate: activeData.startDate,
                        endDate: activeData.endDate,
                        countryName: 'Turkey',
                        city: 'İstanbul',
                        data: {
                            ...prevData,
                            [viewable]: updatedCategory
                        }
                    }))
                setCheckData(updatedCategory.filter((item: any) => item.check == true).length)
                setTotalData(updatedCategory.length)

            }
            setAsync();

            return {
                ...prevData,
                [viewable]: updatedCategory
            };

        })

    }

    return (
        <View style={styles.container}>
            {/* <View style={{ width: width * 0.9, height: height * 0.85, borderWidth: 1, backgroundColor: 'red', left: width * 0.05, position: 'absolute', marginTop: height * 0.075, opacity: 0.2 }}></View> */}

            <View style={{}}>

                <FlatList
                    data={keys}
                    renderItem={({ item, index }) => (
                        <Pressable
                            key={index}
                            onPress={() => setActiveTravelCategory(item)}
                            style={[{ backgroundColor: activeTravelCategory == item ? '#02c39a' : 'rgba(255,255,255,0.5)' }, styles.travelCategoryBtn]}
                        >
                            <Text style={{ fontSize: 16, fontWeight: '500' }}>Travel {index + 1}</Text>
                        </Pressable>
                    )}
                    style={styles.travelCategoryContainer}
                    horizontal
                />

                <FlatList
                    data={category}
                    renderItem={({ item, index }) => (
                        <>
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
                        </>
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
                                        data={data[viewable]}
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
