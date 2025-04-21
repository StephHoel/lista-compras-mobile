import type { PropsWithChildren } from "react";
import { useEffect, useRef, useState } from "react";
import type { TextInput } from "react-native";
import { Alert } from "react-native";
import uuid from "react-native-uuid";

import { useCartStore } from "@/stores/CartStore";
import { useNavigation } from "expo-router";

import { messages } from "@/utils/constants";
import type { ProductProps } from "@/utils/interfaces";

import { CustomButton as Button } from "@/components/Button";
import { SetProduct } from "@/utils/functions/ItemHelper";
import { CustomInput } from "./CustomInput";

interface FormProps extends PropsWithChildren {
	data?: ProductProps | null;
	buttonTitle: string;
}

export function Form({ data = null, buttonTitle, children }: FormProps) {
	const [item, setItem] = useState("");
	const [qtt, setQtt] = useState("");
	const [price, setPrice] = useState("");

	const cartStore = useCartStore();
	const navigate = useNavigation();

	const inputRef1 = useRef<TextInput>(null);
	const inputRef2 = useRef<TextInput>(null);
	const inputRef3 = useRef<TextInput>(null);

	function handleSubmit(): void {
		if (item !== "") {
			let id = uuid.v4().toString();

			if (data !== null) id = data.id;

			const product = SetProduct({ id, item, qtt, price });

			if (data !== null) cartStore.edit(product);
			else cartStore.add(product);

			navigate.goBack();
		} else {
			Alert.alert("Erro", messages.camposNaoPreenchidos);
		}
	}

	useEffect(() => {
		if (data !== null) {
			setItem(data.item);
			setQtt(data.quantity);
			setPrice(data.price);
		}
	}, [data]);

	return (
		<>
			<CustomInput
				placeholder="Item"
				selfRef={inputRef1}
				returnKeyType={"next"}
				setItem={setItem}
				item={item}
				onSubmit={() => inputRef2.current?.focus()}
			/>

			<CustomInput
				placeholder="1"
				selfRef={inputRef2}
				returnKeyType={"next"}
				keyboardType={"number-pad"}
				setItem={setQtt}
				item={qtt}
				onSubmit={() => inputRef3.current?.focus()}
			/>

			<CustomInput
				placeholder="1,30"
				selfRef={inputRef3}
				returnKeyType={"done"}
				keyboardType={"number-pad"}
				setItem={setPrice}
				item={price}
				onSubmit={handleSubmit}
			/>

			<Button onPress={handleSubmit}>
				<Button.Icon>{children}</Button.Icon>
				<Button.Text>{buttonTitle}</Button.Text>
			</Button>
		</>
	);
}
