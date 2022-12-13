import { SafeAreaView, StatusBar, View } from "react-native";
import Cesta from "./src/Screen/Cesta";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import cesta from "./src/components/mocks";

export default function App() {
  const [fontsLoaded] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...cesta} />
    </SafeAreaView>
  );
}
