import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import axios from "axios"
import { useRecoilState } from "recoil"
import { userEmail_atom, userName_atom, userPassword_atom } from "../recoil/user-atom.js"

// LOADING ENCRYPTION DECRYPTION FUNCTION 
import { encryptObject } from "../security/encryption.js"
import { decryptObject } from "../security/decryption.js"













// REACT COMPONENT
export const SignUpPage = () => {


    // TESTING OUT ENCRYPTION AND DECRYPTION
    const message = {
        userName: 'love-to-code108',
        password: 'sex'
    }

    const secretKey = import.meta.env.VITE_SECRET_KEY;
    console.log(secretKey);

    const encryptedMessage = encryptObject(message , secretKey);
    console.log(encryptedMessage);


    const decryptedMessage = decryptObject(encryptedMessage , secretKey);
    console.log(decryptedMessage);

    

    
















    // IMPORTING ALL THE ATOMS HERE
    const [userName, setUserName] = useRecoilState(userName_atom);
    const [email, setEmail] = useRecoilState(userEmail_atom);
    const [password, setPassword] = useRecoilState(userPassword_atom);




    const data = {
        UserName: userName,
        Password: password,
        email: email,
    }







    // AXIOS SENDING DATA TO BACKEND
    const sendingData = () => {
        console.log("Request Send");

        axios.post("http://localhost:4000/signup", data)
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log("Axios threw this error ", error);
            })


    }

















    // THE FRONTEND
    return (
        <div className=" w-[100%] h-[100svh] flex justify-center items-center">



            {/* THE WRAPPER */}
            <div className=" font-inter w-[80%]">




                {/* SIGN UP HEADING */}
                <div className=" mb-6 ml-2">
                    <h1 className=" font-inter text-5xl font-semibold">Sign Up</h1>
                </div>




                {/* USERNAME INPUT */}
                <div className="  mb-2">
                    <Input onChange={(e) => {
                        setUserName(e.target.value);
                        console.log(e.target.value);
                    }} id="userName" type="text" placeholder="UserName" />
                </div>




                {/* PASSWORD INPUT */}
                <div className=" mb-2">
                    <Input onChange={(e) => {
                        setPassword(e.target.value);
                        console.log(e.target.value);
                    }}
                        type="password" placeholder="Password" />

                </div>




                {/* EMAIL INPUT */}
                <div className=" mb-4">
                    <Input
                        onChange={(e) => {
                            setEmail(e.target.value);
                            console.log(e.target.value);
                        }}
                        type="email" placeholder="Email" className=" color-grey" />

                </div>


                {/* SUBMIT BUTTON */}
                <div className=" w-[100%] flex justify-end">
                    <Button onClick={sendingData}>Sign Up</Button>
                </div>



                {/* IF YOU ALREADY HAVE AN ACCOUNT SIGN IN  */}
                <div className=" relative bottom-[2rem] left-1 w-[11rem]">
                    <p className=" color-grey text-[12px]">If you already have an account <Link className=" text-black font-semibold relative bottom-[2px] right-[1px]" to="/signin">Sign In</Link></p>
                </div>

            </div>


        </div>
    )
}
