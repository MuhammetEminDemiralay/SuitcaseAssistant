import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, FlatList, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { useSelector } from 'react-redux'
import { suitcaseDatas } from '../../datas/suitcaseData'
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons, FontAwesome6, Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage'


const { width, height } = Dimensions.get("window")

const SuitcaseScreen = () => {

    const [data, setData] = useState([]);
    const [category, setCategory] = useState<any>([]);
    const [viewable, setViewable] = useState('clothing');

    const contentFlatlistRef = useRef<any>()
    const contentOnViewRef = useRef((viewableItems: any) => {
        setViewable(viewableItems.viewableItems[0].item)

    })

    const contentViewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 })
    const [checkData, setCheckData] = useState();

    useEffect(() => {

        const fetchData = async () => {
            try {
                if (await AsyncStorage.getItem('_travel')) {
                    const travelData = await AsyncStorage.getItem('_travel')

                    console.log("KEY", await AsyncStorage.getAllKeys());


                    if (travelData != null) {
                        const suitcaseInfo = JSON.parse(travelData)

                        console.log("Hoppala", suitcaseInfo);


                        if (Object.keys(suitcaseInfo).length != 0) {
                            const travelType = suitcaseInfo?.travelType?.item.toLocaleLowerCase();
                            setCheckData(suitcaseDatas[suitcaseInfo?.gender][travelType])
                            setData(suitcaseDatas[suitcaseInfo?.gender][travelType][viewable])
                        }
                    }
                }


            } catch (error) {

            }
        }

        fetchData();


        setCategory(Object.keys(suitcaseDatas.male.sea))


    }, [viewable])

    const [active, setActive] = useState('clothing');
    const setActiveCategory = (item: any) => {
        setActive(item)
        contentFlatlistRef.current.scrollToItem({ item: item, animated: true })
    }


    const check = (item: any) => {
        console.log(item);

    }

    console.log(data);

    console.log('Check data', checkData);



    return (
        <View style={styles.container}>
            <View style={{ width: width * 0.9, height: height * 0.85, borderWidth: 1, backgroundColor: 'red', left: width * 0.05, position: 'absolute', marginTop: height * 0.075, opacity: 0.2 }}></View>

            <View style={{}}>

                <FlatList
                    data={null}
                    renderItem={() => (
                        <>
                        </>
                    )}
                    style={{ height: height * 0.05, width: width * 0.9, backgroundColor: 'orange' }}
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
                        <View key={index} style={styles.contentBox}>
                            {
                                item == viewable &&
                                <>
                                    <FlatList
                                        data={data}
                                        renderItem={(contentItem: any) => (
                                            <View style={styles.itemBox}>
                                                <View style={styles.item}>
                                                    <Text>{contentItem?.item.item}</Text>
                                                    <Pressable onPress={() => check(contentItem?.item)} style={styles.checkBox}>

                                                    </Pressable>
                                                </View>
                                            </View>
                                        )}
                                        style={styles.itemContainer}
                                        numColumns={3}
                                    />
                                </>
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
        </View>
    )
}

export default SuitcaseScreen
