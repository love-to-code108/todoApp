import { useEffect } from "react";
import "../custom.css"
import { useNavigate } from "react-router-dom"


export const LoadingPage = () => {

    // PROGRAMABLE NAVIGATION
    const navigate = useNavigate();
   

    useEffect(() => {

        setTimeout(() => {
            navigate('/');
        }, 2000);
    })


    


    return (
        <div className=" w-[100%] h-[100svh] bg-white flex flex-col justify-center items-center">
            <div className="mb-4 loader"></div>
            <div className="loader2"></div>
        </div>
    )
}
