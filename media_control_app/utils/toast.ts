import Toast from "react-native-toast-message";

type ToastTypes = 'success' | 'info' | 'error'

export function showToast(state : ToastTypes){
  switch (state) {
    case 'success':
      Toast.show({
        type: state,
        visibilityTime: 1000,
        text1: 'We did it boys ✅ 🍨',
      });
      break;

    case 'error':
      Toast.show({
        type: state,
        visibilityTime: 1000,
        text1: 'Couldnt reach server 😿',
      });
      break;
  }
}