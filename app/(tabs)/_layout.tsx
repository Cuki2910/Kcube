import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { SvgXml } from 'react-native-svg';
import styles, { vw, vh } from '../../assets/stylesheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { LinearGradient } from 'expo-linear-gradient';
import { NGT_Inter_BodyMd_Med } from '@/assets/CustomText';
import { NGHIACOLOR } from '@/assets/componentStyleSheet';


export default function TabLayout() {
  const colorScheme = useColorScheme();
  let insets = useSafeAreaInsets();

  const screens = [
    {
      name: 'index',
      title: 'Home',
      activeIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0427 3.15016L10.0431 3.14985C11.1273 2.27904 12.8675 2.28414 13.968 3.16073C13.9681 3.16084 13.9682 3.16094 13.9684 3.16105L20.514 8.39756C20.5146 8.39802 20.5152 8.39849 20.5157 8.39895C20.893 8.70711 21.2196 9.18942 21.4304 9.74099C21.641 10.2922 21.7196 10.8699 21.6462 11.351L20.3873 18.8845C20.3872 18.885 20.3872 18.8855 20.3871 18.8859C20.1374 20.3188 18.7432 21.5 17.3 21.5H6.69996C5.23549 21.5 3.8725 20.3476 3.62294 18.8965C3.62288 18.8961 3.62282 18.8958 3.62276 18.8955L2.36313 11.3576L2.36293 11.3565C2.28079 10.8718 2.35452 10.293 2.56465 9.74192C2.77476 9.19094 3.10548 8.70909 3.4918 8.40086L3.49267 8.40016L10.0427 3.15016ZM12 19.25C12.6861 19.25 13.25 18.6862 13.25 18V15C13.25 14.3139 12.6861 13.75 12 13.75C11.3138 13.75 10.75 14.3139 10.75 15V18C10.75 18.6862 11.3138 19.25 12 19.25Z" fill="#F9F5FF" stroke="#F9F5FF"/></svg>`,
      inactiveIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V15" stroke="#D6BBFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.07 2.81997L3.14002 8.36997C2.36002 8.98997 1.86002 10.3 2.03002 11.28L3.36002 19.24C3.60002 20.66 4.96002 21.81 6.40002 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.98997 20.86 8.36997L13.93 2.82997C12.86 1.96997 11.13 1.96997 10.07 2.81997Z" stroke="#D6BBFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
    {
      name: 'Duet',
      title: 'Đấu cặp',
      activeIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.80435 19.6284L5.80217 19.6278C5.56579 19.563 5.46467 19.2424 5.6635 19.0436L16.2935 8.41355C16.3557 8.35133 16.4926 8.29979 16.7049 8.34089L16.7078 8.34143C17.1763 8.42928 17.6925 8.29946 18.0662 7.94069L18.0663 7.94078L18.0742 7.93286L20.6435 5.35355C20.6437 5.35337 20.6439 5.3532 20.644 5.35302C20.8487 5.14841 21.0181 5.03895 21.1403 4.98983C21.2584 4.9423 21.3036 4.96089 21.3072 4.96239L21.3073 4.96241L21.3073 4.96244C21.3109 4.9639 21.3555 4.98219 21.4053 5.09843C21.4572 5.2194 21.4999 5.41743 21.4999 5.71V15.29C21.4999 17.7739 19.4838 19.79 16.9999 19.79H6.99995C6.5845 19.79 6.18975 19.736 5.80435 19.6284Z" fill="#F9F5FF" stroke="#F9F5FF"/><path d="M3.01118 17.3547L3.01119 17.3547L3.00919 17.351C2.6807 16.7473 2.5 16.04 2.5 15.29V5.71002C2.5 5.41745 2.54279 5.21942 2.59461 5.09846C2.6444 4.98221 2.68905 4.96392 2.69262 4.96247L2.69269 4.96244L2.69273 4.96242C2.69638 4.96092 2.74152 4.94233 2.8597 4.98985C2.9819 5.03899 3.15132 5.14851 3.35612 5.35324C3.35623 5.35335 3.35634 5.35346 3.35645 5.35357L5.93576 7.94289L5.93572 7.94293L5.94107 7.94813C6.52523 8.51731 7.47477 8.51731 8.05893 7.94813L8.05897 7.94817L8.06405 7.94308L11.6436 4.35357C11.6436 4.3535 11.6437 4.35342 11.6438 4.35335C11.8385 4.15884 12.1618 4.15891 12.3564 4.35357L14.2938 6.2909C14.482 6.48625 14.4812 6.81167 14.2864 7.00647L3.81645 17.4765C3.57479 17.7181 3.17379 17.6596 3.01118 17.3547Z" fill="#F9F5FF" stroke="#F9F5FF"/></svg>`,
      inactiveIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 15.29V5.71002C2 4.38002 2.77 4.06002 3.71 5.00002L6.3 7.59002C6.69 7.98002 7.33 7.98002 7.71 7.59002L11.29 4.00002C11.68 3.61002 12.32 3.61002 12.7 4.00002L16.29 7.59002C16.68 7.98002 17.32 7.98002 17.7 7.59002L20.29 5.00002C21.23 4.06002 22 4.38002 22 5.71002V15.3C22 18.3 20 20.3 17 20.3H7C4.24 20.29 2 18.05 2 15.29Z" stroke="#D6BBFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
    {
      name: 'Guide',
      title: 'H. dẫn',
      activeIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.3991 9.82023L21.3711 9.35H21.0886L21.6652 8.29132L22.4913 19.6562L22.4915 19.6586C22.5688 20.6553 21.7815 21.5 20.78 21.5H14.5054C14.7459 21.2067 14.9273 20.8596 15.0294 20.4735L19.0376 13.1152L17.56 20.4006L17.4384 21H18.05H20.78C21.2463 21 21.5422 20.7614 21.6837 20.6022L21.6863 20.5993C21.7972 20.4725 22.0214 20.1658 21.9889 19.7072L21.3991 9.82023Z" fill="#FCFAFF" stroke="#F9F5FF"/><path d="M11.45 2.2399C11.55 1.8399 11.3 1.4299 10.9 1.3299C10.5 1.2399 10.09 1.4799 9.98999 1.8799L9.48999 3.9499H11.03L11.45 2.2399Z" fill="#FCFAFF"/><path d="M18.05 2.21005C18.14 1.80005 17.88 1.41005 17.47 1.32005C17.07 1.23005 16.67 1.49005 16.58 1.90005L16.13 3.97005H17.67L18.05 2.21005Z" fill="#FCFAFF"/><path d="M21.82 5.32994C21.49 4.52994 20.71 3.95994 19.75 3.95994H17.67L17.11 6.54994C17.03 6.89994 16.72 7.13994 16.38 7.13994C16.33 7.13994 16.27 7.13994 16.22 7.11994C15.82 7.02994 15.56 6.62994 15.64 6.22994L16.13 3.94994H11.03L10.4 6.54994C10.32 6.88994 10.01 7.11994 9.67 7.11994C9.61 7.11994 9.55 7.10994 9.49 7.09994C9.09 6.99994 8.84 6.59994 8.94 6.18994L9.48 3.93994H7.45C6.47 3.93994 5.6 4.57994 5.31 5.51994L1.1 19.0699C0.659999 20.5199 1.73 21.9999 3.24 21.9999H16.38C17.42 21.9999 18.32 21.2999 18.56 20.2899L21.93 6.75994C21.99 6.50994 22.01 6.25994 21.99 6.01994C21.97 5.77994 21.92 5.53994 21.82 5.32994ZM14.7 16.7499H6.7C6.29 16.7499 5.95 16.4099 5.95 15.9999C5.95 15.5899 6.29 15.2499 6.7 15.2499H14.7C15.11 15.2499 15.45 15.5899 15.45 15.9999C15.45 16.4099 15.11 16.7499 14.7 16.7499ZM15.7 12.7499H7.7C7.29 12.7499 6.95 12.4099 6.95 11.9999C6.95 11.5899 7.29 11.2499 7.7 11.2499H15.7C16.11 11.2499 16.45 11.5899 16.45 11.9999C16.45 12.4099 16.11 12.7499 15.7 12.7499Z" fill="#FCFAFF"/></svg>`,
      inactiveIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.93 6.76001L18.56 20.29C18.32 21.3 17.42 22 16.38 22H3.24001C1.73001 22 0.650023 20.5199 1.10002 19.0699L5.31001 5.55005C5.60001 4.61005 6.47003 3.95996 7.45003 3.95996H19.75C20.7 3.95996 21.49 4.53997 21.82 5.33997C22.01 5.76997 22.05 6.26001 21.93 6.76001Z" stroke="#D6BBFB" stroke-width="1.5" stroke-miterlimit="10"/><path d="M16 22H20.78C22.07 22 23.08 20.91 22.99 19.62L22 6" stroke="#D6BBFB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.67999 6.38L10.72 2.06006" stroke="#D6BBFB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.38 6.39001L17.32 2.05005" stroke="#D6BBFB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.70001 12H15.7" stroke="#D6BBFB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.70001 16H14.7" stroke="#D6BBFB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
    {
      name: 'Setting',
      title: 'Cài đặt',
      activeIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4809 21.1374L10.4803 21.1371L5.32511 18.1557C4.25051 17.4321 3.8103 17.0877 3.5873 16.6996C3.37203 16.3249 3.33002 15.8563 3.33002 14.7099V9.27994C3.33002 8.13321 3.37198 7.66654 3.58309 7.29641C3.80119 6.91403 4.23066 6.57785 5.28533 5.86413L10.4895 2.86325C10.4895 2.86323 10.4896 2.8632 10.4896 2.86317C10.8929 2.63106 11.4373 2.50244 12.005 2.50244C12.5726 2.50244 13.1169 2.63099 13.5201 2.86298C13.5202 2.86307 13.5204 2.86316 13.5205 2.86325L18.6749 5.84424C19.7505 6.5685 20.1904 6.9102 20.4133 7.29621C20.6279 7.66791 20.67 8.13323 20.67 9.27994V14.7199C20.67 15.8667 20.6281 16.3333 20.4169 16.7035C20.1988 17.0859 19.7694 17.422 18.7147 18.1358L13.5103 21.1368L13.5102 21.1368L13.5054 21.1397C13.1114 21.3728 12.5654 21.4999 12 21.4999C11.4358 21.4999 10.8875 21.3732 10.4809 21.1374ZM8.25002 11.9999C8.25002 14.0661 9.93387 15.7499 12 15.7499C14.0662 15.7499 15.75 14.0661 15.75 11.9999C15.75 9.9338 14.0662 8.24994 12 8.24994C9.93388 8.24994 8.25002 9.9338 8.25002 11.9999Z" fill="#F9F5FF" stroke="#F9F5FF"/></svg>`,
      inactiveIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 9.10998V14.88C3 17 3 17 5 18.35L10.5 21.53C11.33 22.01 12.68 22.01 13.5 21.53L19 18.35C21 17 21 17 21 14.89V9.10998C21 6.99998 21 6.99999 19 5.64999L13.5 2.46999C12.68 1.98999 11.33 1.98999 10.5 2.46999L5 5.64999C3 6.99999 3 6.99998 3 9.10998Z" stroke="#D6BBFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#D6BBFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
  ]

  const TabBar = ({ state, navigation }: { state: any, navigation: any }) => {
    return (
      <View style={[styles.flexRowEvenlyCenter, styles.gap1vw, { margin: insets.bottom ? insets.bottom : vw(4), borderRadius: vw(4), borderWidth: 1, borderColor: NGHIACOLOR.NghiaBrand800 as string, backgroundColor: NGHIACOLOR.NghiaTransparentDark30 as string }]}>
        {state.routes.map((route: { key: React.Key | null | undefined; name: any; }, index: number) => {
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[styles.borderRadius3vw, styles.overflowHidden, styles.marginVertical2vw,]}
            >
              <LinearGradient
                colors={[isFocused ? 'rgba(83, 56, 158, 1)' : 'rgba(0,0,0,0)', isFocused ? 'rgba(127, 86, 217, 1)' : 'rgba(0,0,0,0)']}
                start={{ x: 0, y: 1 }}
                end={{ x: 0.5, y: 0 }}
                locations={[0, 1]}
                style={[styles.flexColCenter, styles.gap1vw, styles.paddingH4vw, styles.paddingV2vw, { width: 'auto', minWidth: '20%' }]}
              >
                <SvgXml xml={isFocused ? screens[index].activeIcon : screens[index].inactiveIcon} width={24} height={24} />
                <NGT_Inter_BodyMd_Med lineNumber={1} color='white'>{screens[index].title}</NGT_Inter_BodyMd_Med>
              </LinearGradient>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <Tabs
      tabBar={({ state, navigation }) => <TabBar state={state} navigation={navigation} />}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}>
      {screens.map((screen) => (
        <Tabs.Screen
          key={screen.name}
          name={screen.name}
          options={{
            title: screen.title,
            tabBarIcon: ({ color, focused }) => <SvgXml xml={focused ? screen.activeIcon : screen.inactiveIcon} width={24} height={24} fill={color} />,
          }}
        />
      ))}
    </Tabs>
  );
}
