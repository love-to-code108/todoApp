import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { useRecoilState } from "recoil"
import { authState_atom, screenWidth_atom, userName_atom, userPassword_atom } from "../recoil/user-atom"
import axios from "axios"

// ENCRYPTING AND DECRYPTING 
import { encryptObject } from "../security/encryption.js"
import { decryptObject } from "../security/decryption.js"

// CHADCN UI TOAST
import { useToast } from "@/components/ui/use-toast";

// USE NAVIGATE
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { pullUSER } from "../USER/pullingTheUserObject.js"

// IMG
import todoLogo from "../../public/SVG/toDoLogo.svg"










export const SignInPage = () => {

    // TOAST
    const { toast } = useToast()


    // INITIALIZING RECOIL STATES
    const [userName, setUserName] = useRecoilState(userName_atom);
    const [password, setPassword] = useRecoilState(userPassword_atom);
    const [authState, setAuthState] = useRecoilState(authState_atom);
    const [screenWidth, setScreenWidth] = useRecoilState(screenWidth_atom);



    // THE SECURE KEY
    const secureKey = import.meta.env.VITE_SECRET_KEY;


    // THE DATA TO BE SEND TO THE BACKEND
    const signInUserData = {
        "UserName": userName,
        "Password": password,
    }


    // FOR PROGRAMMABLE PAGE NAVIGATION
    const navigate = useNavigate();
    // 




    // PULLING USER DATA
    useEffect(() => {
        const USER = pullUSER();
        setAuthState(USER);
    }, [])




    // FINDING THE SCREEN WIDTH OF THE WEBSITE
    useEffect(() => {

        // RUNS WHEN WE RESIZE THE WINDOW
        const fireOnWindowResize = () => {
            setScreenWidth(window.innerWidth);
        };

        // ADDING EVENT LISTNER TO WINDOW OBJECT
        window.addEventListener('resize', fireOnWindowResize);


        // CLEANUP FUNCTION
        return () => {
            window.removeEventListener('resize', fireOnWindowResize);
        };


    }, []);








    // SENDING DATA TO THE BACKEND
    const sendingData = async () => {


        // ENCRYPTING THE DATA TO BE SEND
        const encryptedData = encryptObject(signInUserData, secureKey);

        const finalBackendData = {
            value: encryptedData,
        }




        /*
        .##.....##.########..##......
        .##.....##.##.....##.##......
        .##.....##.##.....##.##......
        .##.....##.########..##......
        .##.....##.##...##...##......
        .##.....##.##....##..##......
        ..#######..##.....##.########
        */
        // AXIOS SENDING DATA TO THE BACKEND URL
        axios.post("http://192.168.214.216:5501/signin", finalBackendData)
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
                    sessionStorage.setItem("USER", JSON.stringify(decryptedUserObject));

                    setAuthState(decryptedUserObject);

                    localStorage.setItem("Cookie", decryptedUserObject.Cookie);

                    navigate('/main');
                    return;
                }
            })
            .catch((e) => {
                console.log("This error was generated in the signin page from where we are sending data to the backend", e);
            })

    }










    /*
    .########.########...#######..##....##.########.########.##....##.########.
    .##.......##.....##.##.....##.###...##....##....##.......###...##.##.....##
    .##.......##.....##.##.....##.####..##....##....##.......####..##.##.....##
    .######...########..##.....##.##.##.##....##....######...##.##.##.##.....##
    .##.......##...##...##.....##.##..####....##....##.......##..####.##.....##
    .##.......##....##..##.....##.##...###....##....##.......##...###.##.....##
    .##.......##.....##..#######..##....##....##....########.##....##.########.
    */
    // THE FRONTEND
    if (screenWidth < 640) {


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

    /*
       .##..............#######..##..........#####..
       ..##............##.....##.##....##...##...##.
       ...##..#####....##........##....##..##.....##
       ....##..........########..##....##..##.....##
       ...##..#####....##.....##.#########.##.....##
       ..##............##.....##.......##...##...##.
       .##..............#######........##....#####..
       */
    // GREATER THAN 640PX
    else if (screenWidth >= 640) {
        return (
            <div className=" font-inter flex flex-col justify-center items-center w-[100%] h-[100svh] bg-[#F3F3F3]">

                {/* MASTER WRAPPER */}
                <div className=" flex w-[80%] justify-between bg-white p-6 rounded-lg
                 2xl:justify-between 2xl:w-[60%] 2xl:px-14 2xl:h-[20rem]">


                    {/* LEFT BLOCK */}
                    <div className=" ml-3 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:mb-8">

                        {/* THE SIGN UP WRITING */}
                        <div className=" mt-4">
                            <h1 className=" text-4xl font-semibold
                             2xl:text-6xl">Sign In</h1>
                        </div>



                        {/* ALREADY HAVE AN ACCOUNT JUST SIGN IN */}
                        <div className=" 2xl:mt-3 2xl:mb-[6.5rem]">
                            <p className=" text-[10px] 2xl:text-[14px]">Already have an account just <Link to="/signup" className=" 
                            text-[10px] font-bold 2xl:text-[14px]">Sign Up</Link></p>
                        </div>


                    </div>










                    {/* RIGHT BLOCK */}
                    <div className="my-4 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:mb-8">


                        {/* USERNAME INPUT */}
                        <div className=" mb-2">
                            <Input className=" rounded-none h-[2rem] 
                             2xl:h-[3rem] 2xl:w-[24rem] 2xl:rounded-sm" onChange={(e) => {
                                    setUserName(e.target.value);
                                    // console.log(e.target.value);
                                }} id="userName" type="text" placeholder="UserName" />
                        </div>




                        {/* PASSWORD INPUT */}
                        <div className=" mb-2">
                            <Input className=" rounded-none h-[2rem] 
                             2xl:h-[3rem] 2xl:w-[24rem] 2xl:rounded-sm" onChange={(e) => {
                                    setPassword(e.target.value);
                                    // console.log(e.target.value);
                                }}
                                type="password" placeholder="Password" />

                        </div>



                        {/* SUBMIT BUTTON */}
                        <div className=" h-[2rem] w-[100%] flex justify-end">
                            <Button onClick={sendingData}>Sign In</Button>
                        </div>


                    </div>

                </div>
                {/* TODO LOGO */}
                <div className=" relative bottom-8 2xl:bottom-[3.5rem]">
                    <img className=" 2xl:h-[2rem]" src={todoLogo} alt="" />
                </div>

            </div>
        );
    }
}
