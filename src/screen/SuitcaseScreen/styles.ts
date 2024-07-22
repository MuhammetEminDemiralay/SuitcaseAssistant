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
        borderRadius: 10,
        justifyContent: 'space-between',
        height: height * 0.1,
        marginVertical: height * 0.025
    },
    categoryBtnBox: {
        width: (width * 0.9) / 7.5,
        maxHeight: height * 0.1,
        minHeight: height * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#fff'
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
        borderRadius: 10,
    },
    travelCategoryBtn: {
        width: width * 0.29,
        height: '100%',
        borderRadius: 10,
        marginRight: width * 0.01,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#fff'
    },
    loadingContainer: {
        width: width * 0.9,
        height: height * 0.05,
        justifyContent: 'center',
        padding: width * 0.015
    },
    loadingSubContainer: {
        width: width * 0.58,
        height: height * 0.04,
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.75)',
        alignItems : 'center',
        justifyContent : 'center'
    },
    loadingBox: {
        height: height * 0.04,
        flexDirection: 'row',
        backgroundColor: '#02c39a',
        borderRadius: 10,
        position: 'absolute',
        left: 0
    },
    loadingText: {
        fontWeight: '500',
    }
})