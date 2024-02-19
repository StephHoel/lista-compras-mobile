import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

interface HeaderProps {
  text: string
  index?: boolean
}

export function Header({ text, index = false }: HeaderProps) {
  return (
    <>
      <View className="pt-8 px-3 flex-row justify-between">
        <Text className="text-white text-2xl font-heading">{text}</Text>

        {index ? (
          <Link href="/add" asChild>
            <TouchableOpacity activeOpacity={0.7}>
              <Feather name="plus-circle" size={35} color="white" />
            </TouchableOpacity>
          </Link>
        ) : (
          <Link href="/" asChild>
            <TouchableOpacity activeOpacity={0.7}>
              <Feather name="arrow-left-circle" size={35} color="white" />
            </TouchableOpacity>
          </Link>
        )}
      </View>
      <View className="border-b border-white pt-3 mx-2" />
    </>
  )
}
