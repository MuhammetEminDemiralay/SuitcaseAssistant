import React, { useRef, useState } from 'react'
import { Dimensions, FlatList, GestureResponderEvent, Image, LayoutChangeEvent, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { FontAwesome, MaterialIcons, Foundation, FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';
import { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker'
import CountryFlag from "react-native-country-flag";
import { Dropdown } from 'react-native-element-dropdown';
import { countryDatas } from '../../datas/countryDatas';
import { holidayCategory } from '../../datas/holidayCategory';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { cityDatas } from '../../datas/cityDatas';
import uuid from 'react-native-uuid'
import { suitcaseDatas } from '../../datas/suitcaseData';
import { useDispatch } from 'react-redux';
import { setAllTravelData, setState } from '../../redux/travelSlice';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get("window");

const CreateHolidayScreen = () => {


  const dispatch: any = useDispatch();
  const navigation: any = useNavigation();


  // GENDER

  const genders = ["male", "female", 'couple', "family"]
  const [gender, setGender] = useState("male");
  const [genderIndex, setGenderIndex] = useState(0)
  const genderFlatlistRef = useRef<any>();

  const genderOnViewRef = useRef((viewableItems: any) => {
    setGender(viewableItems.viewableItems[0].item)
    setGenderIndex(viewableItems.viewableItems[0].index)
  })

  const genderViewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 })

  const previousGenderItem = () => {
    if (genderIndex != 0) {
      let targetIndex = genderIndex - 1
      genderFlatlistRef.current.scrollToIndex({ index: targetIndex, animated: true })
    }
    if (genderIndex == 0) {
      let targetIndex = ((genders.length) - 1)
      genderFlatlistRef.current.scrollToIndex({ index: targetIndex, animated: true })
    }
  }

  const nextGenderItem = () => {
    const lastIndex = ((genders.length) - 1)
    if (genderIndex != lastIndex) {
      let targetIndex = genderIndex + 1
      genderFlatlistRef.current.scrollToIndex({ index: targetIndex, animated: true })
    }
    if (genderIndex == ((genders.length) - 1)) {
      genderFlatlistRef.current.scrollToIndex({ index: 0, animated: true })
    }
  }


  // DATE

  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [iconWidth, setIconWidth] = useState<any>()

  const start = () => {
    DateTimePickerAndroid.open({
      value: new Date(),
      minimumDate: new Date(),
      onChange: (event: DateTimePickerEvent, date?: Date) => {
        setStartDate(date)
      }
    })
  }
  const end = () => {
    DateTimePickerAndroid.open({
      value: new Date(),
      minimumDate: startDate,
      onChange: (event: DateTimePickerEvent, date?: Date) => {
        setEndDate(date)
      }
    })
  }
  const layoutDateIcon = (event: LayoutChangeEvent) => {
    setIconWidth(event.nativeEvent.layout.width)
  }



  // COUNTRY

  const [value, setValue] = useState(null);
  const [flagCode, setFlagCode] = useState<string>("TR")
  const [targetCitys, setTargetCitys] = useState<[]>([]);
  const [targetCountry, setTargetCountry] = useState("Turkey");

  const countryDropDownChange = (event: any) => {
    setFlagCode(event.code)
    console.log(cityDatas.find(item => item.countryName == event.name)?.city);
    setTargetCountry(event.name)
  }

  const cityDropDownChange = (event: any) => {
    console.log("City", event);

  }


  // TRAVEL

  const [travel, setTravel] = useState<any>("Sea")
  const [travelIndex, setTravelIndex] = useState(0);
  const travelFlatListRef = useRef<any>();
  const travelOnViewRef = useRef((viewableItems: any) => {
    setTravel(viewableItems.viewableItems[0].item)
    setTravelIndex(viewableItems.viewableItems[0].index)
  })
  const travelViewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 })

  const travelPreviousItem = () => {
    if (travelIndex != 0) {
      let targetIndex = travelIndex - 1
      travelFlatListRef.current.scrollToIndex({ index: targetIndex, animated: true })
    }
    if (travelIndex == 0) {
      let targetIndex = ((holidayCategory.length) - 1)
      travelFlatListRef.current.scrollToIndex({ index: targetIndex, animated: true })
    }
  }

  const travelNextItem = () => {
    const lastIndex = ((holidayCategory.length) - 1)
    if (travelIndex != lastIndex) {
      let targetIndex = travelIndex + 1
      travelFlatListRef.current.scrollToIndex({ index: targetIndex, animated: true })
    }
    if (travelIndex == ((holidayCategory.length) - 1)) {
      travelFlatListRef.current.scrollToIndex({ index: 0, animated: true })
    }
  }




  const create = async () => {
    console.log(travel);

    if ((gender && startDate && endDate && travel) != null) {
      let uid = uuid.v4()
      const data = {
        gender: gender,
        startDate: startDate,
        endDate: endDate,
        travelType: travel,
        countryName: 'Turkey',
        city: 'İstanbul',
        code: flagCode,
        key: uid,
        data: suitcaseDatas[gender][travel.item.toLocaleLowerCase()]
      }
      await AsyncStorage.setItem(`${uid}`, JSON.stringify(data))
      dispatch(setAllTravelData(data))
    }

    dispatch(setState())
  }

  return (
    <View style={styles.container}>

      {/* <View style={{ width: width * 0.9, height: height * 0.8, borderWidth: 1, backgroundColor: 'red', position: 'absolute', marginTop: height * 0.1, opacity: 0.2 }}></View> */}

      {/* gender */}
      <View style={styles.genderContainer}>
        <Pressable onPress={() => previousGenderItem()} style={[{ left: 0 }, styles.genderIcon]} >
          <FontAwesome name="angle-left" size={24} color="black" />
        </Pressable>
        <FlatList
          data={genders}
          ref={genderFlatlistRef}
          renderItem={({ item, index }) => (
            <View style={styles.genderBox}>
              {
                item == 'male' &&
                <FontAwesome name="male" size={45} color="#fff" />
              }
              {
                item == 'female' &&
                <FontAwesome name="female" size={45} color="#fff" />
              }
              {
                item == 'couple' &&
                <Foundation name="male-female" size={55} color="#fff" />
              }
              {
                item == 'family' &&
                <MaterialIcons name="family-restroom" size={55} color="#fff" />
              }
            </View>
          )}
          contentContainerStyle={styles.genderContentList}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width * 0.40}
          decelerationRate={'normal'}
          onViewableItemsChanged={genderOnViewRef.current}
          viewabilityConfig={genderViewConfigRef.current}
        />
        <Pressable style={[{ right: 0 }, styles.genderIcon]} onPress={() => nextGenderItem()}>
          <FontAwesome name="angle-right" size={24} color="black" />
        </Pressable>
        <Text style={styles.genderText}>{gender}</Text>
      </View>



      {/* date */}
      <View style={styles.dateContainer}>

        <View style={styles.dateBox}>
          <View style={styles.iconBox}>
            <FontAwesome
              onPress={() => start()}
              style={styles.dateIcon}
              name={startDate == null ? 'calendar-plus-o' : 'calendar-check-o'}
              size={width * 0.10}
              color='#fff'
              onLayout={(event) => layoutDateIcon(event)}
            />
          </View>
          {
            iconWidth &&
            <View style={[{ width: (width * 0.6) - iconWidth }, styles.dateScreen]}>
              {
                startDate == undefined &&
                <Text style={styles.dateText}>Start</Text>
              }
              {
                startDate != undefined &&
                <Text style={styles.dateText}>{(startDate.getDate()) < 10 && 0}{startDate?.getDate()}  {(startDate.getMonth() + 1) < 10 && 0}{startDate.getMonth() + 1}  {startDate.getFullYear()}</Text>
              }
            </View>
          }
        </View>

        <View style={styles.dateBox}>
          <View style={styles.iconBox}>
            <FontAwesome
              onPress={() => end()}
              style={styles.dateIcon}
              name={endDate == null ? 'calendar-plus-o' : 'calendar-check-o'}
              size={width * 0.1}
              color='#fff'
            />
          </View>
          {
            iconWidth &&
            <View style={[{}, styles.dateScreen]}>
              {
                endDate == undefined &&
                <Text style={styles.dateText}>End</Text>
              }
              {
                endDate != undefined &&
                <Text style={styles.dateText}>{(endDate.getDate()) < 10 && 0}{endDate?.getDate()}  {(endDate.getMonth() + 1) < 10 && 0}{endDate.getMonth() + 1 + " "} {endDate.getFullYear()}</Text>
              }
            </View>
          }
        </View>

      </View>



      {/* country/city select */}
      <View style={styles.countryContainer}>

        <View style={styles.countryBox}>
          <CountryFlag style={styles.flag} isoCode={flagCode} size={25} />
          <Dropdown
            style={styles.dropdown}
            containerStyle={styles.dropdownContainer}
            search
            data={countryDatas}
            onChange={(event: any) => countryDropDownChange(event)}
            labelField="name"
            valueField="name"
            value={value}
            mode='modal'
            placeholder='Country'
            searchPlaceholder='search ...'
            placeholderStyle={styles.placeHolderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            itemContainerStyle={styles.itemContainerStyle}
            inputSearchStyle={styles.inputSearchStyle}
            renderRightIcon={() => (
              <MaterialCommunityIcons name="menu-down" size={30} color="black" />
            )}
          />
        </View>

        <View style={styles.cityBox}>
          <View style={styles.cityIcon}>
            <MaterialCommunityIcons name="city" size={width * 0.09} color="black" />
          </View>
          <Dropdown
            style={styles.dropdown}
            containerStyle={styles.dropdownContainer}
            search
            data={cityDatas}
            onChange={(event: any) => cityDropDownChange(event)}
            labelField="city"
            valueField="city"
            value={value}
            mode='modal'
            placeholder='City'
            searchPlaceholder='search ...'
            placeholderStyle={styles.placeHolderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            itemContainerStyle={styles.itemContainerStyle}
            inputSearchStyle={styles.inputSearchStyle}
            renderRightIcon={() => (
              <MaterialCommunityIcons name="menu-down" size={30} color="black" />
            )}
          />
        </View>
      </View>



      {/* travel type*/}
      <View style={styles.travelTypeContainer}>
        <View style={styles.travelTextBox}>
          <Text style={styles.travelText}>{travel.item}</Text>
        </View>
        <Pressable onPress={() => travelPreviousItem()} style={[{ left: 10 }, styles.carouselBtn]}>
          <FontAwesome style={styles.carouselIcon} name="angle-left" size={24} color="black" />
        </Pressable>
        <FlatList
          ref={travelFlatListRef}
          data={holidayCategory}
          renderItem={({ item, index }) => (
            <Image
              key={index}
              style={styles.holidayCategoryImage}
              source={
                item.id == 1 ? require("../../datas/holidayCategoryImage/1.jpg") :
                  item.id == 2 ? require("../../datas/holidayCategoryImage/2.jpg") :
                    item.id == 3 ? require("../../datas/holidayCategoryImage/3.jpg") :
                      item.id == 4 ? require("../../datas/holidayCategoryImage/4.jpg") :
                        item.id == 5 ? require("../../datas/holidayCategoryImage/5.jpg") :
                          item.id == 6 ? require("../../datas/holidayCategoryImage/6.jpg") : null
              }
            />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          decelerationRate={'normal'}
          snapToInterval={width * 0.9}
          onViewableItemsChanged={travelOnViewRef.current}
          viewabilityConfig={travelViewConfigRef.current}
        />
        <Pressable onPress={() => travelNextItem()} style={[{ right: 10 }, styles.carouselBtn]}>
          <FontAwesome style={styles.carouselIcon} name="angle-right" size={24} color="black" />
        </Pressable>
      </View>



      <View style={styles.confirmBox}>
        <Pressable onPress={() => create()} style={styles.confirmBtn}>
          <Text style={styles.confirmText}>Create</Text>
        </Pressable>
      </View>



    </View>
  )
}



export default CreateHolidayScreen
