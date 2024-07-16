import React, { useRef, useState } from 'react'
import { Dimensions, FlatList, LayoutChangeEvent, Text, View } from 'react-native'
import { styles } from './styles'
import { FontAwesome, MaterialIcons, Foundation, FontAwesome5 } from '@expo/vector-icons';
import { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker'

const { width, height } = Dimensions.get("window");

const CreateHolidayScreen = () => {

  const genders = ["male", "female", 'couple', "family"]
  const [gender, setGender] = useState("male");

  const onViewRef = useRef((viewableItems: any) => {
    console.log(viewableItems);
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
              size={width * 0.15}
              color="#fff"
              onLayout={(event) => layoutDateIcon(event)}
            />
            <FontAwesome5 style={styles.timeIcon} name="hourglass-start" size={20} color="#fff" />
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
                <Text>{startDate?.getDate()}</Text>
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
              size={width * 0.15}
              color="#fff"
            />
            <FontAwesome5 style={styles.timeIcon} name="hourglass-end" size={20} color="#fff" />
          </View>
          {
            iconWidth &&
            <View style={[{ width: (width * 0.6) - iconWidth }, styles.dateScreen]}>
              {
                endDate == undefined &&
                <Text>End</Text>
              }
              {
                endDate != undefined &&
                <Text>{endDate?.getDate()}</Text>
              }
            </View>
          }
        </View>

      </View>


    </View>
  )
}

export default CreateHolidayScreen
