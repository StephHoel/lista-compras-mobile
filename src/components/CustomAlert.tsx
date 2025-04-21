import type { ButtonProps } from "@/utils/interfaces";
import { Modal, Text, TouchableOpacity, View } from "react-native";

interface CustomAlertProps {
	visible: boolean;
	title: string;
	message: string;
	buttons: ButtonProps[];
}

export function CustomAlert({
	visible,
	title,
	message,
	buttons,
}: CustomAlertProps) {
	return (
		<Modal
			transparent={true}
			animationType="fade"
			visible={visible}
			onRequestClose={() => {
				if (buttons.length > 0) buttons[buttons.length - 1].action();
			}}
		>
			<View className={"flex-1 justify-center items-center bg-black/50"}>
				<View className={"w-3/4 p-5 bg-slate-700 rounded-xl items-center"}>
					<Text className={"text-xl text-white font-bold mb-3"}>{title}</Text>
					{message && (
						<Text className={"text-base text-white mb-5 text-center"}>
							{message}
						</Text>
					)}
					<View className={"w-full flex-col"}>
						{buttons.map((button, index) => (
							<TouchableOpacity
								key={index}
								className={`p-2 mb-2 rounded items-center
                ${button.text === "Cancelar" ? "bg-red-500" : "bg-slate-400"}
                `}
								onPress={button.action}
							>
								<Text
									className={`font-bold
                  ${button.text === "Cancelar" ? "text-white" : "text-black/90"}
                  `}
								>
									{button.text}
								</Text>
							</TouchableOpacity>
						))}
					</View>
				</View>
			</View>
		</Modal>
	);
}
