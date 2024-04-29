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
    if (screenWidth < 768) {


        return (
            <div className=" w-[100%] h-[100svh] flex justify-center items-center">



                {/* THE WRAPPER */}
                <div className=" font-inter w-[80%] max-w-[25rem]">




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
    .##..........########..#######...#######.
    ..##.........##....##.##.....##.##.....##
    ...##..#####.....##...##........##.....##
    ....##..........##....########...#######.
    ...##..#####...##.....##.....##.##.....##
    ..##...........##.....##.....##.##.....##
    .##............##......#######...#######.
    */

    // GREATER THAN 640PX
    else if (screenWidth >= 768) {


        return (

            
            <div className=" font-inter flex flex-col justify-center items-center w-[100%] h-[100svh] bg-[#F3F3F3]">

                {/* MASTER WRAPPER */}
                <div className=" flex w-[80%] justify-between bg-white p-6 rounded-lg
                 2xl:justify-between xl:w-[60%] 2xl:px-14 2xl:h-[20rem] 2xl:max-w-[67rem] 2xl:min-w-[63rem]
                  xl:h-[17rem] xl:items-center xl:px-8 xl:min-w-[55rem] 
                  lg:w-[60%] lg:h-[14rem] lg:min-w-[48rem] lg:items-center
                  md:w-[60%] md:min-w-[40rem]">


                    {/* LEFT BLOCK */}
                    <div className=" ml-3 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:mb-8 xl:mb-[6rem] xl:ml-4 lg:mb-[5.5rem] lg:ml-[1rem]">

                        {/* THE SIGN UP WRITING */}
                        <div className=" mt-4">
                            <h1 className=" text-4xl font-semibold
                             2xl:text-6xl
                              xl:text-5xl
                              lg:text-[2.6rem]">Sign In</h1>
                        </div>



                        {/* ALREADY HAVE AN ACCOUNT JUST SIGN IN */}
                        <div className=" 2xl:mt-3 2xl:mb-[6.5rem] xl:mt-[9px] lg:mt-[8px]">
                            <p className=" text-[10px] 2xl:text-[14px] xl:text-[12px]">Already have an account just <Link to="/signup" className=" 
                            text-[10px] font-bold 2xl:text-[14px] xl:text-[12px]">Sign Up</Link></p>
                        </div>


                    </div>










                    {/* RIGHT BLOCK */}
                    <div className="my-4 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:mb-8">


                        {/* USERNAME INPUT */}
                        <div className=" mb-2">
                            <Input className="h-[2rem] 
                             2xl:h-[3rem] 2xl:w-[24rem] rounded-sm xl:w-[20rem] xl:h-[3rem]
                              lg:h-[2.5rem] lg:w-[18rem] md:h-[2.5rem]" onChange={(e) => {
                                    setUserName(e.target.value);
                                    // console.log(e.target.value);
                                }} id="userName" type="text" placeholder="UserName" />
                        </div>




                        {/* PASSWORD INPUT */}
                        <div className=" mb-2 2xl:mb-4 xl:mb-4">
                            <Input className="h-[2rem] 
                             2xl:h-[3rem] 2xl:w-[24rem] rounded-sm xl:w-[20rem] xl:h-[3rem]
                              lg:h-[2.5rem] lg:w-[18rem] lg:mb-4 md:h-[2.5rem] md:mb-2" onChange={(e) => {
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
                <div className=" relative bottom-8 2xl:bottom-[3.5rem] xl:bottom-[3rem] lg:bottom-[2.1rem]">
                    <img className=" 2xl:h-[2rem] xl:h-[1.5rem]" src={todoLogo} alt="" />
                </div>

            </div>
        );
    }
}
