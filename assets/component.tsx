// system imports
import React, { Component, ComponentType, ReactElement, ReactNode, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Image, FlatList, ImageBackground, Alert, Share, StatusBar, ImageStyle, Platform } from "react-native";
import { PermissionsAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from "react-native";

// style import
import styles from "./stylesheet";
import { vw, vh, vmax, vmin } from './stylesheet';
import Svg, { SvgXml } from 'react-native-svg';
import clrStyle, { componentStyle } from "./componentStyleSheet";

// SVG import
import * as SVG from "./svgXml";

import * as FORMATDATA from '../data/interfaceFormat'
import * as CUSTOMCACHE from '../data/store'
import * as STORAGEFNC from '../data/storageFunc'

// font import 

// ____________________END OF IMPORT_______________________


// UNIVERSE FUNCTION________________________________________

export const marginBottomForScrollView = (time?: number) => {
    return (
        <View style={[styles.h10vh]} />
    )
}

export const statusBarTransparency = (lightContent: boolean = true, margin: boolean = false) => {
    let statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 0
    return (
        <View>
            <StatusBar barStyle={lightContent ? 'light-content' : 'dark-content'}
                backgroundColor='rgba(0,0,0,0)'
                translucent={true}
            />
            {margin ? <View style={{ width: vw(100), height: statusBarHeight }}></View> : null}
        </View>
    )
}

// share fnc 

export const onShare = async () => {
    try {
        const result = await Share.share({
            message:
                'React Native | A framework for building native apps using React',
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (error: any) {
        Alert.alert(error.message);
    }
};

export const ListGen = (customStyle: any, data: string | Array<string | string[]>, FontClass1st: ComponentType<any>, textColor: string = clrStyle.white as string, bullet1st: string = '1', FontClass2nd: ComponentType<any> = FontClass1st, bullet2nd: string = '-', textIndent2nd: any = 0) => {
    function bulletMark(bullet: string, index: number) {
        let i = index == 0 ? 0 : index % 2 == 0 ? index / 2 : index
        if (bullet === 'a') {
            function abullet(i: number) {
                let charNum = 26, charStart = 97
                let char = String.fromCharCode(charStart + i % charNum)
                if (i >= charNum) {
                    return String.fromCharCode(charStart + Math.floor(i / charNum) - 1) + char + '.'
                } else {
                    return char + '.'
                }
            }
            return abullet(i)

        } else if (bullet === 'A') {
            function Abullet(i: number) {
                let charNum = 26, charStart = 65
                let char = String.fromCharCode(charStart + i % charNum)
                if (i >= charNum) {
                    return String.fromCharCode(charStart + Math.floor(i / charNum) - 1) + char + '.'
                } else {
                    return char + '.'
                }
            }
            return Abullet(i)

        } else if (bullet === 'I') {
            // make bullet as a roman number
            function Ibullet(i: number) {
                let romanNum = {
                    1: 'I',
                    2: 'II',
                    3: 'III',
                    4: 'IV',
                    5: 'V',
                    6: 'VI',
                    7: 'VII',
                    8: 'VIII',
                    9: 'IX',
                    10: 'X',
                    100: 'C',
                    1000: 'M',
                    500: 'D',
                    50: 'L',
                    5000: 'V',
                }

                let roman = ''
                let num = i + 1
                let romanNumArr = Object.keys(romanNum).map(Number).sort((a, b) => b - a)

            }
            return Ibullet(i)

        } else if (bullet === '1') {
            return i + 1 + '.'

        } else {
            return bullet
        }

    }

    return (
        <View>
            {typeof data == 'string' ?

                <FontClass1st style={{ ...customStyle, color: textColor }}>{data}</FontClass1st>

                : data.map((item, index) => {
                    if (typeof item === 'string') {
                        return (
                            <View key={index} style={[styles.flexRow, styles.w100]}>
                                <FontClass1st style={{ color: textColor }}>{bulletMark(bullet1st, index)} </FontClass1st>
                                <FontClass1st style={{ color: textColor }}>{item}</FontClass1st>
                            </View>
                        )
                    } else if (Array.isArray(item)) {
                        return (
                            <View key={index} style={[styles.w100, { paddingLeft: textIndent2nd }]}>
                                {item.map((subItem, subIndex) => {
                                    return (
                                        <View key={subIndex} style={[styles.flexRow]}>
                                            <FontClass2nd style={{ color: textColor }}>{bulletMark(bullet2nd, subIndex)} </FontClass2nd>
                                            <FontClass2nd style={{ color: textColor, ...customStyle }}>{subItem}</FontClass2nd>
                                        </View>
                                    )
                                })}
                            </View>
                        )
                    }
                })}
        </View>
    )
}


/**
 * Formats a number by adding suffixes for thousands, millions, and billions.
 * @param num - The number to be formatted.
 * @param changeToChar - Whether to change the number to a character (K, M, B) or not.
 * @returns The formatted number as a string.
 */
export function formatNumber(num: number, changeToChar: boolean = true) {
    if (changeToChar) {
        if (num >= 1_000_000_000) {
            return `${(num / 1_000_000_000).toFixed(2)}B`;
        } else if (num >= 1_000_000) {
            return `${(num / 1_000_000).toFixed(2)}M`;
        } else if (num >= 1_000) {
            return `${(num / 1_000).toFixed(2)}K`;
        } else {
            return num.toString();
        }
    } else {
        return new Intl.NumberFormat('de-DE').format(num);
    }
}

/**
 * 
 * @param email 
 * @param password 
 * @param navigation 
 * @param signInWithEmailAndPassword 
 * @param auth 
 * @param dispatch 
 * @param setUser 
 * @param saveUser 
 * @returns 
 */
// export async function LoginWithFirebaseHandle(
//     email: string,
//     password: string,
//     navigation: any,
//     signInWithEmailAndPassword: (auth: any, email: string, password: string) => Promise<any>,
//     auth: any,
//     dispatch: (action: any) => void,
//     currentSetUser: (user: any) => any,
//     saveUserToLocal: (user: any) => void
// ): Promise<void | boolean> {
//     email = email.trim();
//     password = password.trim();
//     if (email === '' || password === '') {
//         Alert.alert('Vui lòng điền đủ thông tin');
//         return false;
//     }
//     try {
//         const userCredential = await signInWithEmailAndPassword(auth, email, password);
//         const { user } = userCredential;

//         if (user.email) {
//             const userObj: FORMATDATA.UserFormat = {
//                 email: user.email,
//                 name: user.displayName ?? user.email,
//             };

//             const userFormat = userObj as (FORMATDATA.UserFormat & { imgAddress?: string });
//             userFormat.imgAddress = user.photoURL ?? '';

//             saveUserToLocal(userObj);
//             dispatch(currentSetUser(userObj));

//             if (navigation) {
//                 navigation.navigate('BottomTab');
//             }
//             return true;
//         } else {
//             Alert.alert('Email hoặc mật khẩu bạn nhập chưa đúng');
//             return false;
//         }
//     } catch (error) {
//         console.log(error);
//         Alert.alert('Email hoặc mật khẩu bạn nhập chưa đúng');
//         return false;
//     }
// }


/**
 * Registers a user with Firebase, updates the user profile, saves the user data, and navigates to the 'BottomTab' screen.
 *
 * @param {any} navigation - The navigation object used to navigate between screens.
 * @param {(auth: any, email: string, password: string) => Promise<any>} createUserWithEmailAndPassword - Function to create a user with email and password.
 * @param {(user: any, profile: any) => Promise<any>} updateProfile - Function to update the user profile.
 * @param {any} auth - The Firebase authentication object.
 * @param {(action: any) => void} dispatch - Function to dispatch actions to the Redux store.
 * @param {(user: any) => any} setUser - Function to set the user in the Redux store.
 * @param {(user: any) => void} saveUser - Function to save the user data.
 * @param {string} email - The email of the user.
 * @param {string} userName - The name of the user.
 * @param {string} password - The password of the user.
 * @param {...{ [key: string]: any }[]} params - Additional parameters to be merged into the user object.
 * @returns {Promise<void>} A promise that resolves when the registration process is complete.
 * @throws Will throw an error if the registration process fails.
 */
export async function RegisterWithFirebaseHandle(
    navigation: any,
    createUserWithEmailAndPassword: (auth: any, email: string, password: string) => Promise<any>,
    updateProfile: (user: any, profile: any) => Promise<any>,
    auth: any,
    dispatch: (action: any) => void,
    currentSetUser: (user: any) => any,
    saveUserToLocal: (user: any) => void,
    email: string,
    userName: string,
    password: string,
    ...params: { [key: string]: any }[]
) {
    try {
        // TODO: firebase auth
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                let user = auth.currentUser;
                const avtURL = params.find(param => param.hasOwnProperty('avtURL'))?.avtURL || '';
                if (user && avtURL) {
                    updateProfile(user, {
                        displayName: userName,
                        photoURL: avtURL,
                    })
                        .then(() => {
                            console.log("User profile updated.");
                        })
                        .catch((error) => {
                            console.error("Error updating profile:", error);
                        });
                }
            })
            .then(() => {
                /**
                 * Creates a user object with the provided email, name, password, and additional parameters.
                 *
                 * @param {string} email - The email of the user.
                 * @param {string} userName - The name of the user.
                 * @param {string} password - The password of the user.
                 * @param {Array<Object>} params - An array of additional parameters to be merged into the user object.
                 * @returns {Object} The user object containing email, name, password, and additional parameters.
                 */
                let user = {
                    email: email,
                    name: userName,
                    password: password,
                    ...params.reduce((acc, param) => ({ ...acc, ...param }), {})
                }
                saveUserToLocal(user)
                dispatch(currentSetUser(user));
            })
            .then(() => {
                return navigation?.navigate('BottomTab') ?? true
            })

    } catch (error) {
        console.log(error)
    }
}

// export async function searchEngine(keyword: string, dataBank: SetFormat[] | Desk[] | Card[], type: 'set' | 'desk' | 'card') {
//     keyword = keyword.trim();
//     let result: SetFormat[] | Desk[] | Card[] = [];
//     const regex = new RegExp(`\\b${keyword}`, 'i');

//     if (type === 'set' && dataBank as SetFormat[]) {
//         result = dataBank.filter((item): item is SetFormat =>
//             (item as SetFormat).name !== undefined && regex.test((item as SetFormat).name)
//         );
//     } else if (type === 'desk' && dataBank as Desk[]) {
//         result = dataBank.filter((item): item is Desk =>
//             (item as Desk).title !== undefined && regex.test((item as Desk).title)
//         );
//     } else if (type === 'card' && dataBank as Card[]) {
//         result = dataBank.filter((item): item is Card =>
//             (item as Card).front !== undefined && regex.test((item as Card).front)
//         );
//     }

//     if (keyword === '') {
//         return [];
//     }

//     return result;
// }

export const onRefresh = (refreshFnc: (item: boolean) => void, navFnc: any) => {
    const handleRefresh = useCallback(() => {
        refreshFnc(true);
        setTimeout(() => {
            refreshFnc(false);
            navFnc.reset({
                index: 0,
                routes: [{ name: 'Home' as never }],
            });
        }, 1000);
    }, [navFnc]);

    return handleRefresh;
};

export const showInDeverlopFnc = () => {
    return Alert.alert('This function is in development')
}


// img picker and camera.
// require >>>> react-native-image-picker <<<< package
// import { CameraOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker';

// const defaultCameraOptions: CameraOptions = {
//     mediaType: 'photo',
//     quality: 1,
// };

// export const requestCameraPermission = async () => {
//     if (Platform.OS === 'android') {
//         try {
//             const granted = await PermissionsAndroid.request(
//                 PermissionsAndroid.PERMISSIONS.CAMERA,
//                 {
//                     title: 'Camera Permission',
//                     message: 'This app needs camera access to take pictures',
//                     buttonNeutral: 'Ask Me Later',
//                     buttonNegative: 'Cancel',
//                     buttonPositive: 'OK',
//                 },
//             );
//             console.log('Camera permission:', granted);

//             return granted === PermissionsAndroid.RESULTS.GRANTED;
//         } catch (err) {
//             console.warn(err);
//             return false;
//         }
//     } else {
//         return true;
//     }
// };

// export const requestGalleryPermission = async () => {
//     if (Platform.OS === 'android') {
//         try {
//             const granted = await PermissionsAndroid.request(
//                 PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//                 {
//                     title: 'Gallery Permission',
//                     message: 'This app needs gallery access to take pictures',
//                     buttonNeutral: 'Ask Me Later',
//                     buttonNegative: 'Cancel',
//                     buttonPositive: 'OK',
//                 },
//             );
//             return granted === PermissionsAndroid.RESULTS.GRANTED;
//         } catch (err) {
//             console.warn(err);
//             return false;
//         }
//     } else {
//         return true;
//     }
// }

// export const openCamera = async (saveImgFnc: (item: any) => void, options = defaultCameraOptions) => {
//     const hasPermission = await requestCameraPermission();
//     if (!hasPermission) {
//         console.log('Camera permission denied');
//         return;
//     }

//     try {
//         launchCamera(options, (response: any) => {
//             console.log('Response = ', response);

//             if (response.didCancel) {
//                 console.log('User cancelled image picker');
//             } else if (response.errorCode) {
//                 console.log('ImagePicker Error: ', response.errorMessage);
//                 Alert.alert('Error', response.errorMessage || response.errorCode);
//             } else if (response.assets && response.assets.length > 0) {
//                 saveImgFnc(response.assets[0].uri);
//             }
//         });
//     } catch (error) {
//         console.error('Error launching camera:', error);
//         Alert.alert('Error', 'An unexpected error occurred while launching the camera.');
//     }
// };

// export const openGallery = async (saveImgFnc: (item: any) => void, options = defaultCameraOptions) => {
//     // const hasPermission = await requestGalleryPermission();
//     // if (!hasPermission) {
//     //     console.log('Gallery permission denied');
//     //     return;
//     // }

//     try {
//         launchImageLibrary(options, (response: any) => {
//             console.log('Response = ', response);

//             if (response.didCancel) {
//                 console.log('User cancelled image picker');
//             } else if (response.errorCode) {
//                 console.log('ImagePicker Error: ', response.errorMessage);
//                 Alert.alert('Error', response.errorMessage || response.errorCode);
//             } else if (response.assets && response.assets.length > 0) {
//                 saveImgFnc(response.assets[0].uri);
//             }
//         });
//     } catch (error) {
//         console.error('Error launching image library:', error);
//         Alert.alert('Error', 'An unexpected error occurred while launching the image library.');
//     }
// }
// END OF UNIVERSE FUNCTION________________________________________

export function avatarComponet(w: number = vw(12), h: number = vw(12), bgColor?: string, src?: any) {
    return (
        <View style={[styles.borderRadius100, { width: w, height: h, backgroundColor: bgColor }]}>

            {src ?
                <Image source={src} style={[styles.borderRadius100, { width: w, height: h }] as ImageStyle} /> :
                <SvgXml xml={`
<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.0016 52.6036C40.4553 52.6036 50.5511 42.5078 50.5511 30.0541C50.5511 17.6004 40.4553 7.50464 28.0016 7.50464C15.5479 7.50464 5.45215 17.6004 5.45215 30.0541C5.45215 42.5078 15.5479 52.6036 28.0016 52.6036Z" fill="#BAB9B5"/><path d="M28.0016 50.5489C40.4553 50.5489 50.5511 40.4531 50.5511 27.9994C50.5511 15.5457 40.4553 5.44995 28.0016 5.44995C15.5479 5.44995 5.45215 15.5457 5.45215 27.9994C5.45215 40.4531 15.5479 50.5489 28.0016 50.5489Z" fill="white"/><g opacity="0.5"><path d="M42 42C49.732 34.268 49.732 21.732 42 14C34.268 6.26801 21.732 6.26801 14 14C6.26801 21.732 6.26801 34.268 14 42C21.732 49.732 34.268 49.732 42 42Z" fill="url(#paint0_radial_1494_17123)"/></g><mask id="mask0_1494_17123" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="8" y="8" width="40" height="40"><path d="M42 42C49.732 34.268 49.732 21.732 42 14C34.268 6.26801 21.732 6.26801 14 14C6.26801 21.732 6.26801 34.268 14 42C21.732 49.732 34.268 49.732 42 42Z" fill="white"/></mask><g mask="url(#mask0_1494_17123)"><path d="M21.6286 30.9126C21.6221 30.8713 21.6177 30.83 21.6112 30.7887C21.8591 31.4714 22.2461 32.1237 22.8288 32.5607C22.9897 32.6803 23.1636 32.7847 23.3158 32.9151C23.468 33.0456 23.6029 33.2108 23.6485 33.4065C23.6094 33.2673 23.6181 33.1064 23.5789 32.9608C23.5376 32.8086 23.4767 32.6651 23.4072 32.5216C23.468 32.6455 23.642 32.7825 23.729 32.8934C23.8485 33.0456 23.9638 33.2043 24.0573 33.3739C24.3138 33.8348 24.3965 34.348 24.5052 34.8567C24.6248 34.6893 24.6835 34.4219 24.7617 34.2262C24.8987 33.8783 25.027 33.5391 25.1183 33.176C25.2118 32.7999 25.2857 32.4215 25.3879 32.0476C25.488 31.6823 25.6488 31.2692 25.4771 30.9104C25.2988 30.5408 24.9618 30.2168 24.6639 29.9407C23.2354 28.6166 21.6438 27.4555 19.9348 26.4901C19.9305 26.5662 19.9261 26.6423 19.9218 26.7184C19.887 27.6751 20.0522 28.6361 20.3893 29.5298C20.5589 29.9798 20.7719 30.4125 21.0242 30.8213C21.2568 31.1974 21.5112 31.6236 21.8743 31.8867C21.8482 31.7345 21.7525 31.5866 21.7178 31.4279C21.6808 31.2583 21.6482 31.0865 21.6243 30.9126H21.6286Z" fill="url(#paint1_linear_1494_17123)"/><path d="M34.1262 30.9126C34.1328 30.8713 34.1371 30.83 34.1436 30.7887C33.8958 31.4714 33.5087 32.1237 32.926 32.5607C32.7651 32.6803 32.5912 32.7847 32.439 32.9151C32.2868 33.0456 32.152 33.2108 32.1063 33.4065C32.1455 33.2673 32.1368 33.1064 32.1759 32.9608C32.2172 32.8086 32.2781 32.6651 32.3477 32.5216C32.2868 32.6455 32.1128 32.7825 32.0259 32.8934C31.9063 33.0456 31.791 33.2043 31.6976 33.3739C31.441 33.8348 31.3584 34.348 31.2497 34.8567C31.1301 34.6893 31.0714 34.4219 30.9931 34.2262C30.8561 33.8783 30.7278 33.5391 30.6365 33.176C30.543 32.7999 30.4691 32.4215 30.3669 32.0476C30.2669 31.6823 30.106 31.2692 30.2777 30.9104C30.456 30.5408 30.7931 30.2168 31.0909 29.9407C32.5194 28.6166 34.111 27.4555 35.82 26.4901C35.8243 26.5662 35.8287 26.6423 35.833 26.7184C35.8678 27.6751 35.7026 28.6361 35.3656 29.5298C35.196 29.9798 34.9829 30.4125 34.7307 30.8213C34.498 31.1974 34.2436 31.6236 33.8805 31.8867C33.9066 31.7345 34.0023 31.5866 34.0371 31.4279C34.074 31.2583 34.1067 31.0865 34.1306 30.9126H34.1262Z" fill="url(#paint2_linear_1494_17123)"/><path d="M36.3071 25.8291C35.9613 25.8204 35.6135 25.8095 35.2743 25.8095C32.1281 25.8095 28.9797 25.8095 25.8335 25.8074C23.9637 25.8074 22.0938 25.8074 20.2239 25.8074C19.8043 25.74 19.3846 25.6726 18.965 25.6052C18.8519 25.5878 18.7389 25.5682 18.6345 25.5247C17.5495 25.0616 18.0866 22.8199 18.1823 21.9371C18.1844 21.9132 18.1866 21.8893 18.191 21.8654C18.254 21.2762 18.254 20.6 18.6149 20.0977C19.0889 19.4432 20.0521 19.5237 20.7783 19.4541C22.6178 19.2802 24.4659 19.2519 26.3119 19.2454C26.625 19.2454 26.9403 19.2454 27.2534 19.2454C29.1341 19.2432 31.0127 19.2389 32.8934 19.2367C33.8327 19.2367 34.7742 19.2345 35.7135 19.2323C36.1636 19.2323 36.6375 19.2715 37.0833 19.2236C37.4225 19.1867 37.7443 19.1367 38.0204 19.4085C38.2617 19.6455 38.303 20.0151 38.3226 20.3543C38.3922 21.5045 38.3857 22.659 38.3052 23.807C38.2596 24.4419 38.4313 25.7508 37.629 25.8139C37.1963 25.8487 36.7528 25.8443 36.3114 25.8335L36.3071 25.8291Z" fill="url(#paint3_linear_1494_17123)"/><path d="M42.3516 47.5677V47.7982H22.5026L13.6533 47.796V47.5633C13.6533 45.4608 14.2078 43.4866 15.1731 41.7819C15.9928 40.3382 17.1082 39.0858 18.4411 38.1096C18.6933 37.9226 18.952 37.7465 19.2216 37.5812C19.3586 37.4964 19.4956 37.4138 19.6369 37.3355C20.124 37.0616 20.6306 36.8202 21.1589 36.618C21.2089 36.5985 21.2611 36.5789 21.3111 36.5593C21.4068 36.5224 21.5046 36.4854 21.6025 36.4528C22.0243 36.3114 22.457 36.1919 22.8984 36.0962C23.031 36.0658 23.1614 36.0418 23.2941 36.0157C23.9725 35.894 24.6747 35.8309 25.3879 35.8309H30.6192C31.9412 35.8309 33.2175 36.0527 34.4046 36.455C34.4568 36.4745 34.5068 36.4919 34.559 36.5093C34.6047 36.5267 34.6503 36.5419 34.696 36.5593C34.733 36.5724 34.7721 36.5876 34.8091 36.6028C35.3331 36.805 35.844 37.0398 36.3311 37.3116C36.3876 37.3421 36.4441 37.3747 36.5007 37.4073C36.7181 37.5377 36.9333 37.6725 37.1442 37.8139C37.316 37.9269 37.4856 38.0465 37.6508 38.1726C39.1337 39.2793 40.3448 40.7339 41.1645 42.4125C41.9255 43.9693 42.3516 45.7196 42.3516 47.5677Z" fill="#009CDD"/><path d="M29.4081 47.7985H26.1228L26.8903 39.7319H28.6145L29.4081 47.7985Z" fill="url(#paint4_linear_1494_17123)"/><path d="M28.882 39.7425H26.7512C26.5729 39.7425 26.4207 39.612 26.3925 39.4359L26.0707 37.3725C26.0359 37.1529 26.2076 36.9529 26.4294 36.9529H29.2038C29.4277 36.9529 29.5973 37.1529 29.5625 37.3725L29.2408 39.4359C29.2125 39.612 29.0603 39.7425 28.882 39.7425Z" fill="url(#paint5_linear_1494_17123)"/><path style="mix-blend-mode:overlay" opacity="0.7" d="M41.1623 42.4125C40.3426 40.7318 39.1294 39.2794 37.6465 38.1705C37.4812 38.0465 37.3138 37.927 37.1421 37.8117C37.0507 37.7508 36.9594 37.69 36.8659 37.6334C36.829 37.6095 36.7964 37.5878 36.7594 37.566C36.6724 37.5095 36.5855 37.4573 36.4963 37.4051C35.8832 37.0507 35.233 36.7507 34.5547 36.5072C34.4655 36.4767 34.3764 36.4441 34.2829 36.4158C34.1916 36.3876 34.1002 36.3571 34.0089 36.3289C33.9046 36.2963 33.798 36.268 33.6893 36.2375C33.6828 36.2375 33.6763 36.2332 33.6719 36.2332C33.6523 36.2288 33.6328 36.2223 33.6154 36.218C33.611 36.218 33.6089 36.218 33.6045 36.218C33.5284 36.1984 33.4523 36.1788 33.374 36.1593C33.3588 36.1549 33.3458 36.1527 33.3306 36.1506C33.2675 36.1332 33.2044 36.1201 33.1414 36.1049C33.0914 36.094 33.0392 36.0832 32.987 36.0745C32.8957 36.0549 32.8 36.0375 32.7065 36.0201C32.6848 36.0158 32.663 36.0114 32.6413 36.0071H32.637C32.637 36.0071 32.6283 36.0071 32.6239 36.0027C32.6043 35.9984 32.5826 35.9984 32.563 35.994C32.4935 35.981 32.4217 35.9701 32.3521 35.9592C32.2826 35.9484 32.2151 35.9397 32.1434 35.931C32.0716 35.9223 31.9977 35.9136 31.9238 35.9049C31.8542 35.8984 31.7803 35.8897 31.7085 35.8831C31.6433 35.8788 31.5781 35.8723 31.5129 35.8679C31.3846 35.857 31.2563 35.8505 31.1258 35.844C31.0432 35.8397 30.9584 35.8375 30.8736 35.8375C30.7866 35.8375 30.7018 35.8331 30.6149 35.8331H25.3836C25.1618 35.8331 24.9422 35.8375 24.7226 35.8505C24.6508 35.8549 24.5769 35.8592 24.5052 35.8657C24.4334 35.8723 24.3595 35.8766 24.2877 35.8831C24.1638 35.894 24.0442 35.9071 23.9224 35.9223C23.8529 35.9288 23.7855 35.9375 23.7181 35.9484C23.6485 35.9571 23.5833 35.9679 23.5137 35.9788C23.4702 35.9853 23.4289 35.9919 23.3876 35.9984C23.3832 35.9984 23.3789 36.0027 23.3723 36.0027C23.3245 36.0092 23.2789 36.0179 23.2332 36.0266C23.1636 36.0419 23.0962 36.0527 23.0288 36.068C23.0288 36.068 23.0245 36.068 23.0201 36.068C22.9484 36.0832 22.8766 36.0962 22.807 36.1136C22.7614 36.1223 22.7179 36.1332 22.6722 36.1441C22.6527 36.1484 22.6331 36.1549 22.6135 36.1593C22.5809 36.1658 22.5483 36.1745 22.5157 36.1832C22.4635 36.1984 22.4091 36.2093 22.357 36.2245C22.3439 36.2288 22.3309 36.231 22.32 36.2332C22.2765 36.2462 22.2352 36.2593 22.1917 36.2702C22.1221 36.2897 22.0569 36.3093 21.9895 36.3289C21.8764 36.3637 21.7656 36.3984 21.6547 36.4332C21.6177 36.4463 21.5829 36.4593 21.546 36.4702C21.4503 36.5028 21.3568 36.5376 21.2611 36.5724C21.1459 36.6137 21.0328 36.6594 20.9198 36.7072C20.8893 36.7202 20.8589 36.7333 20.8284 36.7463C20.7436 36.7811 20.661 36.8159 20.5762 36.855C20.1066 37.0659 19.6522 37.3073 19.2195 37.5769C18.952 37.7421 18.6911 37.9183 18.4389 38.1053C17.1082 39.0815 15.9907 40.3339 15.1731 41.7776C14.2056 43.4822 13.6533 45.4587 13.6533 47.559V47.7917H28.0623H36.9399H42.3516V47.559C42.3516 45.7109 41.9255 43.9606 41.1645 42.406L41.1623 42.4125Z" fill="url(#paint6_radial_1494_17123)"/><path style="mix-blend-mode:overlay" opacity="0.5" d="M41.1623 42.4125C40.3426 40.7318 39.1294 39.2794 37.6465 38.1705C37.4812 38.0465 37.3138 37.927 37.1421 37.8117C37.0507 37.7508 36.9594 37.69 36.8659 37.6334C36.829 37.6095 36.7964 37.5878 36.7594 37.566C36.6724 37.5095 36.5855 37.4573 36.4963 37.4051C35.8832 37.0507 35.233 36.7507 34.5547 36.5072C34.4655 36.4767 34.3764 36.4441 34.2829 36.4158C34.1916 36.3876 34.1002 36.3571 34.0089 36.3289C33.9046 36.2963 33.798 36.268 33.6893 36.2375C33.6828 36.2375 33.6763 36.2332 33.6719 36.2332C33.6523 36.2288 33.6328 36.2223 33.6154 36.218C33.611 36.218 33.6089 36.218 33.6045 36.218C33.5284 36.1984 33.4523 36.1788 33.374 36.1593C33.3588 36.1549 33.3458 36.1527 33.3306 36.1506C33.2675 36.1332 33.2044 36.1201 33.1414 36.1049C33.0914 36.094 33.0392 36.0832 32.987 36.0745C32.8957 36.0549 32.8 36.0375 32.7065 36.0201C32.6848 36.0158 32.663 36.0114 32.6413 36.0071H32.637C32.637 36.0071 32.6283 36.0071 32.6239 36.0027C32.6043 35.9984 32.5826 35.9984 32.563 35.994C32.4935 35.981 32.4217 35.9701 32.3521 35.9592C32.2826 35.9484 32.2151 35.9397 32.1434 35.931C32.0716 35.9223 31.9977 35.9136 31.9238 35.9049C31.8542 35.8984 31.7803 35.8897 31.7085 35.8831C31.6433 35.8788 31.5781 35.8723 31.5129 35.8679C31.3846 35.857 31.2563 35.8505 31.1258 35.844C31.0432 35.8397 30.9584 35.8375 30.8736 35.8375C30.7866 35.8375 30.7018 35.8331 30.6149 35.8331H25.3836C25.1618 35.8331 24.9422 35.8375 24.7226 35.8505C24.6508 35.8549 24.5769 35.8592 24.5052 35.8657C24.4334 35.8723 24.3595 35.8766 24.2877 35.8831C24.1638 35.894 24.0442 35.9071 23.9224 35.9223C23.8529 35.9288 23.7855 35.9375 23.7181 35.9484C23.6485 35.9571 23.5833 35.9679 23.5137 35.9788C23.4702 35.9853 23.4289 35.9919 23.3876 35.9984C23.3832 35.9984 23.3789 36.0027 23.3723 36.0027C23.3245 36.0092 23.2789 36.0179 23.2332 36.0266C23.1636 36.0419 23.0962 36.0527 23.0288 36.068C23.0288 36.068 23.0245 36.068 23.0201 36.068C22.9484 36.0832 22.8766 36.0962 22.807 36.1136C22.7614 36.1223 22.7179 36.1332 22.6722 36.1441C22.6527 36.1484 22.6331 36.1549 22.6135 36.1593C22.5809 36.1658 22.5483 36.1745 22.5157 36.1832C22.4635 36.1984 22.4091 36.2093 22.357 36.2245C22.3439 36.2288 22.3309 36.231 22.32 36.2332C22.2765 36.2462 22.2352 36.2593 22.1917 36.2702C22.1221 36.2897 22.0569 36.3093 21.9895 36.3289C21.8764 36.3637 21.7656 36.3984 21.6547 36.4332C21.6177 36.4463 21.5829 36.4593 21.546 36.4702C21.4503 36.5028 21.3568 36.5376 21.2611 36.5724C21.1459 36.6137 21.0328 36.6594 20.9198 36.7072C20.8893 36.7202 20.8589 36.7333 20.8284 36.7463C20.7436 36.7811 20.661 36.8159 20.5762 36.855C20.1066 37.0659 19.6522 37.3073 19.2195 37.5769C18.952 37.7421 18.6911 37.9183 18.4389 38.1053C17.1082 39.0815 15.9907 40.3339 15.1731 41.7776C14.2056 43.4822 13.6533 45.4587 13.6533 47.559V47.7917H28.0623H36.9399H42.3516V47.559C42.3516 45.7109 41.9255 43.9606 41.1645 42.406L41.1623 42.4125Z" fill="url(#paint7_radial_1494_17123)"/><path d="M33.1132 36.094L32.6479 36.7637L30.1366 40.3882L27.8754 37.5725L25.7533 40.2143L23.379 36.7898L22.8984 36.0962C22.8984 36.0962 24.5792 35.6831 24.5792 34.4046V32.6565H31.1694V34.3677C31.1694 34.3894 31.1694 34.409 31.1694 34.4307C31.1933 35.0656 31.5825 35.6179 32.1456 35.8592C32.1761 35.8744 32.2044 35.8853 32.2326 35.8962C32.2761 35.9114 32.3218 35.9266 32.3674 35.9375C32.4131 35.9527 32.4609 35.9614 32.5109 35.9701C32.6327 35.9918 32.7545 36.0158 32.8762 36.0397C32.9545 36.0549 33.0328 36.0723 33.111 36.094H33.1132Z" fill="url(#paint8_linear_1494_17123)"/><path d="M20.9764 24.992C20.9655 26.264 20.1588 27.2902 19.1761 27.2815C18.1933 27.2728 17.404 26.2335 17.4149 24.9616C17.4258 23.6896 18.2324 22.6634 19.2152 22.6721C20.198 22.6807 20.9872 23.7201 20.9764 24.992Z" fill="url(#paint9_linear_1494_17123)"/><path d="M34.9962 25.1116C34.9853 26.3835 35.7746 27.4229 36.7574 27.4315C37.7401 27.4402 38.5468 26.414 38.5577 25.142C38.5685 23.8701 37.7793 22.8308 36.7965 22.8221C35.8137 22.8134 35.0071 23.8396 34.9962 25.1116Z" fill="url(#paint10_linear_1494_17123)"/><path d="M36.777 22.6786C36.7248 28.8731 32.8002 33.8631 28.0124 33.8218C23.2247 33.7805 19.3871 28.7253 19.4392 22.5308C19.4914 16.3363 23.416 15.734 28.2038 15.7753C32.9915 15.8166 36.8291 16.4841 36.777 22.6786Z" fill="url(#paint11_radial_1494_17123)"/><g style="mix-blend-mode:overlay" opacity="0.5"><path d="M25.8902 24.4136C25.8554 25.1398 25.2227 25.7007 24.4769 25.6638C23.7312 25.629 23.1571 25.0093 23.1919 24.2831C23.2267 23.5569 23.8594 22.9959 24.6052 23.0307C25.351 23.0655 25.925 23.6852 25.8902 24.4114V24.4136Z" fill="white"/></g><path d="M25.7141 24.2808C25.6814 24.9766 25.09 25.5114 24.3943 25.4788C23.6985 25.4462 23.1636 24.8548 23.1962 24.159C23.2289 23.4633 23.8203 22.9284 24.516 22.961C25.2118 22.9936 25.7467 23.585 25.7141 24.2808Z" fill="url(#paint12_linear_1494_17123)"/><path d="M25.2443 24.2592C25.2226 24.6941 24.853 25.0311 24.4181 25.0094C23.9833 24.9876 23.6462 24.618 23.668 24.1831C23.6897 23.7483 24.0594 23.4113 24.4942 23.433C24.9291 23.4547 25.2661 23.8244 25.2443 24.2592Z" fill="#040F21"/><path d="M25.3945 23.8786C25.3836 24.0917 25.2032 24.2548 24.9901 24.2461C24.777 24.2352 24.6139 24.0547 24.6226 23.8417C24.6335 23.6286 24.814 23.4655 25.0271 23.4742C25.2401 23.4851 25.4032 23.6655 25.3945 23.8786Z" fill="white"/><g style="mix-blend-mode:overlay" opacity="0.5"><path d="M32.7652 24.4134C32.7304 25.1396 32.0977 25.7006 31.3519 25.6636C30.6062 25.6289 30.0321 25.0092 30.0669 24.283C30.1017 23.5568 30.7344 22.9958 31.4802 23.0306C32.226 23.0654 32.8 23.685 32.7652 24.4113V24.4134Z" fill="white"/></g><path d="M32.5913 24.2807C32.5586 24.9764 31.9672 25.5113 31.2715 25.4787C30.5757 25.4461 30.0408 24.8547 30.0734 24.1589C30.1061 23.4631 30.6975 22.9283 31.3932 22.9609C32.089 22.9935 32.6239 23.5849 32.5913 24.2807Z" fill="url(#paint13_linear_1494_17123)"/><path d="M32.1215 24.2591C32.0998 24.694 31.7302 25.031 31.2953 25.0092C30.8605 24.9875 30.5234 24.6179 30.5452 24.183C30.5669 23.7482 30.9366 23.4111 31.3714 23.4329C31.8063 23.4546 32.1433 23.8243 32.1215 24.2591Z" fill="#040F21"/><path d="M32.2717 23.8785C32.2608 24.0916 32.0804 24.2547 31.8673 24.246C31.6542 24.2351 31.4911 24.0546 31.4998 23.8415C31.5107 23.6285 31.6912 23.4654 31.9043 23.4741C32.1173 23.485 32.2804 23.6654 32.2717 23.8785Z" fill="white"/><path d="M37.6422 22.8372C37.6205 22.8742 37.5966 22.9112 37.5726 22.9438C37.4226 23.1503 37.1943 23.2895 37.0508 23.5113C36.8182 23.8679 36.7486 24.2723 36.6638 24.6897C36.5877 25.0637 36.1202 26.9466 36.0115 27.2315C35.9941 27.275 35.7658 26.9945 35.7506 26.9619C35.6789 26.8184 35.6397 26.6531 35.6115 26.4944C35.5136 25.9465 35.5571 25.3746 35.5767 24.8224C35.5941 24.3571 35.6658 23.87 35.4179 23.4634C35.1309 22.996 34.2373 22.3893 33.6937 22.3741C33.5698 22.3698 33.4437 22.398 33.3219 22.3676C33.1415 22.3219 33.0088 22.1523 32.948 21.9697C32.8871 21.7871 32.8871 21.587 32.8871 21.3935C32.7805 21.6762 32.7501 21.9893 32.8001 22.2893C32.0369 22.2393 31.2738 22.1893 30.5106 22.1393C30.4323 21.7001 30.3823 21.2544 30.3606 20.8086C30.3301 21.1261 30.2562 21.4414 30.1453 21.7392C30.0996 21.5044 30.054 21.2696 30.0083 21.0326C29.9453 21.3631 29.8822 21.6957 29.817 22.0262C29.8061 22.0806 29.7953 22.1371 29.7561 22.1763C29.7083 22.2263 29.6322 22.2284 29.5648 22.2284C28.9647 22.2284 28.3668 22.2284 27.7667 22.2284C27.5905 22.2284 27.4079 22.2284 27.247 22.1545C27.0861 22.0828 26.9469 21.9175 26.9556 21.7349C27.0296 21.9023 26.9165 22.1067 26.76 22.1893C26.6034 22.2719 26.4186 22.2632 26.2425 22.2545C25.5554 22.2176 24.8683 22.1806 24.1791 22.1436C24.1182 22.1415 24.0508 22.135 24.0051 22.0915C23.9595 22.048 23.9464 21.9806 23.9377 21.9175C23.903 21.6979 23.8682 21.4783 23.8356 21.2587C23.8073 21.5936 23.729 21.9675 23.4551 22.1415C23.3376 22.2154 23.1963 22.2415 23.0593 22.2545C22.5962 22.3002 22.1222 22.2197 21.6678 22.3263C20.6568 22.5633 20.7611 23.5656 20.6307 24.4092C20.4959 25.279 20.6894 26.2443 20.0849 26.9684C20.0936 26.9575 20.0132 26.7596 20.0066 26.7336C19.9001 26.3596 19.811 25.8878 19.7392 25.5051C19.6501 25.0311 19.5914 24.6375 19.5153 24.1614C19.4566 23.7961 19.3935 23.4156 19.2261 23.0829C19.0391 22.7133 18.8325 22.4067 18.6934 22.0023C18.1389 20.3868 18.2237 18.8518 18.5238 17.2146C19.1 14.064 21.7896 11.0918 25.0314 10.6156C25.5467 10.5395 26.0794 10.5482 26.5904 10.6613C27.0274 10.7591 27.6405 10.9439 27.8928 11.3505C27.7971 11.1548 27.6688 10.9744 27.5166 10.8178C27.8362 10.9809 28.1167 11.2244 28.3189 11.5201C28.3298 11.5353 28.3407 11.5527 28.3581 11.5571C28.3907 11.568 28.4189 11.5353 28.4385 11.5092C28.6777 11.1744 28.9603 10.8722 29.2778 10.6113C29.1212 10.8309 28.9973 11.0722 28.9103 11.3266C28.9603 11.1809 29.3887 11.0505 29.5191 11.0135C29.7474 10.9483 29.9888 10.8961 30.2258 10.87C34.2373 10.4112 38.0619 14.0292 38.5293 17.8668C38.7055 19.3127 38.4793 20.813 37.9401 22.1545C37.8531 22.3698 37.7662 22.6242 37.6466 22.8329L37.6422 22.8372Z" fill="url(#paint14_linear_1494_17123)"/><path style="mix-blend-mode:overlay" opacity="0.6" d="M35.9833 25.6615C35.9833 25.4658 35.992 25.2658 36.0007 25.0701L36.0093 24.8375C36.0115 24.7723 36.0159 24.707 36.018 24.6396C36.042 24.1982 36.0681 23.6982 35.7854 23.235C35.4375 22.6654 34.4286 21.9587 33.7024 21.9392H33.6677C33.6242 21.9392 33.5807 21.9392 33.5394 21.9435C33.5133 21.9435 33.485 21.9457 33.4589 21.9457C33.4372 21.9457 33.4285 21.9457 33.4285 21.9457C33.422 21.9413 33.3828 21.9044 33.3589 21.8326C33.3198 21.713 33.3198 21.55 33.3198 21.3934L32.4783 21.2391C32.4087 21.426 32.3631 21.6217 32.3479 21.8218L30.8824 21.7261C30.8367 21.4152 30.8063 21.0999 30.7911 20.7846L29.9235 20.7629C29.917 20.8238 29.9105 20.8868 29.8996 20.9477H29.5757L29.4126 21.7913H27.7601C27.6079 21.7913 27.4927 21.7891 27.4188 21.7565C27.3992 21.7478 27.384 21.7304 27.3796 21.7239L26.5382 21.8305C26.5382 21.8152 26.5447 21.8044 26.5447 21.8044C26.523 21.8152 26.473 21.8218 26.3969 21.8218C26.349 21.8218 26.3034 21.8196 26.2577 21.8174L24.34 21.7152L24.2574 21.1912L23.3942 21.2217C23.3594 21.6261 23.2659 21.7413 23.2137 21.7739C23.1594 21.8087 23.0463 21.8196 23.0072 21.8218C22.8854 21.8326 22.7615 21.8348 22.6658 21.8348H22.3136C22.0896 21.8326 21.8265 21.8413 21.5613 21.9022C20.4241 22.1675 20.3197 23.1763 20.2458 23.9112C20.2306 24.0569 20.2154 24.2004 20.1936 24.3417C20.1502 24.6201 20.1393 24.8984 20.1262 25.1658C20.1262 25.1875 20.1262 25.2093 20.1241 25.231C20.0697 24.931 20.0284 24.6657 19.9806 24.3657L19.9371 24.0917C19.8762 23.7134 19.8088 23.285 19.6066 22.8872C19.5457 22.7676 19.4848 22.6567 19.4239 22.5436C19.3 22.3175 19.1826 22.1044 19.0978 21.8609C18.5303 20.2041 18.7021 18.6212 18.9456 17.2927C19.5196 14.1618 22.1592 11.4765 25.0879 11.046C25.2923 11.0156 25.4967 11.0004 25.6967 11.0004C26.1642 11.0004 26.6273 11.1026 27.06 11.2787C27.4231 11.4265 27.9623 11.6266 28.2167 11.9353C28.2341 11.9549 28.2515 11.9788 28.2776 11.9831C28.3015 11.9875 28.3254 11.9744 28.345 11.9614C29.1278 11.4918 30.004 11.2656 30.9128 11.2656C34.3047 11.2656 37.6596 14.3748 38.0901 17.9189C38.2532 19.2626 38.0597 20.6716 37.5292 21.9914C37.5096 22.0414 37.49 22.0935 37.4683 22.1457C37.4052 22.311 37.34 22.4806 37.2617 22.611C37.2465 22.6349 37.2313 22.661 37.2161 22.6828C37.1704 22.7458 37.103 22.8089 37.0269 22.8806C36.916 22.985 36.7877 23.1046 36.6834 23.2677C36.4225 23.6677 36.3355 24.0961 36.2507 24.5113L36.2333 24.5961C36.1985 24.7679 36.0942 25.1984 35.9811 25.655L35.9833 25.6615Z" fill="url(#paint15_radial_1494_17123)"/><g style="mix-blend-mode:overlay" opacity="0.5"><path d="M31.3151 28.6188C31.5782 28.6188 31.7761 28.8601 31.7217 29.1188C31.6652 29.3906 31.563 29.6494 31.4239 29.8907C30.839 30.893 29.5801 31.591 28.1168 31.5975C27.0057 31.6019 26.0099 31.2083 25.3359 30.5821C24.9075 30.1864 24.6097 29.6972 24.4901 29.1558C24.4336 28.8971 24.6271 28.6492 24.8923 28.647L31.3151 28.6166V28.6188Z" fill="white"/></g><path d="M31.5738 29.1232C31.5173 29.3711 31.4216 29.6081 31.289 29.8299C30.715 30.7822 29.48 31.4475 28.0449 31.4541C26.9556 31.4584 25.9794 31.0844 25.3184 30.4887C24.9053 30.119 24.6161 29.6646 24.4965 29.1602C24.4356 28.9015 24.6313 28.6514 24.8988 28.6492L31.1672 28.621C31.4325 28.621 31.6325 28.8645 31.5738 29.1254V29.1232Z" fill="#68041A"/><path d="M31.2892 29.8298C30.7152 30.7821 29.4802 31.4475 28.0452 31.454C26.9558 31.4583 25.9796 31.0844 25.3186 30.4886C25.8904 29.5363 27.1254 28.8709 28.5605 28.8644C29.6498 28.8601 30.626 29.234 31.2892 29.8298Z" fill="#A2122A"/><path d="M30.7368 28.623V29.0427C30.739 29.3166 30.5477 29.5384 30.3085 29.5406L25.7686 29.5623C25.5294 29.5623 25.3337 29.3427 25.3337 29.0688V28.6491L30.7368 28.6252V28.623Z" fill="white"/><path d="M30.7368 28.623V29.0427C30.739 29.3166 30.5477 29.5384 30.3085 29.5406L25.7686 29.5623C25.5294 29.5623 25.3337 29.3427 25.3337 29.0688V28.6491L30.7368 28.6252V28.623Z" fill="url(#paint16_linear_1494_17123)"/><path opacity="0.4" d="M30.7368 28.623V29.0427C30.739 29.3166 30.5477 29.5384 30.3085 29.5406L25.7686 29.5623C25.5294 29.5623 25.3337 29.3427 25.3337 29.0688V28.6491L30.7368 28.6252V28.623Z" fill="url(#paint17_linear_1494_17123)"/><g opacity="0.5"><path d="M28.8972 26.5576C28.882 26.3793 28.8428 26.201 28.7972 26.0271C28.6819 25.5878 28.4971 25.1595 28.4797 24.6986C28.4602 24.2267 28.4319 23.7484 28.4101 23.2744C28.4145 23.394 28.4297 23.5114 28.4515 23.6288C28.5015 23.9093 28.5732 24.2181 28.6928 24.479C28.7993 24.716 28.8602 24.9812 28.9494 25.2269C29.0711 25.5618 29.2059 25.8944 29.3233 26.2314C29.4364 26.5554 29.5669 26.9098 29.5777 27.2555C29.5843 27.4882 29.5364 27.6621 29.3451 27.8121C29.219 27.9122 29.0711 27.9883 28.9668 28.1122C28.9341 28.1513 28.9059 28.1926 28.8711 28.2274C28.7689 28.3274 28.6102 28.3557 28.4667 28.3296C28.3253 28.3035 28.1949 28.2318 28.0731 28.1557C27.9514 28.0796 27.8296 27.9991 27.6926 27.9513C28.0862 27.8534 28.4797 27.7143 28.7167 27.3621C28.8841 27.112 28.9211 26.8381 28.8972 26.5598V26.5576Z" fill="url(#paint18_linear_1494_17123)"/></g><path d="M33.1154 38.1748C31.7673 39.6359 31.2433 41.8145 31.2433 41.8145L30.5563 40.9557L30.5758 40.9339L27.8776 37.5725L27.8188 37.5008L27.8776 37.4573L31.1716 35.1743V33.4849L32.6892 33.6675C32.8088 33.6805 32.9045 33.7697 32.9306 33.8849L33.5089 36.3832L33.5611 36.6115C33.6851 37.1746 33.5176 37.7638 33.1154 38.177V38.1748Z" fill="#009CDD"/><path style="mix-blend-mode:overlay" d="M33.1154 38.1768C31.7651 39.6379 31.2433 41.8144 31.2433 41.8144L30.5541 40.9555L30.5758 40.9338L30.1366 40.3881L27.8754 37.5724L27.8167 37.4984L27.8732 37.455L31.1694 35.172V33.4825L32.6849 33.6674C32.8045 33.6782 32.9001 33.7674 32.9262 33.8826L33.5046 36.3809L33.5589 36.6092C33.6807 37.1723 33.5154 37.7615 33.1132 38.1768H33.1154Z" fill="url(#paint19_radial_1494_17123)"/><path style="mix-blend-mode:overlay" d="M31.1694 33.7152V35.1698L32.3479 34.3153C32.5479 34.1696 32.4631 33.8631 32.2131 33.8348L31.1694 33.7152Z" fill="url(#paint20_radial_1494_17123)"/><path d="M27.934 37.4987L27.8753 37.5704L25.1553 40.9536L24.4682 41.8124C24.4682 41.8124 23.9834 39.6338 22.6353 38.1727C22.2331 37.7574 22.0657 37.1703 22.1874 36.6072L22.2396 36.3789L22.8201 33.8807C22.8462 33.7654 22.9419 33.6763 23.0593 33.6632L24.5791 33.4806V35.17L27.8732 37.453L27.9319 37.4965L27.934 37.4987Z" fill="#009CDD"/><path style="mix-blend-mode:overlay" opacity="0.7" d="M27.9339 37.4984L27.8752 37.5724L25.7531 40.2141L25.1574 40.9555L24.4681 41.8144C24.4681 41.8144 23.9833 39.6379 22.6374 38.1768C22.2352 37.7615 22.0656 37.1723 22.1895 36.6092L22.2417 36.3809L22.8222 33.8826C22.8483 33.7674 22.944 33.6782 23.0614 33.6674L24.579 33.4825V35.172L27.8709 37.455L27.9296 37.4984H27.9339Z" fill="url(#paint21_radial_1494_17123)"/><path opacity="0.4" d="M24.579 33.7152V35.1698L23.4005 34.3153C23.2005 34.1696 23.2853 33.8631 23.5353 33.8348L24.579 33.7152Z" fill="url(#paint22_radial_1494_17123)"/><path d="M28.684 39.7319H26.8467C26.7483 39.7319 26.6685 39.8118 26.6685 39.9102V40.0711C26.6685 40.1696 26.7483 40.2494 26.8467 40.2494H28.684C28.7825 40.2494 28.8623 40.1696 28.8623 40.0711V39.9102C28.8623 39.8118 28.7825 39.7319 28.684 39.7319Z" fill="url(#paint23_linear_1494_17123)"/><g style="mix-blend-mode:overlay"><path d="M22.8613 25.9902C22.8547 26.0576 22.7938 26.1076 22.7264 26.1011C22.659 26.0946 22.609 26.0337 22.6156 25.9663C22.6221 25.8989 22.683 25.8489 22.7504 25.8554C22.8178 25.862 22.8678 25.9228 22.8613 25.9902Z" fill="#461809"/><path d="M23.1852 26.6531C23.1787 26.7205 23.1178 26.7705 23.0504 26.764C22.983 26.7574 22.933 26.6966 22.9395 26.6292C22.9461 26.5618 23.0069 26.5117 23.0743 26.5183C23.1417 26.5248 23.1918 26.5857 23.1852 26.6531Z" fill="#461809"/><path d="M22.5744 26.8445C22.5679 26.9119 22.507 26.9619 22.4396 26.9554C22.3722 26.9489 22.3222 26.888 22.3287 26.8206C22.3352 26.7532 22.3961 26.7032 22.4635 26.7097C22.5309 26.7162 22.5809 26.7771 22.5744 26.8445Z" fill="#461809"/><path d="M23.8508 27.0969C23.8442 27.1643 23.7834 27.2143 23.716 27.2078C23.6486 27.2013 23.5985 27.1404 23.6051 27.073C23.6116 27.0056 23.6725 26.9556 23.7399 26.9621C23.8073 26.9686 23.8573 27.0295 23.8508 27.0969Z" fill="#461809"/><path d="M24.8879 26.2448C24.8813 26.3122 24.8205 26.3622 24.7531 26.3556C24.6857 26.3491 24.6357 26.2882 24.6422 26.2208C24.6487 26.1534 24.7096 26.1034 24.777 26.1099C24.8444 26.1165 24.8944 26.1773 24.8879 26.2448Z" fill="#461809"/><path d="M23.7507 26.1991C23.7441 26.2665 23.6833 26.3165 23.6159 26.31C23.5484 26.3035 23.4984 26.2426 23.505 26.1752C23.5115 26.1078 23.5724 26.0578 23.6398 26.0643C23.7072 26.0708 23.7572 26.1317 23.7507 26.1991Z" fill="#461809"/><path d="M24.3378 26.7318C24.3313 26.7992 24.2704 26.8492 24.203 26.8427C24.1356 26.8362 24.0856 26.7753 24.0921 26.7079C24.0986 26.6405 24.1595 26.5905 24.2269 26.597C24.2943 26.6035 24.3443 26.6644 24.3378 26.7318Z" fill="#461809"/><path d="M25.0314 27.0839C25.0249 27.1513 24.964 27.2013 24.8966 27.1948C24.8292 27.1882 24.7792 27.1273 24.7857 27.0599C24.7923 26.9925 24.8531 26.9425 24.9205 26.9491C24.9879 26.9556 25.0379 27.0165 25.0314 27.0839Z" fill="#461809"/><path d="M24.4616 27.4929C24.4551 27.5603 24.3942 27.6103 24.3268 27.6038C24.2594 27.5973 24.2094 27.5364 24.2159 27.469C24.2224 27.4016 24.2833 27.3516 24.3507 27.3581C24.4181 27.3646 24.4681 27.4255 24.4616 27.4929Z" fill="#461809"/><path d="M23.1572 27.3949C23.1506 27.4623 23.0898 27.5123 23.0224 27.5058C22.9549 27.4993 22.9049 27.4384 22.9115 27.371C22.918 27.3036 22.9789 27.2536 23.0463 27.2601C23.1137 27.2666 23.1637 27.3275 23.1572 27.3949Z" fill="#461809"/></g><g style="mix-blend-mode:overlay"><path d="M33.7349 25.9726C33.7415 26.04 33.8024 26.09 33.8719 26.0835C33.9393 26.077 33.9893 26.0161 33.9828 25.9465C33.9763 25.8791 33.9154 25.8291 33.8458 25.8357C33.7784 25.8422 33.7284 25.9031 33.7349 25.9726Z" fill="#461809"/><path d="M33.422 26.6404C33.4285 26.7078 33.4894 26.7578 33.5589 26.7512C33.6263 26.7447 33.6764 26.6838 33.6698 26.6143C33.6633 26.5469 33.6024 26.4969 33.5328 26.5034C33.4654 26.5099 33.4154 26.5708 33.422 26.6404Z" fill="#461809"/><path d="M34.033 26.8249C34.0396 26.8923 34.1004 26.9423 34.17 26.9358C34.2374 26.9293 34.2874 26.8684 34.2809 26.7988C34.2744 26.7314 34.2135 26.6814 34.1439 26.688C34.0765 26.6945 34.0265 26.7554 34.033 26.8249Z" fill="#461809"/><path d="M32.7611 27.0924C32.7676 27.1598 32.8285 27.2098 32.898 27.2033C32.9654 27.1968 33.0155 27.1359 33.0089 27.0663C33.0024 26.9989 32.9415 26.9489 32.872 26.9554C32.8046 26.9619 32.7545 27.0228 32.7611 27.0924Z" fill="#461809"/><path d="M31.713 26.253C31.7195 26.3204 31.7804 26.3704 31.85 26.3639C31.9174 26.3574 31.9674 26.2965 31.9608 26.2269C31.9543 26.1595 31.8934 26.1095 31.8239 26.1161C31.7565 26.1226 31.7065 26.1835 31.713 26.253Z" fill="#461809"/><path d="M32.8502 26.1922C32.8567 26.2596 32.9176 26.3097 32.9872 26.3031C33.0546 26.2966 33.1046 26.2357 33.0981 26.1661C33.0915 26.0987 33.0306 26.0487 32.9611 26.0553C32.8937 26.0618 32.8437 26.1227 32.8502 26.1922Z" fill="#461809"/><path d="M32.2674 26.7314C32.2739 26.7988 32.3348 26.8488 32.4044 26.8423C32.4718 26.8358 32.5218 26.7749 32.5153 26.7053C32.5088 26.6379 32.4479 26.5879 32.3783 26.5944C32.3109 26.601 32.2609 26.6618 32.2674 26.7314Z" fill="#461809"/><path d="M31.5782 27.0924C31.5847 27.1598 31.6456 27.2098 31.7152 27.2033C31.7826 27.1968 31.8326 27.1359 31.8261 27.0663C31.8196 26.9989 31.7587 26.9489 31.6891 26.9554C31.6217 26.9619 31.5717 27.0228 31.5782 27.0924Z" fill="#461809"/><path d="M32.1544 27.4946C32.1609 27.562 32.2218 27.612 32.2914 27.6055C32.3588 27.599 32.4088 27.5381 32.4022 27.4685C32.3957 27.4011 32.3348 27.3511 32.2653 27.3576C32.1979 27.3642 32.1479 27.425 32.1544 27.4946Z" fill="#461809"/><path d="M33.4588 27.3814C33.4653 27.4489 33.5262 27.4989 33.5958 27.4923C33.6632 27.4858 33.7132 27.4249 33.7067 27.3554C33.7002 27.288 33.6393 27.2379 33.5697 27.2445C33.5023 27.251 33.4523 27.3119 33.4588 27.3814Z" fill="#461809"/></g><path d="M21.159 36.6179V47.7959H19.637V37.3354C20.124 37.0615 20.6306 36.8201 21.159 36.6179Z" fill="url(#paint24_linear_1494_17123)"/><path d="M21.3286 41.4058H19.5001C19.3247 41.4058 19.1826 41.5479 19.1826 41.7232V43.7996C19.1826 43.975 19.3247 44.1171 19.5001 44.1171H21.3286C21.504 44.1171 21.6461 43.975 21.6461 43.7996V41.7232C21.6461 41.5479 21.504 41.4058 21.3286 41.4058Z" fill="#D1D3D4"/><path style="mix-blend-mode:overlay" d="M21.3286 41.4058H19.5001C19.3247 41.4058 19.1826 41.5479 19.1826 41.7232V43.7996C19.1826 43.975 19.3247 44.1171 19.5001 44.1171H21.3286C21.504 44.1171 21.6461 43.975 21.6461 43.7996V41.7232C21.6461 41.5479 21.504 41.4058 21.3286 41.4058Z" fill="url(#paint25_radial_1494_17123)"/><path style="mix-blend-mode:overlay" d="M21.3286 41.4058H19.5001C19.3247 41.4058 19.1826 41.5479 19.1826 41.7232V43.7996C19.1826 43.975 19.3247 44.1171 19.5001 44.1171H21.3286C21.504 44.1171 21.6461 43.975 21.6461 43.7996V41.7232C21.6461 41.5479 21.504 41.4058 21.3286 41.4058Z" fill="url(#paint26_radial_1494_17123)"/><path d="M21.2959 43.5562V41.9668C21.2959 41.8732 21.22 41.7972 21.1263 41.7972H19.7022C19.6085 41.7972 19.5326 41.8732 19.5326 41.9668V43.5562C19.5326 43.6499 19.6085 43.7258 19.7022 43.7258H21.1263C21.22 43.7258 21.2959 43.6499 21.2959 43.5562Z" fill="url(#paint27_linear_1494_17123)"/><path d="M36.3311 37.3115V47.7959H34.8091V36.6027C35.3331 36.8049 35.844 37.0397 36.3311 37.3115Z" fill="url(#paint28_linear_1494_17123)"/><path d="M36.5029 41.4056H34.6744C34.4991 41.4056 34.3569 41.5478 34.3569 41.7231V43.7995C34.3569 43.9748 34.4991 44.117 34.6744 44.117H36.5029C36.6783 44.117 36.8204 43.9748 36.8204 43.7995V41.7231C36.8204 41.5478 36.6783 41.4056 36.5029 41.4056Z" fill="#D1D3D4"/><path style="mix-blend-mode:overlay" d="M36.5029 41.4056H34.6744C34.4991 41.4056 34.3569 41.5478 34.3569 41.7231V43.7995C34.3569 43.9748 34.4991 44.117 34.6744 44.117H36.5029C36.6783 44.117 36.8204 43.9748 36.8204 43.7995V41.7231C36.8204 41.5478 36.6783 41.4056 36.5029 41.4056Z" fill="url(#paint29_radial_1494_17123)"/><path style="mix-blend-mode:overlay" d="M36.5029 41.4056H34.6744C34.4991 41.4056 34.3569 41.5478 34.3569 41.7231V43.7995C34.3569 43.9748 34.4991 44.117 34.6744 44.117H36.5029C36.6783 44.117 36.8204 43.9748 36.8204 43.7995V41.7231C36.8204 41.5478 36.6783 41.4056 36.5029 41.4056Z" fill="url(#paint30_radial_1494_17123)"/><path d="M36.4702 43.5561V41.9667C36.4702 41.873 36.3943 41.7971 36.3006 41.7971H34.8765C34.7828 41.7971 34.7069 41.873 34.7069 41.9667V43.5561C34.7069 43.6498 34.7828 43.7257 34.8765 43.7257H36.3006C36.3943 43.7257 36.4702 43.6498 36.4702 43.5561Z" fill="url(#paint31_linear_1494_17123)"/></g><defs><radialGradient id="paint0_radial_1494_17123" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(27.9298 0.357776) scale(39.4284)"><stop offset="0.32" stop-color="#009CDD" stop-opacity="0"/><stop offset="1" stop-color="#009CDD"/></radialGradient><linearGradient id="paint1_linear_1494_17123" x1="13.5316" y1="18.8845" x2="29.4756" y2="38.5617" gradientUnits="userSpaceOnUse"><stop stop-color="#5B2B1A"/><stop offset="1" stop-color="#36190F"/></linearGradient><linearGradient id="paint2_linear_1494_17123" x1="38.1486" y1="23.9136" x2="22.2046" y2="43.5908" gradientUnits="userSpaceOnUse"><stop stop-color="#5B2B1A"/><stop offset="1" stop-color="#36190F"/></linearGradient><linearGradient id="paint3_linear_1494_17123" x1="23.8093" y1="13.9749" x2="31.5302" y2="28.7992" gradientUnits="userSpaceOnUse"><stop stop-color="#5B2B1A"/><stop offset="1" stop-color="#36190F"/></linearGradient><linearGradient id="paint4_linear_1494_17123" x1="27.5752" y1="43.7652" x2="29.3886" y2="43.7652" gradientUnits="userSpaceOnUse"><stop stop-color="#5B2B1A"/><stop offset="1" stop-color="#36190F"/></linearGradient><linearGradient id="paint5_linear_1494_17123" x1="26.0641" y1="38.3466" x2="29.5669" y2="38.3466" gradientUnits="userSpaceOnUse"><stop stop-color="#5B2B1A"/><stop offset="1" stop-color="#36190F"/></linearGradient><radialGradient id="paint6_radial_1494_17123" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(42.2603 0.357578) scale(28.6135 28.6135)"><stop stop-color="#1F1E21"/><stop offset="0.58" stop-color="#1F1E21" stop-opacity="0.47"/><stop offset="1" stop-color="#1F1E21" stop-opacity="0"/></radialGradient><radialGradient id="paint7_radial_1494_17123" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.6042 0.357578) scale(11.0497 11.0497)"><stop stop-color="white"/><stop offset="0.09" stop-color="white" stop-opacity="0.88"/><stop offset="0.35" stop-color="white" stop-opacity="0.57"/><stop offset="0.58" stop-color="white" stop-opacity="0.33"/><stop offset="0.77" stop-color="white" stop-opacity="0.15"/><stop offset="0.91" stop-color="white" stop-opacity="0.04"/><stop offset="1" stop-color="white" stop-opacity="0"/></radialGradient><linearGradient id="paint8_linear_1494_17123" x1="31.7391" y1="33.5458" x2="24.4965" y2="38.464" gradientUnits="userSpaceOnUse"><stop offset="0.12" stop-color="#B8797B"/><stop offset="0.35" stop-color="#D19F9C"/><stop offset="0.58" stop-color="#E5BDB6"/><stop offset="0.77" stop-color="#F1CFC6"/><stop offset="0.91" stop-color="#F6D6CC"/></linearGradient><linearGradient id="paint9_linear_1494_17123" x1="17.4509" y1="24.9579" x2="19.2294" y2="24.9731" gradientUnits="userSpaceOnUse"><stop offset="0.09" stop-color="#F6D6CC"/><stop offset="0.25" stop-color="#F1CFC6"/><stop offset="0.47" stop-color="#E5BDB6"/><stop offset="0.73" stop-color="#D19F9C"/><stop offset="1" stop-color="#B8797B"/></linearGradient><linearGradient id="paint10_linear_1494_17123" x1="38.5751" y1="25.1268" x2="37.0205" y2="25.1268" gradientUnits="userSpaceOnUse"><stop offset="0.09" stop-color="#F6D6CC"/><stop offset="0.25" stop-color="#F1CFC6"/><stop offset="0.47" stop-color="#E5BDB6"/><stop offset="0.73" stop-color="#D19F9C"/><stop offset="1" stop-color="#B8797B"/></linearGradient><radialGradient id="paint11_radial_1494_17123" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(25.2918 23.3718) rotate(8) scale(11.952 11.952)"><stop offset="0.09" stop-color="#F6D6CC"/><stop offset="0.31" stop-color="#F4CFC6"/><stop offset="0.61" stop-color="#F1BDB8"/><stop offset="0.95" stop-color="#EB9FA1"/><stop offset="1" stop-color="#EB9B9E"/></radialGradient><linearGradient id="paint12_linear_1494_17123" x1="23.5805" y1="23.5848" x2="25.3561" y2="24.8674" gradientUnits="userSpaceOnUse"><stop stop-color="#5B2B1A"/><stop offset="1" stop-color="#36190F"/></linearGradient><linearGradient id="paint13_linear_1494_17123" x1="30.457" y1="23.5841" x2="32.2326" y2="24.8667" gradientUnits="userSpaceOnUse"><stop stop-color="#5B2B1A"/><stop offset="1" stop-color="#36190F"/></linearGradient><linearGradient id="paint14_linear_1494_17123" x1="22.3592" y1="12.0376" x2="34.233" y2="28.4273" gradientUnits="userSpaceOnUse"><stop stop-color="#5B2B1A"/><stop offset="1" stop-color="#36190F"/></linearGradient><radialGradient id="paint15_radial_1494_17123" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(28.3907 10.9156) scale(13.3718)"><stop stop-color="white"/><stop offset="0.09" stop-color="white" stop-opacity="0.88"/><stop offset="0.35" stop-color="white" stop-opacity="0.57"/><stop offset="0.58" stop-color="white" stop-opacity="0.33"/><stop offset="0.77" stop-color="white" stop-opacity="0.15"/><stop offset="0.91" stop-color="white" stop-opacity="0.04"/><stop offset="1" stop-color="white" stop-opacity="0"/></radialGradient><linearGradient id="paint16_linear_1494_17123" x1="25.3378" y1="29.1105" x2="30.743" y2="29.086" gradientUnits="userSpaceOnUse"><stop stop-color="#E0EFFE" stop-opacity="0"/><stop offset="1" stop-color="#B9DBFE"/></linearGradient><linearGradient id="paint17_linear_1494_17123" x1="28.0383" y1="28.6417" x2="28.0396" y2="28.933" gradientUnits="userSpaceOnUse"><stop/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="paint18_linear_1494_17123" x1="28.6884" y1="25.7705" x2="29.5951" y2="25.577" gradientUnits="userSpaceOnUse"><stop stop-color="#EB6E72"/><stop offset="0.11" stop-color="#EB7476" stop-opacity="0.92"/><stop offset="0.32" stop-color="#EE8481" stop-opacity="0.7"/><stop offset="0.62" stop-color="#F29E93" stop-opacity="0.35"/><stop offset="0.91" stop-color="#F6B8A5" stop-opacity="0"/></linearGradient><radialGradient id="paint19_radial_1494_17123" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(33.7068 37.5028) scale(5.8162 5.8162)"><stop stop-color="#1F1E21"/><stop offset="0.34" stop-color="#1F1E21" stop-opacity="0.84"/><stop offset="0.75" stop-color="#1F1E21" stop-opacity="0.38"/><stop offset="1" stop-color="#1F1E21" stop-opacity="0"/></radialGradient><radialGradient id="paint20_radial_1494_17123" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(31.1651 35.1698) rotate(180) scale(1.9612 1.9612)"><stop stop-color="#1F1E21"/><stop offset="0.34" stop-color="#1F1E21" stop-opacity="0.84"/><stop offset="0.75" stop-color="#1F1E21" stop-opacity="0.38"/><stop offset="1" stop-color="#1F1E21" stop-opacity="0"/></radialGradient><radialGradient id="paint21_radial_1494_17123" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.1507 33.4456) scale(5.17696 5.17696)"><stop stop-color="white"/><stop offset="0.09" stop-color="white" stop-opacity="0.88"/><stop offset="0.35" stop-color="white" stop-opacity="0.57"/><stop offset="0.58" stop-color="white" stop-opacity="0.33"/><stop offset="0.77" stop-color="white" stop-opacity="0.15"/><stop offset="0.91" stop-color="white" stop-opacity="0.04"/><stop offset="1" stop-color="white" stop-opacity="0"/></radialGradient><radialGradient id="paint22_radial_1494_17123" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.5833 35.1698) scale(1.96121 1.9612)"><stop stop-color="#1F1E21"/><stop offset="0.34" stop-color="#1F1E21" stop-opacity="0.84"/><stop offset="0.75" stop-color="#1F1E21" stop-opacity="0.38"/><stop offset="1" stop-color="#1F1E21" stop-opacity="0"/></radialGradient><linearGradient id="paint23_linear_1494_17123" x1="26.6685" y1="39.9907" x2="28.8623" y2="39.9907" gradientUnits="userSpaceOnUse"><stop stop-color="#5B2B1A"/><stop offset="1" stop-color="#36190F"/></linearGradient><linearGradient id="paint24_linear_1494_17123" x1="19.637" y1="42.2058" x2="21.159" y2="42.2058" gradientUnits="userSpaceOnUse"><stop stop-color="#5B2B1A"/><stop offset="1" stop-color="#36190F"/></linearGradient><radialGradient id="paint25_radial_1494_17123" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(19.2739 41.5732) scale(3.36578 3.36579)"><stop stop-color="white"/><stop offset="0.09" stop-color="white" stop-opacity="0.88"/><stop offset="0.35" stop-color="white" stop-opacity="0.57"/><stop offset="0.58" stop-color="white" stop-opacity="0.33"/><stop offset="0.77" stop-color="white" stop-opacity="0.15"/><stop offset="0.91" stop-color="white" stop-opacity="0.04"/><stop offset="1" stop-color="white" stop-opacity="0"/></radialGradient><radialGradient id="paint26_radial_1494_17123" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21.4199 44.0279) scale(2.8483 2.84831)"><stop stop-color="#1F1E21"/><stop offset="0.34" stop-color="#1F1E21" stop-opacity="0.84"/><stop offset="0.75" stop-color="#1F1E21" stop-opacity="0.38"/><stop offset="1" stop-color="#1F1E21" stop-opacity="0"/></radialGradient><linearGradient id="paint27_linear_1494_17123" x1="20.4153" y1="41.819" x2="20.4153" y2="43.7193" gradientUnits="userSpaceOnUse"><stop stop-color="#5B2B1A"/><stop offset="1" stop-color="#36190F"/></linearGradient><linearGradient id="paint28_linear_1494_17123" x1="34.8091" y1="42.1993" x2="36.3311" y2="42.1993" gradientUnits="userSpaceOnUse"><stop stop-color="#5B2B1A"/><stop offset="1" stop-color="#36190F"/></linearGradient><radialGradient id="paint29_radial_1494_17123" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(34.4461 41.5731) scale(3.36578 3.36579)"><stop stop-color="white"/><stop offset="0.09" stop-color="white" stop-opacity="0.88"/><stop offset="0.35" stop-color="white" stop-opacity="0.57"/><stop offset="0.58" stop-color="white" stop-opacity="0.33"/><stop offset="0.77" stop-color="white" stop-opacity="0.15"/><stop offset="0.91" stop-color="white" stop-opacity="0.04"/><stop offset="1" stop-color="white" stop-opacity="0"/></radialGradient><radialGradient id="paint30_radial_1494_17123" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(36.5943 44.0278) scale(2.8483 2.84831)"><stop stop-color="#1F1E21"/><stop offset="0.34" stop-color="#1F1E21" stop-opacity="0.84"/><stop offset="0.75" stop-color="#1F1E21" stop-opacity="0.38"/><stop offset="1" stop-color="#1F1E21" stop-opacity="0"/></radialGradient><linearGradient id="paint31_linear_1494_17123" x1="35.5875" y1="41.8189" x2="35.5875" y2="43.7192" gradientUnits="userSpaceOnUse"><stop stop-color="#5B2B1A"/><stop offset="1" stop-color="#36190F"/></linearGradient></defs></svg>
`} width={'100%'} height={'100%'} />}
        </View>
    )
}

export function convertNumberToTime(length: number, hideHour?: boolean, hideMinute?: boolean, hideSec?: boolean, hideMili?: boolean, is1digiStart?: boolean) {
    return `${hideHour ? '' : `${Math.floor(length / 3600000)}:`}${hideMinute ? '' : `${!is1digiStart ? `0` : ``}${Math.floor((length % 3600000) / 60000)}`.slice(-2)}:${hideSec ? '' : `${!is1digiStart ? `0` : ``}${Math.floor((length % 60000) / 1000)}`.slice(-2)}${hideMili ? '' : `.${`00${length % 1000}`.slice(-3)}`}`
}