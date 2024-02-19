import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { useCartStore } from '@/stores/CartStore'
import { ProductProps } from '@/utils/interfaces'
import { Feather } from '@expo/vector-icons'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { useEffect, useState } from 'react'
import { ScrollView, TextInput } from 'react-native'
import colors from 'tailwindcss/colors'

export default function Edit() {
  const { id } = useLocalSearchParams()
  const cartStore = useCartStore()
  const navigate = useNavigation()
  const prod = cartStore.get(id.toString())

  const [item, setItem] = useState('')

  const [qtt, setQtt] = useState('')
  const [isValidQtt, setIsValidQtt] = useState(true)

  const [price, setPrice] = useState('')
  const [isValidPrice, setIsValidPrice] = useState(true)

  function handleQtt(text: string): void {
    try {
      parseFloat(text) && setIsValidQtt(true)
    } catch {
      setIsValidQtt(false)
    }

    setQtt(text)
  }

  function handlePrice(text: string): void {
    try {
      parseFloat(text) && setIsValidPrice(true)
    } catch {
      setIsValidPrice(false)
    }

    setPrice(text)
  }

  function handleEdit(): void {
    if (prod) {
      const product: ProductProps = {
        id: prod.id,
        item,
        quantity: qtt,
        price,
      }
      cartStore.edit(product)
    }

    navigate.goBack()
  }

  useEffect(() => {
    if (prod) {
      setItem(prod.item)
      setQtt(prod.quantity)
      setPrice(prod.price)
    }
  }, [prod])

  return (
    <ScrollView>
      <Header text="Editando item" />

      <TextInput
        className="border border-gray-400 rounded p-2.5 my-5 mx-2 text-white"
        placeholderTextColor={colors.slate[400]}
        placeholder="Item"
        onChangeText={setItem}
        value={item}
        returnKeyType="next"
      />

      <TextInput
        className={`border rounded p-2.5 mb-5 mx-2
        ${isValidQtt ? 'border-gray-400 text-white' : 'border-red-500 text-red-500'}
        `}
        placeholderTextColor={colors.slate[400]}
        placeholder="1"
        onChangeText={handleQtt}
        value={qtt}
        keyboardType="number-pad"
        returnKeyType="next"
      />

      <TextInput
        className={`border rounded p-2.5 mb-5 mx-2 
        ${isValidPrice ? 'border-gray-400 text-white' : 'border-red-500 text-red-500'}
        `}
        placeholderTextColor={colors.slate[400]}
        placeholder="1,30"
        onChangeText={handlePrice}
        value={price}
        keyboardType="number-pad"
        returnKeyType="next"
      />

      <Button onPress={handleEdit}>
        <Button.Icon>
          <Feather name="edit-2" size={20} />
        </Button.Icon>
        <Button.Text>Editar Item</Button.Text>
      </Button>
    </ScrollView>
  )
}
