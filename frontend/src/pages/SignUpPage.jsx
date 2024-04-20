import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userEmail_atom, userName_atom, userPassword_atom } from "../recoil/user-atom.js";

// LOADING ENCRYPTION DECRYPTION FUNCTION 
import { encryptObject } from "../security/encryption.js";
import { decryptObject } from "../security/decryption.js";

// CHADCN UI TOAST
import { useToast } from "@/components/ui/use-toast";


// EMAIL VALIDATOR
import validator from "email-validator";

// REACT ROUTER DOM
import { useNavigate } from "react-router-dom";














// REACT COMPONENT
export const SignUpPage = () => {



    // THE SECRET KEY
    const secretKey = import.meta.env.VITE_SECRET_KEY;


    // TOAST
    const { toast } = useToast()

    // USE NAVIGATE HOOK
    const navigate = useNavigate();


    // IMPORTING ALL THE ATOMS HERE
    const [userName, setUserName] = useRecoilState(userName_atom);
    const [email, setEmail] = useRecoilState(userEmail_atom);
    const [password, setPassword] = useRecoilState(userPassword_atom);



    // THE DATA THAT WILL BE SIND TO THE BACKEND AFTER BEING ENCRYPTED
    const data = {
        UserName: userName,
        Password: password,
        Email: email,
    }

    // ENCRYPTING THE DATA WHENEVER THERE IS A RERENDER VERY BAD PRACTICE
    const encryptedData = encryptObject(data, secretKey);
    const encryptedDataObject = {
        value: encryptedData
    }




    // AXIOS SENDING DATA TO BACKEND
    const sendingData = async () => {
        // console.log("Request Send");



        if (!userName) {
            toast({
                title: "User Name cant be Blank",
            })

            return;
        }




        if (!password) {
            toast({
                title: "Password cant be Blank",
            })
            return;
        }




        if (!email) {
            toast({
                title: "Email cant be Blank",
            })
            return;
        } else if (email) {



            if (!validator.validate(email)) {
                toast({
                    title: "Enter a Valid Email Please",
                });

                return;
            }

        }







        axios.post("http://localhost:4000/signup", encryptedDataObject)
            .then((res) => {
                console.log(res.data);



                // SHOWING TOASTS AS PER THE ACTIONS TAKEN BY THE USER
                if (res.data === "User Name already taken") {
                    toast({
                        title: res.data,
                        description: "Please try again with a different User Name",
                    });

                } else if (res.data === "Email already used try with a different email") {
                    toast({
                        title: res.data,
                        description: "Please try again with a different Email",
                    });

                } else if (res.data === "New User Created") {
                    toast({
                        title: res.data,
                        description: "Congratulations Your account has been Sucessfully Created",
                    });

                    navigate('/signin');
                }



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
                        // console.log(e.target.value);
                    }} id="userName" type="text" placeholder="UserName" />
                </div>




                {/* PASSWORD INPUT */}
                <div className=" mb-2">
                    <Input onChange={(e) => {
                        setPassword(e.target.value);
                        // console.log(e.target.value);
                    }}
                        type="password" placeholder="Password" />

                </div>




                {/* EMAIL INPUT */}
                <div className=" mb-4">
                    <Input
                        onChange={(e) => {
                            setEmail(e.target.value);
                            // console.log(e.target.value);
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




