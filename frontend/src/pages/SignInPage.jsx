import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"










export const SignInPage = () => {



















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
                    <Input id="userName" type="text" placeholder="UserName" />
                </div>




                {/* PASSWORD INPUT */}
                <div className=" mb-4">
                    <Input type="password" placeholder="Password" />

                </div>



                {/* SUBMIT BUTTON */}
                <div className=" w-[100%] flex justify-end">
                    <Button>Sign In</Button>
                </div>



                {/* IF YOU ALREADY HAVE AN ACCOUNT SIGN UP  */}
                <div className=" relative bottom-[2rem] left-1">
                    <p className=" color-grey text-[12px]">Dont have an account <Link className=" text-black font-semibold ml-[1px]" to="/signup">Sign Up</Link></p>
                </div>

            </div>


        </div>
    )
}
