import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import clrStyle, { componentStyle, NGHIACOLOR } from '@/assets/componentStyleSheet'
import styles, { vw } from '@/assets/stylesheet'
import { avatarComponet, marginBottomForScrollView } from '@/assets/component'
import * as ICON from '@/assets/svgXml'
import * as  CLASS from '@/assets/Class'
import * as CTEXT from '@/assets/CustomText'
import { DefaultTheme, useNavigation } from '@react-navigation/native'
import { MatchHistoryFormat, UserFormat } from '@/data/interfaceFormat'
import { getStorageList, saveStorageItem } from '@/data/storageFunc'
import { currentSaveGameLvl, currentSetUser, RootContext } from '@/data/store'
import { ImageStyle } from 'react-native'

export default function Info() {
  const navigation = useNavigation();
  const [CurrentCache, dispatch] = React.useContext(RootContext)
  const [name, setName] = React.useState('');
  const [id, setId] = React.useState('');

  function registerUser() {
    let userName = name.trim()
    let userId = id.trim()

    if (userName !== '' && userId !== '') {
      let data: UserFormat = { name: userName, id: userId, star: 10 }
      saveStorageItem('user', data).then(
        (res) => {
          if (res) {
            currentSetUser(data)
            navigation.goBack()
          }
        }
      )
    }
  }
  return (
    <CLASS.SSBarWithSaveArea trans margin barContentStyle='light-content' bgColor={DefaultTheme.colors.background} barColor={DefaultTheme.colors.background}>
      <CLASS.ViewColEvenlyCenter style={[styles.flex1, styles.w100, styles.paddingH6vw]}>
        <Image source={require('@/assets/photos/inappLogo.jpg')} style={[styles.w20vw, styles.h20vw, styles.borderRadius2vw, styles.overflowHidden, styles.margin2vw] as ImageStyle} resizeMethod='resize' resizeMode='contain' />
        <CLASS.BoardingInput
          value={name}
          onChgText={(value) => setName(value as string)}
          placeholder='Nhập tên ở đây'
          CustomStyleClass={[styles.paddingH4vw, styles.marginVertical2vw, styles.w100]}
          CustomStyleInput={[{ backgroundColor: NGHIACOLOR.NghiaWarning50 }]}
          title='Tên của bạn là:'
          autoCap='words'
          tileColor={NGHIACOLOR.NghiaWarning100}
          TextClassTitle={CTEXT.NGT_Inter_DispMd_Bld}
        />
        <CLASS.BoardingInput
          value={id}
          onChgText={(value) => setId(value as string)}
          placeholder='ID của bạn'
          CustomStyleClass={[styles.paddingH4vw, styles.marginVertical2vw, styles.w100]}
          CustomStyleInput={[{ backgroundColor: NGHIACOLOR.NghiaWarning50 }]}
          title='Đặt ID bạn bè có thể cùng chơi với bạn:'
          tileColor={NGHIACOLOR.NghiaWarning100}
          CustomStyleText={[styles.w80, styles.textCenter]}
          TextClassTitle={CTEXT.NGT_Inter_DispMd_Bld}
        />
        <CLASS.RoundBtn
          onPress={registerUser}
          textClass={CTEXT.NGT_Inter_HeaderLg_Bld}
          title='Bắt đầu thôi'
          otherTouchProps={{ disabled: !(name.trim().length && id.trim().length) }}
          textColor={name.trim().length && id.trim().length ? clrStyle.white : NGHIACOLOR.NghiaGray500}
          customStyle={[styles.marginVertical2vw, styles.alignSelfCenter, styles.justifyContentCenter, styles.w60, styles.paddingV4vw, styles.borderRadius100, { backgroundColor: name.trim().length && id.trim().length ? NGHIACOLOR.NghiaBrand600 : NGHIACOLOR.NghiaGray700 }]}
        />
      </CLASS.ViewColEvenlyCenter>
    </CLASS.SSBarWithSaveArea >
  )
}