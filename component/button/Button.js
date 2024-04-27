import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, TextInput, Alert, ActivityIndicator, Modal, Dimensions, StatusBar, useColorScheme } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AllColor } from '../../util/color/Color'
import { responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { scale } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Button = ({ title, onPress, icon }) => {
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
        <TouchableOpacity style={[styles.container, BackGroundStyle._isBackGround]} onPress={() => {
            onPress()
        }}>
            <Text style={[styles.ButtenText, BackGroundStyle._isText]}>{title}</Text>
            <Icon name={icon} size={30} color={isDark ? AllColor.black : AllColor.white} style={styles.icon_} />
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        width: responsiveScreenWidth(90),
        borderRadius: scale(10),
        height: scale(40),
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: scale(5),
        flexDirection: "row",
        alignItems: 'center',
    },
    ButtenText: {
        fontSize: scale(15),
        fontWeight: 'bold',
    },
    icon_: {
        marginLeft: scale(10),
    }
})