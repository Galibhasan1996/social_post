import { StyleSheet, View, useColorScheme } from 'react-native'
import React, { useEffect } from 'react'
import { AllColor } from '../../../util/color/Color'
import { scale } from 'react-native-size-matters'
import * as Animatable from 'react-native-animatable';

const Splass = ({ navigation }) => {
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
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Home")
        }, 2000);
    }, [])
    return (
        <View style={[styles.container, BackGroundStyle.isBackGround]}>
            <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={[styles.social_post_logo, BackGroundStyle.isText]}>Social ❤️ Post</Animatable.Text>
        </View>
    )
}
export default Splass

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    social_post_logo: {
        fontSize: scale(35),
        fontWeight: "500"
    }
})