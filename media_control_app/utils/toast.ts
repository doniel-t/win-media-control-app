import Toast from "react-native-toast-message";

type ToastTypes = 'success' | 'info' | 'error'

export function showToast(state : ToastTypes){

  switch (state) {
    case 'success':
      Toast.show({
        type: state,
        text1: 'Bing Chilling 🍨',
      });
      break;

    case 'error':
      Toast.show({
        type: state,
        text1: 'Couldnt reach server 😿',
      });
      break;
  }
}