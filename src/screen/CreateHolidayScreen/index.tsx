import React, { useRef, useState } from 'react'
import { Dimensions, FlatList, Image, LayoutChangeEvent, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { FontAwesome, MaterialIcons, Foundation, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker'
import { holidayCategory } from '../../datas/holidayCategıory';
import CountryFlag from "react-native-country-flag";
import { Dropdown } from 'react-native-element-dropdown';
import { countryDatas } from '../../datas/countryData';


const { width, height } = Dimensions.get("window");

const CreateHolidayScreen = () => {

  const genders = ["male", "female", 'couple', "family"]
  const [gender, setGender] = useState("male");

  const onViewRef = useRef((viewableItems: any) => {
    setGender(viewableItems.viewableItems[0].item)
  })
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 })

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



  const [value, setValue] = useState(null);
  const dropDownChange = () => {

  }



  return (
    <View style={styles.container}>
      {/* gender */}
      <View style={styles.genderContainer}>
        <FlatList
          data={genders}
          renderItem={({ item, index }) => (
            <View style={styles.genderBox}>
              {
                item == 'male' &&
                <FontAwesome name="male" size={50} color="black" />
              }
              {
                item == 'female' &&
                <FontAwesome name="female" size={50} color="black" />
              }
              {
                item == 'couple' &&
                <Foundation name="male-female" size={50} color="black" />
              }
              {
                item == 'family' &&
                <MaterialIcons name="family-restroom" size={50} color="black" />
              }
            </View>
          )}
          contentContainerStyle={styles.genderContentList}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width * 0.40}
          decelerationRate={'fast'}
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
        />
        <Text>{gender}</Text>
      </View>


      {/* date */}
      <View style={styles.dateContainer}>

        <View style={styles.dateBox}>
          <View style={styles.iconBox}>
            <FontAwesome
              onPress={() => start()}
              style={styles.dateIcon}
              name="calendar-o"
              size={width * 0.12}
              color="#fff"
              onLayout={(event) => layoutDateIcon(event)}
            />
          </View>
          {
            iconWidth &&
            <View style={[{ width: (width * 0.6) - iconWidth }, styles.dateScreen]}>
              {
                startDate == undefined &&
                <Text>Start</Text>
              }
              {
                startDate != undefined &&
                <Text style={styles.dateText}>{startDate?.getDate()} {startDate.getMonth() + 1} {startDate.getFullYear()}</Text>
              }
            </View>
          }
        </View>

        <View style={styles.dateBox}>
          <View style={styles.iconBox}>
            <FontAwesome 
              onPress={() => end()}
              style={styles.dateIcon}
              name="calendar-o"
              size={width * 0.12}
              color="#fff"
            />
          </View>
          {
            iconWidth &&
            <View style={[{}, styles.dateScreen]}>
              {
                endDate == undefined &&
                <Text>End</Text>
              }
              {
                endDate != undefined &&
                <Text style={styles.dateText}>{endDate?.getDate()} {endDate.getMonth() + 1} {endDate.getFullYear()}</Text>
              }
            </View>
          }
        </View>

      </View>



      {/* country/city select */}
      <View style={styles.countryContainer}>

        <View style={styles.countryBox}>
            <CountryFlag style={styles.flag} isoCode='TR' size={25} />
            <Dropdown
              style={styles.dropdown}
              containerStyle={styles.dropdownContainer}
              search
              data={countryDatas}
              onChange={() => dropDownChange()}
              labelField="name"
              valueField="name"
              value={value}
              mode='modal'
              placeholder=''
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
            data={countryDatas}
            onChange={() => dropDownChange()}
            labelField="name"
            valueField="name"
            value={value}
            mode='modal'
            placeholder='City'
            renderRightIcon={() => (
              <MaterialCommunityIcons name="menu-down" size={30} color="black" />
            )}
          />
        </View>
      </View>



      {/* travel type*/}
      <View style={styles.travelTypeContainer}>
        <FlatList
          data={holidayCategory}
          renderItem={({ item, index }) => (
            <Image
              style={styles.holidayCategoryImage}
              source={
                item.id == 1 ? require("../../datas/holidayCategoryImage/1.jpg") :
                  item.id == 2 ? require("../../datas/holidayCategoryImage/2.jpg") :
                    item.id == 3 ? require("../../datas/holidayCategoryImage/3.jpg") :
                      item.id == 4 ? require("../../datas/holidayCategoryImage/4.jpg") :
                        item.id == 5 ? require("../../datas/holidayCategoryImage/5.jpg") :
                          item.id == 6 ? require("../../datas/holidayCategoryImage/6.jpg") :
                            item.id == 7 ? require("../../datas/holidayCategoryImage/7.jpg") : null}
            />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          snapToInterval={width * 1}
        />
      </View>

      <Pressable style={styles.confirmBtn}>

      </Pressable>



    </View>
  )
}



export default CreateHolidayScreen
