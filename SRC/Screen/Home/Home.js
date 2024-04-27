import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, TextInput, Alert, ActivityIndicator, Modal, Dimensions, StatusBar, useColorScheme } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AllColor } from '../../../util/color/Color'
import { scale } from 'react-native-size-matters'
import { SocialData } from '../../../util/data/Data'
import * as Animatable from 'react-native-animatable';


const Home = ({ navigation }) => {
    const isDark = useColorScheme() === 'dark'
    const isLight = useColorScheme() === 'light'

    const BackGroundStyle = {
        isBackGround: {
            backgroundColor: isDark ? AllColor.black : AllColor.white
        },
        isText: {
            color: isDark ? AllColor.white : AllColor.black
        }
    }
    return (
        <View style={[styles.container, BackGroundStyle.isBackGround]}>
            <Animatable.Text animation="pulse" easing="ease-out" iterationCount={5} style={[styles.Welcome_text, BackGroundStyle.isText]}>Welcome to Social Post ❤️</Animatable.Text>
            <View style={styles.social_icon_cointainer}>
                <FlatList data={SocialData} numColumns={3} renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("Post", item = { item })
                        }}>
                            <Image source={{ uri: item.image === null || item.image === "" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtrLY4lABms2uv6uTf6TaqF9A5itgK41GAQ&s" : item.image }} style={styles.social_icon_image} />
                        </TouchableOpacity>
                    )
                }} />
            </View>
        </View >
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: scale(20),
    },
    Welcome_text: {
        fontSize: scale(20),
        marginTop: scale(50)
    },
    social_icon_cointainer: {
        width: "100%",
        backgroundColor: "rgba(255,255,255,0.1)",
        marginTop: scale(30),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scale(20),
    },
    social_icon_image: {
        width: scale(50),
        height: scale(50),
        borderRadius: scale(25),
        margin: scale(20)
    }
})