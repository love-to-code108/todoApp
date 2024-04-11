import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"










export const SignUpPage = () => {



















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
                    <Input id="userName" type="text" placeholder="UserName" />
                </div>




                {/* PASSWORD INPUT */}
                <div className=" mb-2">
                    <Input type="password" placeholder="Password" />

                </div>




                {/* EMAIL INPUT */}
                <div className=" mb-4">
                    <Input type="email" placeholder="Email" className=" color-grey"/>

                </div>


                {/* SUBMIT BUTTON */}
                <div className=" w-[100%] flex justify-end"> 
                    <Button>Sign Up</Button>
                </div>



                {/* IF YOU ALREADY HAVE AN ACCOUNT SIGN IN  */}
                <div className=" relative bottom-[2rem] left-1">
                    <p className=" color-grey text-[12px]">If you already have an account <br /><span className=" text-black font-semibold relative bottom-[2px] right-[1px]">Sign In</span></p>
                </div>

            </div>


        </div>
    )
}
