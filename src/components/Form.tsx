import { PropsWithChildren, useEffect, useState } from 'react'
import { TextInput } from 'react-native'
import uuid from 'react-native-uuid'

import { useCartStore } from '@/stores/CartStore'
import { useNavigation } from 'expo-router'

import { ProductProps } from '@/utils/interfaces'

import { Button } from '@/components/Button'
import colors from 'tailwindcss/colors'

interface FormProps extends PropsWithChildren {
  data?: ProductProps | null
  buttonTitle: string
}

export function Form({ data = null, buttonTitle, children }: FormProps) {
  const [item, setItem] = useState('')

  const [qtt, setQtt] = useState('')
  const [isValidQtt, setIsValidQtt] = useState(true)

  const [price, setPrice] = useState('')
  const [isValidPrice, setIsValidPrice] = useState(true)

  const cartStore = useCartStore()
  const navigate = useNavigation()

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

  function handleAdd(): void {
    const product: ProductProps = {
      id: uuid.v4().toString(),
      item,
      quantity: qtt,
      price,
    }
    cartStore.add(product)

    navigate.goBack()
  }

  useEffect(() => {
    if (data !== null) {
      setItem(data.item)
      setQtt(data.quantity)
      setPrice(data.price)
    }
  }, [data])

  return (
    <>
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
      <Button onPress={handleAdd}>
        <Button.Icon>{children}</Button.Icon>
        <Button.Text>{buttonTitle}</Button.Text>
      </Button>
    </>
  )
}
