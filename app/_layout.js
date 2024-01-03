import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout = () => {

  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf')
  })


  // useFonts returns an array which contains a boolean and a callback function
  // fontsLoaded will only need the boolean, hence the need to use array destructuring

  // useCallback is used to prevent the function from being re-created on every render
  // SpashScreen.hideAsync() is an async function, meaning it will wait for the fonts to be loaded.
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if(!fontsLoaded) return null;

  return (
    <Stack onLayout={onLayoutRootView}/>
  )
}

export default Layout