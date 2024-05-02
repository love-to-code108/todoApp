import axios from "axios";
import { encryptObject } from "../security/encryption";
import { decryptObject } from "../security/decryption";
import { useRecoilState } from "recoil";
import { authState_atom } from "../recoil/user-atom";


/* so what is the job of this hook ?

ANS : this hook will take in the updated user object ,  encrypt it ,  send it to the backend  ,  the backend will send an encrypted updated user object that i will store in my local storage .

*/

export const updateUserObject = (updatedUser) => {

    // SECRET KEY
    const secretKey = import.meta.env.VITE_SECRET_KEY ;


    // ENCRYPTING THE UPDATED USER
    const encryptedUpdatedUser = encryptObject(updatedUser , secretKey)




    axios.put("http://192.168.214.216:5501/update",{
        value : encryptedUpdatedUser,
    })
    .then((response) => {

            
        // DECRYPTING THE RESPONSE
        // const decryptedResponse = decryptObject(response , secretKey);


        // S
    })

}