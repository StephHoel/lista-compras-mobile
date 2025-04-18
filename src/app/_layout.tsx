import { Loading } from '@/components/Loading'
import {
  Inter_400Regular as InterRegular,
  Inter_500Medium as InterMedium,
  Inter_600SemiBold as InterSemiBold,
  Inter_700Bold as InterBold,
  useFonts,
} from '@expo-google-fonts/inter'
import { Slot } from 'expo-router'
import { SafeAreaView } from 'react-native'

export default function Layout() {
  const [fontsLoaded] = useFonts({
    InterRegular,
    InterMedium,
    InterSemiBold,
    InterBold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <SafeAreaView className="bg-slate-900 flex-1">
      <Slot />
    </SafeAreaView>
  )
}
