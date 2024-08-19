import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: height * 1,
        backgroundColor: '#3e5c76',
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.075,
    },
    categoryContainer: {
        width: width * 0.9,
        height: height * 0.125,
        borderRadius: 10,
        justifyContent: 'space-between',
        marginVertical: height * 0.025,
    },
    badgeBox: {
        width: height * 0.025,
        height: height * 0.025,
        position: 'absolute',
        top: (height * 0.025) / 4,
        right: -1,
        zIndex: 1,
        borderRadius: 50,
        backgroundColor: '#e63946',
        elevation: 2,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    badgeText: {
        color: '#fff',
        fontSize: 12
    },
    categoryBtnBox: {
        width: (width * 0.9) / 7.5,
        maxHeight: height * 0.1,
        minHeight: height * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#fff',
    },
    contentContainer: {
        height: height * 0.65,
    },
    contentBox: {
        borderRadius: 10,
        width: width * 0.9,
        height: '100%',
        flexDirection: 'row',
    },
    itemContainer: {
        width: width * 0.9,
        height: (height * 0.6) - width * 0.03,
    },
    itemBox: {
        width: width * 0.3,
        height: width * 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4
    },
    item: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: '#fff'
    },
    checkBox: {
        width: width * 0.08,
        height: width * 0.08,
        position: 'absolute',
        right: 3,
        top: 3,
        borderRadius: 7.5,
        backgroundColor: 'rgba(255,255,255,0.75)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    travelCategoryContainer: {
        width: width * 0.9,
        height: height * 0.05,
    },
    travelCategoryBtn: {
        width: width * 0.29,
        height: '100%',
        borderRadius: 10,
        marginRight: width * 0.015,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderWidth: 1,
        borderColor: '#fff',
        flexDirection: 'row',
    },
    loadingContainer: {
        width: width * 0.9,
        height: height * 0.05,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: width * 0.0075
    },
    loadingSubContainer: {
        width: width * 0.58,
        height: height * 0.04,
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.75)',
        alignItems: 'center',
        justifyContent: 'center',

    },
    loadingBox: {
        height: height * 0.04,
        flexDirection: 'row',
        backgroundColor: '#02c39a',
        borderRadius: 10,
        position: 'absolute',
        left: 0,
        borderWidth: 1,
        borderColor: '#fff'
    },
    loadingText: {
        fontWeight: '500',
    },
    optionBox: {
        width: width * 0.28,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 8
    },
    selectBox: {
        width: height * 0.04,
        height: height * 0.04,
        backgroundColor: 'rgba(255,255,255,0.75)',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    flag: {
        width: width * 0.08,
        height: height * 0.027,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff'
    },
    travelCategoryText: {
        fontSize: 16,
        fontWeight: '500'
    }
})