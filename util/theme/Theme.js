
import Toast from 'react-native-toast-message';

export const showToast = (type, text1, text2) => {
    Toast.show({
        // info
        // success
        // error
        type: type,
        text1: text1,
        text2: text2
    });
}


export const validate = (name, username, caption, rest) => {
    if (name === "") {
        return showToast("error", "Name", "Name is required")
    } else if (username === "") {
        return showToast("error", "Username", "Username is required")
    } else if (caption === "") {
        return showToast("error", "Caption", "Caption is required")
    } else {
        return rest
    }
}