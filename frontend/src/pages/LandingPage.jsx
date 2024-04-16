import { Link } from "react-router-dom"


export const LandingPage = () => {
  return (
    <div>
        Welcome to to do
        <Link to='./signup' className=" m-4 text-4xl">Sign up</Link>
        <Link to='./signin' className=" m-4 text-4xl">Sign In</Link>
    </div>
  )
}
