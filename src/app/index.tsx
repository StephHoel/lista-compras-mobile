import { Header } from '@/components/Header'
import { useCartStore } from '@/stores/CartStore'
import { FormatCurrency } from '@/utils/functions/FormatCurrency'
import { ProductProps } from '@/utils/interfaces'
import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native'

export default function Home() {
  const cartStore = useCartStore()

  const total = cartStore.products.reduce(
    (acc: number, currentItem: ProductProps) =>
      acc + parseFloat(currentItem.quantity) * parseFloat(currentItem.price),
    0,
  )

  return (
    <ScrollView>
      <Header text="Lista de Compras" index />

      <Text className="text-white text-center pt-2 pb-4">
        Total: {FormatCurrency(total)}
      </Text>

      <View>
        {cartStore.products.map((prod: ProductProps, i: number) => (
          <View className="px-4 pt-2" key={prod.id}>
            <View className="flex-row gap-2 items-center">
              <TouchableOpacity
                onPress={() => {
                  Alert.alert('Remover', `Deseja remover: ${prod.item}?`, [
                    {
                      text: 'Cancelar',
                    },
                    {
                      text: 'Remover',
                      onPress: () => cartStore.remove(prod.id),
                    },
                  ])
                }}
              >
                <Feather name="trash-2" size={24} color="white" />
              </TouchableOpacity>
              <Link href={`/edit/${prod.id}`} asChild>
                <TouchableOpacity>
                  <Feather name="edit-2" size={24} color="white" />
                </TouchableOpacity>
              </Link>
              <Text className="text-white pl-2 mr-14 text-xl">
                {prod.quantity}x {prod.item} |{' '}
                {FormatCurrency(parseFloat(prod.price))}
              </Text>
            </View>
            {i !== cartStore.products.length - 1 && (
              <View className="border-b border-gray-500 pt-2" />
            )}
          </View>
        ))}

        <View className="pb-20" />
      </View>

      {/* <View className="px-4 pt-2">
        <View className="flex-row gap-2 items-center">
          <Feather name="trash-2" size={24} color="white" />
          <Feather name="edit-2" size={24} color="white" />
          <Text className="text-white pl-2 mr-12 text-xl">
            2x Água | R$ 1,00
          </Text>
        </View>
        <View className="border-b border-gray-500 pt-2" />
      </View>

      <View className="px-4 pt-2">
        <View className="flex-row gap-2 items-center">
          <Feather name="trash-2" size={24} color="white" />
          <Feather name="edit-2" size={24} color="white" />
          <Text className="text-white pl-2 text-xl mr-12 border border-white">
            1x Sabonete Líquido OneLeave Cereja Cristalizada OneLeave Cereja
            Cristalizada | R$ 27,00
          </Text>
        </View>
        <View className="pb-10" />
      </View> */}
    </ScrollView>
  )
}
