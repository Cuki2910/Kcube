import { View, Text, ScrollView, Image, TouchableOpacity, Pressable, SafeAreaView, ImageStyle, } from 'react-native'
import Animated, { Easing, useSharedValue, withSpring } from 'react-native-reanimated'
import React, { useEffect, useRef } from 'react'
import { componentStyle, NGHIACOLOR } from '@/assets/componentStyleSheet'
import styles, { vw } from '@/assets/stylesheet'
import { avatarComponet, convertNumberToTime, ListGen, marginBottomForScrollView } from '@/assets/component'
import * as ICON from '@/assets/svgXml'
import * as  CLASS from '@/assets/Class'
import * as CTEXT from '@/assets/CustomText'
import { DefaultTheme, useNavigation } from '@react-navigation/native'
import { MatchHistoryFormat } from '@/data/interfaceFormat'
import { getStorageList } from '@/data/storageFunc'
import { RootContext } from '@/data/store'
import { lvlData, OLLfomular, PLLfomular } from '@/data/factoryData'

import { useState } from 'react';

export default function Guide() {
  const [cate, setCate] = React.useState(0)

  class InfoUnit extends React.Component<{ imgSrc: any, text: string[], name?: string }> {
    render(): React.ReactNode {
      return (
        <CLASS.ViewCol style={[styles.marginTop2vw, styles.paddingBottom4vw, { borderBottomWidth: 1, borderBottomColor: NGHIACOLOR.NghiaTransparentWhite30 }]}>
          <CTEXT.NGT_Inter_HeaderMd_SemiBold>{this.props.name}</CTEXT.NGT_Inter_HeaderMd_SemiBold>
          <CLASS.ViewRow style={[styles.gap3vw]}>
            <Image source={{ uri: this.props.imgSrc }} resizeMethod='resize' resizeMode='contain' style={[styles.h20vw, styles.w20vw] as ImageStyle} />
            <View style={[styles.flex1]}>
              {ListGen(null, this.props.text, CTEXT.NGT_Inter_BodyLg_Bld, 'white', '▸')}
            </View>
          </CLASS.ViewRow>
        </CLASS.ViewCol>
      )
    }
  }

  const renderFormula = React.useCallback((formulaData: any[]) => {
    return (
      <View style={[styles.flex1, styles.padding2vw]}>
        {formulaData.map((item, index) => (
          <React.Fragment key={`group${index}`}>
            <CTEXT.NGT_Inter_HeaderLg_Bld>{item.group}</CTEXT.NGT_Inter_HeaderLg_Bld>
            {item.value.map((item2: any, index2: number) => (
              <InfoUnit key={`info${index2}`} imgSrc={item2.img} text={item2.text} name={item2.name} />
            ))}
            {marginBottomForScrollView()}
          </React.Fragment>
        ))}
        {/* {marginBottomForScrollView()} */}
      </View>
    );
  }, []);

  const OLLrender = React.useMemo(() => renderFormula(OLLfomular), [OLLfomular]);
  const PLLrender = React.useMemo(() => renderFormula(PLLfomular), [PLLfomular]);

  return (
    <SafeAreaView style={[styles.flex1]}>
      <View style={[styles.paddingH6vw, styles.flexColStartCenter, styles.flex1]}>


        <CTEXT.NGT_Inter_HeaderLg_Bld style={[styles.textCenter, styles.paddingV2vw]}>Hướng dẫn</CTEXT.NGT_Inter_HeaderLg_Bld>
        <CLASS.ViewRowCenter style={[styles.w80, componentStyle.borderBrand800, styles.overflowHidden, styles.marginBottom4vw, { borderWidth: 2 }]}>
          <TouchableOpacity style={[styles.flex1, styles.paddingV2vw, { backgroundColor: cate == 0 ? NGHIACOLOR.NghiaBrand600 : NGHIACOLOR.NghiaTransparentDark30 }]}
            onPress={() => setCate(0)}>
            <CTEXT.NGT_Inter_HeaderMd_Bld style={[styles.textCenter]}>OLL</CTEXT.NGT_Inter_HeaderMd_Bld>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flex1, styles.paddingV2vw, { backgroundColor: cate == 1 ? NGHIACOLOR.NghiaBrand600 : NGHIACOLOR.NghiaTransparentDark30 }]}
            onPress={() => setCate(1)}>
            <CTEXT.NGT_Inter_HeaderMd_Bld style={[styles.textCenter]}>PLL</CTEXT.NGT_Inter_HeaderMd_Bld>
          </TouchableOpacity>
        </CLASS.ViewRowCenter>

        <ScrollView style={[styles.flex1, styles.w100]}>
          {cate === 0 ? OLLrender : PLLrender}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}