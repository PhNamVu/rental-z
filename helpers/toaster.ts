import Toast from "react-native-toast-message";

const position = "top";
const autoHide = true

export const positiveToast = (title: string, description?: string) => {
    Toast.show({
        autoHide,
        type: "success",
        position,
        text1: title,
        text2: description,
        visibilityTime: 3000,
    });
  };

export const negativeToast = (title: string, description?: string) => {
    Toast.show({
        autoHide,
        type: "error",
        position,
        text1: title,
        text2: description,
        visibilityTime: 3000,
    });
  };