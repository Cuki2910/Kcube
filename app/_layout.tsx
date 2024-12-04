import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { View } from 'react-native';
import styles, { vw } from '@/assets/stylesheet';
import clrStyle from '@/assets/componentStyleSheet';
import { ProviderTotal } from '@/data/store';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    "Inter-Regular": require('../assets/fonts/Inter-Regular.ttf'),
    "Inter-Bold": require('../assets/fonts/Inter-Bold.ttf'),
    "Inter-SemiBold": require('../assets/fonts/Inter-SemiBold.ttf'),
    "Inter-ExtraBold": require('../assets/fonts/Inter-ExtraBold.ttf'),
    "Inter-Medium": require('../assets/fonts/Inter-Medium.ttf'),
    "Inter-Black": require('../assets/fonts/Inter-Black.ttf'),
    "Inter-BlackItalic": require('../assets/fonts/Inter-BlackItalic.ttf'),
    "Inter-BoldItalic": require('../assets/fonts/Inter-BoldItalic.ttf'),
    "Inter-ExtraBoldItalic": require('../assets/fonts/Inter-ExtraBoldItalic.ttf'),
    "Inter-Light": require('../assets/fonts/Inter-Light.ttf'),
    "Inter-LightItalic": require('../assets/fonts/Inter-LightItalic.ttf'),
    "Inter-MediumItalic": require('../assets/fonts/Inter-MediumItalic.ttf'),
    "Inter-SemiBoldItalic": require('../assets/fonts/Inter-SemiBoldItalic.ttf'),
    "Inter-Italic": require('../assets/fonts/Inter-Italic.ttf'),
    "RobotoMono-Regular": require('../assets/fonts/RobotoMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ProviderTotal>
      <ThemeProvider value={DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="Game" />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </ProviderTotal>
  );
}
