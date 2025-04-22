import { useLocalSearchParams, useNavigation } from "expo-router";
import { ScrollView } from "react-native";

import { useCartStore } from "@/stores/CartStore";

import { Feather } from "@expo/vector-icons";

import { Form } from "@/components/Form";
import { Header } from "@/components/Header";

export default function Edit() {
	const { id } = useLocalSearchParams();
	const cartStore = useCartStore();
	const prod = cartStore.get(id.toString());
	const navigate = useNavigation();

	if (prod === undefined) {
		return navigate.goBack();
	}

	return (
		<ScrollView>
			<Header text="Editando item" />

			<Form data={prod} buttonTitle={"Editar Item"}>
				<Feather name="edit-2" size={20} />
			</Form>
		</ScrollView>
	);
}
