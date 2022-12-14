import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import { SafeAreaView, StatusBar, View } from "react-native";
import cesta from "./src/components/mocks";
import Cesta from "./src/Screen/Cesta";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...cesta} />
    </SafeAreaView>
  );
}
