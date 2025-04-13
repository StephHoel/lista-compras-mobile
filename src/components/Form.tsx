import type { PropsWithChildren } from 'react'
import { useEffect, useRef, useState } from 'react'
import { Alert, TextInput } from 'react-native'
import uuid from 'react-native-uuid'

import { useCartStore } from '@/stores/CartStore'
import { useNavigation } from 'expo-router'

import type { ProductProps } from '@/utils/interfaces'

import { CustomButton as Button } from '@/components/Button'
import colors from 'tailwindcss/colors'

interface FormProps extends PropsWithChildren {
  data?: ProductProps | null
  buttonTitle: string
}

export function Form({ data = null, buttonTitle, children }: FormProps) {
  const [item, setItem] = useState('')
  const [qtt, setQtt] = useState('')
  const [price, setPrice] = useState('')

  const cartStore = useCartStore()
  const navigate = useNavigation()

  const inputRef1 = useRef<TextInput>(null)
  const inputRef2 = useRef<TextInput>(null)
  const inputRef3 = useRef<TextInput>(null)

  function handleNextOrSubmit(): void {
    const floatQtt = Number.parseFloat(qtt)
    const floatPrice = Number.parseFloat(price)

    if (item !== '' && !Number.isNaN(floatQtt) && !Number.isNaN(floatPrice)) {
      let id = uuid.v4().toString()

      if (data !== null) id = data.id

      const product: ProductProps = {
        id,
        item: item.trim(),
        quantity: floatQtt.toString().trim(),
        price: floatPrice.toString().trim(),
      }

      if (data !== null) cartStore.edit(product)
      else cartStore.add(product)

      navigate.goBack()
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos corretamente.')
    }
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
        ref={inputRef1}
        onSubmitEditing={() => inputRef2.current?.focus()}
        returnKeyType="next"
      />
      <TextInput
        className={'border rounded p-2.5 mb-5 mx-2 border-gray-400 text-white'}
        placeholderTextColor={colors.slate[400]}
        placeholder="1"
        onChangeText={setQtt}
        value={qtt}
        keyboardType="number-pad"
        ref={inputRef2}
        onSubmitEditing={() => inputRef3.current?.focus()}
        returnKeyType="next"
      />
      <TextInput
        className={'border rounded p-2.5 mb-5 mx-2 border-gray-400 text-white'}
        placeholderTextColor={colors.slate[400]}
        placeholder="1,30"
        onChangeText={setPrice}
        value={price}
        keyboardType="number-pad"
        ref={inputRef3}
        onSubmitEditing={handleNextOrSubmit}
        returnKeyType="done"
      />
      <Button onPress={handleNextOrSubmit}>
        <Button.Icon>{children}</Button.Icon>
        <Button.Text>{buttonTitle}</Button.Text>
      </Button>
    </>
  )
}
