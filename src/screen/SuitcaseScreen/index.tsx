import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, FlatList, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { useSelector } from 'react-redux'
import { suitcaseDatas } from '../../datas/suitcaseData'
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons, FontAwesome6, Entypo } from '@expo/vector-icons';


const { width, height } = Dimensions.get("window")

const SuitcaseScreen = () => {

    const { suitcaseInfo } = useSelector((state: any) => state.travel)
    const [data, setData] = useState([]);
    const [category, setCategory] = useState<any>([]);
    const contentFlatlistRef = useRef<any>()
    const contentOnViewRef = useRef((viewableItems: any) => {
        console.log(viewableItems.viewableItems[0]);
    })

    const contentViewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 })


    useEffect(() => {
        if (Object.keys(suitcaseInfo).length != 0) {
            const travelType = suitcaseInfo?.travelType?.item.toLocaleLowerCase();
            setData(suitcaseDatas[suitcaseInfo?.gender][travelType])
        }
        setCategory(Object.keys(suitcaseDatas.male.sea))
    }, [suitcaseInfo])

    const [active, setActive] = useState('clothing');
    const setActiveCategory = (item: any) => {
        setActive(item)
        contentFlatlistRef.current.scrollToItem({ item: item, animated: true })
    }

    return (
        <View style={styles.container}>

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
                                <MaterialCommunityIcons name="food-fork-drink" size={30} color={item == active ? '#fff' : 'black'}  />
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
                                <FontAwesome5 name="briefcase-medical" size={26} color={item == active ? '#fff' : 'black'}  />
                            }
                            {
                                item == 'documents' &&
                                <MaterialCommunityIcons name="file-document-outline" size={30} color={item == active ? '#fff' : 'black'}  />
                            }
                            {
                                item == 'equipment' &&
                                <Entypo name="tools" size={28} color={item == active ? '#fff' : 'black'}  />
                            }
                        </Pressable>
                    </>
                )}
                horizontal
                contentContainerStyle={styles.categoryContainer}
            />

            <FlatList
                ref={contentFlatlistRef}
                data={category}
                renderItem={({ item, index }) => (
                    <View key={index} style={styles.contentBox}>
                        <Text>{item}</Text>
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
    )
}

export default SuitcaseScreen
