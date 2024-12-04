import { View, Text, TouchableOpacity, Alert, Image, ImageStyle } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as CLASS from '@/assets/Class'
import { clearStorage, getStorageList, removeUser, saveStorageItem } from '@/data/storageFunc'
import { MatchHistoryFormat } from '@/data/interfaceFormat'
import styles from '@/assets/stylesheet'
import { CommonActions, DefaultTheme, useNavigation } from '@react-navigation/native';
import * as CTEXT from '@/assets/CustomText';

export default function Setting() {
  const navigation = useNavigation()
  return (
    <CLASS.SSBarWithSaveArea trans margin barContentStyle='light-content' bgColor={DefaultTheme.colors.background} barColor={DefaultTheme.colors.background}>
      <Image source={require('@/assets/photos/inappLogo.jpg')} style={[styles.w20vw, styles.h20vw, styles.alignSelfCenter, styles.borderRadius2vw, styles.overflowHidden, styles.margin4vw] as ImageStyle} resizeMethod='resize' resizeMode='contain' />
      <CLASS.ViewGra700600 style={[styles.borderRadius100, styles.overflowHidden, styles.w90, styles.alignSelfCenter]}>
        <CLASS.RoundBtn title='Đặt lại ứng dụng' onPress={() => {
          Alert.alert('Xác nhận', 'Bạn có muốn đặt lại ứng dụng không?', [
            {
              text: 'Có',
              onPress: () => {
                clearStorage('match')
                removeUser()
                clearStorage('room')
                navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'index' }]
                  })
                )
              }
            },
            {
              text: 'Không',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel'
            }
          ])
        }} textClass={CTEXT.NGT_Inter_HeaderMd_Bld} textColor='white' customStyle={[styles.w100, styles.justifyContentCenter, styles.paddingH4vw,]} />
      </CLASS.ViewGra700600>

    </CLASS.SSBarWithSaveArea >
  )
}