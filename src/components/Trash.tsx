import { Feather } from "@expo/vector-icons";
import type { TouchableOpacityProps } from "react-native";
import { TouchableOpacity } from "react-native";

export function Trash({ ...rest }: TouchableOpacityProps) {
	return (
		<TouchableOpacity {...rest}>
			<Feather name="trash-2" size={24} color="white" />
		</TouchableOpacity>
	);
}
