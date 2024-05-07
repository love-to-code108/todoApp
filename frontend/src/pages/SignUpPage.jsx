import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userEmail_atom, userName_atom, userPassword_atom, screenWidth_atom } from "../recoil/user-atom.js";

// LOADING ENCRYPTION DECRYPTION FUNCTION 
import { encryptObject } from "../security/encryption.js";
// import { decryptObject } from "../security/decryption.js";

// CHADCN UI TOAST
import { useToast } from "@/components/ui/use-toast";


// EMAIL VALIDATOR
import validator from "email-validator";

// REACT ROUTER DOM
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


// IMG
import todoLogo from "../../public/SVG/toDoLogo.svg"













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
    const [screenWidth, setScreenWidth] = useRecoilState(screenWidth_atom);


    // INIT USEREF HOOK
    // const windowRef = useRef(null)




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






    /*
    ....###....##.....##.####..#######...######.
    ...##.##....##...##...##..##.....##.##....##
    ..##...##....##.##....##..##.....##.##......
    .##.....##....###.....##..##.....##..######.
    .#########...##.##....##..##.....##.......##
    .##.....##..##...##...##..##.....##.##....##
    .##.....##.##.....##.####..#######...######.
    */
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






        /*
        .##.....##.########..##......
        .##.....##.##.....##.##......
        .##.....##.##.....##.##......
        .##.....##.########..##......
        .##.....##.##...##...##......
        .##.....##.##....##..##......
        ..#######..##.....##.########
        */

        axios.post("http://192.168.214.216:5501/signup", encryptedDataObject)
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




    // {/* EMAIL INPUT */ }
    //     <div className=" mb-4">
    //     <Input
    //         onChange={(e) => {
    //             setEmail(e.target.value);
    //             // console.log(e.target.value);
    //         }}
    //         type="email" placeholder="Email" className=" color-grey" />

    // </div>












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
                        <h1 className=" font-inter text-5xl font-semibold">Sign Up</h1>
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
                        <Button onClick={sendingData}
                        >Sign In</Button>
                    </div>



                    {/* IF YOU ALREADY HAVE AN ACCOUNT SIGN UP  */}
                    <div className=" relative bottom-[2rem] left-1 w-[12rem]">
                        <p className=" color-grey text-[12px]">Already have an account <Link className=" text-black font-semibold ml-[1px]" to="/signin">Sign In</Link></p>
                    </div>

                </div>


            </div>
        )









        /*
        .##..............#######..##..........#####..
        ..##............##.....##.##....##...##...##.
        ...##..#####....##........##....##..##.....##
        ....##..........########..##....##..##.....##
        ...##..#####....##.....##.#########.##.....##
        ..##............##.....##.......##...##...##.
        .##..............#######........##....#####..
        */
    } else if (screenWidth >= 768) {

        return (
            <div className=" font-inter flex flex-col justify-center items-center w-[100%] h-[100svh] bg-[#F3F3F3]">

                {/* MASTER WRAPPER */}
                <div className=" flex w-[80%] justify-between bg-white p-6 rounded-lg
                 2xl:justify-between 2xl:w-[60%] 2xl:px-14 2xl:h-[22rem]">


                    {/* LEFT BLOCK */}
                    <div className=" ml-3 2xl:flex 2xl:flex-col 2xl:justify-center">

                        {/* THE SIGN UP WRITING */}
                        <div className=" mt-4">
                            <h1 className=" text-4xl font-semibold
                             2xl:text-6xl">Sign Up</h1>
                        </div>



                        {/* ALREADY HAVE AN ACCOUNT JUST SIGN IN */}
                        <div className=" 2xl:mt-3 2xl:mb-[8.5rem]">
                            <p className=" text-[10px] 2xl:text-[14px]">Already have an account just <Link to="/signin" className=" 
                            text-[10px] font-bold 2xl:text-[14px]">Sign in</Link></p>
                        </div>


                    </div>










                    {/* RIGHT BLOCK */}
                    <div className="my-4 2xl:flex 2xl:flex-col 2xl:justify-center">


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




                        {/* EMAIL INPUT */}
                        <div className=" mb-4">
                            <Input
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    // console.log(e.target.value);
                                }}
                                type="email" placeholder="Email" className=" color-grey h-[2rem] rounded-none  
                                 2xl:h-[3rem] 2xl:w-[24rem] 2xl:rounded-sm" />

                        </div>


                        {/* SUBMIT BUTTON */}
                        <div className=" h-[2rem] w-[100%] flex justify-end">
                            <Button onClick={sendingData}>Sign Up</Button>
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




