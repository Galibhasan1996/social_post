import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, TextInput, Alert, ActivityIndicator, Modal, Dimensions, StatusBar, useColorScheme, PermissionsAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useRoute, useTheme } from '@react-navigation/native'
import { AllColor } from '../../../util/color/Color'
import { scale } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/AntDesign';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { userImage } from '../../../util/data/Data'
import Input from '../../../component/input/Input'
import Button from '../../../component/button/Button'
import Toast from 'react-native-toast-message'
import { launchCamera, launchImageLibrary } from "react-native-image-picker"

const Post = () => {
    // ------------------ state ----------------

    const [nameInput, setnameInput] = useState("");
    const [userNameInput, setUserNameInput] = useState("");
    const [CaptionInput, setCaptionInput] = useState("");
    const [CaptureImage, setCaptureImage] = useState("");

    const route = useRoute()
    const [showShare, setshowShare] = useState(true);
    const { image, name } = route.params.item
    // console.log(image, '\n', name);

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

    // ------------------requestCameraPermission----------------
    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Social Post App Camera Permission',
                    message:
                        'Social Post App needs access to your camera ' +
                        'so you can take awesome pictures.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                // console.log('You can use the camera');
                validation()
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };
    // --------------- open camera ----------

    const openCamera = () => {
        launchCamera({ mediaType: "photo" }, (data) => {
            if (data.didCancel) {
                showToast('error', 'Error', 'User cancelled camera picker');
            } else {
                console.log(data);
                setCaptureImage(data.assets[0].uri);
            }
        });
    }

    // -----------Toast massage-----------
    const showToast = (type, text1, text2) => {
        Toast.show({
            type: type,
            text1: text1,
            text2: text2,
        });
    }

    // ---------------validation------------
    const validation = () => {
        if (nameInput === '') {
            showToast('error', 'Name', 'Name is required');
        } else if (userNameInput === "") {
            showToast('error', 'Username', 'UserName is required');
        } else if (CaptionInput === "") {
            showToast('error', 'Caption', 'Caption is required');
        } else {
            // console.log(nameInput, userNameInput, CaptionInput);
            openCamera()
        }
    }

    return (
        <View style={[styles.container, BackGroundStyle.isBackGround]}>
            {/* --------------- share Button --------- */}
            {
                showShare && <View style={styles.shareButtonContainer}>
                    <TouchableOpacity>
                        <Icon name="sharealt" size={30} color={isDark ? AllColor.white : AllColor.black} />
                    </TouchableOpacity>
                </View>
            }
            {/* ---------- Post text ---------- */}
            <Text style={[styles.icon_text, BackGroundStyle.isText]}>{`Create Post from : ${name}`}</Text>
            {/* -----------------    Post container start here ------------- */}
            <View style={[styles.post_container, BackGroundStyle._isBackGround]}>
                <View style={styles.image_container}>
                    {/* ---------  left image-------- */}
                    <View>
                        <Image source={{ uri: CaptureImage === null || CaptureImage === "" ? userImage : CaptureImage }} style={styles.image} />
                    </View>
                    <View>
                        <View style={styles.userNameAndNameContainer}>
                            <Text style={[styles.userNameAnd, BackGroundStyle._isText]}>{nameInput === "" ? "Name" : nameInput}</Text>
                        </View>
                        <View style={styles.userNameAndNameContainer}>
                            <Text style={[styles.userNameAndName, BackGroundStyle._isText]}>{`@${userNameInput === "" ? "UserName" : userNameInput}`}</Text>
                        </View>
                    </View>
                    {/* ------------------- right image ------------- */}
                    <View>
                        <Image source={{ uri: image === null || image === "" ? userImage : image }} style={styles.image} />
                    </View>
                </View>
                {/* ------------- caption --------------- */}
                <View style={styles.caption_container}>
                    <Text style={BackGroundStyle._isText}>{`${CaptionInput === "" ? "Caption" : CaptionInput}`}</Text>
                </View>
            </View>
            {/* -------------- ScrollView------------- */}
            <ScrollView>
                {/* ---------------- custom input here ----------------- */}
                <Input
                    placeholder={"Name"}
                    value={nameInput}
                    onChangeText={(t) => {
                        setnameInput(t)
                    }}
                />

                <Input
                    placeholder={"Username"}
                    value={userNameInput}
                    onChangeText={(t) => {
                        setUserNameInput(t)
                    }}
                />

                <Input
                    placeholder={"Caption"}
                    value={CaptionInput}
                    onChangeText={(t) => {
                        setCaptionInput(t)
                    }}
                />

                {/* --------------- custom button here ------------ */}

                <Button
                    title={"Pick Image From Gallery"}
                    icon={"view-gallery"}
                ></Button>

                <Button
                    title={"Pick Image From Camera"}
                    icon={"camera"}
                    onPress={() => {
                        requestCameraPermission()
                    }}
                ></Button>
            </ScrollView>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    icon_text: {
        marginTop: scale(30),
        fontSize: scale(20),
        fontWeight: "500"
    },
    shareButtonContainer: {
        width: responsiveScreenWidth(100),
        alignItems: 'flex-end',
        paddingHorizontal: scale(20),
        marginTop: scale(10),
    },
    post_container: {
        width: responsiveScreenWidth(90),
        marginTop: scale(30),
        borderRadius: scale(10),
        padding: scale(10),
    },
    image_container: {
        width: "100%",
        backgroundColor: AllColor.white5,
        borderRadius: scale(10),
        flexDirection: "row",
        alignItems: 'center',
        padding: scale(10),
        justifyContent: 'space-between',
    },
    image: {
        width: scale(50),
        height: scale(50),
        borderRadius: scale(30),
    },
    userNameAndNameContainer: {
        width: responsiveScreenWidth(45),
        marginVertical: scale(1)
    },
    userNameAnd: {
        fontSize: scale(20),
        fontWeight: "500",
    },
    userNameAndName: {
        fontSize: scale(12),
        fontWeight: "500",
    },
    caption_container: {
        width: "100%",
        backgroundColor: AllColor.white5,
        borderRadius: scale(10),
        padding: scale(10),
        // height: 100,
        marginTop: scale(10),
    }
})