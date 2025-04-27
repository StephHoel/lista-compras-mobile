import type { PropsWithChildren } from "react";
import type { TouchableOpacityProps } from "react-native";
import { Text, TouchableOpacity } from "react-native";

type ButtonProps = TouchableOpacityProps & PropsWithChildren;

type ButtonTextProps = PropsWithChildren;

type ButtonIconProps = PropsWithChildren;

function Button({ children, ...rest }: ButtonProps) {
	return (
		<TouchableOpacity
			className="h-12 bg-lime-400 items-center justify-center flex-row mx-2 rounded"
			activeOpacity={0.7}
			{...rest}
		>
			{children}
		</TouchableOpacity>
	);
}

function ButtonText({ children }: ButtonTextProps) {
	return (
		<Text className="text-black font-heading text-base mx-2">{children}</Text>
	);
}

function ButtonIcon({ children }: ButtonIconProps) {
	return children;
}

export const CustomButton = Object.assign(Button, {
	Text: ButtonText,
	Icon: ButtonIcon,
});
