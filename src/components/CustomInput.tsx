import { TextInput } from "react-native";
import colors from "tailwindcss/colors";

interface CustomInputProps {
	selfRef: React.RefObject<TextInput>;
	placeholder: string;
	setItem: (value: string) => void;
	item: string;
	onSubmit: () => void;
	returnKeyType: "next" | "done";
	keyboardType?: "default" | "number-pad";
}

export function CustomInput({
	placeholder,
	selfRef,
	returnKeyType,
	setItem,
	item,
	onSubmit,
	keyboardType = "default",
}: CustomInputProps) {
	return (
		<TextInput
			className={"border border-gray-400 rounded text-white p-2.5 mb-4 mx-2"}
			placeholderTextColor={colors.slate[400]}
			placeholder={placeholder}
			onChangeText={setItem}
			value={item}
			ref={selfRef}
			keyboardType={keyboardType}
			onSubmitEditing={onSubmit}
			returnKeyType={returnKeyType}
		/>
	);
}
