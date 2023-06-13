import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";


const signInAPI = () => {
    return (dispatch) => {
        signInWithPopup(auth, provider)
        .then((payload) => {
          console.log(payload)
        }).catch((error) => alert(error.message));
    }
}

export default signInAPI;
