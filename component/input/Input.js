import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, TextInput, Alert, ActivityIndicator, Modal, Dimensions, StatusBar, useColorScheme } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AllColor } from '../../util/color/Color'
import { responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { scale } from 'react-native-size-matters'

const Input = ({ placeholder, onChangeText, value }) => {

    const isDark = useColorScheme() === 'dark'
    const isLight = useColorScheme() === 'light'

    const BackGroundStyle = {
        isBackGround: {
            backgroundColor: isDark ? AllColor.black : AllColor.white
        },
        isText: {
            color: isDark ? AllColor.white : AllColor.black
        },
        _isBackGround: {
            backgroundColor: isDark ? AllColor.white : AllColor.black
        },
        _isText: {
            color: isDark ? AllColor.black : AllColor.white
        },
    }
    return (
        <View style={[styles.container, BackGroundStyle._isBackGround]}>
            <TextInput
                placeholder={placeholder}
                style={[styles.commonInput, BackGroundStyle._isText]}
                placeholderTextColor={"black"}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        width: responsiveScreenWidth(90),
        height: scale(50),
        marginVertical: scale(10),
        borderRadius: scale(10),
        paddingHorizontal: scale(10),
    },
    commonInput: {
        width: "100%",
        height: "100%",
        // backgroundColor: "red",
    }
})