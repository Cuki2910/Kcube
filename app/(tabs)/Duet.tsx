import { View, Text, ScrollView, Image, TouchableOpacity, TextInput, Alert, ImageStyle, Switch } from 'react-native'
import React, { useEffect } from 'react'
import clrStyle, { componentStyle, NGHIACOLOR } from '@/assets/componentStyleSheet'
import styles, { vw } from '@/assets/stylesheet'
import { avatarComponet, marginBottomForScrollView } from '@/assets/component'
import * as ICON from '@/assets/svgXml'
import * as  CLASS from '@/assets/Class'
import * as CTEXT from '@/assets/CustomText'
import { DefaultTheme, useNavigation } from '@react-navigation/native'
import { MatchHistoryFormat, RoomFormat } from '@/data/interfaceFormat'
import { getStorageItem, getStorageList, saveStorageItem } from '@/data/storageFunc'
import { currentSaveGameLvl, currentSaveMultiMode, RootContext } from '@/data/store'
import { SvgXml } from 'react-native-svg'
import { lvlData } from '@/data/factoryData'

export default function Duet() {
  const navigation = useNavigation()
  const [CurrentCache, dispatch] = React.useContext(RootContext)

  const [roomID, setRoomID] = React.useState<string>('')
  const [isCreateNew, setIsCreateNew] = React.useState<boolean>(false)
  const [isOffline, setIsOffline] = React.useState<boolean>(false)
  const [isPrivate, setIsPrivate] = React.useState<boolean>(false)
  const [LevelChoosing, setLevelChoosing] = React.useState<number | null>(null)
  const [RoomPassword, setRoomPassword] = React.useState<string>('')

  function roomJoinHandler() {
    if (roomID !== '') {
      dispatch(currentSaveMultiMode(1))
      navigation.navigate('Game' as never)
    } else {
      return Alert.alert('Vui lòng nhập ID phòng')
    }
  }

  function createRoom() {
    if (LevelChoosing === null) {
      return Alert.alert('Vui lòng chọn mức độ chơi')
    }
    let newRoom: RoomFormat = {
      match: null,
      id: Number(roomID),
      pass: RoomPassword,
      public: !isPrivate,
      lvl: lvlData[LevelChoosing as number][1] as string,
    }
    saveStorageItem('room', newRoom, roomID).then((res) => {
      if (res) {
        dispatch(currentSaveGameLvl(LevelChoosing as 0 | 1 | 2))
        dispatch(currentSaveMultiMode(1))
        navigation.navigate('Game' as never)
        setIsCreateNew(false)
        setRoomID('')
        setRoomPassword('')
        setLevelChoosing(null)
        setIsPrivate(false)
      }
    })
  }

  // Create new room with random ID
  useEffect(() => {
    const checkRoomExistence = async () => {
      if (isCreateNew) {
        let id = Math.floor(Math.random() * 100000).toString();
        let existed = await getStorageItem('room', id);

        while (existed) {
          id = Math.floor(Math.random() * 100000).toString();
          existed = await getStorageItem('room', id);
        }
        setRoomID(id);
      }
    };

    checkRoomExistence();
  }, [isCreateNew]);

  function renderItem() {
    switch (isCreateNew) {
      case true:
        return (
          <>
            <TouchableOpacity
              onPress={() => setIsCreateNew(false)}
              style={[styles.alignSelfEnd, styles.paddingH2vw,]}>
              <CLASS.ViewRowStartCenter>
                <CTEXT.NGT_Inter_HeaderMd_Med>Huỷ </CTEXT.NGT_Inter_HeaderMd_Med>
                {ICON.xIcon(vw(7), vw(7), NGHIACOLOR.NghiaError500)}
              </CLASS.ViewRowStartCenter>
            </TouchableOpacity>
            <CLASS.ViewCol style={[componentStyle.borderBrand800, styles.gap4vw, styles.marginVertical4vw, styles.w100, styles.padding4vw]}>
              <CTEXT.NGT_Inter_HeaderMd_SemiBold>Lựa chọn mức độ chơi</CTEXT.NGT_Inter_HeaderMd_SemiBold>
              {
                lvlData.map((item, index) => {
                  return <TouchableOpacity key={index} onPress={() => setLevelChoosing(index)}><CLASS.LevelChoosing icon={item[0]} title={item[1] as string} med={item[2] as string} time={item[3] as number} isChose={index === LevelChoosing} /></TouchableOpacity>
                })
              }
              {
                isOffline ? null :
                  <>
                    <CTEXT.NGT_Inter_HeaderMd_SemiBold>Mật khẩu của phòng</CTEXT.NGT_Inter_HeaderMd_SemiBold>
                    <CLASS.ViewRowBetweenCenter style={[styles.gap4vw]}>
                      <CLASS.ViewRowStartCenter style={[styles.flex1, styles.borderRadius2vw, styles.padding2vw, styles.paddingLeft4vw, { backgroundColor: NGHIACOLOR.NghiaTransparentWhite30 }]}>
                        <CTEXT.NGT_Inter_BodyLg_Reg color={NGHIACOLOR.NghiaBrand300}>Phòng số: <CTEXT.NGT_Inter_HeaderMd_SemiBold>{roomID}</CTEXT.NGT_Inter_HeaderMd_SemiBold></CTEXT.NGT_Inter_BodyLg_Reg>
                      </CLASS.ViewRowStartCenter>
                      <CLASS.ViewRowCenter>
                        <CTEXT.NGT_Inter_HeaderMd_SemiBold>Phòng kín </CTEXT.NGT_Inter_HeaderMd_SemiBold>
                        <Switch value={isPrivate}
                          onValueChange={(value) => { setIsPrivate(value) }}
                          thumbColor={NGHIACOLOR.NghiaBrand600}
                          trackColor={{ false: NGHIACOLOR.NghiaGray500, true: NGHIACOLOR.NghiaBrand300 }}
                        />
                      </CLASS.ViewRowCenter>
                    </CLASS.ViewRowBetweenCenter>

                    <TextInput
                      value={RoomPassword}
                      onChangeText={setRoomPassword}
                      placeholder='Đặt mật khẩu ở đây'
                      placeholderTextColor={NGHIACOLOR.NghiaGray400}
                      style={[styles.borderRadius2vw, styles.paddingH4vw, styles.paddingV2vw, styles.border1, styles.w100, styles.border1, { borderColor: NGHIACOLOR.NghiaGray400, fontFamily: 'Inter-Medium', fontSize: vw(3.5), backgroundColor: NGHIACOLOR.NghiaTransparentDark30, color: 'white' }]}
                    />
                  </>
              }

              <CLASS.ViewGra800600 style={[styles.w100, styles.borderRadius2vw]}>
                <CLASS.RoundBtn
                  title='Tạo phòng'
                  onPress={createRoom}
                  textClass={CTEXT.NGT_Inter_HeaderMd_SemiBold}
                  textColor={clrStyle.white}
                  customStyle={[styles.paddingV2vw, styles.justifyContentCenter]}
                />
              </CLASS.ViewGra800600>
            </CLASS.ViewCol>
          </>
        )

      default:
        return (
          <>
            <Image style={[styles.marginTop4vw, { width: vw(84), height: vw(54), borderTopRightRadius: vw(8), borderTopLeftRadius: vw(8) }] as ImageStyle} source={require('@/assets/photos/duet.jpeg')} />
            <CLASS.ViewGra800600 style={[styles.w100, styles.borderRadius2vw]}>
              <CLASS.RoundBtn
                title='Tạo phòng Online'
                onPress={() => { setIsCreateNew(true) }}
                textClass={CTEXT.NGT_Inter_HeaderLg_SemiBold}
                textColor={clrStyle.white}
                customStyle={[styles.justifyContentCenter]}
              />
            </CLASS.ViewGra800600>

            <CLASS.ViewGra600500 style={[styles.w100, styles.borderRadius2vw, styles.marginVertical2vw]}>
              <CLASS.RoundBtn
                title={`Tạo phòng Offline \n 2 người chơi trên cùng 1 thiết bị`}
                onPress={() => { setIsCreateNew(true); setIsOffline(true) }}
                textClass={CTEXT.NGT_Inter_HeaderLg_SemiBold}
                textColor={clrStyle.white}
                customStyle={[styles.justifyContentCenter]}
              />
            </CLASS.ViewGra600500>

            <CLASS.ViewCol style={[componentStyle.borderBrand800, styles.gap4vw, styles.marginVertical4vw, styles.w100, styles.padding4vw]}>
              <CTEXT.NGT_Inter_HeaderMd_SemiBold>Bạn đã có phòng rồi?</CTEXT.NGT_Inter_HeaderMd_SemiBold>
              <TextInput
                value={roomID}
                onChangeText={setRoomID}
                keyboardType='numeric'
                placeholder='ID của phòng'
                placeholderTextColor={NGHIACOLOR.NghiaGray400}
                style={[styles.borderRadius2vw, styles.paddingH4vw, styles.paddingV2vw, styles.border1, styles.w100, styles.border1, { borderColor: NGHIACOLOR.NghiaGray400, fontFamily: 'Inter-Medium', fontSize: vw(3.5), backgroundColor: NGHIACOLOR.NghiaTransparentDark30, color: 'white' }]}
              />
              <CLASS.ViewGra800600 style={[styles.w100, styles.borderRadius2vw]}>
                <CLASS.RoundBtn
                  title='Tham gia phòng'
                  onPress={roomJoinHandler}
                  textClass={CTEXT.NGT_Inter_HeaderMd_SemiBold}
                  textColor={clrStyle.white}
                  customStyle={[styles.paddingV2vw, styles.justifyContentCenter]}
                />
              </CLASS.ViewGra800600>
            </CLASS.ViewCol>
          </>
        )
    }
  }

  return (
    <CLASS.SSBarWithSaveArea trans margin barContentStyle='light-content' bgColor={DefaultTheme.colors.background} barColor={DefaultTheme.colors.background}>
      <CLASS.ViewRowBetweenCenter style={[styles.paddingV2vw, styles.alignItemsStart, styles.paddingH4vw, styles.paddingBottom4vw]}>
        <CLASS.ViewRowStartCenter style={[styles.alignItemsCenter]}>
          <Image source={require('@/assets/photos/inappLogo.jpg')} style={[styles.w10vw, styles.h10vw, styles.borderRadius2vw, styles.overflowHidden, styles.margin2vw] as ImageStyle} resizeMethod='resize' resizeMode='contain' />
          <View>
            <CTEXT.NGT_Inter_DispMd_SemiBold>Đấu cặp</CTEXT.NGT_Inter_DispMd_SemiBold>
            <CLASS.ViewRowStartCenter style={[styles.gap2vw]}>
              {avatarComponet(vw(6), vw(6))}
              <CTEXT.NGT_Inter_BodyMd_Med>Luyện tập cùng bạn bè</CTEXT.NGT_Inter_BodyMd_Med>
            </CLASS.ViewRowStartCenter>
          </View>
        </CLASS.ViewRowStartCenter>
        <CLASS.ViewRowStartCenter style={[styles.borderRadius2vw, styles.gap1vw, styles.paddingV1vw, styles.paddingRight4vw, styles.paddingLeft2vw, styles.border1, { backgroundColor: NGHIACOLOR.NghiaTransparentDark30, borderColor: NGHIACOLOR.NghiaBrand800 }]}>
          <Image style={[{ width: vw(7), height: vw(7) }]} source={require('@/assets/photos/GoldStar.png')} />
          <CTEXT.NGT_Inter_BodyLg_Med>{CurrentCache.user.star}</CTEXT.NGT_Inter_BodyLg_Med>
        </CLASS.ViewRowStartCenter>
      </CLASS.ViewRowBetweenCenter>

      <ScrollView style={[styles.paddingH4vw, styles.flex1]} contentContainerStyle={[styles.flexColCenter]}>
        {renderItem()}
      </ScrollView>
    </CLASS.SSBarWithSaveArea >
  )
}