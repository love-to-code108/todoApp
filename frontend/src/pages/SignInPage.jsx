import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { useRecoilState } from "recoil"
import { USER_atom, userName_atom, userPassword_atom } from "../recoil/user-atom"
import axios from "axios"

// ENCRYPTING AND DECRYPTING 
import { encryptObject } from "../security/encryption.js"
import { decryptObject } from "../security/decryption.js"

// CHADCN UI TOAST
import { useToast } from "@/components/ui/use-toast";

// USE NAVIGATE
import { useNavigate } from "react-router-dom"










export const SignInPage = () => {

    // TOAST
    const { toast } = useToast()


    // INITIALIZING RECOIL STATES
    const [userName, setUserName] = useRecoilState(userName_atom);
    const [password, setPassword] = useRecoilState(userPassword_atom);
    const [USER, setUSER] = useRecoilState(USER_atom);


    // THE SECURE KEY
    const secureKey = import.meta.env.VITE_SECRET_KEY;


    // THE DATA TO BE SEND TO THE BACKEND
    const signInUserData = {
        "UserName": userName,
        "Password": password,
    }


    // FOR PROGRAMMABLE PAGE NAVIGATION
    const navigate = useNavigate();














    // SENDING DATA TO THE BACKEND
    const sendingData = async () => {


        // ENCRYPTING THE DATA TO BE SEND
        const encryptedData = encryptObject(signInUserData, secureKey);

        const finalBackendData = {
            value: encryptedData,
        }


        // AXIOS SENDING DATA TO THE BACKEND URL
        axios.post("http://192.168.214.216:4000/signin", finalBackendData)
            .then((res) => {



                // IF EMAIL OR USERNAME DOES NOT EXIST
                if (res.data == "UserName , Email does not exist") {
                    toast({
                        title: res.data,
                    })
                }

                // IF THE PASSWORD IS WRONG
                else if (res.data == "Wrong Password") {
                    toast({
                        title: res.data,
                    })
                }


                // IF THE USERNAME AND PASSWORD IS RIGHT
                else {

                    toast({
                        title: "You Have sucessfully Signed In"
                    })


                    // DECRYPTING THE INCOMMING DATA
                    const decryptedUserObject = decryptObject(res.data.value, secureKey);


                    // SETTING THE GLOBAL USER STATE TO THIS OBJECT
                    setUSER(decryptedUserObject);


                    localStorage.setItem("Cookie", decryptedUserObject.Cookie);

                    navigate('/main');
                    return;
                }
            })
            .catch((e) => {
                console.log("This error was generated in the signin page from where we are sending data to the backend", e);
            })

    }











    // THE FRONTEND
    return (
        <div className=" w-[100%] h-[100svh] flex justify-center items-center">



            {/* THE WRAPPER */}
            <div className=" font-inter w-[80%]">




                {/* SIGN UP HEADING */}
                <div className=" mb-6 ml-2">
                    <h1 className=" font-inter text-5xl font-semibold">Sign In</h1>
                </div>




                {/* USERNAME INPUT */}
                <div className="  mb-2">
                    <Input onChange={(e) => {
                        setUserName(e.target.value);
                    }}
                        id="userName" type="text" placeholder="UserName" />
                </div>




                {/* PASSWORD INPUT */}
                <div className=" mb-4">
                    <Input onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                        type="password" placeholder="Password" />

                </div>



                {/* SUBMIT BUTTON */}
                <div className=" w-[100%] flex justify-end">
                    <Button onClick={sendingData}
                    >Sign In</Button>
                </div>



                {/* IF YOU ALREADY HAVE AN ACCOUNT SIGN UP  */}
                <div className=" relative bottom-[2rem] left-1 w-[11rem]">
                    <p className=" color-grey text-[12px]">Dont have an account <Link className=" text-black font-semibold ml-[1px]" to="/signup">Sign Up</Link></p>
                </div>

            </div>


        </div>
    )
}
