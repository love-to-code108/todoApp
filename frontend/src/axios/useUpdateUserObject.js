import axios from "axios";
import { encryptObject } from "../security/encryption";
import { useRecoilState } from "recoil";
import { authState_atom } from "../recoil/user-atom";


/* so what is the job of this hook ?

ANS : this hook will take in the updated user object ,  encrypt it ,  send it to the backend  ,  the backend will send an encrypted updated user object that i will store in my local storage .

*/

export const use